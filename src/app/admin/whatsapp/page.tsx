import Link from "next/link";
import { notFound } from "next/navigation";
import { getLoggedInCrmUser } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function dateInIndia(date: string) {
  return new Date(date).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const statusLabel: Record<string, string> = {
  created_lead: "New CRM lead",
  linked_existing: "Linked to existing lead",
  needs_review: "Review identity",
};

export default async function WhatsAppInboxPage() {
  const user = await getLoggedInCrmUser();
  if (!user?.isAdmin) notFound();

  const enabled =
    process.env.WHATSAPP_INBOUND_ENABLED === "true" &&
    Boolean(process.env.WHATSAPP_APP_SECRET) &&
    Boolean(process.env.WHATSAPP_VERIFY_TOKEN) &&
    Boolean(process.env.WHATSAPP_WABA_ID) &&
    Boolean(process.env.WHATSAPP_PHONE_NUMBER_ID);

  const { data, error } = await supabaseAdmin
    .from("whatsapp_inbound_messages")
    .select(
      "message_id,customer_wa_id,customer_name,message_type,message_text,created_at,handling_status,lead_id",
    )
    .order("created_at", { ascending: false })
    .limit(100);

  const messages = data || [];
  const needsReview = messages.filter((item) => item.handling_status === "needs_review").length;
  const linked = messages.filter((item) => item.lead_id !== null).length;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
              Sri Supraja Infracon / CRM
            </p>
            <h1 className="mt-1 text-3xl font-bold text-slate-950">
              Incoming WhatsApp Enquiries
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Confirmed inbound messages only. WhatsApp link clicks are tracked separately under
              Website Clicks and do not reveal a visitor's telephone number.
            </p>
          </div>
          <Link
            href="/admin"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-amber-500"
          >
            Back to Leads
          </Link>
        </div>

        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={
                enabled
                  ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800"
                  : "rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900"
              }
            >
              {enabled ? "Webhook enabled" : "Webhook not connected"}
            </span>
            <span className="text-sm text-slate-600">
              {enabled
                ? "Server configuration is present. Confirm live messaging with an authorized test."
                : "Existing WhatsApp numbers and chats remain untouched. Official account onboarding is still required."}
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Latest inbound messages</p>
              <p className="mt-1 text-3xl font-bold">{messages.length}</p>
              <p className="text-xs text-slate-500">Up to 100 displayed</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Linked to CRM leads</p>
              <p className="mt-1 text-3xl font-bold">{linked}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Require identity review</p>
              <p className="mt-1 text-3xl font-bold">{needsReview}</p>
            </div>
          </div>
        </div>

        {error ? (
          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            WhatsApp messages could not be loaded. Contact the CRM administrator.
          </p>
        ) : messages.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <p className="font-semibold">No incoming WhatsApp messages recorded yet.</p>
            <p className="mt-2 text-sm text-slate-600">
              Recorded website clicks are not customer messages. This page will populate only
              after an authorized WhatsApp Business webhook is connected and a message is received.
            </p>
            <Link className="mt-4 inline-block font-semibold text-blue-700 underline" href="/admin/clicks">
              Review website click analytics
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold">Received (IST)</th>
                  <th scope="col" className="px-4 py-3 font-bold">Contact</th>
                  <th scope="col" className="px-4 py-3 font-bold">Message</th>
                  <th scope="col" className="px-4 py-3 font-bold">CRM status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {messages.map((item) => (
                  <tr key={item.message_id}>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                      {dateInIndia(item.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold">{item.customer_name}</div>
                      <div className="text-xs text-slate-500">{item.customer_wa_id}</div>
                    </td>
                    <td className="max-w-md px-4 py-3">
                      <div className="line-clamp-3 break-words">{item.message_text || "Non-text message"}</div>
                      <div className="text-xs text-slate-500">{item.message_type}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold">
                        {statusLabel[item.handling_status] || "Received"}
                      </span>
                      {item.lead_id && (
                        <div className="mt-1 text-xs text-slate-500">
                          Visible in the Leads portal
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}