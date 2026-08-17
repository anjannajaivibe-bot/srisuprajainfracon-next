import { NextResponse } from "next/server";
import { getLoggedInCrmUser } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const user = await getLoggedInCrmUser();

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized." },
      { status: 401 },
    );
  }

  if (!user.isAdmin) {
    return NextResponse.json(
      { success: false, message: "Admin access required." },
      { status: 403 },
    );
  }

  const { error: migrationError } = await supabaseAdmin
    .from("newsletter_subscribers")
    .update({
      status: "active",
      verification_token: null,
      unsubscribed_at: null,
    })
    .eq("status", "pending");

  if (migrationError) {
    console.error(
      "Legacy newsletter subscriber normalization failed:",
      migrationError.message,
    );
  }

  const { data, error } = await supabaseAdmin
    .from("newsletter_subscribers")
    .select(
      "id, name, email, status, source, subscribed_at, unsubscribed_at, created_at, updated_at",
    )
    .order("subscribed_at", { ascending: false })
    .limit(10000);

  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    subscribers: data || [],
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}
