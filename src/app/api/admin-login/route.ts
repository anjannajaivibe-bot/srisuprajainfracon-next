import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const username = String(body.username || "").trim();
  const password = String(body.password || "").trim();

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { success: false, message: "Invalid username or password." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
    message: "Login successful.",
  });

  response.cookies.set("supraja_admin_auth", "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}