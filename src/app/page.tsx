import type { Metadata } from "next";
import HomeClient from "./home-client";

const focusKeyword = "DTCP & RERA Approved Open Plots Near Hyderabad";

export const metadata: Metadata = {
  title: `${focusKeyword} | Sri Supraja Infracon`,
  description:
    "Explore DTCP & RERA Approved Open Plots Near Hyderabad, villa plots, resort plots and premium plotted developments across Kamkole, Sangareddy, Mominpet and Indrakaran by Sri Supraja Infracon.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/",
  },
  openGraph: {
    title: `${focusKeyword} | Sri Supraja Infracon`,
    description:
      "Premium plotted developments, resort plots and villa plots near Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.",
    url: "https://www.suprajainfracon.com/",
    siteName: "Sri Supraja Infracon",
    images: [
      {
        url: "https://www.suprajainfracon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${focusKeyword} by Sri Supraja Infracon`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${focusKeyword} | Sri Supraja Infracon`,
    description:
      "Explore approved open plot projects near Hyderabad growth corridors by Sri Supraja Infracon.",
    images: ["https://www.suprajainfracon.com/og-image.jpg"],
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.suprajainfracon.com/#realestateagent",
        name: "Sri Supraja Infracon",
        url: "https://www.suprajainfracon.com/",
        email: "support@srisuprajainfracon.com",
        telephone: "+91-9640753929",
        image: "https://www.suprajainfracon.com/og-image.jpg",
        description:
          "Sri Supraja Infracon develops DTCP and RERA approved open plot communities, villa plots, resort plots and premium plotted developments near Hyderabad growth corridors.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "H.No. 4-91, Above Parampara Mithai",
          addressLocality: "Chandanagar",
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
      },
      {
        "@type": "WebPage",
        "@id": "https://www.suprajainfracon.com/#webpage",
        url: "https://www.suprajainfracon.com/",
        name: `${focusKeyword} | Sri Supraja Infracon`,
        description:
          "Explore DTCP & RERA Approved Open Plots Near Hyderabad, premium plotted developments, resort plots and villa plots across Hyderabad growth corridors.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.suprajainfracon.com/#website",
          name: "Sri Supraja Infracon",
          url: "https://www.suprajainfracon.com/",
        },
        about: {
          "@id": "https://www.suprajainfracon.com/#realestateagent",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.suprajainfracon.com/og-image.jpg",
          caption: `${focusKeyword} by Sri Supraja Infracon`,
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