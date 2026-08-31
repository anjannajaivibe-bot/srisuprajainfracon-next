import type { Metadata } from "next";
import HomeClient from "./home-client";

const SITE_URL = "https://www.srisuprajainfracon.com";
const pageTitle =
  "Sri Supraja Infracon | Real Estate Developer Near Hyderabad";
const pageDescription =
  "Sri Supraja Infracon is a real estate developer creating plotted, villa, residential and resort-inspired projects across Kamkole, Sangareddy, Mominpet and Indrakaran growth corridors near Hyderabad.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: pageTitle,
    description:
      "Discover Sri Supraja Infracon projects across key Hyderabad growth corridors, including Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows.",
    url: `${SITE_URL}/`,
    siteName: "Sri Supraja Infracon",
    images: [
      {
        url: `${SITE_URL}/og/home-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon real estate developer near Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Explore plotted, villa, residential and resort-inspired projects by Sri Supraja Infracon.",
    images: [`${SITE_URL}/og/home-og.webp`],
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og/home-og.webp`,
          width: 1200,
          height: 630,
          caption: "Sri Supraja Infracon real estate developer near Hyderabad",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeClient />
    </>
  );
}
