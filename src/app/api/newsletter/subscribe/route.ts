import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase";
import {
  newsletterEmailConfigured,
  sendVerificationEmail,
} from "@/lib/newsletter-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const subscribeSchema = z.object({
  name: z.string().trim().max(100).default(""),
  email: z.string().trim().email().max(254),
  source: z.string().trim().max(100).default("blog"),
  website: z.string().max(0).optional(),
});

const isAllowedOrigin = (request: NextRequest) => {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const hostname = new URL(origin).hostname;
    return (
      hostname === "srisuprajainfracon.com" ||
      hostname === "www.srisuprajainfracon.com" ||
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
};

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { success: false, error: "Origin not allowed" },
      { status: 403 },
    );
  }

  try {
    const payload = subscribeSchema.parse(await request.json());

    if (payload.website) {
      return NextResponse.json({ success: true });
    }

    const email = payload.email.toLowerCase();
    const verificationToken = randomUUID();
    const unsubscribeToken = randomUUID();

    const { data: existing, error: readError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id,status,name")
      .eq("email", email)
      .maybeSingle();

    if (readError) {
      console.error("Newsletter subscriber lookup failed:", readError.message);
      return NextResponse.json(
        { success: false, error: "Unable to save subscription" },
        { status: 500 },
      );
    }

    if (existing?.status === "active") {
      return NextResponse.json({
        success: true,
        alreadySubscribed: true,
        message: "This email is already subscribed.",
      });
    }

    const subscriber = {
      name: payload.name || existing?.name || "",
      email,
      status: "pending",
      source: payload.source || "blog",
      verification_token: verificationToken,
      unsubscribe_token: unsubscribeToken,
      subscribed_at: new Date().toISOString(),
      verified_at: null,
      unsubscribed_at: null,
    };

    const { error: writeError } = existing
      ? await supabaseAdmin
          .from("newsletter_subscribers")
          .update(subscriber)
          .eq("id", existing.id)
      : await supabaseAdmin.from("newsletter_subscribers").insert(subscriber);

    if (writeError) {
      console.error("Newsletter subscriber write failed:", writeError.message);
      return NextResponse.json(
        { success: false, error: "Unable to save subscription" },
        { status: 500 },
      );
    }

    if (!newsletterEmailConfigured()) {
      console.warn(
        "Newsletter subscriber saved, but RESEND_API_KEY or NEWSLETTER_FROM_EMAIL is not configured.",
      );
      return NextResponse.json({
        success: true,
        pendingEmailSetup: true,
        message: "Subscription saved. Email confirmation is being configured.",
      });
    }

    try {
      await sendVerificationEmail({
        email,
        name: subscriber.name,
        token: verificationToken,
      });
    } catch (emailError) {
      console.error("Newsletter verification email failed:", emailError);
      return NextResponse.json({
        success: true,
        pendingEmailSetup: true,
        message: "Subscription saved, but the confirmation email could not be sent.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Please check your email and confirm your subscription.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name and email address." },
        { status: 400 },
      );
    }

    console.error("Newsletter subscription request failed:", error);
    return NextResponse.json(
      { success: false, error: "Unable to save subscription" },
      { status: 500 },
    );
  }
}
