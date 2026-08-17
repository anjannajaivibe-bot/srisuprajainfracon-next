import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/editorial-policy/`;

export const metadata: Metadata = {
  title: "Editorial & Verification Policy | Sri Supraja Infracon",
  description:
    "Learn how Sri Supraja Infracon researches, verifies, updates and corrects real estate, project, approval and buyer-education content published on this website.",
  alternates: { canonical },
  openGraph: {
    title: "Editorial & Verification Policy | Sri Supraja Infracon",
    description:
      "Our standards for project facts, regulatory references, source verification, updates and corrections.",
    url: canonical,
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
};

export default function EditorialPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Sri Supraja Infracon Editorial and Verification Policy",
    description:
      "Standards used to research, verify, update and correct project and real estate information published by Sri Supraja Infracon.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1] px-6 pb-24 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9A7820]">
          Trust & Transparency
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#12251d] md:text-5xl">
          Editorial & Verification Policy
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#4B5563]">
          Sri Supraja Infracon publishes project information and buyer-education
          content to help readers understand plotted developments, property
          documentation and the locations in which our projects operate. This
          policy explains how we separate verifiable facts from marketing
          statements and how we correct information when facts change.
        </p>

        <section className="mt-12 space-y-5">
          <h2 className="text-3xl font-semibold text-[#12251d]">Source hierarchy</h2>
          <p className="leading-8 text-[#4B5563]">
            Regulatory and legal information is checked against the relevant
            official authority or underlying project documentation wherever it
            is available. For Telangana projects, this can include Telangana
            RERA records, applicable DTCP layout approvals, survey information,
            registered documents and other project-specific records.
          </p>
          <p className="leading-8 text-[#4B5563]">
            Location and development information may also draw on direct site
            observations, project plans, current photographs and publicly
            available infrastructure information. Where a facility is under
            construction or planned, the content should say so rather than
            presenting it as completed.
          </p>
        </section>

        <section className="mt-10 space-y-5">
          <h2 className="text-3xl font-semibold text-[#12251d]">Project-specific facts</h2>
          <p className="leading-8 text-[#4B5563]">
            Large developments can contain different phases, survey numbers and
            approval records. We therefore aim to publish approval numbers and
            registration information against the project or phase to which they
            apply. Readers should independently compare the current official
            record with the plot or phase they are considering.
          </p>
        </section>

        <section className="mt-10 space-y-5">
          <h2 className="text-3xl font-semibold text-[#12251d]">Investment language</h2>
          <p className="leading-8 text-[#4B5563]">
            Real estate values can rise or fall, and future returns cannot be
            guaranteed. Our educational content should distinguish measurable
            factors such as approvals, connectivity and development status from
            opinions about future market performance. Buyers should undertake
            independent legal and financial due diligence before purchasing
            property.
          </p>
        </section>

        <section className="mt-10 space-y-5">
          <h2 className="text-3xl font-semibold text-[#12251d]">Updates and corrections</h2>
          <p className="leading-8 text-[#4B5563]">
            Project status, regulatory records and infrastructure conditions can
            change. Articles may therefore be revised when more reliable or more
            current information becomes available. Material corrections should
            be reflected in the page content and its last-modified date.
          </p>
          <p className="leading-8 text-[#4B5563]">
            If you identify a factual error, send the page URL and supporting
            information to <a className="font-semibold text-[#765b18] underline" href="mailto:info@srisuprajainfracon.com">info@srisuprajainfracon.com</a>.
          </p>
        </section>

        <section className="mt-10 space-y-5">
          <h2 className="text-3xl font-semibold text-[#12251d]">Editorial responsibility</h2>
          <p className="leading-8 text-[#4B5563]">
            Content is published under Sri Supraja Infracon's editorial
            responsibility. We do not assign invented professional credentials
            to articles. Where specialist legal, tax or financial advice is
            required, readers should consult an appropriately qualified
            professional.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-[#EFE7D3] pt-8">
          <Link className="font-semibold text-[#12251d] underline decoration-[#C9A227] decoration-2 underline-offset-4" href="/about">
            About Sri Supraja Infracon
          </Link>
          <Link className="font-semibold text-[#12251d] underline decoration-[#C9A227] decoration-2 underline-offset-4" href="/projects">
            View Projects
          </Link>
          <Link className="font-semibold text-[#12251d] underline decoration-[#C9A227] decoration-2 underline-offset-4" href="/contact-us">
            Contact Us
          </Link>
        </div>
      </article>
    </main>
  );
}
