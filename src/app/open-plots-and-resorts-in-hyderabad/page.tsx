import type { Metadata } from "next";
import OpenPlotsResortsClient from "./OpenPlotsResortsClient";

export const metadata: Metadata = {
  title:
    "Open Plots and Resort Plots in Hyderabad | DTCP & RERA Approved Projects",

  description:
    "Explore DTCP and RERA approved open plots and resort plots near Hyderabad growth corridors including Kamkole, Sangareddy, Mominpet and Woxsen University surroundings.",

  keywords: [
    "open plots and resorts in Hyderabad",
    "resort plots near Hyderabad",
    "DTCP approved open plots",
    "RERA approved plots near Hyderabad",
    "villa plots in Hyderabad",
    "plots near Woxsen University",
    "gated community plots",
  ],

  alternates: {
    canonical:
      "https://www.suprajainfracon.com/open-plots-and-resorts-in-hyderabad/",
  },

  openGraph: {
    title:
      "Open Plots and Resort Plots in Hyderabad | Sri Supraja Infracon",

    description:
      "Explore premium plotted developments and resort plot communities near Hyderabad growth corridors.",

    url:
      "https://www.suprajainfracon.com/open-plots-and-resorts-in-hyderabad/",

    siteName: "Sri Supraja Infracon",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Open plots and resort plots near Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Open Plots and Resort Plots in Hyderabad | Sri Supraja Infracon",

    description:
      "Explore DTCP and RERA approved open plots and resort plots near Hyderabad.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <OpenPlotsResortsClient />;
}

