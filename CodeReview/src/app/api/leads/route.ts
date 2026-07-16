import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const adminEmail = "anjan@supraja.com";

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

async function getLoggedInUser() {
  const cookieStore = await cookies();

  const isLoggedIn = cookieStore.get("supraja_admin_auth")?.value === "true";
  const email = cookieStore.get("supraja_user_email")?.value || "";
  const role = cookieStore.get("supraja_user_role")?.value || "";

  return {
    isLoggedIn,
    email,
    role,
    isAdmin: email === adminEmail || role === "admin",
  };
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
    const user = await getLoggedInUser();

    if (!user.isLoggedIn || !user.email) {
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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const project = String(body.project || "").trim();
    const message = String(body.message || "").trim();
    const source = String(body.source || "website").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required." },
        { status: 400 }
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
    const user = await getLoggedInUser();

    if (!user.isLoggedIn || !user.email) {
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