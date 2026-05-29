import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/pages/ProjectDetail";

type ProjectSlug =
  | "supraja-iris-resort-plots"
  | "bridge-county"
  | "sindhu-sarovar"
  | "Subhash-meadows";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://www.suprajainfracon.com";

const projectSeo: Record<
  ProjectSlug,
  {
    title: string;
    description: string;
    h1: string;
    location: string;
    keywords: string[];
  }
> = {
  "supraja-iris-resort-plots": {
    title:
      "Supraja IRIS Resort Plots in Kamkole | DTCP & RERA Approved Open Plots",
    description:
      "Explore Supraja IRIS resort plots in Kamkole near Woxsen University, NH-65, RRR influence zone and NIMZ Zaheerabad growth corridor by Sri Supraja Infracon.",
    h1: "Supraja IRIS Resort Plots in Kamkole",
    location: "Kamkole, Telangana",
    keywords: [
      "resort plots in Kamkole",
      "DTCP approved plots in Kamkole",
      "RERA approved plots near Woxsen University",
      "open plots near NH65",
    ],
  },

  "bridge-county": {
    title: "Bridge County Kamkole | DTCP Approved Luxury Plots Near Hyderabad",
    description:
      "Explore Bridge County, DTCP approved luxury plots in Kamkole by Sri Supraja Infracon with strategic access to Hyderabad growth corridors.",
    h1: "Bridge County DTCP Approved Luxury Plots in Kamkole",
    location: "Kamkole, Telangana",
    keywords: [
      "Bridge County Kamkole",
      "DTCP approved plots in Kamkole",
      "luxury plots near Hyderabad",
      "open plots in Sangareddy corridor",
    ],
  },

  "sindhu-sarovar": {
    title:
      "Sindhu Sarovar Mominpet | DTCP & RERA Approved Plots Near Hyderabad",
    description:
      "Explore Sindhu Sarovar, a plotted development by Sri Supraja Infracon in Mominpet with DTCP and RERA approval focus near Hyderabad growth corridors.",
    h1: "Sindhu Sarovar Plots in Mominpet",
    location: "Mominpet, Telangana",
    keywords: [
      "Sindhu Sarovar Mominpet",
      "plots in Mominpet",
      "DTCP approved plots near Hyderabad",
      "RERA approved plotted community",
    ],
  },

  "Subhash-meadows": {
    title:
      "Subhash Meadows Indrakaran | Open Plots Near ORR & IIT Hyderabad",
    description:
      "Explore Subhash Meadows open plots in Indrakaran near ORR, IIT Hyderabad, Patancheru, BHEL and Sangareddy growth locations.",
    h1: "Subhash Meadows Open Plots in Indrakaran",
    location: "Indrakaran, Telangana",
    keywords: [
      "Subhash Meadows Indrakaran",
      "open plots near ORR",
      "plots near IIT Hyderabad",
      "plots near Patancheru",
    ],
  },
};

function isValidSlug(slug: string): slug is ProjectSlug {
  return slug in projectSeo;
}

export async function generateStaticParams() {
  return Object.keys(projectSeo).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    return {
      title: "Project Not Found | Sri Supraja Infracon",
    };
  }

  const project = projectSeo[slug];
  const canonical = `${SITE_URL}/projects/${slug}/`;

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      siteName: "Sri Supraja Infracon",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const project = projectSeo[slug];
  const canonical = `${SITE_URL}/projects/${slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/projects/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.h1,
        item: canonical,
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.h1,
    description: project.description,
    brand: {
      "@type": "Organization",
      name: "Sri Supraja Infracon",
      url: SITE_URL,
    },
    category: "Real Estate Plotted Development",
    areaServed: project.location,
    url: canonical,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      <ProjectDetail slug={slug} />
    </>
  );
}