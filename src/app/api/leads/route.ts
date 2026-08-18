import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import {
  getLoggedInCrmUser,
  PRIMARY_ADMIN_EMAIL,
} from "@/lib/admin-auth";
import { logTranquilCrmEvent, sendLeadToTranquilCrm } from "@/lib/tranquil-crm";

const adminEmail = PRIMARY_ADMIN_EMAIL;

const MAX_REQUEST_BYTES = 8 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_COMPLETION_MS = 1500;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalForLeadRateLimit = globalThis as typeof globalThis & {
  leadRateLimits?: Map<string, RateLimitEntry>;
};

const leadRateLimits =
  globalForLeadRateLimit.leadRateLimits ??
  (globalForLeadRateLimit.leadRateLimits = new Map<string, RateLimitEntry>());

const leadSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your full name.")
      .max(100, "Name is too long.")
      .regex(
        /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u,
        "Please enter a valid name."
      ),
    phone: z
      .string()
      .trim()
      .min(10, "Please enter a valid phone number.")
      .max(18, "Please enter a valid phone number."),
    email: z
      .string()
      .trim()
      .max(254, "Email address is too long.")
      .refine(
        (value) => !value || z.email().safeParse(value).success,
        "Please enter a valid email address."
      ),
    project: z.string().trim().max(120, "Project value is too long."),
    message: z.string().trim().max(1000, "Message is too long."),
    source: z
      .string()
      .trim()
      .min(1)
      .max(80)
      .regex(/^[a-z0-9_-]+$/i, "Invalid source."),
    website: z.string().max(0).optional().default(""),
    formStartedAt: z.number().int().positive(),
    // Ad-tracking data — only landing pages send these; the website contact
    // form omits them entirely, which is also how Tranquil CRM sync tells
    // the two channels apart.
    utm_source: z.string().trim().max(120).optional().default(""),
    utm_medium: z.string().trim().max(120).optional().default(""),
    utm_campaign: z.string().trim().max(120).optional().default(""),
    utm_content: z.string().trim().max(120).optional().default(""),
    utm_term: z.string().trim().max(120).optional().default(""),
    utm_campaign_id: z.string().trim().max(120).optional().default(""),
    utm_network: z.string().trim().max(120).optional().default(""),
    utm_device: z.string().trim().max(40).optional().default(""),
    gclid: z.string().trim().max(200).optional().default(""),
    location: z.string().trim().max(120).optional().default(""),
    budget: z.string().trim().max(40).optional().default(""),
  })
  .strict();

function jsonError(message: string, status: number, headers?: HeadersInit) {
  return NextResponse.json(
    { success: false, message },
    { status, headers }
  );
}

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim();
  return ip || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();

  if (leadRateLimits.size > 5000) {
    for (const [entryKey, entry] of leadRateLimits) {
      if (entry.resetAt <= now) leadRateLimits.delete(entryKey);
    }
  }

  const existing = leadRateLimits.get(key);

  if (!existing || existing.resetAt <= now) {
    leadRateLimits.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfter: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfter: 0 };
}

// Landing pages published on this subdomain (e.g. the Supraja IRIS LP) submit
// straight to this endpoint from a different host than the main site.
const ALLOWED_CROSS_ORIGIN_HOSTS = ["info.srisuprajainfracon.com"];

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const originHost = new URL(origin).host;
    return (
      originHost === request.nextUrl.host ||
      ALLOWED_CROSS_ORIGIN_HOSTS.includes(originHost)
    );
  } catch {
    return false;
  }
}

// A cross-origin browser POST with a JSON body triggers a CORS preflight, so
// the allowed origin above also needs a reflected Access-Control-Allow-Origin
// on every response (including errors) or the browser blocks it client-side
// before our own origin check ever matters.
function withCors(response: NextResponse, request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return response;

  try {
    if (ALLOWED_CROSS_ORIGIN_HOSTS.includes(new URL(origin).host)) {
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set("Vary", "Origin");
    }
  } catch {
    // Malformed Origin header — no CORS header added, request already
    // fails isSameOrigin anyway.
  }

  return response;
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const normalized =
    digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;

  if (!/^[6-9]\d{9}$/.test(normalized)) {
    return null;
  }

  return normalized;
}

