import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_WEBHOOK_BYTES = 256 * 1024;
const MAX_MESSAGES_PER_REQUEST = 100;

type JsonRecord = Record<string, unknown>;

function asRecord(value: unknown): JsonRecord | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as JsonRecord)
    : null;
}

function asList(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function shortText(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function constantTimeMatch(actual: string, expected: string): boolean {
  const a = Buffer.from(actual, "utf8");
  const b = Buffer.from(expected, "utf8");
  return a.length > 0 && a.length === b.length && timingSafeEqual(a, b);
}

function webhookConfiguration() {
  const appSecret = process.env.WHATSAPP_APP_SECRET || "";
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || "";
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID || "";
  const accountId = process.env.WHATSAPP_WABA_ID || "";
  return {
    appSecret,
    verifyToken,
    phoneNumberId,
    accountId,
    ready:
      process.env.WHATSAPP_INBOUND_ENABLED === "true" &&
      appSecret.length >= 12 &&
      verifyToken.length >= 16 &&
      /^[0-9]+$/.test(phoneNumberId) &&
      /^[0-9]+$/.test(accountId),
  };
}

function messageBody(message: JsonRecord): string | null {
  const text = asRecord(message.text);
  const button = asRecord(message.button);
  const interactive = asRecord(message.interactive);
  const buttonReply = asRecord(interactive?.button_reply);
  const listReply = asRecord(interactive?.list_reply);
  const image = asRecord(message.image);
  const video = asRecord(message.video);
  const document = asRecord(message.document);
  const body =
    shortText(text?.body, 2000) ||
    shortText(button?.text, 2000) ||
    shortText(buttonReply?.title, 2000) ||
    shortText(listReply?.title, 2000) ||
    shortText(image?.caption, 2000) ||
    shortText(video?.caption, 2000) ||
    shortText(document?.caption, 2000);
  return body || null;
}

function messageDate(value: unknown): string {
  const seconds = Number(value);
  const now = Date.now();
  if (
    Number.isFinite(seconds) &&
    seconds >= 1483228800 &&
    seconds * 1000 <= now + 24 * 60 * 60 * 1000
  ) {
    return new Date(seconds * 1000).toISOString();
  }
  return new Date(now).toISOString();
}

function publicResponse(status: number): NextResponse {
  return NextResponse.json(
    { accepted: false },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

// Meta calls this once when the administrator registers the HTTPS callback URL.
export async function GET(request: NextRequest) {
  const config = webhookConfiguration();
  if (!config.ready) return publicResponse(503);

  const params = request.nextUrl.searchParams;
  const mode = params.get("hub.mode") || "";
  const token = params.get("hub.verify_token") || "";
  const challenge = params.get("hub.challenge") || "";
  if (
    mode !== "subscribe" ||
    !constantTimeMatch(token, config.verifyToken) ||
    !/^[a-zA-Z0-9_-]{1,512}$/.test(challenge)
  ) {
    return publicResponse(403);
  }

  return new NextResponse(challenge, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}

// An inbound WhatsApp message, not a website link click, is the lead trigger.
export async function POST(request: NextRequest) {
  const config = webhookConfiguration();
  if (!config.ready) return publicResponse(503);

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return publicResponse(415);
  }

  const advertisedLength = Number(request.headers.get("content-length") || "0");
  if (advertisedLength > MAX_WEBHOOK_BYTES) return publicResponse(413);

  const rawBody = await request.text();
  if (Buffer.byteLength(rawBody, "utf8") > MAX_WEBHOOK_BYTES) return publicResponse(413);

  const signature = request.headers.get("x-hub-signature-256") || "";
  if (!/^sha256=[a-fA-F0-9]{64}$/.test(signature)) return publicResponse(403);
  const calculated = createHmac("sha256", config.appSecret)
    .update(rawBody, "utf8")
    .digest("hex");

  if (!constantTimeMatch(signature.slice(7).toLowerCase(), calculated)) {
    return publicResponse(403);
  }

  let payload: JsonRecord | null;
  try {
    payload = asRecord(JSON.parse(rawBody));
  } catch {
    return publicResponse(400);
  }
  if (!payload || payload.object !== "whatsapp_business_account") {
    return publicResponse(400);
  }

  let seen = 0;
  const entries = asList(payload.entry).slice(0, 50);
  for (const entryValue of entries) {
    const entry = asRecord(entryValue);
    if (!entry || shortText(entry.id, 80) !== config.accountId) continue;

    for (const changeValue of asList(entry.changes).slice(0, 50)) {
      const change = asRecord(changeValue);
      if (change?.field !== "messages") continue;
      const value = asRecord(change.value);
      const metadata = asRecord(value?.metadata);
      const phoneNumberId = shortText(metadata?.phone_number_id, 80);
      if (phoneNumberId !== config.phoneNumberId) continue;

      const profiles = new Map<string, string>();
      for (const contactValue of asList(value?.contacts).slice(0, 100)) {
        const contact = asRecord(contactValue);
        const waId = shortText(contact?.wa_id, 80);
        const profile = asRecord(contact?.profile);
        if (waId) profiles.set(waId, shortText(profile?.name, 100));
      }

      // Delivery and read statuses do not create leads.
      for (const messageValue of asList(value?.messages)) {
        if (++seen > MAX_MESSAGES_PER_REQUEST) return publicResponse(413);
        const message = asRecord(messageValue);
        if (!message) continue;
        const messageId = shortText(message.id, 200);
        const sender = shortText(message.from, 80);
        const messageType = shortText(message.type, 32) || "unknown";
        if (messageId.length < 8 || !sender) continue;

        const { error } = await supabaseAdmin.rpc("ingest_whatsapp_message", {
          p_message_id: messageId,
          p_account_id: config.accountId,
          p_phone_number_id: phoneNumberId,
          p_customer_wa_id: sender,
          p_customer_name: profiles.get(sender) || "WhatsApp Customer",
          p_message_type: messageType,
          p_message_text: messageBody(message),
          p_message_at: messageDate(message.timestamp),
        });

        if (error) {
          // Do not print customer names, numbers or message content in logs.
          console.error("WhatsApp inbound database delivery failed", error.code || "database_error");
          // Meta may retry. The database function is idempotent by message ID.
          return publicResponse(503);
        }
      }
    }
  }

  return new NextResponse(null, { status: 200, headers: { "Cache-Control": "no-store" } });
}