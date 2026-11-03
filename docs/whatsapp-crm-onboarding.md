# Sri Supraja Infracon: verified WhatsApp inbound CRM setup

## Current safety status
- The webhook code is **disabled by default**. It does nothing until
  WHATSAPP_INBOUND_ENABLED is explicitly set to true AND all credentials are present.
- The four live inventory URLs are unchanged.
- Existing WhatsApp links and click-to-call functionality are unchanged.
- No outgoing WhatsApp messaging, templates, broadcasts, paid messaging,
  external CRM forwarders or phone-number migration are implemented.
- The callback never needs an outgoing WhatsApp access token.
- The existing Supabase CRM remains the sole lead store.
- Anonymous website click IDs are never treated as customer telephone numbers.

## Before connecting the number (read-only checks)
1. Identify the phone currently receiving Supraja enquiries and confirm whether
   it uses WhatsApp Business App, regular WhatsApp, or a managed API provider.
2. In Meta Business Settings, verify the business owns/controls its WhatsApp
   Business Account (WABA), phone number and Meta app. Review administrators
   and connected partners. Do not share OTPs, temporary tokens or app secrets.
3. If the number uses WhatsApp Business App, evaluate Meta-supported
   Business App + Cloud API coexistence with an authorized provider. Verify
   eligibility and any companion device/history side effects first.
4. If the number belongs to an API provider, get its explicit consent and
   confirm whether its webhook can be configured to send signed Meta events.
   Do not switch ownership or cut off existing conversations.

## Future Vercel production secrets (not yet configured)
Set these as **server-only** variables for the Vercel project
"srisuprajainfracon-next" under the authorized team:
- WHATSAPP_INBOUND_ENABLED: true only when all checks and rollout are approved
- WHATSAPP_APP_SECRET: the Meta App Secret (used for HMAC signature validation)
- WHATSAPP_VERIFY_TOKEN: a new unpredictable long token that Meta will echo
- WHATSAPP_WABA_ID: the confirmed WhatsApp Business Account ID
- WHATSAPP_PHONE_NUMBER_ID: the confirmed Meta phone-number ID

Never prefix these with NEXT_PUBLIC_, commit them, paste them into chat,
or store them in the client application. No environment variables above
exist in this project's verified environment at the time of implementation.

## Meta webhook setup
Callback URL:
https://www.srisuprajainfracon.com/api/webhooks/whatsapp

- Subscribe to the Meta WhatsApp messages webhook field in the authorized
  Meta app associated with the verified WABA.
- Meta's GET verification must return its hub.challenge only with the
  matching verification token. Inactive or incorrect tokens must be denied.
- All POST events require a valid x-hub-signature-256 generated from the
  raw body and Meta App Secret. The WABA ID and phone-number ID must match.
- Delivery/read statuses must not create leads.
- A successful inbound customer message uses a transactional, idempotent
  Supabase function to link an existing CRM lead or create one assigned to
  a real registered salesperson.
- Customer identifiers that cannot be verified as Indian phone numbers
  are stored as needs_review instead of being fabricated.
- The unique message ID prevents the same Meta webhook delivery from
  creating extra leads. Failed database writes return HTTP 503 for retry.

## Validation checklist before launch
1. Confirm the site still returns HTTP 503 to GET and POST webhook requests
   while disabled. Check no credentials are exposed in source or responses.
2. Verify existing 8 CRM leads and inventory URLs remain unchanged.
3. Enable a reviewed preview or staged environment with authorized
   test WABA IDs and secret values (never production credentials in public logs).
4. Test Meta GET verification, invalid signature rejection, mismatched
   WABA and phone-number ID rejection, and status-only payload handling.
5. Have an authorized person send a real test message. Confirm exactly one
   message and exactly one new or linked lead in the Supabase CRM.
6. Replay the signed webhook: confirm no duplicate message, lead or activity.
7. Test two messages from one sender and a malformed/unavailable phone ID.
8. Verify the admin-only /admin/whatsapp view and normal sales lead visibility.
9. Confirm forms, click-to-call, WhatsApp links, SEO and all inventory links
   behave exactly as before. Verify external tag-manager configuration.
10. Obtain explicit approval for any charged provider or outbound messaging.
    No send-message API is part of this integration.

## Historical click data
Existing WhatsApp click events are preserved in click_events. A click does
not confirm a sent message or disclose the visitor's telephone number.
Do not import those records as named leads. Genuine historical chat
conversations require a separately authorized WhatsApp inbox export
or provider-supported history-sync pathway and duplicate checks.

## Database permissions
The additive public.whatsapp_inbound_messages table has RLS enabled
and revokes anonymous and authenticated direct Data API privileges.
The function public.ingest_whatsapp_message is SECURITY INVOKER,
with EXECUTE granted only to service_role and denied to PUBLIC, anon
and authenticated. The server uses the existing server-only Supabase
service-role client.

This file documents prepared infrastructure. It does not mean that
WhatsApp onboarding, Meta verification or a live inbound message test occurred.
