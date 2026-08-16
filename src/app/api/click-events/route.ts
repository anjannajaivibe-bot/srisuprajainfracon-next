import { NextRequest, NextResponse } from "next/server";
import { isIP } from "node:net";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase";
import { getLoggedInCrmUser } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CLICK_PAGE_SIZE = 100;
const MAX_ANALYTICS_ROWS = 50000;

type TrafficType = "human" | "known_bot" | "suspected_bot";

const knownBots: Array<[RegExp, string]> = [
  [/googlebot/i, "Googlebot"],
  [/bingbot/i, "Bingbot"],
  [/duckduckbot/i, "DuckDuckBot"],
  [/baiduspider/i, "Baiduspider"],
  [/yandexbot/i, "YandexBot"],
  [/slurp/i, "Yahoo Slurp"],
  [/facebookexternalhit/i, "Facebook Crawler"],
  [/twitterbot/i, "Twitterbot"],
  [/linkedinbot/i, "LinkedInBot"],
  [/pinterestbot/i, "Pinterestbot"],
  [/semrushbot/i, "SemrushBot"],
  [/ahrefsbot/i, "AhrefsBot"],
  [/gptbot/i, "GPTBot"],
  [/chatgpt-user/i, "ChatGPT-User"],
  [/oai-searchbot/i, "OAI-SearchBot"],
  [/claudebot/i, "ClaudeBot"],
  [/claude-user/i, "Claude-User"],
  [/anthropic-ai/i, "Anthropic AI"],
  [/perplexitybot/i, "PerplexityBot"],
  [/perplexity-user/i, "Perplexity-User"],
  [/ccbot/i, "CCBot"],
  [/google-extended/i, "Google-Extended"],
  [/bytespider/i, "Bytespider"],
  [/cohere-ai/i, "Cohere AI"],
  [/meta-externalagent/i, "Meta External Agent"],
];

const suspectedBotPattern =
  /\b(bot|crawler|spider|headless|phantomjs|selenium|playwright|puppeteer|curl|wget|python-requests|python-urllib|httpclient|go-http-client|scrapy)\b/i;

const classifyTraffic = (request: NextRequest): {
  traffic_type: TrafficType;
  bot_name: string | null;
  user_agent: string | null;
} => {
  const userAgent = request.headers.get("user-agent")?.trim().slice(0, 500) || null;

  if (!userAgent) {
    return {
      traffic_type: "suspected_bot",
      bot_name: "Missing User-Agent",
      user_agent: null,
    };
  }

  for (const [pattern, name] of knownBots) {
    if (pattern.test(userAgent)) {
      return {
        traffic_type: "known_bot",
        bot_name: name,
        user_agent: userAgent,
      };
    }
  }

  if (suspectedBotPattern.test(userAgent)) {
    return {
      traffic_type: "suspected_bot",
      bot_name: "Automated Client",
      user_agent: userAgent,
    };
  }

  return {
    traffic_type: "human",
    bot_name: null,
    user_agent: userAgent,
  };
};

const clickSchema = z.object({
  event_type: z
    .string()
    .trim()
    .min(1)
    .max(60)
    .regex(/^[a-z0-9_]+$/),
  session_id: z.string().uuid(),
  visitor_id: z.string().uuid(),
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

const headerText = (
  request: NextRequest,
  name: string,
  max: number,
): string | null => {
  const value = request.headers.get(name)?.trim();
  if (!value) return null;

  try {
    return decodeURIComponent(value).slice(0, max);
  } catch {
    return value.slice(0, max);
  }
};

const getClientIp = (request: NextRequest): string | null => {
  const candidates = [
    request.headers.get("x-real-ip"),
    request.headers.get("x-forwarded-for")?.split(",")[0],
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (value && isIP(value)) return value;
  }

  return null;
};

const getServerLocation = (request: NextRequest) => ({
  ip_address: getClientIp(request),
  city: headerText(request, "x-vercel-ip-city", 120),
  region: headerText(request, "x-vercel-ip-country-region", 120),
  country: headerText(request, "x-vercel-ip-country", 2)?.toUpperCase() || null,
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
    const payload = clickSchema.parse(await request.json());
    const event = {
      ...payload,
      ...getServerLocation(request),
      ...classifyTraffic(request),
    };

    const { error } = await supabaseAdmin.from("click_events").insert(event);

    if (error) {
      console.error("Click event insert failed:", error.message);

      return NextResponse.json(
        { success: false, error: "Unable to record click" },
        { status: 500 },
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid click event" },
        { status: 400 },
      );
    }

    console.error("Click event request failed:", error);

    return NextResponse.json(
      { success: false, error: "Unable to record click" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const user = await getLoggedInCrmUser();

  if (!user?.isAdmin) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const requestedDays = Number(request.nextUrl.searchParams.get("days") || 30);
  const days = [7, 30, 90].includes(requestedDays) ? requestedDays : 30;
  const since = new Date();
  since.setDate(since.getDate() - days);

  const events: Record<string, unknown>[] = [];
  let offset = 0;
  let truncated = false;

  while (events.length < MAX_ANALYTICS_ROWS) {
    const { data, error } = await supabaseAdmin
      .from("click_events")
      .select(
        "id,created_at,session_id,visitor_id,event_type,page_path,page_title,target_url,link_text,element_type,referrer,utm_source,utm_medium,utm_campaign,device_type,browser,ip_address,city,region,country,traffic_type,bot_name,user_agent",
      )
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: false })
      .order("id", { ascending: false })
      .range(offset, offset + CLICK_PAGE_SIZE - 1);

    if (error) {
      console.error("Click event read failed:", error.message);

      return NextResponse.json(
        { success: false, error: "Unable to load click analytics" },
        { status: 500 },
      );
    }

    const page = data || [];
    events.push(...page);

    if (page.length < CLICK_PAGE_SIZE) break;

    offset += page.length;
    if (events.length >= MAX_ANALYTICS_ROWS) truncated = true;
  }

  return NextResponse.json({
    success: true,
    days,
    events: events.slice(0, MAX_ANALYTICS_ROWS),
    truncated,
  });
}
