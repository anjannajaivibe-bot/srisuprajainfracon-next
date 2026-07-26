"use client";

import { useEffect } from "react";

type ClickPayload = {
  event_type: string;
  session_id: string;
  visitor_id: string;
  page_path: string;
  page_title: string;
  target_url: string | null;
  link_text: string;
  element_type: string;
  element_id: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  device_type: "mobile" | "tablet" | "desktop";
  browser: string;
  screen_width: number;
};

const SESSION_KEY = "supraja_analytics_session";
const VISITOR_KEY = "supraja_analytics_visitor_id";
const UTM_KEY = "supraja_click_utm";
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;

let memoryVisitorId: string | null = null;
let memorySessionId: string | null = null;
let lastRecordedPageView = "";
let lastRecordedPageViewAt = 0;

const clip = (value: string | null | undefined, max: number) =>
  (value || "").replace(/\s+/g, " ").trim().slice(0, max);

const safeUrl = (value: string | null) => {
  if (!value) return null;

  try {
    const url = new URL(value, window.location.origin);

    // Query strings can contain names, phone numbers or other personal data.
    // Store only the destination itself. Campaign data is captured separately.
    if (url.origin === window.location.origin) {
      return `${url.pathname}${url.hash}`.slice(0, 500);
    }

    if (url.protocol === "http:" || url.protocol === "https:") {
      return `${url.protocol}//${url.host}${url.pathname}`.slice(0, 500);
    }

    return url.href.slice(0, 500);
  } catch {
    return null;
  }
};

const getBrowser = () => {
  const agent = navigator.userAgent;

  if (/Edg\//.test(agent)) return "Edge";
  if (/OPR\//.test(agent)) return "Opera";
  if (/Chrome\//.test(agent)) return "Chrome";
  if (/Firefox\//.test(agent)) return "Firefox";
  if (/Safari\//.test(agent)) return "Safari";

  return "Other";
};

const getDeviceType = (): ClickPayload["device_type"] => {
  const width = window.innerWidth;

  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";

  return "desktop";
};

const getAnalyticsIdentity = () => {
  const now = Date.now();

  try {
    let visitorId = localStorage.getItem(VISITOR_KEY);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem(VISITOR_KEY, visitorId);
    }

    let sessionId: string | null = null;
    const storedSession = JSON.parse(
      localStorage.getItem(SESSION_KEY) || "null",
    );

    if (
      storedSession &&
      typeof storedSession.id === "string" &&
      typeof storedSession.lastActivity === "number" &&
      now - storedSession.lastActivity < SESSION_TIMEOUT_MS
    ) {
      sessionId = storedSession.id;
    }

    if (!sessionId) sessionId = crypto.randomUUID();

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ id: sessionId, lastActivity: now }),
    );

    return { session_id: sessionId, visitor_id: visitorId };
  } catch {
    memoryVisitorId ||= crypto.randomUUID();
    memorySessionId ||= crypto.randomUUID();
    return {
      session_id: memorySessionId,
      visitor_id: memoryVisitorId,
    };
  }
};

const getCampaign = () => {
  const params = new URLSearchParams(window.location.search);
  const current = {
    utm_source: clip(params.get("utm_source"), 100) || null,
    utm_medium: clip(params.get("utm_medium"), 100) || null,
    utm_campaign: clip(params.get("utm_campaign"), 150) || null,
    utm_content: clip(params.get("utm_content"), 150) || null,
    utm_term: clip(params.get("utm_term"), 150) || null,
  };

  if (Object.values(current).some(Boolean)) {
    sessionStorage.setItem(UTM_KEY, JSON.stringify(current));
    return current;
  }

  try {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
      utm_term: null,
      ...JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}"),
    };
  } catch {
    return current;
  }
};

const classifyClick = (element: HTMLElement, href: string | null) => {
  const value = (href || "").toLowerCase();

  if (value.startsWith("tel:")) return "phone_click";
  if (
    value.includes("wa.me/") ||
    value.includes("whatsapp.com/") ||
    value.startsWith("whatsapp:")
  ) {
    return "whatsapp_click";
  }
  if (value.startsWith("mailto:")) return "email_click";
  if (element.hasAttribute("download")) return "download_click";
  if (
    element instanceof HTMLButtonElement &&
    (element.type === "submit" || element.closest("form"))
  ) {
    return "form_action_click";
  }

  return "site_click";
};

const sendClick = (payload: ClickPayload) => {
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon(
      "/api/click-events",
      new Blob([body], { type: "application/json" }),
    );

    if (sent) return;
  }

  void fetch("/api/click-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
    credentials: "same-origin",
  });
};

export default function ClickTracker() {
  useEffect(() => {
    let lastPageView = "";

    const basePayload = () => ({
      ...getAnalyticsIdentity(),
      page_path: clip(
        `${window.location.pathname}${window.location.search}`,
        500,
      ),
      page_title: clip(document.title, 200),
      referrer: safeUrl(document.referrer),
      ...getCampaign(),
      device_type: getDeviceType(),
      browser: getBrowser(),
      screen_width: window.screen.width,
    });

    const recordPageView = () => {
      const pageKey = `${window.location.pathname}${window.location.search}`;
      const now = Date.now();
      if (
        pageKey === lastPageView ||
        (pageKey === lastRecordedPageView &&
          now - lastRecordedPageViewAt < 1000)
      ) {
        return;
      }
      lastPageView = pageKey;
      lastRecordedPageView = pageKey;
      lastRecordedPageViewAt = now;

      sendClick({
        event_type: "page_view",
        ...basePayload(),
        target_url: null,
        link_text: clip(document.title, 160),
        element_type: "page",
        element_id: null,
      });
    };

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const interactive = event.target.closest<HTMLElement>(
        "a, button, [role='button'], input[type='button'], input[type='submit']",
      );

      if (!interactive || interactive.dataset.trackClick === "false") return;

      const anchor =
        interactive instanceof HTMLAnchorElement
          ? interactive
          : interactive.closest<HTMLAnchorElement>("a");
      const href = anchor?.href || null;
      const label =
        interactive.dataset.trackLabel ||
        interactive.getAttribute("aria-label") ||
        interactive.getAttribute("title") ||
        interactive.textContent ||
        (interactive instanceof HTMLInputElement ? interactive.value : "");

      const payload: ClickPayload = {
        event_type:
          interactive.dataset.trackType || classifyClick(interactive, href),
        ...basePayload(),
        target_url: safeUrl(href),
        link_text: clip(label, 160),
        element_type: interactive.tagName.toLowerCase(),
        element_id: clip(interactive.id, 120) || null,
      };

      sendClick(payload);
    };

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    const handleRouteChange = () => window.setTimeout(recordPageView, 0);

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleRouteChange();
    };
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleRouteChange();
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handleRouteChange);
    recordPageView();

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return null;
}
