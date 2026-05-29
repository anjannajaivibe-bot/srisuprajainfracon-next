import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title:
    "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Projects",
  description:
    "Explore DTCP and RERA approved open plots, resort plots and villa plots near Hyderabad across Kamkole, Mominpet, Sangareddy and Indrakaran by Sri Supraja Infracon.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/projects/",
  },
  openGraph: {
    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Projects",
    description:
      "Compare premium plotted developments, resort plots and villa plot projects near Hyderabad growth corridors by Sri Supraja Infracon.",
    url: "https://www.suprajainfracon.com/projects/",
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DTCP & RERA Approved Open Plots Near Hyderabad | Sri Supraja Projects",
    description:
      "Explore Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows near Hyderabad growth corridors.",
  },
};

export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DTCP & RERA Approved Open Plots Near Hyderabad",
    url: "https://www.suprajainfracon.com/projects/",
    description:
      "Sri Supraja Infracon project listing page featuring approved open plots, resort plots and villa plots near Hyderabad growth corridors.",
    publisher: {
      "@type": "RealEstateAgent",
      name: "Sri Supraja Infracon",
      url: "https://www.suprajainfracon.com/",
    },
    mainEntity: [
      {
        "@type": "Product",
        name: "Supraja IRIS Resort Plots",
        url: "https://www.suprajainfracon.com/projects/supraja-iris-resort-plots",
      },
      {
        "@type": "Product",
        name: "Bridge County",
        url: "https://www.suprajainfracon.com/projects/bridge-county",
      },
      {
        "@type": "Product",
        name: "Sindhu Sarovar",
        url: "https://www.suprajainfracon.com/projects/sindhu-sarovar",
      },
      {
        "@type": "Product",
        name: "Subhash Meadows",
        url: "https://www.suprajainfracon.com/projects/Subhash-meadows",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectsClient />
    </>
  );
}