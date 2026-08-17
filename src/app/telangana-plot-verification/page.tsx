import type { Metadata } from "next";
import Link from "next/link";
import PlotBuyerTools from "./PlotBuyerTools";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/telangana-plot-verification/`;

export const metadata: Metadata = {
  title: "Telangana Plot Buyer Toolkit 2026 | Verification & Area Converter",
  description:
    "A practical Telangana plot buyer toolkit with RERA and land-record verification links, plot area converter, due-diligence checklist, title checks and buyer guidance.",
  alternates: { canonical },
  openGraph: {
    title: "Telangana Plot Buyer Toolkit 2026 | Sri Supraja Infracon",
    description:
      "Use official Telangana verification resources, a plot area converter and a practical due-diligence checklist before buying plotted property.",
    url: canonical,
    siteName: "Sri Supraja Infracon",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const checks = [
  {
    title: "Identify the exact project phase",
    body: "Do not verify only a township or brand name. Large developments can have separate phases, survey numbers, permissions and RERA registrations. Match the specific plot being offered to the records for that phase.",
  },
  {
    title: "Check the RERA registration where applicable",
    body: "Search the exact registration number on the Telangana Real Estate Regulatory Authority portal and compare the project name, promoter, locality, survey information and recorded status with the property being offered.",
  },
  {
    title: "Match the layout approval",
    body: "Confirm that the applicable layout approval or technical-layout reference belongs to the same land and phase. Roads, open spaces, access and plot arrangement should correspond with the sanctioned plan available for review.",
  },
  {
    title: "Compare survey numbers and land records",
    body: "Survey numbers connect the marketed plot with the underlying land. Compare them across available approval records, title documents, land records and the proposed sale documentation. Seek professional help where subdivisions make the record difficult to interpret.",
  },
  {
    title: "Review title and encumbrance information",
    body: "A planning approval or RERA registration is not a substitute for title due diligence. Review the title chain, seller or promoter authority, encumbrance information, mortgages or releases, and the documents relevant to the specific plot.",
  },
  {
    title: "Compare documents with the site",
    body: "During the site visit, compare plot numbering, road widths, access, dimensions and open spaces with the layout information provided. Any material mismatch should be clarified before payment or registration.",
  },
] as const;

const officialResources = [
  {
    title: "TG RERA",
    description: "Search registered real estate projects and review regulatory information published by the Telangana Real Estate Regulatory Authority.",
    href: "https://rera.telangana.gov.in/",
    label: "Open TG RERA",
  },
  {
    title: "Bhu Bharati",
    description: "Use the Government of Telangana land-record portal for available land details and registered-document information.",
    href: "https://bhubharati.telangana.gov.in/knowLandStatus",
    label: "Open Bhu Bharati",
  },
  {
    title: "Registration & Stamps",
    description: "Access the Telangana Registration and Stamps Department through the official state registration portal.",
    href: "https://registration.telangana.gov.in/",
    label: "Open Registration Portal",
  },
] as const;

export default function TelanganaPlotVerificationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Telangana Plot Buyer Toolkit 2026",
        description:
          "A buyer-focused Telangana resource with official verification links, area conversion and due-diligence guidance for plotted property.",
        mainEntityOfPage: canonical,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        dateModified: "2026-08-17",
        about: [
          "Telangana plot verification",
          "TG RERA verification",
          "land record verification",
          "plot area conversion",
          "property due diligence",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Telangana Plot Buyer Toolkit", item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#17211B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-[#F4EFE3] px-6 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8A6A26]">
            Free Buyer Resource · Updated August 2026
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            Telangana Plot Buyer Toolkit 2026
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            A practical starting point for buyers evaluating plotted property in Telangana. Use the official verification links, area converter and due-diligence checklist below to organise your review before making a purchase decision.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">
            This toolkit is educational. It does not certify a property, replace legal advice or substitute for verification of the latest government records applicable to a specific plot.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <PlotBuyerTools />

          <section className="mt-14">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A26]">Official Resources</p>
              <h2 className="mt-2 text-3xl font-bold">Start with government records</h2>
              <p className="mt-4 leading-8 text-slate-700">
                Marketing material can explain a project, but regulatory and land-record checks should begin with the relevant government source. Portal data and procedures can change, so review the current record at the time of your transaction.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {officialResources.map((resource) => (
                <article key={resource.title} className="rounded-3xl border border-slate-200 bg-[#FBFAF7] p-6">
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex rounded-full bg-[#10251D] px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    {resource.label}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A26]">Verification Sequence</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold">Six checks to organise before buying a plot</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {checks.map((check, index) => (
                <article key={check.title} className="rounded-3xl border border-slate-200 p-7">
                  <span className="text-sm font-bold text-[#9A7726]">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-bold">{check.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{check.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-[#10251D] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C77E]">Important Principle</p>
              <h2 className="mt-3 text-3xl font-bold">Verify the phase, not only the project name</h2>
              <p className="mt-5 leading-8 text-white/80">
                A large development may contain more than one phase, permission reference or regulatory registration. Buyers should match the specific plot to the applicable phase, survey numbers and current records rather than relying on a certificate belonging to another part of the development.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D7CCB2] bg-[#F8F6F1] p-8">
              <h2 className="text-2xl font-bold">Continue your research</h2>
              <p className="mt-4 leading-7 text-slate-700">
                Use our verification centre for project-specific public information, or continue with detailed buyer guides in the Investor Knowledge Center.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/project-verification" className="rounded-full bg-[#10251D] px-5 py-3 text-center text-sm font-semibold text-white">
                  Project Verification Center
                </Link>
                <Link href="/blog" className="rounded-full border border-[#10251D] px-5 py-3 text-center text-sm font-semibold text-[#10251D]">
                  Investor Knowledge Center
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold">Editorial and verification note</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
              Sri Supraja Infracon prepares educational buyer resources using government portals, reviewed project records and practical transaction considerations. Government portals remain the source of truth for their respective records. Buyers should independently verify the latest information and obtain professional legal advice appropriate to the property.
            </p>
            <Link href="/editorial-policy" className="mt-4 inline-block text-sm font-semibold text-[#765D00] underline underline-offset-4">
              Read our Editorial & Verification Policy
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
