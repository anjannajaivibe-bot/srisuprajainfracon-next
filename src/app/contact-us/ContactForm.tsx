"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type ContactFormProps = {
  source?: string;
  formId?: string;
  eyebrow?: string;
  title?: string;
  compact?: boolean;
};

const UTM_KEY = "supraja_click_utm";
const MIN_FORM_COMPLETION_MS = 1500;

const clip = (value: string | null | undefined, max: number) =>
  (value || "").trim().slice(0, max);

function getLeadAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  let stored: Record<string, string | null> = {};

  try {
    stored = JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}");
  } catch {
    stored = {};
  }

  const gclid = clip(params.get("gclid") || stored.gclid, 200);
  const campaignId = clip(
    params.get("gad_campaignid") ||
      params.get("utm_campaign_id") ||
      stored.utm_campaign_id,
    120,
  );

  return {
    utm_source:
      clip(params.get("utm_source") || stored.utm_source, 120) ||
      (gclid ? "google" : ""),
    utm_medium:
      clip(params.get("utm_medium") || stored.utm_medium, 120) ||
      (gclid ? "cpc" : ""),
    utm_campaign:
      clip(params.get("utm_campaign") || stored.utm_campaign, 120) ||
      (campaignId ? `google-ads-${campaignId}` : ""),
    utm_content: clip(params.get("utm_content") || stored.utm_content, 120),
    utm_term: clip(params.get("utm_term") || stored.utm_term, 120),
    utm_campaign_id: campaignId,
    gclid,
  };
}

export default function ContactForm({
  source = "website-contact-form",
  formId = "website-contact-form",
  eyebrow = "Enquiry Form",
  title = "Request Site Visit / Project Details",
  compact = false,
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const viewTracked = useRef(false);
  const startTracked = useRef(false);

  const trackFormEvent = (eventType: string) => {
    if (typeof window === "undefined") return;

    window.dispatchEvent(
      new CustomEvent("supraja:analytics", {
        detail: {
          event_type: eventType,
          link_text: source,
          element_type: "form",
          element_id: formId,
        },
      }),
    );
  };

  useEffect(() => {
    const element = formRef.current;
    if (!element || viewTracked.current) return;

    if (!("IntersectionObserver" in window)) {
      viewTracked.current = true;
      trackFormEvent("form_view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35)) {
          viewTracked.current = true;
          trackFormEvent("form_view");
          observer.disconnect();
        }
      },
      { threshold: [0.35] },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [formId, source]);

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!startTracked.current) {
      startTracked.current = true;
      trackFormEvent("form_start");
    }

    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(false);
    setError("");
    setLoading(true);
    trackFormEvent("form_submit_attempt");

    try {
      const elapsed = Date.now() - formStartedAt;
      if (elapsed < MIN_FORM_COMPLETION_MS) {
        await new Promise((resolve) =>
          window.setTimeout(resolve, MIN_FORM_COMPLETION_MS - elapsed),
        );
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.comments,
          project: getProjectName(pathname || ""),
          source,
          website: "",
          formStartedAt,
          ...getLeadAttribution(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit enquiry.");
      }

      trackFormEvent("form_submit_success");
      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        comments: "",
      });
      setFormStartedAt(Date.now());
      startTracked.current = false;

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      trackFormEvent("form_submit_error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      id={formId}
      onSubmit={handleSubmit}
      className={`rounded-[32px] border border-[#EFE7D3] bg-white shadow-[0_15px_40px_rgba(11,22,51,0.08)] ${
        compact ? "p-6 md:p-7" : "p-8"
      }`}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8A6A26]">
        {eyebrow}
      </p>

      <h3
        className={`font-display font-bold text-[#111827] ${
          compact ? "mb-5 text-2xl md:text-3xl" : "mb-6 text-3xl"
        }`}
      >
        {title}
      </h3>

      <div className={compact ? "grid gap-4" : "grid gap-5"}>
        <div>
          <label className="mb-2 block font-semibold text-[#111827]">
            Name *
          </label>

          <input
            name="name"
            value={form.name}
            onChange={updateField}
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-[#111827] outline-none transition focus:border-[#8A6A26] focus:ring-2 focus:ring-[#D6B15C]/25"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#111827]">
            Phone *
          </label>

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={updateField}
            required
            minLength={10}
            maxLength={18}
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter phone number"
            className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-[#111827] outline-none transition focus:border-[#8A6A26] focus:ring-2 focus:ring-[#D6B15C]/25"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#111827]">
            Email
          </label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            maxLength={254}
            autoComplete="email"
            placeholder="Enter email address"
            className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-[#111827] outline-none transition focus:border-[#8A6A26] focus:ring-2 focus:ring-[#D6B15C]/25"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#111827]">
            Comments
          </label>

          <textarea
            name="comments"
            value={form.comments}
            onChange={updateField}
            rows={compact ? 3 : 4}
            maxLength={1000}
            placeholder="Tell us what details you need"
            className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-[#111827] outline-none transition focus:border-[#8A6A26] focus:ring-2 focus:ring-[#D6B15C]/25"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          data-track-click="false"
          className="rounded-full bg-[#C9A227] px-7 py-4 font-bold text-[#07111F] transition hover:bg-[#07111F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        {submitted && (
          <div
            className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
            role="status"
          >
            Thank you. Your enquiry has been received successfully.
          </div>
        )}

        {error && (
          <div
            className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800"
            role="alert"
          >
            {error}
          </div>
        )}

        <p className="text-xs leading-relaxed text-[#4B5563]">
          By submitting this form, you agree to be contacted by Sri Supraja
          Infracon regarding project availability, pricing, site visits and
          related real estate enquiries.
        </p>
      </div>
    </form>
  );
}

function getProjectName(pathname: string) {
  if (pathname.includes("supraja-iris")) return "Supraja IRIS";
  if (pathname.includes("bridge-county")) return "Bridge County";
  if (pathname.includes("sindhu-sarovar")) return "Sindhu Sarovar";
  if (pathname.includes("subhash-meadows")) return "Subhash Meadows";
  if (pathname.includes("contact-us")) return "Contact Page";

  return "General Enquiry";
}
