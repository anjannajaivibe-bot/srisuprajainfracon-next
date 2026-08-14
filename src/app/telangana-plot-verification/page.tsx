import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/telangana-plot-verification/`;

export const metadata: Metadata = {
  title: "Telangana Plot Verification Guide | DTCP, RERA & Title Checks",
  description:
    "A practical Telangana plot verification guide covering DTCP/TLP references, TG RERA registration, survey numbers, title checks, EC review and independent buyer due diligence.",
  alternates: { canonical },
  openGraph: {
    title: "Telangana Plot Verification Guide | Sri Supraja Infracon",
    description:
      "Understand what to verify before buying a plotted property in Telangana, with practical examples drawn from reviewed project records.",
    url: canonical,
    siteName: "Sri Supraja Infracon",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const checks = [
  {
    title: "1. Identify the exact project phase",
    body: "Do not verify only a brand or township name. Large plotted developments may have different phases, survey numbers, permission references and RERA registrations. Match the phase being offered to the documents shown to you.",
  },
  {
    title: "2. Match the RERA registration number",
    body: "Where RERA registration applies, verify the exact project registration number on the TG RERA portal. Confirm the project name, locality, survey numbers, promoter information and the period recorded by the Authority. If a certificate period has ended, check whether an extension or later status is recorded before relying on it.",
  },
  {
    title: "3. Match the DTCP or competent-authority layout reference",
    body: "Check that the technical layout permission or TLP reference corresponds to the same land and phase. The sanctioned layout should align with the survey numbers, access roads, open spaces and plot arrangement represented to the buyer.",
  },
  {
    title: "4. Verify survey numbers and boundaries",
    body: "Survey numbers are a core link between the marketed project and the underlying land records. Compare the survey numbers in the project approval, RERA record, title documents and sale documentation. Ask for professional help where subdivisions or part-survey references make the record difficult to interpret.",
  },
  {
    title: "5. Review title and encumbrance records",
    body: "Approval of a layout is not a substitute for title due diligence. Buyers should review the title chain, relevant sale or development documents, encumbrance information, seller or promoter authority, and any mortgage or release requirements that apply to the specific plot.",
  },
  {
    title: "6. Compare the approved plan with the site",
    body: "At the site, compare road widths, plot numbering, open spaces, buffers and access with the approved layout information available to you. Any material mismatch deserves clarification before payment or registration.",
  },
] as const;

export default function TelanganaPlotVerificationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Telangana Plot Verification Guide: DTCP, RERA and Title Checks",
        description:
          "A buyer-focused guide to checking plotted property approvals and records in Telangana.",
        mainEntityOfPage: canonical,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        dateModified: "2026-08-14",
        about: [
          "TG RERA verification",
          "DTCP layout verification",
          "plot title due diligence",
          "survey number verification",
          "Telangana plotted property",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Telangana Plot Verification Guide", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#17211B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-[#F4EFE3] px-6 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8A6A26]">Buyer Verification Resource</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Telangana Plot Verification Guide: DTCP, RERA and Title Checks
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            A plotted-property decision should be based on records that match the exact land and project phase being sold. This guide explains a practical verification sequence without treating any single certificate as a substitute for complete legal due diligence.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#E5DDCA] bg-[#FBFAF7] p-7 md:p-9">
            <h2 className="text-2xl font-bold">Start with the government record, not the advertisement</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Marketing material can help a buyer understand a project, but approval status should be checked against the relevant government record. For TG RERA registered projects, search the exact registration number and compare the returned project details with the phase and plot being offered.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://rera.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#10251D] px-5 py-3 text-sm font-semibold text-white">
                Open TG RERA Portal
              </a>
              <Link href="/project-verification" className="rounded-full border border-[#10251D] px-5 py-3 text-sm font-semibold text-[#10251D]">
                Sri Supraja Project Verification Center
              </Link>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {checks.map((check) => (
              <section key={check.title} className="rounded-3xl border border-slate-200 p-7 md:p-9">
                <h2 className="text-2xl font-bold">{check.title}</h2>
                <p className="mt-4 leading-8 text-slate-700">{check.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-3xl bg-[#10251D] p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C77E]">Practical example</p>
            <h2 className="mt-3 text-3xl font-bold">Why phase-level verification matters</h2>
            <p className="mt-5 leading-8 text-white/80">
              Supraja IRIS illustrates why buyers should verify a phase rather than only a project brand. Reviewed records for the development contain separate phase-specific RERA registrations and technical-layout references. A buyer evaluating a particular plot should therefore match that plot to the applicable phase, survey numbers and current regulatory record instead of relying on a different phase certificate.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">What this guide does not prove</h2>
            <div className="mt-5 space-y-4 text-slate-700 leading-8">
              <p>RERA registration does not by itself prove every aspect of title, physical boundary, current encumbrance status or suitability of a specific plot for a buyer&apos;s purpose.</p>
              <p>A layout permission does not replace review of the sale documentation, title chain, seller authority or current government records.</p>
              <p>Any validity period reproduced from a certificate is the period shown in that reviewed certificate. Where that period has ended, the latest extension or current status should be checked directly with the competent authority.</p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-[#D7CCB2] bg-[#F8F6F1] p-8">
            <h2 className="text-2xl font-bold">Source and privacy approach</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Sri Supraja Infracon uses reviewed project certificates, technical-layout records and government portals to prepare verification summaries. Only buyer-relevant facts are published. Signatures, private-party addresses, internal correspondence, financial details and unrelated personal information are intentionally excluded from public pages.
            </p>
            <Link href="/editorial-policy" className="mt-5 inline-block font-semibold text-[#765D00] underline underline-offset-4">
              Editorial & Verification Policy
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