const salesTeam = [
  { name: "Rodda Ranganath", email: "rodda.ranganath@supraja.com" },
  { name: "Rama Chary", email: "rama.chary@supraja.com" },
  { name: "Rama Krishna Guntu", email: "rama.krishna.guntu@supraja.com" },
  { name: "Rama Krishna G", email: "rama.krishna.g@supraja.com" },
  { name: "Tirupati", email: "tirupati@supraja.com" },
  { name: "Nageshwara Rao", email: "nageshwara.rao@supraja.com" },
  { name: "Ravindra Pala", email: "ravindra.pala@supraja.com" },
  { name: "Arja Vijay Kumar", email: "arja.vijay.kumar@supraja.com" },
  { name: "Munnur Ravinder", email: "munnur.ravinder@supraja.com" },
  { name: "Yalla Srikanth", email: "yalla.srikanth@supraja.com" },
  { name: "Ganesh", email: "ganesh@supraja.com" },
];

function cleanPhoneNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

function getAssigneeEmail(name: string | null) {
  if (!name) return null;
  if (name === "Anjanna") return adminEmail;
  return salesTeam.find((person) => person.name === name)?.email || null;
}

async function getNextAssignee() {
  const { count } = await supabaseAdmin
    .from("leads")
    .select("*", { count: "exact", head: true });

  const index = (count || 0) % salesTeam.length;
  return salesTeam[index];
}

async function addActivity(leadId: string, activity: string) {
  await supabaseAdmin.from("lead_activities").insert([{ lead_id: leadId, activity }]);
}

async function findDuplicateLead(phone: string) {
  const cleanPhone = cleanPhoneNumber(phone);
  if (!cleanPhone) return null;

  const { data } = await supabaseAdmin
    .from("leads")
    .select("id, name, phone, assigned_to, assigned_email, created_at")
    .ilike("phone", `%${cleanPhone.slice(-10)}%`)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return data || null;
}

export async function GET() {
  try {
    const user = await getLoggedInCrmUser();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    let query = supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!user.isAdmin) {
      query = query.eq("assigned_email", user.email);
    }

    const { data: leads, error } = await query;

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    const leadIds = (leads || []).map((lead) => lead.id);

    const { data: activities } = await supabaseAdmin
      .from("lead_activities")
      .select("*")
      .in(
        "lead_id",
        leadIds.length ? leadIds : ["00000000-0000-0000-0000-000000000000"]
      )
      .order("created_at", { ascending: false });

    const leadsWithActivities = (leads || []).map((lead) => ({
      ...lead,
      activities: (activities || []).filter(
        (activity) => activity.lead_id === lead.id
      ),
    }));

    return NextResponse.json({
  success: true,
  leads: leadsWithActivities,
  user: {
    email: user.email,
    role: user.role,
  },
});
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to fetch leads." },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return withCors(
    new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }),
    request
  );
}

export async function POST(request: NextRequest) {
  return withCors(await handleLeadSubmission(request), request);
}

