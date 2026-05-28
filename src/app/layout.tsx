import type { Metadata } from "next";
import "./globals.css";

import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suprajainfracon.com"),

  title: {
    default:
      "Sri Supraja Infracon | DTCP & RERA Approved Open Plots Near Hyderabad",
    template: "%s | Sri Supraja Infracon",
  },

  description:
    "Explore DTCP and RERA approved open plots, villa plots and resort plots near Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.",

  keywords: [
    "DTCP approved open plots in Hyderabad",
    "RERA approved plots near Hyderabad",
    "villa plots in Hyderabad",
    "resort plots near Hyderabad",
    "open plots in Kamkole",
    "plots near Woxsen University",
    "plots near NH65",
    "gated community plots in Hyderabad",
  ],

  alternates: {
    canonical: "https://www.suprajainfracon.com/",
  },

  openGraph: {
    title:
      "Sri Supraja Infracon | DTCP & RERA Approved Open Plots Near Hyderabad",
    description:
      "Premium plotted developments and resort plots near Hyderabad growth corridors.",
    url: "https://www.suprajainfracon.com/",
    siteName: "Sri Supraja Infracon",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sri Supraja Infracon | DTCP & RERA Approved Open Plots Near Hyderabad",
    description:
      "Explore premium open plots and plotted communities near Hyderabad.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sri Supraja Infracon",
    url: "https://www.suprajainfracon.com",
    logo: "https://www.suprajainfracon.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 96407 53929",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}

        <FloatingCTA />
      </body>
    </html>
  );
}