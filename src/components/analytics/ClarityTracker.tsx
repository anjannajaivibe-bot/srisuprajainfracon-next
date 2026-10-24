"use client";

import { useEffect, useLayoutEffect } from "react";

const CLARITY_ID = "z2ki61sswd";
const MAIN_HOSTS = new Set([
  "srisuprajainfracon.com",
  "www.srisuprajainfracon.com",
]);

type ClarityWindow = Window & {
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
};

let stoppedOnAdmin = false;

function isAdminPage(path: string) {
  return path === "/admin" || path.startsWith("/admin/");
}

function projectFromPath(path: string) {
  if (path.includes("supraja-iris")) return "supraja_iris";
  if (path.includes("bridge-county")) return "bridge_county";
  if (path.includes("sindhu-sarovar")) return "sindhu_sarovar";
  if (path.includes("subhash-meadows")) return "subhash_meadows";
  return "general";
}

// These labels describe the page or action, not a verified identity.
// A session can visit both property and careers pages, so use action events
// for conversion comparisons rather than treating audiences as exclusive.
function audienceFromPath(path: string) {
  if (path === "/careers" || path.startsWith("/careers/") ||
      path.startsWith("/blog/become-real-estate-channel-partner")) return "careers_partner";
  if (path === "/projects" || path.startsWith("/projects/") ||
      path.startsWith("/open-plots-and-resorts-in-hyderabad") ||
      path.startsWith("/project-verification") ||
      path.startsWith("/telangana-plot-verification")) return "property_buyer";
  return "general";
}

function safeTrafficSource() {
  const query = new URLSearchParams(window.location.search);
  const source = (query.get("utm_source") || "").toLowerCase().trim();
  const allowed = ["facebook", "instagram", "google", "bing", "whatsapp", "youtube", "email"];
  if (allowed.includes(source)) return source;
  if (query.has("gclid")) return "google_ads_click";
  // fbclid is attached to both Facebook and Instagram visits.
  if (query.has("fbclid")) return "meta_click";
  return undefined;
}

function trackEvent(name: string, pathname: string, forcedAudience?: "careers_partner" | "property_buyer") {
  try {
    const clarity = (window as ClarityWindow).clarity;
    if (!clarity) return;
    const audience = forcedAudience || (audienceFromPath(pathname) === "careers_partner" ? "careers_partner" : "property_buyer");
    clarity("set", "property", projectFromPath(pathname));
    clarity("set", "lead_category", audience);
    // A clicked CTA indicates interest, not a confirmed enquiry or sale.
    if (["phone_click", "whatsapp_click", "brochure_download_click", "lead_form_success", "channel_partner_form_success"].includes(name)) {
      clarity("set", "high_intent_action", "yes");
    }
    clarity("event", name);
  } catch {
    // Never block navigation or enquiries because of an analytics failure.
  }
}

export default function ClarityTracker({ pathname }: { pathname: string }) {
  useLayoutEffect(() => {
    if (!MAIN_HOSTS.has(window.location.hostname)) return;
    const clarityWindow = window as ClarityWindow;

    if (isAdminPage(pathname)) {
      if (clarityWindow.clarity) {
        clarityWindow.clarity("stop");
        stoppedOnAdmin = true;
      }
      return;
    }

    // Restart from a fresh page after a client-side visit to admin.
    if (stoppedOnAdmin) {
      stoppedOnAdmin = false;
      window.location.reload();
      return;
    }

    // Do not inject a second copy if another tag integration loaded Clarity.
    if (clarityWindow.clarity || document.querySelector('script[src*="clarity.ms/tag/"]')) return;

    const queue: unknown[][] = [];
    clarityWindow.clarity = Object.assign(
      (...args: unknown[]) => { queue.push(args); },
      { q: queue },
    );
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
    script.dataset.suprajaClarity = "main-site";
    document.head.appendChild(script);
    clarityWindow.clarity("set", "site_environment", "production_main_website");
  }, [pathname]);

  useEffect(() => {
    if (!MAIN_HOSTS.has(window.location.hostname) || isAdminPage(pathname)) return;
    const clarity = (window as ClarityWindow).clarity;
    if (!clarity) return;

    clarity("set", "property", projectFromPath(pathname));
    clarity("set", "page_audience", audienceFromPath(pathname));
    const source = safeTrafficSource();
    if (source) clarity("set", "traffic_source", source);

    const clickHandler = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.dataset.trackClick === "false") return;
      const href = (anchor.getAttribute("href") || "").toLowerCase();
      let action: string | undefined;
      if (href.startsWith("tel:")) action = "phone_click";
      else if (href.includes("wa.me/") || href.includes("whatsapp.com/") || href.startsWith("whatsapp:")) action = "whatsapp_click";
      else if (anchor.hasAttribute("download") || /\.pdf(?:[?#]|$)/.test(href)) action = "brochure_download_click";
      if (action) trackEvent(action, pathname);
    };

    const formHandler = (event: Event) => {
      if (!(event instanceof CustomEvent)) return;
      // Only forward fixed event names, never form fields or lead data.
      const eventType = event.detail?.event_type;
      if (eventType === "form_start") {
        trackEvent("lead_form_start", pathname);
      } else if (eventType === "form_submit_success") {
        trackEvent("lead_form_success", pathname, "property_buyer");
      } else if (eventType === "channel_partner_form_submit_success") {
        trackEvent("channel_partner_form_success", pathname, "careers_partner");
      }
    };

    document.addEventListener("click", clickHandler, { capture: true });
    window.addEventListener("supraja:analytics", formHandler);
    return () => {
      document.removeEventListener("click", clickHandler, { capture: true });
      window.removeEventListener("supraja:analytics", formHandler);
    };
  }, [pathname]);

  return null;
}
