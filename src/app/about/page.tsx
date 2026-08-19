import type { Metadata } from "next";
import AboutClient from "./about-client";

const SITE_URL = "https://www.srisuprajainfracon.com";

export const metadata: Metadata = {
  title:
    "About Sri Supraja Infracon | DTCP & RERA Approved Open Plot Developers",
  description:
    "Learn about Sri Supraja Infracon, a trusted real estate developer focused on DTCP and RERA approved open plots, resort plots and plotted communities near Hyderabad growth corridors.",
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
  openGraph: {
    title: "About Sri Supraja Infracon | Open Plot Developers Near Hyderabad",
    description:
      "Sri Supraja Infracon develops approved open plot communities across Hyderabad growth corridors including Kamkole, Mominpet, Sangareddy and Indrakaran.",
    url: `${SITE_URL}/about/`,
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Sri Supraja Infracon | DTCP & RERA Approved Open Plot Developers",
    description:
      "Explore Sri Supraja Infracon projects near Hyderabad growth corridors including Kamkole, Sangareddy and Mominpet.",
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/#webpage`,
        url: `${SITE_URL}/about/`,
        name: "About Sri Supraja Infracon",
        description:
          "Sri Supraja Infracon is a real estate developer focused on plotted, residential, villa and resort-inspired developments across Hyderabad growth corridors.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${SITE_URL}/about/#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/about/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about/` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutClient />
    </>
  );
}
