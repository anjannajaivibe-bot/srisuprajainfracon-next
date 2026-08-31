import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

const SITE_URL = "https://www.srisuprajainfracon.com";

export const metadata: Metadata = {
  title: "Contact Sri Supraja Infracon | Project Information & Site Visits",
  description:
    "Connect with Sri Supraja Infracon for project information, site visits, availability details, and customer assistance across our residential and plotted projects.",
  alternates: {
    canonical: `${SITE_URL}/contact-us/`,
  },
  openGraph: {
    title: "Contact Sri Supraja Infracon | Project Information & Site Visits",
    description:
      "Connect with Sri Supraja Infracon for project details, site visits, availability information, and customer assistance.",
    url: `${SITE_URL}/contact-us/`,
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sri Supraja Infracon | Project Information & Site Visits",
    description:
      "Request details for Supraja IRIS, Bridge County, Sindhu Sarovar, and Subhash Meadows.",
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/contact-us/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact-us/` },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact-us/#webpage`,
        url: `${SITE_URL}/contact-us/`,
        name: "Contact Sri Supraja Infracon",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${SITE_URL}/contact-us/#breadcrumb` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPageClient />
    </>
  );
}
