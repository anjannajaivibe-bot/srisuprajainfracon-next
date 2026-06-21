import type { Metadata } from "next";
import "./globals.css";

import SiteShell from "@/components/layout/SiteShell";

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
  metadataBase: new URL("https://www.srisuprajainfracon.com"),

  verification: {
    google: "J7iY42U0p5XNyLeDxGzG6jWswMXJWxoffFN1x3WILAU",
  },

  title: {
    default: "Sri Supraja Infracon | Real Estate Projects Near Hyderabad",
    template: "%s | Sri Supraja Infracon",
  },

  description:
    "Sri Supraja Infracon develops residential, plotted, villa and resort projects across Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.",

  alternates: {
    canonical: "https://www.srisuprajainfracon.com/",
  },

  openGraph: {
    title: "Sri Supraja Infracon | Real Estate Projects Near Hyderabad",
    description:
      "Explore Sri Supraja Infracon projects across Hyderabad growth corridors, including plotted, residential, villa and resort projects.",
    url: "https://www.srisuprajainfracon.com/",
    siteName: "Sri Supraja Infracon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon real estate projects near Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sri Supraja Infracon | Real Estate Projects Near Hyderabad",
    description:
      "Explore residential, plotted, villa and resort projects by Sri Supraja Infracon.",
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
    url: "https://www.srisuprajainfracon.com",
    logo: "https://www.srisuprajainfracon.com/logo.png",
    image: "https://www.srisuprajainfracon.com/og-image.jpg",
    description:
      "Sri Supraja Infracon develops residential, plotted, villa and resort-inspired real estate projects across Hyderabad growth corridors.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 90529 96161",
      contactType: "customer support",
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

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}