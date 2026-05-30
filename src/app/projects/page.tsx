import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

const focusKeyword = "DTCP & RERA Approved Open Plots Near Hyderabad";

export const metadata: Metadata = {
  title: `${focusKeyword} | Sri Supraja Projects`,
  description:
    "Explore DTCP & RERA Approved Open Plots Near Hyderabad, resort plots, villa plots and premium plotted developments across Kamkole, Mominpet, Sangareddy and Indrakaran by Sri Supraja Infracon.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/projects/",
  },
  openGraph: {
    title: `${focusKeyword} | Sri Supraja Projects`,
    description:
      "Compare premium plotted developments, resort plots, villa plots and gated community plots near Hyderabad growth corridors by Sri Supraja Infracon.",
    url: "https://www.suprajainfracon.com/projects/",
    siteName: "Sri Supraja Infracon",
    images: [
      {
        url: "https://www.suprajainfracon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${focusKeyword} by Sri Supraja Infracon`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${focusKeyword} | Sri Supraja Projects`,
    description:
      "Explore Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows near Hyderabad growth corridors.",
    images: ["https://www.suprajainfracon.com/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.suprajainfracon.com/projects/#collectionpage",
        name: focusKeyword,
        url: "https://www.suprajainfracon.com/projects/",
        description:
          "Sri Supraja Infracon project listing page featuring DTCP and RERA approved open plots, resort plots, villa plots and premium plotted developments near Hyderabad growth corridors.",
        publisher: {
          "@type": "RealEstateAgent",
          name: "Sri Supraja Infracon",
          url: "https://www.suprajainfracon.com/",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.suprajainfracon.com/og-image.jpg",
          caption: `${focusKeyword} by Sri Supraja Infracon`,
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
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.suprajainfracon.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://www.suprajainfracon.com/projects/",
          },
        ],
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