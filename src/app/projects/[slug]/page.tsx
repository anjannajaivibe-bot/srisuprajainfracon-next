import type { Metadata } from "next";
import { siteMeta } from "@/seo/meta";
import { notFound } from "next/navigation";
import ProjectDetail from "@/pages/ProjectDetail";

type ProjectSlug =
  | "supraja-iris-resort-plots"
  | "bridge-county"
  | "sindhu-sarovar"
  | "subhash-meadows";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type ApprovalDetail = {
  phase?: string;
  dtcpNumbers?: string[];
  reraNumbers?: string[];
  surveyNumbers?: string[];
  reraIssueDate?: string;
  reraValidFrom?: string;
  reraValidUntil?: string;
  approvalAuthorities?: string[];
};

const SITE_URL = "https://www.srisuprajainfracon.com";

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
    approvalDetail?: ApprovalDetail;
    keywords: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  "supraja-iris-resort-plots": {
    focusKeyword: "DTCP & RERA Approved Resort Plots Near Hyderabad",
    title: "DTCP & RERA Approved Resort Plots Near Hyderabad | Supraja IRIS",
    description:
      "Explore DTCP & RERA Approved Resort Plots Near Hyderabad at Supraja IRIS Kamkole with Lemon Tree Resort under construction, planned water villas and NH-65 growth corridor access.",
    ogImage: `${SITE_URL}/og/supraja-iris-og.webp`,
    location: "Kamkole, Telangana",
    projectName: "Supraja IRIS",
    approval: "DTCP & RERA Approved",
    approvalDetail: {
      phase: "Supraja IRIS Resort Phase 3",
      dtcpNumbers: ["TLP No. 155/2024/H"],
      reraNumbers: ["P02100009249"],
      surveyNumbers: ["130/Part", "131/Part", "147/Part", "148/Part", "149/Part"],
      reraIssueDate: "2025-01-16",
      reraValidFrom: "2024-10-08",
      reraValidUntil: "2026-10-08",
      approvalAuthorities: ["Telangana RERA", "DTCP Telangana"],
    },
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
        question: "Is Supraja IRIS a DTCP & RERA approved resort plot project?",
        answer:
          "Yes. The active Supraja IRIS Phase 3 inventory is covered by DTCP TLP No. 155/2024/H and Telangana RERA registration P02100009249.",
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
    title: "DTCP & RERA Approved Luxury Plots at Kamkole | Bridge County",
    description:
      "Explore DTCP & RERA Approved Luxury Plots at Kamkole in Bridge County by Sri Supraja Infracon near Woxsen University, NH-65 and Hyderabad growth corridors.",
    ogImage: `${SITE_URL}/og/bridge-county-og.webp`,
    location: "Kamkole, Telangana",
    projectName: "Bridge County",
    approval: "DTCP & RERA Approved",
    approvalDetail: {
      dtcpNumbers: ["TLP No. 160/2024/H"],
      reraNumbers: ["P01100009141"],
      surveyNumbers: ["186/P", "187/P", "189/P"],
      reraIssueDate: "2024-12-16",
      reraValidFrom: "2024-10-30",
      reraValidUntil: "2026-10-30",
      approvalAuthorities: ["Telangana RERA", "DTCP Telangana"],
    },
    keywords: [
      "luxury open plots near Woxsen University",
      "Kamkole luxury plots",
      "premium plotted development near Hyderabad",
      "RERA approved open plots",
      "DTCP & RERA Approved plots at Kamkole",
      "plots near NH-65",
    ],
    faqs: [
      {
        question: "Is Bridge County DTCP & RERA Approved?",
        answer:
          "Yes. Bridge County is covered by DTCP TLP No. 160/2024/H and Telangana RERA registration P01100009141.",
      },
      {
        question: "Is Bridge County RERA approved?",
        answer:
          "Yes. The Telangana RERA registration number for Bridge County is P01100009141.",
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
    title: "DTCP & RERA Approved Open Plots in Mominpet | Sindhu Sarovar",
    description:
      "Explore DTCP & RERA Approved Open Plots in Mominpet at Sindhu Sarovar by Sri Supraja Infracon with gated community infrastructure and plotted development planning.",
    ogImage: `${SITE_URL}/og/sindhu-sarovar-og.webp`,
    location: "Mominpet, Telangana",
    projectName: "Sindhu Sarovar",
    approval: "DTCP & RERA Approved",
    approvalDetail: {
      phase: "Phases 1 and 2",
      dtcpNumbers: ["TLP No. 154/2021/H", "TLP No. 233/2021/H"],
      reraNumbers: ["P02100003339", "P02100009951"],
      surveyNumbers: ["406/P", "407/P", "18/P", "19/P"],
      approvalAuthorities: ["Telangana RERA", "DTCP Telangana"],
    },
    keywords: [
      "Mominpet open plots",
      "premium plots near Hyderabad",
      "RERA approved plots in Mominpet",
      "gated community plots near Hyderabad",
      "DTCP & RERA Approved plotted development",
      "open plots near Mominpet",
    ],
    faqs: [
      {
        question: "Is Sindhu Sarovar DTCP & RERA Approved?",
        answer:
          "Yes. Sindhu Sarovar has DTCP TLP Nos. 154/2021/H and 233/2021/H, with Telangana RERA registrations P02100003339 and P02100009951 for the applicable phases.",
      },
      {
        question: "Is Sindhu Sarovar RERA approved?",
        answer:
          "Yes. The applicable Telangana RERA registration numbers are P02100003339 and P02100009951.",
      },
      {
        question: "Where is Sindhu Sarovar located?",
        answer:
          "Sindhu Sarovar is located in Mominpet, a developing growth corridor near Hyderabad.",
      },
    ],
  },
  "subhash-meadows": {
    focusKeyword: "Affordable Open Plots Near ORR Hyderabad",
    title: "Affordable Open Plots Near ORR Hyderabad | Subhash Meadows",
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
  return Object.keys(projectSeo).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSlug(slug)) return { title: "Project Not Found | Sri Supraja Infracon" };

  const project = projectSeo[slug];
  const canonical = `${SITE_URL}/projects/${slug}/`;

  return {
    title: project.title,
    description: project.description,
    keywords: [project.focusKeyword, ...project.keywords],
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      siteName: "Sri Supraja Infracon",
      locale: "en_IN",
      images: [{ url: project.ogImage, width: 1200, height: 630, alt: `${project.focusKeyword} - ${project.projectName}` }],
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

function approvalProperties(project: (typeof projectSeo)[ProjectSlug]) {
  const details = project.approvalDetail;
  const properties: Record<string, unknown>[] = [
    { "@type": "PropertyValue", name: "Approval Type", value: project.approval },
    { "@type": "PropertyValue", name: "Project Type", value: "Plotted Development" },
  ];

  if (!details) return properties;
  if (details.phase) properties.push({ "@type": "PropertyValue", name: "Project Phase", value: details.phase });
  if (details.dtcpNumbers?.length) properties.push({ "@type": "PropertyValue", name: "DTCP Approval Number", value: details.dtcpNumbers.join(", ") });
  if (details.reraNumbers?.length) properties.push({ "@type": "PropertyValue", name: "RERA Registration Number", value: details.reraNumbers.join(", ") });
  if (details.surveyNumbers?.length) properties.push({ "@type": "PropertyValue", name: "Survey Numbers", value: details.surveyNumbers.join(", ") });
  if (details.approvalAuthorities?.length) properties.push({ "@type": "PropertyValue", name: "Approval Authorities", value: details.approvalAuthorities.join(", ") });
  if (details.reraIssueDate) properties.push({ "@type": "PropertyValue", name: "RERA Certificate Issue Date", value: details.reraIssueDate });
  if (details.reraValidFrom) properties.push({ "@type": "PropertyValue", name: "RERA Registration Valid From", value: details.reraValidFrom });
  if (details.reraValidUntil) properties.push({ "@type": "PropertyValue", name: "RERA Registration Valid Until", value: details.reraValidUntil });
  return properties;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();

  const project = projectSeo[slug];
  const canonical = `${SITE_URL}/projects/${slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects/` },
          { "@type": "ListItem", position: 3, name: project.projectName, item: canonical },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Sri Supraja Infracon",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${siteMeta.domain}${siteMeta.logo}` },
      },
      {
        "@type": "Place",
        "@id": `${canonical}#place`,
        name: project.projectName,
        description: project.description,
        image: project.ogImage,
        url: canonical,
        address: {
          "@type": "PostalAddress",
          addressLocality: project.location,
          addressCountry: "IN",
        },
        additionalProperty: approvalProperties(project),
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: project.title,
        description: project.description,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Sri Supraja Infracon",
        },
        about: { "@id": `${canonical}#place` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: project.ogImage,
          width: 1200,
          height: 630,
          caption: `${project.focusKeyword} - ${project.projectName}`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: project.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectDetail slug={slug} />
    </>
  );
}
