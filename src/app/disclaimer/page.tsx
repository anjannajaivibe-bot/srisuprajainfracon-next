import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Sri Supraja Infracon",
  description:
    "Read the Sri Supraja Infracon disclaimer regarding project information, visuals, approvals, pricing, timelines, and investment-related statements.",
  alternates: { canonical: "/disclaimer/" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none">
        <h1>Disclaimer</h1>
        <p><strong>Effective Date:</strong> June 1, 2026</p>

        <p>
          The information on this website is for general informational and
          marketing purposes only. We make reasonable efforts to keep information
          updated but do not warrant completeness, accuracy, or availability.
        </p>

        <h2>1. Project Information Disclaimer</h2>
        <p>
          Project layouts, approvals, specifications, amenities, pricing,
          payment plans, availability, possession timelines, and development
          status are subject to change without prior notice.
        </p>

        <p>
          Users should independently verify all project details, title documents,
          permissions, approvals, RERA registration details where applicable, and
          legal documents before making any purchase decision.
        </p>

        <h2>2. Visual and Conceptual Representation</h2>
        <p>
          Images, renders, maps, master plans, brochures, walkthroughs, and
          promotional visuals may be artistic impressions or conceptual
          representations. Actual development may differ.
        </p>

        <h2>3. Amenities and Development Plans</h2>
        <p>
          Amenities, infrastructure, resort features, community facilities, and
          future development references are subject to approvals, feasibility,
          phasing, market conditions, and execution plans.
        </p>

        <h2>4. No Guaranteed Returns</h2>
        <p>
          Statements about growth potential, location advantage, appreciation, or
          future development are indicative. Sri Supraja Infracon does not
          guarantee returns, resale value, rental income, or market performance.
        </p>

        <h2>5. External Links</h2>
        <p>
          External links may lead to third-party platforms. Sri Supraja Infracon
          is not responsible for third-party content, accuracy, availability, or
          privacy practices.
        </p>
      </article>
    </main>
  );
}