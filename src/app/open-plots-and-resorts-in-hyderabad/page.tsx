import type { Metadata } from "next";
import OpenPlotsResortsClient from "./OpenPlotsResortsClient";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/open-plots-and-resorts-in-hyderabad/`;
const pageTitle =
  "Open Plots Near Hyderabad | DTCP & RERA Approved Projects";
const pageDescription =
  "Explore open plots near Hyderabad across Kamkole, Mominpet and Sangareddy corridors. Compare Sri Supraja Infracon projects with DTCP and RERA details, locations and project-specific information.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical },
  openGraph: {
    title: "Open Plots Near Hyderabad | Sri Supraja Infracon",
    description:
      "Compare plotted and resort-inspired developments across Kamkole, Mominpet, Sangareddy and nearby Hyderabad growth corridors.",
    url: canonical,
    siteName: "Sri Supraja Infracon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Open plots near Hyderabad by Sri Supraja Infracon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Plots Near Hyderabad | Sri Supraja Infracon",
    description:
      "Explore approved plotted developments near Hyderabad with project-specific approval and location information.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: pageTitle,
        description: pageDescription,
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          name: "Sri Supraja Infracon plotted developments near Hyderabad",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Supraja IRIS",
              url: `${SITE_URL}/projects/supraja-iris-resort-plots/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Bridge County",
              url: `${SITE_URL}/projects/bridge-county/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Sindhu Sarovar",
              url: `${SITE_URL}/projects/sindhu-sarovar/`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Subhash Meadows",
              url: `${SITE_URL}/projects/subhash-meadows/`,
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Open Plots Near Hyderabad",
            item: canonical,
          },
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
      <OpenPlotsResortsClient />
    </>
  );
}
