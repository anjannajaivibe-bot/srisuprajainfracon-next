import type { Metadata } from "next";
import "./globals.css";

import FloatingCTA from "@/components/layout/FloatingCTA";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon approved open plots near Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sri Supraja Infracon | DTCP & RERA Approved Open Plots Near Hyderabad",
    description:
      "Explore premium open plots and plotted communities near Hyderabad.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    image: "https://www.suprajainfracon.com/og-image.jpg",
    description:
      "Sri Supraja Infracon develops DTCP and RERA approved open plot communities, villa plots and resort plots near Hyderabad growth corridors.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 90529 96161",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
    areaServed: [
      "Hyderabad",
      "Kamkole",
      "Sangareddy",
      "Mominpet",
      "Indrakaran",
      "Telangana",
    ],
  };

  return (
    <html lang="en-IN">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
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