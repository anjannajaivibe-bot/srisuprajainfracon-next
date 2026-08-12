import { appendFile } from "fs/promises";
import path from "path";

const TRANQUIL_CRM_ENDPOINT =
  "https://suprajagroup.tranquilcrmone.in/v2/createlead";

const TRANQUIL_LOG_PATH = path.join(
  process.cwd(),
  "supabase",
  "tranquil-crm.log"
);

// Per API_Docs shared in Basecamp todo 10167160080 (project 46090882).
const PROJECT_ID_BY_NAME: Record<string, number> = {
  "Supraja IRIS": 4,
  "Bridge County": 2,
  "Sindhu Sarovar": 1,
  "Subhash Meadows": 7,
};

const DEFAULT_PROJECT_ID = PROJECT_ID_BY_NAME["Supraja IRIS"];

// Company API key for the suprajagroup Tranquil CRM account (from the API docs
// shared in Basecamp todo 10167160080). Not a per-user secret — same key is
// used for every lead source (website + landing pages) on this account.
const TRANQUIL_CRM_API_KEY = "TRNQUILCRMsuprajagroup";

// source_type=3 is the "Website" source registered for this domain in Tranquil CRM.
const WEBSITE_SOURCE_TYPE = "3";

type TranquilLeadInput = {
  name: string;
  phone: string;
  email?: string | null;
  project?: string | null;
  message?: string | null;
  source: string;
};

export type TranquilResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; error: string; status?: number };

function resolveProjectId(project?: string | null): number {
  if (!project) return DEFAULT_PROJECT_ID;
  return PROJECT_ID_BY_NAME[project] ?? DEFAULT_PROJECT_ID;
}

export async function sendLeadToTranquilCrm(
  lead: TranquilLeadInput
): Promise<TranquilResult> {
  const params = new URLSearchParams({
    api_key: process.env.TRANQUIL_CRM_API_KEY || TRANQUIL_CRM_API_KEY,
    country_code: "91",
    mobile_number: lead.phone,
    project_id: String(resolveProjectId(lead.project)),
    project_id_type: "id",
    source_type: WEBSITE_SOURCE_TYPE,
    sub_source: lead.source,
    customer_name: lead.name,
  });

  // Tranquil's docs list email as optional, but their DB column (email_id) is
  // NOT NULL — an omitted email 500s the whole insert. Fall back to a
  // placeholder tied to the phone number when the lead didn't supply one.
  params.set("email", lead.email || `lead-${lead.phone}@srisuprajainfracon.com`);
  if (lead.message) params.set("remark", lead.message);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${TRANQUIL_CRM_ENDPOINT}?${params.toString()}`, {
      method: "GET",
      signal: controller.signal,
    });

    const body = await response.json().catch(() => null);

    if (!response.ok) {
      return { ok: false, error: `HTTP ${response.status}`, status: response.status };
    }

    return { ok: true, status: response.status, body };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function logTranquilCrmEvent(entry: Record<string, unknown>) {
  const line = `${JSON.stringify({ timestamp: new Date().toISOString(), ...entry })}\n`;

  try {
    await appendFile(TRANQUIL_LOG_PATH, line, "utf8");
  } catch {
    // Best-effort logging only — never fail the lead request because logging failed.
  }
}
