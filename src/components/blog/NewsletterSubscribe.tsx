"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSubscribe({
  source = "blog",
  compact = false,
}: {
  source?: string;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source, website }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to subscribe right now.");
      }

      setStatus("success");
      setMessage(result.message || "Please check your email to confirm.");
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to subscribe right now.",
      );
    }
  };

  return (
    <section
      className={
        compact
          ? "rounded-3xl border border-[#d6c7a3] bg-[#f5efe2] p-6 md:p-8"
          : "rounded-[2rem] bg-[#12251d] p-8 text-white md:p-10"
      }
      aria-labelledby={`newsletter-title-${source}`}
    >
      <div className={compact ? "max-w-3xl" : "mx-auto max-w-4xl text-center"}>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            compact ? "text-[#8f6f2e]" : "text-[#d6b56d]"
          }`}
        >
          Sri Supraja Insights
        </p>
        <h2
          id={`newsletter-title-${source}`}
          className={`mt-3 font-display text-2xl font-semibold md:text-3xl ${
            compact ? "text-[#12251d]" : "text-white"
          }`}
        >
          Get New Property Guides &amp; Project Updates
        </h2>
        <p
          className={`mt-3 leading-7 ${
            compact ? "text-[#4b554f]" : "text-white/75"
          }`}
        >
          Receive practical plot-buying guides, selected Telangana real estate
          updates and new investor articles when we publish them.
        </p>

        <form
          onSubmit={submit}
          className={`mt-6 grid gap-3 ${
            compact ? "md:grid-cols-[1fr_1.2fr_auto]" : "md:grid-cols-[1fr_1.2fr_auto]"
          }`}
        >
          <label className="sr-only" htmlFor={`newsletter-name-${source}`}>
            Name
          </label>
          <input
            id={`newsletter-name-${source}`}
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            maxLength={100}
            placeholder="Your name"
            className="min-w-0 rounded-xl border border-white/20 bg-white px-4 py-3 text-[#12251d] outline-none ring-offset-2 focus:ring-2 focus:ring-[#b08a3c]"
          />

          <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
            Email address
          </label>
          <input
            id={`newsletter-email-${source}`}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
            maxLength={254}
            placeholder="Your email address"
            className="min-w-0 rounded-xl border border-white/20 bg-white px-4 py-3 text-[#12251d] outline-none ring-offset-2 focus:ring-2 focus:ring-[#b08a3c]"
          />

          <div className="hidden" aria-hidden="true">
            <label htmlFor={`newsletter-website-${source}`}>Website</label>
            <input
              id={`newsletter-website-${source}`}
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`rounded-xl px-6 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
              compact
                ? "bg-[#12251d] text-white hover:bg-[#8f6f2e]"
                : "bg-[#d6b56d] text-[#12251d] hover:bg-[#e4c985]"
            }`}
          >
            {status === "loading" ? "Subscribing..." : "Get New Articles"}
          </button>
        </form>

        <p
          className={`mt-3 text-xs ${
            compact ? "text-[#66736d]" : "text-white/60"
          }`}
        >
          No spam. You can unsubscribe from any update.
        </p>

        {message && (
          <p
            role="status"
            className={`mt-4 rounded-xl px-4 py-3 text-sm ${
              status === "error"
                ? "bg-red-50 text-red-700"
                : compact
                  ? "bg-white text-[#24513c]"
                  : "bg-white/10 text-white"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
