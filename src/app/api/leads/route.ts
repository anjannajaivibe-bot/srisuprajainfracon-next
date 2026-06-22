import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const salesTeam = ["Anjanna", "Sahiti", "Praveen", "Sales Manager"];

function cleanPhoneNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

async function getNextAssignee() {
  const { count } = await supabaseAdmin
    .from("leads")
    .select("*", { count: "exact", head: true });

  const index = (count || 0) % salesTeam.length;
  return salesTeam[index];
}

async function addActivity(leadId: string, activity: string) {
  await supabaseAdmin.from("lead_activities").insert([
    {
      lead_id: leadId,
      activity,
    },
  ]);
}

async function findDuplicateLead(phone: string) {
  const cleanPhone = cleanPhoneNumber(phone);

  if (!cleanPhone) return null;

  const { data } = await supabaseAdmin
    .from("leads")
    .select("id, name, phone, assigned_to, created_at")
    .ilike("phone", `%${cleanPhone.slice(-10)}%`)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return data || null;
}

export async function GET() {
  try {
    const { data: leads, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

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
      .in("lead_id", leadIds.length ? leadIds : ["00000000-0000-0000-0000-000000000000"])
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
    const assigned_to = duplicateLead?.assigned_to || (await getNextAssignee());

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

    return NextResponse.json({
      success: true,
      lead: data,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
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

    const { data: previousLead } = await supabaseAdmin
      .from("leads")
      .select("*")
      .eq("id", id)
      .single();

    const { data, error } = await supabaseAdmin
      .from("leads")
      .update({
        status: status || "New",
        notes: notes || null,
        follow_up_date,
        assigned_to: assigned_to || null,
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
      await addActivity(id, `Status changed from ${previousLead?.status || "None"} to ${data.status}.`);
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
    contact_method
      ? `Lead contacted via ${contact_method}.`
      : "Lead contacted."
  );
}

    return NextResponse.json({
      success: true,
      lead: data,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to update lead." },
      { status: 500 }
    );
  }
}