import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title:
    "About Sri Supraja Infracon | DTCP & RERA Approved Open Plot Developers",
  description:
    "Learn about Sri Supraja Infracon, a trusted real estate developer focused on DTCP and RERA approved open plots, resort plots and plotted communities near Hyderabad growth corridors.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/about/",
  },
  openGraph: {
    title: "About Sri Supraja Infracon | Open Plot Developers Near Hyderabad",
    description:
      "Sri Supraja Infracon develops approved open plot communities across Hyderabad growth corridors including Kamkole, Mominpet, Sangareddy and Indrakaran.",
    url: "https://www.suprajainfracon.com/about/",
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Sri Supraja Infracon | DTCP & RERA Approved Open Plot Developers",
    description:
      "Explore Sri Supraja Infracon projects near Hyderabad growth corridors including Kamkole, Sangareddy and Mominpet.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
