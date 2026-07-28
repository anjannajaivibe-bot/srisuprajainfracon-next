import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ADMIN_ACCESS_COOKIE,
  getCrmUserFromToken,
} from "@/lib/admin-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(ADMIN_ACCESS_COOKIE)?.value;
  const user = await getCrmUserFromToken(accessToken);

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (pathname === "/admin/login" && user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
