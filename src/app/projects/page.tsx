import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

const SITE_URL = "https://www.srisuprajainfracon.com";
const pageTitle = "Sri Supraja Infracon Projects | Hyderabad Real Estate";
const pageDescription =
  "Explore Sri Supraja Infracon projects across Kamkole, Mominpet, Sangareddy and Indrakaran, including Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/projects/`,
  },
  openGraph: {
    title: pageTitle,
    description:
      "View project details, locations, approvals and site visit information for Sri Supraja Infracon projects near Hyderabad growth corridors.",
    url: `${SITE_URL}/projects/`,
    siteName: "Sri Supraja Infracon",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
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
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects/#collectionpage`,
        name: "Sri Supraja Infracon Projects",
        url: `${SITE_URL}/projects/`,
        description: pageDescription,
        publisher: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-image.jpg`,
          caption: "Sri Supraja Infracon projects near Hyderabad",
        },
        about: [
          "Real estate development near Hyderabad",
          "Plotted development in Telangana",
          "Resort-inspired plotted development in Kamkole",
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
                name: "Supraja IRIS",
                url: `${SITE_URL}/projects/supraja-iris-resort-plots/`,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Place",
                name: "Bridge County",
                url: `${SITE_URL}/projects/bridge-county/`,
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Place",
                name: "Sindhu Sarovar",
                url: `${SITE_URL}/projects/sindhu-sarovar/`,
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Place",
                name: "Subhash Meadows",
                url: `${SITE_URL}/projects/subhash-meadows/`,
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
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/projects/`,
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
