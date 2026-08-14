import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/project-verification/`;

export const metadata: Metadata = {
  title: "Project Verification Center | Sri Supraja Infracon",
  description:
    "Verify key Sri Supraja Infracon project approval details, RERA registration numbers, DTCP/TLP references, survey numbers and documented validity periods without exposing sensitive records.",
  alternates: { canonical },
  openGraph: {
    title: "Project Verification Center | Sri Supraja Infracon",
    description:
      "A privacy-first reference for documented project approval details across Supraja IRIS, Bridge County and Sindhu Sarovar.",
    url: canonical,
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const projects = [
  {
    name: "Supraja IRIS Resort Phase 3",
    href: "/projects/supraja-iris-resort-plots",
    location: "Ghanpur / Marpalle, Vikarabad District",
    rera: "P02100009249",
    tlp: "155/2024/H",
    surveys: "130/Part, 131/Part, 147/Part, 148/Part, 149/Part",
    period: "08 October 2024 to 08 October 2026, unless extended by the Authority",
    note: "The uploaded TG RERA Form C and DTCP proceedings support these phase-specific details.",
  },
  {
    name: "Supraja IRIS Resort Phase 2",
    href: "/projects/supraja-iris-resort-plots",
    location: "Ghanapur, Marpalle, Vikarabad District",
    rera: "P02100009961",
    tlp: "Revised TLP 59/2025/H",
    surveys: "Survey No. 134",
    period: "11 June 2025 to 11 June 2027, unless extended or otherwise updated by the Authority",
    note: "The TG RERA certificate and revised DTCP proceedings are treated as separate source records and should be cross-checked for the latest regulatory status.",
  },
  {
    name: "Supraja Bridge County",
    href: "/projects/bridge-county",
    location: "Kamkole, Munipally Mandal, Sangareddy District",
    rera: "P01100009141",
    tlp: "160/2024/H",
    surveys: "186/P, 187/P, 189/P",
    period: "30 October 2024 to 30 October 2026, unless extended by the Authority",
    note: "The DTCP layout proceedings record approximately 14.875 acres and 211 plots for the referenced layout.",
  },
  {
    name: "Supraja Sindhu Sarovar Phase 2",
    href: "/projects/sindhu-sarovar",
    location: "Morangapally, Mominpet, Vikarabad District",
    rera: "P02100009951",
    tlp: "Project page carries the applicable DTCP layout references",
    surveys: "18/P and 19/P",
    period: "Uploaded Form C records 23 October 2021 to 23 August 2025, unless extended by the Authority",
    note: "Because the documented period in the uploaded certificate has ended, buyers should verify any extension or current status directly with TG RERA before relying on it.",
  },
  {
    name: "Supraja Sindhu Sarovar Phase 1",
    href: "/projects/sindhu-sarovar",
    location: "Mominpet, Vikarabad District",
    rera: "P02100003339",
    tlp: "Historical phase record",
    surveys: "406/P and 407/P",
    period: "Uploaded Form C records 25 August 2021 to 17 May 2023, unless extended by the Authority",
    note: "This is presented as a historical project record, not as evidence of current registration status.",
  },
] as const;

export default function ProjectVerificationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Sri Supraja Infracon Project Verification Center",
        description:
          "Project-specific approval and registration references derived from reviewed source documents, with privacy-sensitive information omitted.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.name,
            url: `${SITE_URL}${project.href}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Project Verification", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#17211B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-[#10251D] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B96A]">
            Verified Project Information
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            Sri Supraja Infracon Project Verification Center
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            This page publishes only the minimum project information needed for buyer verification. It is based on reviewed regulatory records and intentionally excludes signatures, private-party details, internal correspondence and other information that is not necessary for a public project check.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#D9CFB7] bg-white p-7 shadow-sm md:p-9">
            <h2 className="text-2xl font-bold">How to use this verification center</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Treat the entries below as a concise reference to the documents reviewed by Sri Supraja Infracon. For any purchase decision, independently verify the project number on the official TG RERA portal and review the applicable layout approval, title documents and current project status with qualified professionals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://rera.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#10251D] px-5 py-3 text-sm font-semibold text-white"
              >
                Verify on TG RERA
              </a>
              <Link
                href="/telangana-plot-verification"
                className="rounded-full border border-[#10251D] px-5 py-3 text-sm font-semibold text-[#10251D]"
              >
                Read the Buyer Verification Guide
              </Link>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {projects.map((project) => (
              <article key={project.name} className="rounded-3xl border border-[#E4DCCB] bg-white p-7 shadow-sm md:p-9">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A782D]">Documented project record</p>
                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">{project.name}</h2>
                    <p className="mt-2 text-slate-600">{project.location}</p>
                  </div>
                  <Link href={project.href} className="text-sm font-bold text-[#765D00] underline underline-offset-4">
                    View project page
                  </Link>
                </div>

                <dl className="mt-7 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#F7F3E9] p-5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">TG RERA registration</dt>
                    <dd className="mt-2 font-semibold">{project.rera}</dd>
                  </div>
                  <div className="rounded-2xl bg-[#F7F3E9] p-5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">DTCP / TLP reference</dt>
                    <dd className="mt-2 font-semibold">{project.tlp}</dd>
                  </div>
                  <div className="rounded-2xl bg-[#F7F3E9] p-5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Survey numbers</dt>
                    <dd className="mt-2 font-semibold">{project.surveys}</dd>
                  </div>
                  <div className="rounded-2xl bg-[#F7F3E9] p-5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Period shown in reviewed record</dt>
                    <dd className="mt-2 font-semibold">{project.period}</dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm leading-7 text-slate-600">{project.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#10251D] p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold">Privacy and legal-use policy</h2>
            <p className="mt-4 max-w-4xl leading-7 text-white/80">
              We do not publish complete scanned certificates merely for SEO. Public pages intentionally omit signatures, personal contact information, private-party addresses, financial details, mortgage instruments and unrelated administrative records. Regulatory references are presented for buyer education and independent verification, not as a substitute for legal due diligence or the latest government record.
            </p>
            <Link href="/editorial-policy" className="mt-6 inline-block font-semibold text-[#E5C77E] underline underline-offset-4">
              Read our Editorial & Verification Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
