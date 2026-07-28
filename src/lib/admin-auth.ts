import "server-only";

import { cookies } from "next/headers";

import { supabaseAdmin } from "@/lib/supabase";

export const ADMIN_ACCESS_COOKIE = "supraja_admin_access_token";
export const ADMIN_SESSION_SECONDS = 60 * 60 * 8;
export const PRIMARY_ADMIN_EMAIL = "anjan@supraja.com";

export type CrmUser = {
  name: string;
  email: string;
  role: string;
  isAdmin: boolean;
};

export async function getCrmUserFromToken(
  accessToken: string | undefined,
): Promise<CrmUser | null> {
  if (!accessToken) return null;

  const {
    data: { user },
    error: authError,
  } = await supabaseAdmin.auth.getUser(accessToken);

  if (authError || !user?.email) return null;

  const email = user.email.trim().toLowerCase();
  const { data: crmUser, error: crmError } = await supabaseAdmin
    .from("users")
    .select("name, email, role")
    .ilike("email", email)
    .maybeSingle();

  if (crmError || !crmUser) return null;

  const role = String(crmUser.role || "").trim().toLowerCase();

  return {
    name: String(crmUser.name || "").trim(),
    email,
    role,
    isAdmin: email === PRIMARY_ADMIN_EMAIL || role === "admin",
  };
}

export async function getLoggedInCrmUser(): Promise<CrmUser | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ADMIN_ACCESS_COOKIE)?.value;
  return getCrmUserFromToken(accessToken);
}
