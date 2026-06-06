"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Dummy Form Submission:", form);

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      comments: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-[0_15px_40px_rgba(11,22,51,0.08)]"
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
        Project Enquiry Form
      </p>

      <h3 className="mb-6 text-3xl font-display font-bold text-[#111827]">
        Request Site Visit / Project Details
      </h3>

      <div className="grid gap-5">
        <div>
          <label className="mb-2 block font-semibold text-[#111827]">
            Name *
          </label>

          <input
            name="name"
            value={form.name}
            onChange={updateField}
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none transition focus:border-[#C9A227]"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#111827]">
            Phone *
          </label>

          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            required
            placeholder="Enter phone number"
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none transition focus:border-[#C9A227]"
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
            placeholder="Enter email address"
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none transition focus:border-[#C9A227]"
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
            rows={4}
            placeholder="Tell us which project you are interested in"
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 outline-none transition focus:border-[#C9A227]"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-[#C9A227] px-7 py-4 font-bold text-[#0B1633] transition hover:bg-[#0B1633] hover:text-white"
        >
          Submit Enquiry
        </button>

        {submitted && (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
            Thank you. Your enquiry has been received successfully.
          </div>
        )}

        <p className="text-xs leading-relaxed text-[#6B7280]">
          By submitting this form, you agree to be contacted by Sri Supraja
          Infracon regarding project availability, pricing, site visits and
          related real estate enquiries.
        </p>
      </div>
    </form>
  );
}




