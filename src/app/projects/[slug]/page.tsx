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
    focusKeyword: string;
    title: string;
    description: string;
    ogImage: string;
    location: string;
    projectName: string;
    approval: string;
    keywords: string[];
    faqs: {
      question: string;
      answer: string;
    }[];
  }
> = {
  "supraja-iris-resort-plots": {
    focusKeyword: "DTCP & RERA Approved Resort Plots Near Hyderabad",

    title:
      "DTCP & RERA Approved Resort Plots Near Hyderabad | Supraja IRIS",

    description:
      "Explore DTCP & RERA Approved Resort Plots Near Hyderabad at Supraja IRIS Kamkole with Lemon Tree Resort under construction, planned water villas and NH-65 growth corridor access.",

    ogImage: `${SITE_URL}/og/supraja-iris-og.webp`,

    location: "Kamkole, Telangana",

    projectName: "Supraja IRIS",

    approval: "DTCP & RERA Approved",

    keywords: [
      "premium resort plots near Hyderabad",
      "Kamkole open plots",
      "RERA approved plots near Woxsen University",
      "villa plots near NH-65",
      "gated community plots near Hyderabad",
      "resort-style plotted development",
    ],

    faqs: [
      {
        question:
          "Is Supraja IRIS a DTCP & RERA approved resort plot project?",

        answer:
          "Yes. Supraja IRIS is positioned as a DTCP & RERA approved resort-style plotted development at Kamkole near Hyderabad.",
      },

      {
        question: "Where is Supraja IRIS located?",

        answer:
          "Supraja IRIS is located at Kamkole near Hyderabad with access to NH-65, Woxsen University and the NIMZ Zaheerabad growth corridor.",
      },

      {
        question: "Is Lemon Tree Resort operational at Supraja IRIS?",

        answer:
          "Lemon Tree Resort is under construction within the Supraja IRIS ecosystem. Planned attractions should be treated as upcoming development concepts.",
      },
    ],
  },

  "bridge-county": {
    focusKeyword: "DTCP & RERA Approved Luxury Plots at Kamkole",

    title:
      "DTCP & RERA Approved Luxury Plots at Kamkole | Bridge County",

    description:
      "Explore DTCP & RERA Approved Luxury Plots at Kamkole in Bridge County by Sri Supraja Infracon near Woxsen University, NH-65 and Hyderabad growth corridors.",

    ogImage: `${SITE_URL}/og/bridge-county-og.webp`,

    location: "Kamkole, Telangana",

    projectName: "Bridge County",

    approval: "DTCP & RERA Approved",

    keywords: [
      "luxury open plots near Woxsen University",
      "Kamkole luxury plots",
      "premium plotted development near Hyderabad",
      "RERA approved open plots",
      "DTCP approved plots at Kamkole",
      "plots near NH-65",
    ],

    faqs: [
      {
        question: "Is Bridge County DTCP approved?",

        answer:
          "Yes. Bridge County is a DTCP approved luxury plotted development at Kamkole.",
      },

      {
        question: "Is Bridge County RERA approved?",

        answer:
          "Yes. Bridge County is positioned with RERA registration details for buyer confidence.",
      },

      {
        question: "Where is Bridge County located?",

        answer:
          "Bridge County is located at Kamkole near Woxsen University with connectivity toward NH-65 and Hyderabad growth corridors.",
      },
    ],
  },

  "sindhu-sarovar": {
    focusKeyword: "DTCP & RERA Approved Open Plots in Mominpet",

    title:
      "DTCP & RERA Approved Open Plots in Mominpet | Sindhu Sarovar",

    description:
      "Explore DTCP & RERA Approved Open Plots in Mominpet at Sindhu Sarovar by Sri Supraja Infracon with gated community infrastructure and plotted development planning.",

    ogImage: `${SITE_URL}/og/sindhu-sarovar-og.webp`,

    location: "Mominpet, Telangana",

    projectName: "Sindhu Sarovar",

    approval: "DTCP & RERA Approved",

    keywords: [
      "Mominpet open plots",
      "premium plots near Hyderabad",
      "RERA approved plots in Mominpet",
      "gated community plots near Hyderabad",
      "DTCP approved plotted development",
      "open plots near Mominpet",
    ],

    faqs: [
      {
        question: "Is Sindhu Sarovar DTCP approved?",

        answer:
          "Yes. Sindhu Sarovar is a DTCP approved plotted development in Mominpet.",
      },

      {
        question: "Is Sindhu Sarovar RERA approved?",

        answer:
          "Yes. Sindhu Sarovar is positioned as a RERA approved plotted development for buyers evaluating open plots in Mominpet.",
      },

      {
        question: "Where is Sindhu Sarovar located?",

        answer:
          "Sindhu Sarovar is located in Mominpet, a developing growth corridor near Hyderabad.",
      },
    ],
  },

  "Subhash-meadows": {
    focusKeyword: "Affordable Open Plots Near ORR Hyderabad",

    title:
      "Affordable Open Plots Near ORR Hyderabad | Subhash Meadows",

    description:
      "Explore Affordable Open Plots Near ORR Hyderabad at Subhash Meadows Indrakaran with planned roads, Vastu layout, drainage, avenue plantation and access to IIT Hyderabad, BHEL and Sangareddy.",

    ogImage: `${SITE_URL}/og/subhash-meadows-og.webp`,

    location: "Indrakaran, Telangana",

    projectName: "Subhash Meadows",

    approval: "Planned Open Plot Development",

    keywords: [
      "Indrakaran open plots",
      "budget-friendly plots near Hyderabad",
      "plots near IIT Hyderabad",
      "open plots near BHEL",
      "plots near Sangareddy",
      "affordable plotted development",
    ],

    faqs: [
      {
        question: "Where is Subhash Meadows located?",

        answer:
          "Subhash Meadows is located at Indrakaran with connectivity to ORR, IIT Hyderabad, ICRISAT, BHEL and Sangareddy.",
      },

      {
        question: "Is Subhash Meadows suitable for affordable plot buyers?",

        answer:
          "Yes. Subhash Meadows is positioned for buyers looking at affordable open plots near ORR Hyderabad and nearby growth locations.",
      },

      {
        question: "What infrastructure is planned at Subhash Meadows?",

        answer:
          "The project includes planned black top roads, Vastu layout, underground drainage, avenue plantation, parks, gated entrance and security room provision.",
      },
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

    keywords: [project.focusKeyword, ...project.keywords],

    alternates: {
      canonical,
    },

    openGraph: {
      title: project.title,

      description: project.description,

      url: canonical,

      siteName: "Sri Supraja Infracon",

      locale: "en_IN",

      images: [
        {
          url: project.ogImage,

          width: 1200,

          height: 630,

          alt: `${project.focusKeyword} - ${project.projectName}`,
        },
      ],

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: project.title,

      description: project.description,

      images: [project.ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const project = projectSeo[slug];

  const canonical = `${SITE_URL}/projects/${slug}/`;

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
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

            name: project.projectName,

            item: canonical,
          },
        ],
      },

      {
        "@type": "Organization",

        "@id": `${SITE_URL}/#organization`,

        name: "Sri Supraja Infracon",

        url: SITE_URL,

        logo: `${SITE_URL}/logo.png`,
      },

      {
        "@type": "LocalBusiness",

        "@id": `${canonical}#localbusiness`,

        name: project.projectName,

        image: project.ogImage,

        url: canonical,

        address: {
          "@type": "PostalAddress",

          addressLocality: project.location,

          addressCountry: "IN",
        },

        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
      },

      {
        "@type": "WebPage",

        "@id": `${canonical}#webpage`,

        url: canonical,

        name: project.title,

        description: project.description,

        primaryImageOfPage: {
          "@type": "ImageObject",

          url: project.ogImage,

          width: 1200,

          height: 630,

          caption: `${project.focusKeyword} - ${project.projectName}`,
        },
      },

      {
        "@type": "Product",

        "@id": `${canonical}#project`,

        name: project.projectName,

        description: project.description,

        image: project.ogImage,

        brand: {
          "@id": `${SITE_URL}/#organization`,
        },

        category: "Real Estate Plotted Development",

        areaServed: project.location,

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name: "Approval Type",

            value: project.approval,
          },

          {
            "@type": "PropertyValue",

            name: "Focus Keyword",

            value: project.focusKeyword,
          },
        ],

        url: canonical,
      },

      {
        "@type": "FAQPage",

        mainEntity: project.faqs.map((faq) => ({
          "@type": "Question",

          name: faq.question,

          acceptedAnswer: {
            "@type": "Answer",

            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <ProjectDetail slug={slug} />
    </>
  );
}