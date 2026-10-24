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

function safeTrafficSource() {
  const query = new URLSearchParams(window.location.search);
  if (query.has("fbclid")) return "facebook_click";
  if (query.has("gclid")) return "google_ads_click";
  const source = (query.get("utm_source") || "").toLowerCase().trim();
  const allowed = ["facebook", "instagram", "google", "bing", "whatsapp", "youtube", "email"];
  return allowed.includes(source) ? source : undefined;
}

function trackEvent(name: string, pathname: string) {
  try {
    const clarity = (window as ClarityWindow).clarity;
    if (!clarity) return;
    clarity("set", "property", projectFromPath(pathname));
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
      if (event.detail?.event_type === "form_submit_success") {
        // Never forward visitor names, phone numbers, email or messages.
        trackEvent("lead_form_success", pathname);
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
