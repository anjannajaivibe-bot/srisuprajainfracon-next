import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact Sri Supraja Infracon | Project Information & Site Visits",
  description:
    "Connect with Sri Supraja Infracon for project information, site visits, availability details, and customer assistance across our residential and plotted projects.",
  alternates: {
    canonical: "https://www.srisuprajainfracon.com/contact-us//",
  },
  openGraph: {
    title: "Contact Sri Supraja Infracon | Project Information & Site Visits",
    description:
      "Connect with Sri Supraja Infracon for project details, site visits, availability information, and customer assistance.",
    url: "https://www.srisuprajainfracon.com/contact-us//",
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sri Supraja Infracon | Project Information & Site Visits",
    description:
      "Request details for Supraja IRIS, Bridge County, Sindhu Sarovar, and Subhash Meadows.",
  },
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Sri Supraja Infracon",
    url: "https://www.srisuprajainfracon.com",
    telephone: "+91 90529 96161",
    email: "info@srisuprajainfracon.com",
    areaServed: [
      "Hyderabad",
      "Kamkole",
      "Sangareddy",
      "Mominpet",
      "Indrakaran",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "D. No. 4-91, Above Parampara Sweets, Chandanagar",
      addressLocality: "Hyderabad",
      postalCode: "500050",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <ContactPageClient />
    </>
  );
}