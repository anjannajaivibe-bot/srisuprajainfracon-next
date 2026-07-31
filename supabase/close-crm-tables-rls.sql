-- Close CRM tables to direct Data API access.
-- The application accesses these tables only through the server-side
-- service-role client in src/lib/supabase.ts.
--
-- Run this file in the Supabase SQL Editor for the Sri Supraja Infracon
-- project. It is idempotent and safe to run again.

begin;

alter table public.leads enable row level security;
alter table public.lead_activities enable row level security;
alter table public.users enable row level security;

-- Remove any older policies that may still grant browser-side access.
do $$
declare
  policy_record record;
begin
  for policy_record in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in ('leads', 'lead_activities', 'users')
  loop
    execute format(
      'drop policy if exists %I on %I.%I',
      policy_record.policyname,
      policy_record.schemaname,
      policy_record.tablename
    );
  end loop;
end
$$;

-- Defence in depth: neither anonymous visitors nor signed-in CRM users
-- can access these tables directly through PostgREST.
revoke all privileges on table public.leads from anon, authenticated;
revoke all privileges on table public.lead_activities from anon, authenticated;
revoke all privileges on table public.users from anon, authenticated;

commit;

-- Verification: all three rows should show rls_enabled = true.
select
  c.relname as table_name,
  c.relrowsecurity as rls_enabled
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('leads', 'lead_activities', 'users')
order by c.relname;

-- Verification: this should return zero rows.
select schemaname, tablename, policyname, roles, cmd
from pg_policies
where schemaname = 'public'
  and tablename in ('leads', 'lead_activities', 'users');
