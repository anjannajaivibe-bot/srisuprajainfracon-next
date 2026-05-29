import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title:
    "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",
  description:
    "Explore DTCP and RERA approved open plots, villa plots and resort plots near Hyderabad across Kamkole, Sangareddy, Mominpet and Indrakaran by Sri Supraja Infracon.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/",
  },
  openGraph: {
    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",
    description:
      "Premium open plots, resort plots and plotted communities near Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.",
    url: "https://www.suprajainfracon.com/",
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Infracon",
    description:
      "Explore approved open plot projects near Hyderabad growth corridors by Sri Supraja Infracon.",
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Sri Supraja Infracon",
    url: "https://www.suprajainfracon.com/",
    email: "support@srisuprajainfracon.com",
    telephone: "+91-9640753929",
    description:
      "Sri Supraja Infracon develops DTCP and RERA approved open plot communities, villa plots and resort plots near Hyderabad growth corridors.",
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