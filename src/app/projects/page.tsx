import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Open Plot Projects Near Hyderabad | Sri Supraja Infracon",
  description:
    "Explore Sri Supraja Infracon open plot projects including Supraja IRIS, Bridge County, Sindhu Sarovar and Subash Meadows across Hyderabad growth corridors.",
  alternates: {
    canonical: "https://www.suprajainfracon.com/projects/",
  },
  openGraph: {
    title: "Open Plot Projects Near Hyderabad | Sri Supraja Infracon",
    description:
      "Compare DTCP and RERA approved plotted communities, resort plots and villa plot projects near Hyderabad growth corridors.",
    url: "https://www.suprajainfracon.com/projects/",
    siteName: "Sri Supraja Infracon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Plot Projects Near Hyderabad | Sri Supraja Infracon",
    description:
      "Explore Supraja IRIS, Bridge County, Sindhu Sarovar and Subash Meadows by Sri Supraja Infracon.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}