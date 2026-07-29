import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

import SiteShell from "@/components/layout/SiteShell";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  preload: true,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFM9PPT3"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <SiteShell>{children}</SiteShell>

        {/* Start third-party tracking after interaction, with a delayed fallback. */}
        <Script id="deferred-tracking" strategy="lazyOnload">
          {`
            (function(w,d){
              var started=false;
              var events=['pointerdown','keydown','touchstart','scroll'];

              function loadScript(src,id,onload){
                if(d.getElementById(id)){
                  if(onload) onload();
                  return;
                }

                var script=d.createElement('script');
                script.id=id;
                script.async=true;
                script.src=src;
                if(onload) script.onload=onload;
                d.head.appendChild(script);
              }

              function startTracking(){
                if(started) return;
                started=true;

                events.forEach(function(eventName){
                  w.removeEventListener(eventName,startTracking);
                });

                w.dataLayer=w.dataLayer||[];
                w.dataLayer.push({
                  'gtm.start':new Date().getTime(),
                  event:'gtm.js'
                });

                loadScript(
                  'https://www.googletagmanager.com/gtm.js?id=GTM-PFM9PPT3',
                  'gtm-library'
                );

                loadScript(
                  'https://www.googletagmanager.com/gtag/js?id=AW-17957114954',
                  'google-ads-library',
                  function(){
                    function gtag(){
                      w.dataLayer.push(arguments);
                    }

                    gtag('js',new Date());
                    gtag('config','AW-17957114954');
                  }
                );
              }

              events.forEach(function(eventName){
                w.addEventListener(eventName,startTracking,{
                  once:true,
                  passive:true
                });
              });

              w.setTimeout(startTracking,10000);
            })(window,document);
          `}
        </Script>
      </body>
    </html>
  );
}
