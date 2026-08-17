import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const tokenSchema = z.string().uuid();

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const parsed = tokenSchema.safeParse(token);
  const redirectUrl = new URL("/blog", request.nextUrl.origin);

  if (!parsed.success) {
    redirectUrl.searchParams.set("subscription", "invalid");
    return NextResponse.redirect(redirectUrl);
  }

  const { data, error } = await supabaseAdmin
    .from("newsletter_subscribers")
    .update({
      status: "active",
      verified_at: new Date().toISOString(),
      verification_token: null,
      unsubscribed_at: null,
    })
    .eq("verification_token", parsed.data)
    .eq("status", "pending")
    .select("id")
    .maybeSingle();

  if (error || !data) {
    redirectUrl.searchParams.set("subscription", "invalid");
    return NextResponse.redirect(redirectUrl);
  }

  redirectUrl.searchParams.set("subscription", "confirmed");
  return NextResponse.redirect(redirectUrl);
}
