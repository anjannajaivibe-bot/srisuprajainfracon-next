import type { Metadata } from "next";
import HomeClient from "./home-client";

const focusKeyword = "DTCP & RERA Approved Open Plots Near Hyderabad";

export const metadata: Metadata = {
  title:
    "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

  description:
    "Explore DTCP & RERA Approved Open Plots Near Hyderabad, villa plots, resort plots and premium plotted developments across Kamkole, Sangareddy, Mominpet and Indrakaran by Sri Supraja Infracon.",

  alternates: {
    canonical: "https://www.suprajainfracon.com/",
  },

  openGraph: {
    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

    description:
      "Premium plotted developments, resort plots and villa plots near Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.",

    url: "https://www.suprajainfracon.com/",

    siteName: "Sri Supraja Infracon",

    images: [
      {
        url: "https://www.suprajainfracon.com/og/home-og.webp",
        width: 1200,
        height: 630,
        alt: "DTCP & RERA Approved Open Plots Near Hyderabad",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

    description:
      "Explore approved open plot projects near Hyderabad growth corridors by Sri Supraja Infracon.",

    images: [
      "https://www.suprajainfracon.com/og/home-og.webp",
    ],
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

        image: "https://www.suprajainfracon.com/og/home-og.webp",

        logo: "https://www.suprajainfracon.com/logo.png",

        email: "support@srisuprajainfracon.com",

        telephone: "+91-9640753929",

        description:
          "Sri Supraja Infracon develops DTCP & RERA approved open plots near Hyderabad including villa plots, resort plots and premium plotted developments across strategic growth corridors.",

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

        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/",
          "https://www.youtube.com/",
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://www.suprajainfracon.com/#website",

        url: "https://www.suprajainfracon.com/",

        name: "Sri Supraja Infracon",

        publisher: {
          "@id": "https://www.suprajainfracon.com/#realestateagent",
        },
      },

      {
        "@type": "WebPage",

        "@id": "https://www.suprajainfracon.com/#webpage",

        url: "https://www.suprajainfracon.com/",

        name:
          "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

        description:
          "Explore DTCP & RERA Approved Open Plots Near Hyderabad, villa plots, resort plots and premium plotted developments across Hyderabad growth corridors.",

        isPartOf: {
          "@id": "https://www.suprajainfracon.com/#website",
        },

        about: {
          "@id": "https://www.suprajainfracon.com/#realestateagent",
        },

        primaryImageOfPage: {
          "@type": "ImageObject",

          url: "https://www.suprajainfracon.com/og/home-og.webp",

          width: 1200,

          height: 630,

          caption:
            "DTCP & RERA Approved Open Plots Near Hyderabad by Sri Supraja Infracon",
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