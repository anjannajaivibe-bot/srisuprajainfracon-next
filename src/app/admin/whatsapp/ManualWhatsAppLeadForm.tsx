"use client";

import { useState } from "react";

const projects = [
  "Supraja IRIS", "Bridge County", "Sindhu Sarovar",
  "Subhash Meadows", "General Enquiry", "Channel Partner",
];

export default function ManualWhatsAppLeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("Supraja IRIS");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    setError("");
    setSaved(false);
    setSaving(true);
    try {
      const response = await fetch("/api/admin/whatsapp-leads", {
        method: "POST", credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, project, notes }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to save this lead.");
      }
      setSaved(true);
      setName("");
      setPhone("");
      setNotes("");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save this lead.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-bold text-slate-950">Record a confirmed WhatsApp enquiry</h2>
      <p className="mt-2 text-sm text-slate-600">
        Only enter a customer's details after a real WhatsApp conversation. Website clicks alone
        cannot supply a name or number. Existing leads are protected against duplicate entry.
      </p>
      <form onSubmit={submit} data-clarity-mask="true" className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          Customer name *
          <input className="mt-1 w-full rounded-lg border border-slate-300 p-3" value={name}
            onChange={(event) => setName(event.target.value)} maxLength={100} minLength={2} required autoComplete="name" />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Customer mobile *
          <input className="mt-1 w-full rounded-lg border border-slate-300 p-3" value={phone}
            onChange={(event) => setPhone(event.target.value)} type="tel" minLength={10} maxLength={18} inputMode="tel" required autoComplete="tel" />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Interested project
          <select className="mt-1 w-full rounded-lg border border-slate-300 p-3" value={project}
            onChange={(event) => setProject(event.target.value)}>
            {projects.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Conversation notes (optional)
          <input className="mt-1 w-full rounded-lg border border-slate-300 p-3" value={notes}
            onChange={(event) => setNotes(event.target.value)} maxLength={1000} placeholder="Requested site visit, plot size or callback" />
        </label>
        <div className="flex flex-wrap items-center gap-4 md:col-span-2">
          <button disabled={saving} type="submit"
            className="rounded-lg bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800 disabled:opacity-50">
            {saving ? "Saving..." : "Save confirmed WhatsApp lead"}
          </button>
          {saved && <p role="status" className="text-sm font-semibold text-green-800">Saved to CRM and assigned to your admin account. <a href="/admin" className="underline">View Leads</a></p>}
          {error && <p role="alert" className="text-sm font-semibold text-red-800">{error}</p>}
        </div>
      </form>
    </section>
  );
}
