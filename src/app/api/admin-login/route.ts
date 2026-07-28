import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/lib/supabase";
import {
  ADMIN_ACCESS_COOKIE,
  ADMIN_SESSION_SECONDS,
} from "@/lib/admin-auth";

const supabaseAuth = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password || email.length > 254 || password.length > 1024) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    const { data: authData, error: authError } =
      await supabaseAuth.auth.signInWithPassword({
        email,
        password,
      });
    if (authError || !authData.user || !authData.session?.access_token) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    const { data: crmUser, error: userError } = await supabaseAdmin
      .from("users")
      .select("name, email, role")
      .ilike("email", email)
      .maybeSingle();

    if (userError || !crmUser) {
      return NextResponse.json(
        { success: false, message: "User is not allowed to access CRM." },
        { status: 403 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
      user: crmUser,
    });

    response.cookies.set(ADMIN_ACCESS_COOKIE, authData.session.access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: ADMIN_SESSION_SECONDS,
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Login failed." },
      { status: 500 }
    );
  }
}
