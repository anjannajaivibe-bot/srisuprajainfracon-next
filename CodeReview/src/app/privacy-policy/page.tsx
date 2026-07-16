import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sri Supraja Infracon",
  description:
    "Read the Privacy Policy of Sri Supraja Infracon, including how we collect, use, protect, and process enquiry information.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> June 1, 2026</p>

        <p>
          Sri Supraja Infracon respects your privacy and is committed to
          protecting personal information shared through our website, enquiry
          forms, phone calls, WhatsApp interactions, brochure requests,
          advertisements, and other communication channels.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Location or city</li>
          <li>Property preferences</li>
          <li>Project enquiry details</li>
          <li>Site visit requests</li>
          <li>Device, browser, IP address, and website usage information</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Respond to enquiries</li>
          <li>Share project details and availability</li>
          <li>Schedule site visits</li>
          <li>Send brochures or project updates</li>
          <li>Improve website performance and user experience</li>
          <li>Provide customer support</li>
          <li>Run marketing, remarketing, and analytics activities</li>
          <li>Comply with legal, regulatory, or business requirements</li>
        </ul>

        <h2>3. Consent</h2>
        <p>
          By submitting your information, you consent to Sri Supraja Infracon
          contacting you regarding projects, offers, site visits, and related
          real estate services.
        </p>

        <h2>4. Cookies and Tracking</h2>
        <p>
          Our website may use cookies, analytics tags, advertising pixels, and
          similar technologies to improve functionality, measure campaign
          performance, and provide relevant communication.
        </p>

        <h2>5. Sharing of Information</h2>
        <p>
          We do not sell personal information. Information may be shared with
          authorized teams, CRM providers, marketing partners, hosting providers,
          or regulatory authorities where required.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We follow reasonable security practices to protect personal information.
          However, no digital system can be guaranteed completely secure.
        </p>

        <h2>7. Contact</h2>
        <p>
          For privacy-related requests, please contact Sri Supraja Infracon
          through the contact details available on our website.
        </p>
      </article>
    </section>
  );
}
