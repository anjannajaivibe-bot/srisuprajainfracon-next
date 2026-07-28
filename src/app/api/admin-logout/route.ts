import { NextResponse } from "next/server";
import { ADMIN_ACCESS_COOKIE } from "@/lib/admin-auth";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully.",
  });

  response.cookies.set(ADMIN_ACCESS_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  for (const legacyCookie of [
    "supraja_admin_auth",
    "supraja_user_email",
    "supraja_user_role",
  ]) {
    response.cookies.set(legacyCookie, "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    });
  }

  return response;
}
