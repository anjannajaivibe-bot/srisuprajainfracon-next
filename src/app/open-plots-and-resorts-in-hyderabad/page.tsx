import type { Metadata } from "next";
import OpenPlotsResortsClient from "./OpenPlotsResortsClient";

const SITE_URL = "https://www.srisuprajainfracon.com";
const canonical = `${SITE_URL}/open-plots-and-resorts-in-hyderabad/`;
const pageTitle =
  "Open Plots in Hyderabad for Sale | DTCP & RERA Approved";
const pageDescription =
  "Explore open plots in Hyderabad for sale from Sri Supraja Infracon. Compare DTCP and RERA approved plotted projects across Kamkole, Sadashivapet, Mominpet and the western Hyderabad growth corridors.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical },
  openGraph: {
    title: "Open Plots in Hyderabad for Sale | Sri Supraja Infracon",
    description:
      "Compare approved plotted developments across Kamkole, Sadashivapet, Mominpet and western Hyderabad growth corridors, with project-specific approval and location information.",
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
      "Explore DTCP and RERA approved plotted developments across Hyderabad growth corridors with project-specific approval and location information.",
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
