import type { Metadata } from "next";
import OpenPlotsResortsClient from "./OpenPlotsResortsClient";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/open-plots-and-resorts-in-hyderabad/`;
const pageTitle =
  "Open Plots in Hyderabad for Sale | Compare Project Approvals";
const pageDescription =
  "Explore open plots in Hyderabad for sale with project-wise DTCP and RERA records, EMI options and location details across Kamkole, Mominpet and Indrakaran.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical },
  openGraph: {
    title: "Open Plots in Hyderabad for Sale | Sri Supraja Infracon",
    description:
      "Compare plotted developments near Hyderabad by location, project-wise DTCP/RERA records and payment options. Verify current approvals before booking.",
    url: canonical,
    siteName: "Sri Supraja Infracon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Open plots in Hyderabad for sale by Sri Supraja Infracon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Plots in Hyderabad for Sale | Sri Supraja Infracon",
    description:
      "Explore open plots around Hyderabad with phase-specific DTCP/RERA references, site details, payment options and independent verification guidance.",
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
        about: [
          { "@type": "Thing", name: "Open plots in Hyderabad" },
          { "@type": "Thing", name: "Residential plots in Hyderabad" },
          { "@type": "Thing", name: "DTCP approved plots" },
          { "@type": "Thing", name: "RERA approved plots" },
        ],
        mainEntity: {
          "@type": "ItemList",
          name: "Open plot projects in Hyderabad growth corridors by Sri Supraja Infracon",
          numberOfItems: 4,
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
            name: "Open Plots in Hyderabad",
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
