"use client";

import { useEffect, useState } from "react";
import { Handshake, X } from "lucide-react";

export default function ChannelPartnerFormPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleOpen = () => {
      setOpen(true);
      setSubmitted(false);
      setError("");
      setFormStartedAt(Date.now());
    };

    window.addEventListener("open-channel-partner-form", handleOpen);
    return () => window.removeEventListener("open-channel-partner-form", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          project: "Channel Partner",
          message: "Interested in joining Sri Supraja Infracon as a channel partner.",
          source: "channel-partner-form",
          website: "",
          formStartedAt,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your details.");
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "" });
      setFormStartedAt(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10020] flex items-center justify-center bg-slate-950/65 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="channel-partner-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          aria-label="Close channel partner form"
        >
          <X size={18} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
          <Handshake size={22} />
        </div>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Business Association</p>
        <h2 id="channel-partner-title" className="mt-2 font-display text-2xl font-bold text-slate-950">
          Join as a Channel Partner
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your contact details and our team will connect with you to explain the current association opportunities.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="partner-name" className="mb-1.5 block text-sm font-semibold text-slate-800">Name *</label>
            <input
              id="partner-name"
              value={form.name}
              onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="partner-phone" className="mb-1.5 block text-sm font-semibold text-slate-800">Mobile Number *</label>
            <input
              id="partner-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((current) => ({ ...current, phone: e.target.value }))}
              required
              minLength={10}
              maxLength={18}
              inputMode="tel"
              autoComplete="tel"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="10-digit mobile number"
            />
          </div>

          <div>
            <label htmlFor="partner-email" className="mb-1.5 block text-sm font-semibold text-slate-800">Email *</label>
            <input
              id="partner-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
              required
              maxLength={254}
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Details"}
          </button>

          {submitted && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-700">
              Thank you. Your details have been received and our team will contact you.
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
