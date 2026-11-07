import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { getLoggedInCrmUser } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedProjects = [
  "Supraja IRIS", "Bridge County", "Sindhu Sarovar",
  "Subhash Meadows", "General Enquiry", "Channel Partner",
] as const;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(10).max(18),
  project: z.enum(allowedProjects),
  notes: z.string().trim().max(1000).optional().default(""),
}).strict();

export async function POST(request: NextRequest) {
  const user = await getLoggedInCrmUser();
  if (!user?.isAdmin) {
    return NextResponse.json({ success: false, message: "Admin access required." }, { status: 401 });
  }

  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin) {
    return NextResponse.json({ success: false, message: "Invalid request origin." }, { status: 403 });
  }

  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > 4096) {
      return NextResponse.json({ success: false, message: "Request too large." }, { status: 413 });
    }
    const parsed = schema.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: "Please enter a valid customer name, phone and project." }, { status: 400 });
    }

    const { name, project, notes } = parsed.data;
    const digits = parsed.data.phone.replace(/\D/g, "");
    const phone = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json({ success: false, message: "Enter a valid Indian mobile number." }, { status: 400 });
    }

    // Confirm the conversation manually before entering a customer's details.
    // Existing CRM leads are never overwritten, duplicated or silently merged.
    const { data: existing, error: lookupError } = await supabaseAdmin
      .from("leads").select("id").ilike("phone", "%" + phone).limit(1).maybeSingle();
    if (lookupError) {
      console.error("Manual WhatsApp lead duplicate check failed", lookupError.code || "database_error");
      return NextResponse.json({ success: false, message: "Could not check existing leads." }, { status: 503 });
    }
    if (existing) {
      return NextResponse.json({ success: false, message: "This phone number already exists in CRM. Review and update the existing lead instead." }, { status: 409 });
    }

    const followUpToday = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
    }).format(new Date());
    const { data, error } = await supabaseAdmin.from("leads").insert({
      name, phone, project, message: notes || "Confirmed WhatsApp conversation manually entered by CRM admin.",
      source: "whatsapp-manual", status: "New", assigned_to: user.name || "Admin",
      assigned_email: user.email, follow_up_date: followUpToday,
    }).select("id").single();
    if (error) {
      console.error("Manual WhatsApp lead insert failed", error.code || "database_error");
      return NextResponse.json({ success: false, message: "Unable to save the WhatsApp lead." }, { status: 503 });
    }

    const activity = await supabaseAdmin.from("lead_activities").insert({
      lead_id: data.id, activity: "Confirmed WhatsApp conversation manually captured by CRM administrator.",
    });
    if (activity.error) console.warn("WhatsApp activity log insert failed", activity.error.code || "database_error");

    return NextResponse.json({ success: true, leadId: data.id }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid WhatsApp lead request." }, { status: 400 });
  }
}
