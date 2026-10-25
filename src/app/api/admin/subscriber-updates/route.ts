import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";

import { getLoggedInCrmUser } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase";
import {
  newsletterEmailConfigured,
  sendSubscriberUpdateEmail,
} from "@/lib/newsletter-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const HISTORY_BUCKET = "newsletter-system";
const HISTORY_PREFIX = "manual-updates";

const updateSchema = z.object({
  subject: z.string().trim().min(4).max(140),
  message: z.string().trim().min(10).max(5000),
  imageUrl: z.string().trim().url().max(2000).optional().or(z.literal("")),
  buttonLabel: z.string().trim().max(40).optional().default(""),
  buttonUrl: z.string().trim().url().max(2000).optional().or(z.literal("")),
});

type HistoryItem = {
  id: string;
  subject: string;
  message: string;
  imageUrl: string;
  buttonLabel: string;
  buttonUrl: string;
  recipientCount: number;
  sentCount: number;
  failedCount: number;
  createdAt: string;
  createdBy: string;
};

async function requireAdmin() {
  const user = await getLoggedInCrmUser();
  if (!user) return { response: NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 }) };
  if (!user.isAdmin) return { response: NextResponse.json({ success: false, message: "Admin access required." }, { status: 403 }) };
  return { user };
}

async function ensureHistoryBucket() {
  const { data } = await supabaseAdmin.storage.getBucket(HISTORY_BUCKET);
  if (data) return;
  const { error } = await supabaseAdmin.storage.createBucket(HISTORY_BUCKET, { public: false });
  if (error && !/already exists/i.test(error.message)) {
    throw new Error(`Unable to initialize update history: ${error.message}`);
  }
}

async function saveHistory(item: HistoryItem) {
  await ensureHistoryBucket();
  const filename = `${HISTORY_PREFIX}/${item.createdAt.replace(/[:.]/g, "-")}-${item.id}.json`;
  const { error } = await supabaseAdmin.storage.from(HISTORY_BUCKET).upload(
    filename,
    JSON.stringify(item, null, 2),
    { contentType: "application/json", upsert: false },
  );
  if (error) throw new Error(`Unable to save update history: ${error.message}`);
}

export async function GET() {
  const auth = await requireAdmin();
  if (auth.response) return auth.response;

  try {
    await ensureHistoryBucket();
    const { data: files, error } = await supabaseAdmin.storage
      .from(HISTORY_BUCKET)
      .list(HISTORY_PREFIX, { limit: 50, sortBy: { column: "name", order: "desc" } });

    if (error) throw new Error(error.message);

    const history = await Promise.all(
      (files || [])
        .filter((file) => file.name.endsWith(".json"))
        .slice(0, 20)
        .map(async (file) => {
          const { data } = await supabaseAdmin.storage
            .from(HISTORY_BUCKET)
            .download(`${HISTORY_PREFIX}/${file.name}`);
          if (!data) return null;
          try {
            return JSON.parse(await data.text()) as HistoryItem;
          } catch {
            return null;
          }
        }),
    );

    return NextResponse.json({ success: true, history: history.filter(Boolean) });
  } catch (error) {
    console.error("Subscriber update history failed:", error);
    return NextResponse.json(
      { success: false, message: "Unable to load update history." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAdmin();
  if (auth.response) return auth.response;

  if (process.env.NEWSLETTER_ENABLED !== "true" || !newsletterEmailConfigured()) {
    return NextResponse.json(
      { success: false, message: "Newsletter email delivery is not configured." },
      { status: 503 },
    );
  }

  try {
    const payload = updateSchema.parse(await request.json());
    if ((payload.buttonLabel && !payload.buttonUrl) || (!payload.buttonLabel && payload.buttonUrl)) {
      return NextResponse.json(
        { success: false, message: "Button label and button link must be provided together." },
        { status: 400 },
      );
    }

    const { data: subscribers, error: subscriberError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id,name,email,unsubscribe_token,status")
      .eq("status", "active")
      .order("subscribed_at", { ascending: true });

    if (subscriberError) throw new Error(subscriberError.message);
    if (!subscribers?.length) {
      return NextResponse.json(
        { success: false, message: "There are no active subscribers to send this update to." },
        { status: 400 },
      );
    }

    const updateId = randomUUID();
    let sentCount = 0;
    const failures: string[] = [];

    for (const subscriber of subscribers) {
      if (!subscriber.email) continue;
      let unsubscribeToken = subscriber.unsubscribe_token as string | null;

      if (!unsubscribeToken) {
        unsubscribeToken = randomUUID();
        const { error: tokenError } = await supabaseAdmin
          .from("newsletter_subscribers")
          .update({ unsubscribe_token: unsubscribeToken })
          .eq("id", subscriber.id);
        if (tokenError) {
          failures.push(subscriber.email);
          continue;
        }
      }

      try {
        await sendSubscriberUpdateEmail({
          email: subscriber.email,
          name: subscriber.name || "",
          unsubscribeToken,
          subject: payload.subject,
          message: payload.message,
          imageUrl: payload.imageUrl || undefined,
          buttonLabel: payload.buttonLabel || undefined,
          buttonUrl: payload.buttonUrl || undefined,
          updateId,
        });
        sentCount += 1;
      } catch (error) {
        console.error(`Subscriber update failed for ${subscriber.email}:`, error);
        failures.push(subscriber.email);
      }
    }

    const historyItem: HistoryItem = {
      id: updateId,
      subject: payload.subject,
      message: payload.message,
      imageUrl: payload.imageUrl || "",
      buttonLabel: payload.buttonLabel || "",
      buttonUrl: payload.buttonUrl || "",
      recipientCount: subscribers.length,
      sentCount,
      failedCount: failures.length,
      createdAt: new Date().toISOString(),
      createdBy: auth.user?.email || auth.user?.name || "Admin",
    };

    await saveHistory(historyItem);

    return NextResponse.json({
      success: failures.length === 0,
      partial: failures.length > 0,
      sentCount,
      failedCount: failures.length,
      recipientCount: subscribers.length,
      message:
        failures.length === 0
          ? `Update sent successfully to ${sentCount} active subscriber${sentCount === 1 ? "" : "s"}.`
          : `Update sent to ${sentCount} subscribers. ${failures.length} delivery${failures.length === 1 ? "" : "ies"} failed.`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Please check the update content and links." },
        { status: 400 },
      );
    }

    console.error("Manual subscriber update failed:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send subscriber update." },
      { status: 500 },
    );
  }
}
