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

// source_type registered per channel in Tranquil CRM for this account.
const WEBSITE_SOURCE_TYPE = "3";
const LANDING_PAGE_SOURCE_TYPE = "10";

type TranquilLeadInput = {
  name: string;
  phone: string;
  email?: string | null;
  project?: string | null;
  message?: string | null;
  source: string;
  utmCampaign?: string | null;
  utmContent?: string | null;
  utmTerm?: string | null;
  utmCampaignId?: string | null;
  gclid?: string | null;
  location?: string | null;
  budget?: string | null;
};

export type TranquilResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; error: string; status?: number };

function resolveProjectId(project?: string | null): number {
  if (!project) return DEFAULT_PROJECT_ID;
  return PROJECT_ID_BY_NAME[project] ?? DEFAULT_PROJECT_ID;
}

// Budget dropdowns send a range like "15-25L" or "45 and Above"; Tranquil
// expects two separate bounds (see doc sample: min_budget=2lack&budget=50L).
function splitBudgetRange(range?: string | null): [string, string] {
  const value = (range || "").trim();
  if (!value) return ["", ""];

  const between = value.match(/^(\d+)\s*-\s*(\d+)\s*L$/i);
  if (between) return [`${between[1]}L`, `${between[2]}L`];

  const andAbove = value.match(/^(\d+)\s*and\s*above$/i);
  if (andAbove) return [`${andAbove[1]}L`, ""];

  return ["", value];
}

// The website contact form always sends this exact source value
// (ContactForm.tsx). Anything else — "google", or any other campaign label a
// landing page sends — is a landing-page lead. Not inferred from UTM presence:
// a landing page visited without UTM params (direct traffic, a bookmark)
// would otherwise silently misreport as a website lead.
const WEBSITE_SOURCE_VALUE = "website-contact-form";

export async function sendLeadToTranquilCrm(
  lead: TranquilLeadInput
): Promise<TranquilResult> {
  const isLandingPageLead = lead.source.toLowerCase() !== WEBSITE_SOURCE_VALUE;

  const [minBudget, maxBudget] = splitBudgetRange(lead.budget);

  const params = new URLSearchParams({
    api_key: process.env.TRANQUIL_CRM_API_KEY || TRANQUIL_CRM_API_KEY,
    country_code: "91",
    mobile_number: lead.phone,
    project_id: String(resolveProjectId(lead.project)),
    project_id_type: "id",
    source_type: isLandingPageLead ? LANDING_PAGE_SOURCE_TYPE : WEBSITE_SOURCE_TYPE,
    sub_source: lead.source,
    customer_name: lead.name,
  });

  // Tranquil's docs list email and remark as optional, but their DB columns
  // (email_id, note) are both NOT NULL — an omitted value 500s the whole
  // insert. Fall back to placeholders when the lead didn't supply them
  // (landing-page leads never collect a message, so this hits every time).
  params.set("email", lead.email || `lead-${lead.phone}@srisuprajainfracon.com`);
  params.set("remark", lead.message || `Lead via ${lead.source}`);
  if (lead.utmCampaign) params.set("campaign_name", lead.utmCampaign);
  if (lead.utmContent) params.set("adgroup_name", lead.utmContent);
  if (lead.utmTerm) params.set("ad_name", lead.utmTerm);

  const gclId = lead.gclid || lead.utmCampaignId;
  if (gclId) params.set("gcl_id", gclId);
  if (lead.location) params.set("location", lead.location);
  if (minBudget) params.set("min_budget", minBudget);
  if (maxBudget) params.set("budget", maxBudget);

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
