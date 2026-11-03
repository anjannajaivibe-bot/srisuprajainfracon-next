-- Additive schema for verified WhatsApp Business Platform inbound messages.
-- No existing leads, inventory links, or website click records are modified.
create table if not exists public.whatsapp_inbound_messages (
  message_id text primary key check (char_length(message_id) between 8 and 200),
  account_id text not null,
  phone_number_id text not null,
  customer_wa_id text not null,
  customer_name text not null default 'WhatsApp Customer',
  message_type text not null,
  message_text text,
  message_at timestamptz not null,
  lead_id uuid references public.leads(id) on delete set null,
  handling_status text not null default 'needs_review'
    check (handling_status in ('needs_review', 'created_lead', 'linked_existing')),
  created_at timestamptz not null default now()
);

create index if not exists whatsapp_inbound_created_idx
  on public.whatsapp_inbound_messages (created_at desc);
create index if not exists whatsapp_inbound_customer_idx
  on public.whatsapp_inbound_messages (customer_wa_id, created_at desc);
create index if not exists whatsapp_inbound_lead_idx
  on public.whatsapp_inbound_messages (lead_id);

alter table public.whatsapp_inbound_messages enable row level security;
revoke all privileges on public.whatsapp_inbound_messages from public, anon, authenticated;
grant select, insert, update on public.whatsapp_inbound_messages to service_role;

-- The server calls this as service_role only, inside one database transaction.
-- Serialization and unique provider message IDs prevent webhook retry duplicates.
create or replace function public.ingest_whatsapp_message(
  p_message_id text,
  p_account_id text,
  p_phone_number_id text,
  p_customer_wa_id text,
  p_customer_name text,
  p_message_type text,
  p_message_text text,
  p_message_at timestamptz
)
returns jsonb
language plpgsql
security invoker
set search_path = ''
as $function$
declare
  v_inserted text;
  v_phone text;
  v_lead_id uuid;
  v_prior_status text;
  v_status text;
  v_assigned_name text;
  v_assigned_email text;
  v_sales_count integer;
  v_lead_count integer;
begin
  if p_message_id is null or char_length(p_message_id) not between 8 and 200
     or nullif(btrim(p_account_id), '') is null
     or nullif(btrim(p_phone_number_id), '') is null
     or nullif(btrim(p_customer_wa_id), '') is null
     or p_message_at is null
  then
    raise exception 'Invalid inbound WhatsApp message metadata' using errcode = '22023';
  end if;

  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtext('supraja_verified_whatsapp_inbound_v1')::bigint
  );

  insert into public.whatsapp_inbound_messages (
    message_id, account_id, phone_number_id, customer_wa_id,
    customer_name, message_type, message_text, message_at
  ) values (
    p_message_id,
    left(p_account_id, 80),
    left(p_phone_number_id, 80),
    left(p_customer_wa_id, 80),
    left(coalesce(nullif(btrim(p_customer_name), ''), 'WhatsApp Customer'), 100),
    left(coalesce(nullif(btrim(p_message_type), ''), 'unknown'), 32),
    left(p_message_text, 2000),
    p_message_at
  )
  on conflict (message_id) do nothing
  returning message_id into v_inserted;

  if v_inserted is null then
    select m.lead_id, m.handling_status
      into v_lead_id, v_prior_status
      from public.whatsapp_inbound_messages m
      where m.message_id = p_message_id;
    return pg_catalog.jsonb_build_object(
      'result', 'already_recorded',
      'lead_id', v_lead_id,
      'status', v_prior_status
    );
  end if;

  -- Only verified Indian phone numbers can become contactable CRM leads.
  -- Some WhatsApp identities do not expose a usable telephone number.
  if p_customer_wa_id ~ '^91[6-9][0-9]{9}$' then
    v_phone := right(p_customer_wa_id, 10);
  elsif p_customer_wa_id ~ '^[6-9][0-9]{9}$' then
    v_phone := p_customer_wa_id;
  else
    return pg_catalog.jsonb_build_object(
      'result', 'needs_review', 'lead_id', null
    );
  end if;

  select l.id into v_lead_id
  from public.leads l
  where pg_catalog.regexp_replace(l.phone, '[^0-9]', '', 'g')
    in (v_phone, '91' || v_phone)
  order by l.created_at desc nulls last, l.id desc
  limit 1;

  if v_lead_id is null then
    select count(*)::integer into v_sales_count
    from public.users u
    where lower(btrim(u.role)) = 'sales';

    if v_sales_count = 0 then
      raise exception 'No active sales roster for inbound WhatsApp' using errcode = 'P0001';
    end if;

    select count(*)::integer into v_lead_count from public.leads;
    select u.name, u.email
      into v_assigned_name, v_assigned_email
      from public.users u
      where lower(btrim(u.role)) = 'sales'
      order by lower(u.email)
      offset (v_lead_count % v_sales_count)
      limit 1;

    insert into public.leads (
      name, phone, project, message, source, status,
      assigned_to, assigned_email
    ) values (
      left(coalesce(nullif(btrim(p_customer_name), ''), 'WhatsApp Customer'), 100),
      v_phone,
      null,
      left(coalesce(nullif(btrim(p_message_text), ''), 'WhatsApp ' || left(coalesce(p_message_type,'message'), 32) || ' received'), 1000),
      'whatsapp-inbound',
      'New',
      v_assigned_name,
      v_assigned_email
    )
    returning id into v_lead_id;
    v_status := 'created_lead';
  else
    v_status := 'linked_existing';
  end if;

  update public.whatsapp_inbound_messages
  set lead_id = v_lead_id, handling_status = v_status
  where message_id = p_message_id;

  insert into public.lead_activities (lead_id, activity)
  values (
    v_lead_id,
    case when v_status = 'created_lead'
      then 'Verified incoming WhatsApp enquiry captured and assigned.'
      else 'Verified incoming WhatsApp message linked to existing lead.'
    end
  );

  return pg_catalog.jsonb_build_object('result', v_status, 'lead_id', v_lead_id);
end;
$function$;

revoke all on function public.ingest_whatsapp_message(
  text,text,text,text,text,text,text,timestamptz
) from public, anon, authenticated;
grant execute on function public.ingest_whatsapp_message(
  text,text,text,text,text,text,text,timestamptz
) to service_role;