import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const clickSchema = z.object({
  event_type: z
    .string()
    .trim()
    .min(1)
    .max(60)
    .regex(/^[a-z0-9_]+$/),
  session_id: z.string().uuid(),
  page_path: z.string().trim().min(1).max(500),
  page_title: z.string().trim().max(200),
  target_url: z.string().trim().max(500).nullable(),
  link_text: z.string().trim().max(160),
  element_type: z.string().trim().max(30),
  element_id: z.string().trim().max(120).nullable(),
  referrer: z.string().trim().max(500).nullable(),
  utm_source: z.string().trim().max(100).nullable(),
  utm_medium: z.string().trim().max(100).nullable(),
  utm_campaign: z.string().trim().max(150).nullable(),
  utm_content: z.string().trim().max(150).nullable(),
  utm_term: z.string().trim().max(150).nullable(),
  device_type: z.enum(["mobile", "tablet", "desktop"]),
  browser: z.string().trim().max(40),
  screen_width: z.number().int().min(0).max(10000),
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
      { status: 403 }
    );
  }

  try {
    const payload = clickSchema.parse(await request.json());

    const { error } = await supabaseAdmin.from("click_events").insert(payload);

    if (error) {
      console.error("Click event insert failed:", error.message);

      return NextResponse.json(
        { success: false, error: "Unable to record click" },
        { status: 500 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid click event" },
        { status: 400 }
      );
    }

    console.error("Click event request failed:", error);

    return NextResponse.json(
      { success: false, error: "Unable to record click" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  if (request.cookies.get("supraja_admin_auth")?.value !== "true") {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const requestedDays = Number(request.nextUrl.searchParams.get("days") || 30);
  const days = [7, 30, 90].includes(requestedDays) ? requestedDays : 30;
  const since = new Date();
  since.setDate(since.getDate() - days);

  const { data, error } = await supabaseAdmin
    .from("click_events")
    .select(
      "id,created_at,session_id,event_type,page_path,page_title,target_url,link_text,element_type,referrer,utm_source,utm_medium,utm_campaign,device_type,browser"
    )
    .gte("created_at", since.toISOString())
    .order("created_at", { ascending: false })
    .limit(10000);

  if (error) {
    console.error("Click event read failed:", error.message);

    return NextResponse.json(
      { success: false, error: "Unable to load click analytics" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    days,
    events: data || [],
  });
}
