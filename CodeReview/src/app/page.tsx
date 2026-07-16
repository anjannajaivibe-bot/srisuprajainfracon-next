import type { Metadata } from "next";
import HomeClient from "./home-client";

const pageTitle =
  "Sri Supraja Infracon | Real Estate Projects Near Hyderabad";

const pageDescription =
  "Explore Sri Supraja Infracon projects across Hyderabad growth corridors, including plotted, villa, residential and resort projects in Kamkole, Sangareddy, Mominpet and Indrakaran.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "https://www.srisuprajainfracon.com/",
  },

  openGraph: {
    title: pageTitle,

    description:
      "Discover Sri Supraja Infracon projects across key Hyderabad growth corridors, including Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows.",

    url: "https://www.srisuprajainfracon.com/",

    siteName: "Sri Supraja Infracon",

    images: [
      {
        url: "https://www.srisuprajainfracon.com/og/home-og.webp",
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon real estate projects near Hyderabad",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: pageTitle,

    description:
      "Explore plotted, villa, residential and resort projects by Sri Supraja Infracon.",

    images: ["https://www.srisuprajainfracon.com/og/home-og.webp"],
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "RealEstateAgent",

        "@id": "https://www.srisuprajainfracon.com/#realestateagent",

        name: "Sri Supraja Infracon",

        url: "https://www.srisuprajainfracon.com/",

        image: "https://www.srisuprajainfracon.com/og/home-og.webp",

        logo: "https://www.srisuprajainfracon.com/logo.png",

        email: "info@srisuprajainfracon.com",

        telephone: "+91 90529 96161",

        description:
          "Sri Supraja Infracon develops residential, plotted, villa and resort-inspired real estate projects across Hyderabad growth corridors.",

        address: {
          "@type": "PostalAddress",

          streetAddress: "D. No. 4-91, Above Parampara Sweets, Chandanagar",

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

        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/",
          "https://www.youtube.com/",
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://www.srisuprajainfracon.com/#website",

        url: "https://www.srisuprajainfracon.com/",

        name: "Sri Supraja Infracon",

        publisher: {
          "@id": "https://www.srisuprajainfracon.com/#realestateagent",
        },
      },

      {
        "@type": "WebPage",

        "@id": "https://www.srisuprajainfracon.com/#webpage",

        url: "https://www.srisuprajainfracon.com/",

        name: pageTitle,

        description: pageDescription,

        isPartOf: {
          "@id": "https://www.srisuprajainfracon.com/#website",
        },

        about: {
          "@id": "https://www.srisuprajainfracon.com/#realestateagent",
        },

        primaryImageOfPage: {
          "@type": "ImageObject",

          url: "https://www.srisuprajainfracon.com/og/home-og.webp",

          width: 1200,

          height: 630,

          caption:
            "Sri Supraja Infracon real estate projects near Hyderabad",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <HomeClient />
    </>
  );
}