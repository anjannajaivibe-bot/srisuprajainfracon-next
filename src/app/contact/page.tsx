import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title:
    "Contact Sri Supraja Infracon | Open Plot Enquiry & Site Visit",
  description:
    "Contact Sri Supraja Infracon for DTCP and RERA approved open plots, villa plots and resort plots near Hyderabad. Schedule site visits and project enquiries.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/contact/",
  },
  openGraph: {
    title:
      "Contact Sri Supraja Infracon | Open Plot Enquiry & Site Visit",
    description:
      "Connect with Sri Supraja Infracon for project details, site visits, availability and plotted community enquiries near Hyderabad.",
    url: "https://www.suprajainfracon.com/contact/",
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Sri Supraja Infracon | Open Plot Enquiry & Site Visit",
    description:
      "Enquire about Supraja IRIS, Bridge County, Sindhu Sarovar and Subash Meadows.",
  },
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Sri Supraja Infracon",
    url: "https://www.suprajainfracon.com",
    telephone: "+91 96407 53929",
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
      addressLocality: "Hyderabad",
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