async function handleLeadSubmission(request: NextRequest): Promise<NextResponse> {
  try {
    if (!isSameOrigin(request)) {
      return jsonError("Invalid submission origin.", 403);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return jsonError("Unsupported request format.", 415);
    }

    const contentLength = Number(request.headers.get("content-length") || "0");
    if (contentLength > MAX_REQUEST_BYTES) {
      return jsonError("Request is too large.", 413);
    }

    const rateLimit = checkRateLimit(getClientKey(request));
    if (!rateLimit.allowed) {
      return jsonError(
        "Too many enquiries. Please wait a few minutes and try again.",
        429,
        { "Retry-After": String(rateLimit.retryAfter) }
      );
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return jsonError("Request is too large.", 413);
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return jsonError("Invalid request body.", 400);
    }

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      const message =
        parsed.error.issues[0]?.message || "Please check the submitted details.";
      return jsonError(message, 400);
    }

    const {
      name,
      email,
      project,
      message,
      source,
      website,
      formStartedAt,
      utm_campaign,
      utm_content,
      utm_term,
      utm_campaign_id,
      gclid,
      location,
      budget,
    } = parsed.data;

    if (website) {
      return NextResponse.json({ success: true });
    }

    const elapsed = Date.now() - formStartedAt;
    if (elapsed < MIN_FORM_COMPLETION_MS || elapsed > 24 * 60 * 60 * 1000) {
      return jsonError("Please refresh the form and try again.", 400);
    }

    const phone = normalizePhone(parsed.data.phone);
    if (!phone) {
      return jsonError(
        "Please enter a valid 10-digit Indian mobile number.",
        400
      );
    }

    const duplicateLead = await findDuplicateLead(phone);
    const nextAssignee = await getNextAssignee();

    const assigned_to = duplicateLead?.assigned_to || nextAssignee.name;
    const assigned_email =
      duplicateLead?.assigned_email || getAssigneeEmail(assigned_to);

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([
        {
          name,
          phone,
          email: email || null,
          project: project || null,
          message: message || null,
          source,
          status: duplicateLead ? "Follow-up" : "New",
          assigned_to,
          assigned_email,
          duplicate_of: duplicateLead?.id || null,
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    await addActivity(
      data.id,
      duplicateLead
        ? `Duplicate lead created. Matched with ${duplicateLead.name}. Assigned to ${assigned_to}.`
        : `Lead created and assigned to ${assigned_to}.`
    );

    const tranquilResult = await sendLeadToTranquilCrm({
      name,
      phone,
      email,
      project,
      message,
      source,
      utmCampaign: utm_campaign,
      utmContent: utm_content,
      utmTerm: utm_term,
      utmCampaignId: utm_campaign_id,
      gclid,
      location,
      budget,
    });

    await logTranquilCrmEvent({
      leadId: data.id,
      phone,
      project,
      source,
      result: tranquilResult,
    });

    if (!tranquilResult.ok) {
      await addActivity(
        data.id,
        `Tranquil CRM sync failed: ${tranquilResult.error}.`
      );
    }

    return NextResponse.json({ success: true, lead: data });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const user = await getLoggedInCrmUser();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const id = String(body.id || "").trim();
    const status = String(body.status || "").trim();
    const notes = String(body.notes || "").trim();
    const assigned_to = String(body.assigned_to || "").trim();
    const follow_up_date = body.follow_up_date || null;
    const last_contacted_at = body.last_contacted_at || null;
    const contact_method = String(body.contact_method || "").trim();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Lead ID is required." },
        { status: 400 }
      );
    }

    let previousLeadQuery = supabaseAdmin.from("leads").select("*").eq("id", id);

    if (!user.isAdmin) {
      previousLeadQuery = previousLeadQuery.eq("assigned_email", user.email);
    }

    const { data: previousLead } = await previousLeadQuery.single();

    if (!previousLead) {
      return NextResponse.json(
        { success: false, message: "Lead not found or access denied." },
        { status: 403 }
      );
    }

    const assigned_email = user.isAdmin
      ? getAssigneeEmail(assigned_to)
      : previousLead.assigned_email;

    const finalAssignedTo = user.isAdmin
      ? assigned_to || null
      : previousLead.assigned_to;

    const { data, error } = await supabaseAdmin
      .from("leads")
      .update({
        status: status || "New",
        notes: notes || null,
        follow_up_date,
        assigned_to: finalAssignedTo,
        assigned_email,
        last_contacted_at,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    if (previousLead?.status !== data.status) {
      await addActivity(
        id,
        `Status changed from ${previousLead?.status || "None"} to ${data.status}.`
      );
    }

    if (previousLead?.assigned_to !== data.assigned_to) {
      await addActivity(
        id,
        `Lead reassigned from ${previousLead?.assigned_to || "Unassigned"} to ${
          data.assigned_to || "Unassigned"
        }.`
      );
    }

    if (previousLead?.follow_up_date !== data.follow_up_date) {
      await addActivity(
        id,
        data.follow_up_date
          ? `Follow-up date set to ${data.follow_up_date}.`
          : "Follow-up date removed."
      );
    }

    if ((previousLead?.notes || "") !== (data.notes || "")) {
      await addActivity(id, "Sales notes updated.");
    }

    if (last_contacted_at) {
      await addActivity(
        id,
        contact_method ? `Lead contacted via ${contact_method}.` : "Lead contacted."
      );
    }

    return NextResponse.json({ success: true, lead: data });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to update lead." },
      { status: 500 }
    );
  }
}
