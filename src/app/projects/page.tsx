import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

const pageTitle = "Sri Supraja Infracon Projects | Hyderabad Real Estate";
const pageDescription =
  "Explore Sri Supraja Infracon projects across Kamkole, Mominpet, Sangareddy and Indrakaran, including Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.srisuprajainfracon.com/projects/",
  },
  openGraph: {
    title: pageTitle,
    description:
      "View project details, locations, brochures and site visit information for Sri Supraja Infracon projects near Hyderabad growth corridors.",
    url: "https://www.srisuprajainfracon.com/projects/",
    siteName: "Sri Supraja Infracon",
    images: [
      {
        url: "https://www.srisuprajainfracon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon projects near Hyderabad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Explore Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows by Sri Supraja Infracon.",
    images: ["https://www.srisuprajainfracon.com/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.srisuprajainfracon.com/projects/#collectionpage",
        name: "Sri Supraja Infracon Projects",
        url: "https://www.srisuprajainfracon.com/projects/",
        description: pageDescription,
        publisher: {
          "@type": "RealEstateAgent",
          name: "Sri Supraja Infracon",
          url: "https://www.srisuprajainfracon.com/",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.srisuprajainfracon.com/og-image.jpg",
          caption: "Sri Supraja Infracon projects near Hyderabad",
        },
        about: [
          "Real estate projects near Hyderabad",
          "Plotted projects in Telangana",
          "Resort-inspired plots in Kamkole",
          "Residential projects near Hyderabad growth corridors",
        ],
        mainEntity: {
          "@type": "ItemList",
          name: "Sri Supraja Infracon Projects",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Place",
                name: "Supraja IRIS Resort Project",
                url: "https://www.srisuprajainfracon.com/projects/supraja-iris-resort-plots/",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Place",
                name: "Bridge County",
                url: "https://www.srisuprajainfracon.com/projects/bridge-county/",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Place",
                name: "Sindhu Sarovar",
                url: "https://www.srisuprajainfracon.com/projects/sindhu-sarovar/",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Place",
                name: "Subhash Meadows",
                url: "https://www.srisuprajainfracon.com/projects/subhash-meadows/",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.srisuprajainfracon.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://www.srisuprajainfracon.com/projects/",
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