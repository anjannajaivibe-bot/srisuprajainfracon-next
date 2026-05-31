import type { Metadata } from "next";
import HomeClient from "./home-client";

const focusKeyword = "DTCP & RERA Approved Open Plots Near Hyderabad";

export const metadata: Metadata = {
  title:
    "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

  description:
    "Explore DTCP & RERA Approved Open Plots Near Hyderabad, villa plots, resort plots and premium plotted developments across Kamkole, Sangareddy, Mominpet and Indrakaran by Sri Supraja Infracon.",

  alternates: {
    canonical: "https://srisuprajainfracon-next.vercel.app/",
  },

  openGraph: {
    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

    description:
      "Premium plotted developments, resort plots and villa plots near Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.",

    url: "https://srisuprajainfracon-next.vercel.app/",

    siteName: "Sri Supraja Infracon",

    images: [
      {
        url: "https://srisuprajainfracon-next.vercel.app/og/home-og.webp",
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
      "https://srisuprajainfracon-next.vercel.app/og/home-og.webp",
    ],
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "RealEstateAgent",

        "@id": "https://srisuprajainfracon-next.vercel.app/#realestateagent",

        name: "Sri Supraja Infracon",

        url: "https://srisuprajainfracon-next.vercel.app/",

        image: "https://srisuprajainfracon-next.vercel.app/og/home-og.webp",

        logo: "https://srisuprajainfracon-next.vercel.app/logo.png",

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

        "@id": "https://srisuprajainfracon-next.vercel.app/#website",

        url: "https://srisuprajainfracon-next.vercel.app/",

        name: "Sri Supraja Infracon",

        publisher: {
          "@id": "https://srisuprajainfracon-next.vercel.app/#realestateagent",
        },
      },

      {
        "@type": "WebPage",

        "@id": "https://srisuprajainfracon-next.vercel.app/#webpage",

        url: "https://srisuprajainfracon-next.vercel.app/",

        name:
          "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",

        description:
          "Explore DTCP & RERA Approved Open Plots Near Hyderabad, villa plots, resort plots and premium plotted developments across Hyderabad growth corridors.",

        isPartOf: {
          "@id": "https://srisuprajainfracon-next.vercel.app/#website",
        },

        about: {
          "@id": "https://srisuprajainfracon-next.vercel.app/#realestateagent",
        },

        primaryImageOfPage: {
          "@type": "ImageObject",

          url: "https://srisuprajainfracon-next.vercel.app/og/home-og.webp",

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
