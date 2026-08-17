import type { Metadata } from "next";
import { siteMeta } from "@/seo/meta";
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
        "@type": ["Organization", "Corporation"],
        "@id": `${SITE_URL}/#organization`,
        name: "Sri Supraja Infracon",
        legalName: "Sri Supraja Infracon",
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/og/home-og.webp`,
        logo: {
          "@type": "ImageObject",
          url: `${siteMeta.domain}${siteMeta.logo}`,
        },
        email: "info@srisuprajainfracon.com",
        telephone: "+91 90529 96161",
        description:
          "Sri Supraja Infracon is a real estate developer, land developer and project developer creating plotted, residential, villa and resort-inspired developments across Hyderabad growth corridors.",
        publishingPrinciples: `${SITE_URL}/editorial-policy/`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 90529 96161",
          email: "info@srisuprajainfracon.com",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Telugu", "Hindi"],
        },
        knowsAbout: [
          "Real estate development",
          "Land development",
          "Project development",
          "Plotted development",
          "Residential development",
          "Resort-inspired plotted development",
          "DTCP layout approvals",
          "Telangana RERA project information",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "H.No. 4-91, Above Parampara Mithai, Chandanagar",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500050",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.494642678754836",
          longitude: "78.3263364719618",
        },
        areaServed: [
          "Hyderabad",
          "Kamkole",
          "Sangareddy",
          "Mominpet",
          "Indrakaran",
          "Telangana",
        ],
        openingHours: "Mo-Sa 09:00-18:00",
        sameAs: siteMeta.socialProfiles,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Sri Supraja Infracon",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
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
