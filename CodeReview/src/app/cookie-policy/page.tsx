import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Sri Supraja Infracon",
  description:
    "Read the Cookie Policy of Sri Supraja Infracon to understand how cookies, analytics tools, and tracking technologies may be used.",
  alternates: { canonical: "/cookie-policy/" },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <article className="prose prose-slate max-w-none">
        <h1>Cookie Policy</h1>
        <p><strong>Effective Date:</strong> June 1, 2026</p>

        <p>
          This Cookie Policy explains how Sri Supraja Infracon may use cookies
          and similar technologies to improve functionality, understand visitor
          behaviour, measure marketing performance, and improve user experience.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help websites remember preferences, improve performance,
          and understand visitor interactions.
        </p>

        <h2>2. Types of Cookies We May Use</h2>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are required for basic website functionality, security,
          navigation, and form submissions.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies help us understand website visits, page usage, session
          duration, and performance improvement opportunities.
        </p>

        <h3>Advertising and Remarketing Cookies</h3>
        <p>
          These cookies may be used to show relevant advertisements, measure
          campaign performance, and understand ad interactions.
        </p>

        <h2>3. Third-Party Tools</h2>
        <p>
          Our website may use tools such as Google Analytics, Google Ads, Meta
          Pixel, or similar analytics and advertising technologies.
        </p>

        <h2>4. Managing Cookies</h2>
        <p>
          You can manage, block, or delete cookies through your browser settings.
          Disabling cookies may affect website functionality.
        </p>

        <h2>5. Contact</h2>
        <p>
          For questions about this Cookie Policy, please contact Sri Supraja
          Infracon through the contact details available on our website.
        </p>
      </article>
    </section>
  );
}
