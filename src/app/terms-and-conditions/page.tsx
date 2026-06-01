import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sri Supraja Infracon",
  description:
    "Read the Terms and Conditions for using the Sri Supraja Infracon website, including project information, user responsibilities, and disclaimers.",
  alternates: { canonical: "/terms-and-conditions/" },
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none">
        <h1>Terms &amp; Conditions</h1>
        <p><strong>Effective Date:</strong> June 1, 2026</p>

        <p>
          By accessing or using this website, you agree to comply with these
          Terms &amp; Conditions. If you do not agree, please discontinue use of
          the website.
        </p>

        <h2>1. Website Purpose</h2>
        <p>
          This website is provided for informational, marketing, enquiry, and
          customer communication purposes related to Sri Supraja Infracon
          projects and services.
        </p>

        <h2>2. No Legal or Investment Advice</h2>
        <p>
          Website information should not be treated as legal, financial, tax, or
          investment advice. Users should independently verify project details,
          approvals, documents, and legal information before making decisions.
        </p>

        <h2>3. Project Information</h2>
        <p>
          Project layouts, amenities, pricing, availability, visuals,
          specifications, offers, and timelines may change without prior notice.
        </p>

        <h2>4. User Responsibilities</h2>
        <ul>
          <li>Do not misuse the website or its content</li>
          <li>Do not submit false or misleading information</li>
          <li>Do not attempt unauthorized access</li>
          <li>Do not copy website content without permission</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          Website content, logos, images, project creatives, brochures, and
          design elements belong to Sri Supraja Infracon or respective licensors.
        </p>

        <h2>6. No Guaranteed Returns</h2>
        <p>
          Sri Supraja Infracon does not guarantee fixed returns, appreciation,
          resale value, rental income, or investment performance.
        </p>

        <h2>7. Jurisdiction</h2>
        <p>
          These terms are governed by the laws of India. Disputes shall be
          subject to the jurisdiction of competent courts in Hyderabad,
          Telangana.
        </p>
      </article>
    </main>
  );
}