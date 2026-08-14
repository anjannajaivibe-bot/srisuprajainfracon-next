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
        "@type": ["Organization", "Corporation"],
        "@id": `${SITE_URL}/#organization`,
        name: "Sri Supraja Infracon",
        legalName: "Sri Supraja Infracon",
        url: `${SITE_URL}/`,
        telephone: "+91 90529 96161",
        email: "info@srisuprajainfracon.com",
        description:
          "Sri Supraja Infracon is a real estate developer, land developer and project developer focused on plotted, residential, villa and resort-inspired developments in Telangana growth corridors.",
        areaServed: [
          "Hyderabad",
          "Kamkole",
          "Sangareddy",
          "Mominpet",
          "Indrakaran",
          "Telangana",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "D. No. 4-91, Above Parampara Mithai, Chandanagar",
          addressLocality: "Hyderabad",
          postalCode: "500050",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact-us/#webpage`,
        url: `${SITE_URL}/contact-us/`,
        name: "Contact Sri Supraja Infracon",
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
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
