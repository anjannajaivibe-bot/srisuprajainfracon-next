import type { Metadata } from "next";
import Link from "next/link";
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
  verificationNote?: string;
};

type ProjectSeo = {
  focusKeyword: string;
  title: string;
  description: string;
  ogImage: string;
  location: string;
  latitude: number;
  longitude: number;
  projectName: string;
  approval: string;
  approvalDetail?: ApprovalDetail;
  keywords: string[];
  faqs: { question: string; answer: string }[];
};

const SITE_URL = "https://www.srisuprajainfracon.com";
const VERIFICATION_URL = `${SITE_URL}/project-verification/`;

const projectSeo: Record<ProjectSlug, ProjectSeo> = {
  "supraja-iris-resort-plots": {
    focusKeyword: "DTCP & RERA Approved Resort Plots Near Hyderabad",
    title: "DTCP & RERA Approved Resort Plots Near Hyderabad | Supraja IRIS",
    description:
      "Explore DTCP & RERA Approved Resort Plots Near Hyderabad at Supraja IRIS Kamkole with Lemon Tree Resort under construction, planned water villas and NH-65 growth corridor access.",
    ogImage: `${SITE_URL}/og/supraja-iris-og.webp`,
    location: "Marpalle, Vikarabad, Telangana",
    latitude: 17.631095215457595,
    longitude: 77.79124881460227,
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
      verificationNote:
        "Phase-specific details are summarized from reviewed TG RERA and DTCP records. Buyers should independently verify the latest status before purchase.",
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
        question: "What approval details are documented for Supraja IRIS Phase 3?",
        answer:
          "The reviewed Phase 3 records reference DTCP TLP No. 155/2024/H and Telangana RERA registration P02100009249. Buyers should independently verify the latest government status before purchase.",
      },
      {
        question: "Where is Supraja IRIS located?",
        answer:
          "Supraja IRIS is marketed from the Kamkole and Sadashivapet growth corridor, while the Phase 3 registration records the project locality as Marpalle, Vikarabad district.",
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
    latitude: 17.6377793524897,
    longitude: 77.79436807688003,
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
      verificationNote:
        "The reviewed Bridge County records reference the same Kamkole survey numbers in the RERA certificate and DTCP layout material.",
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
        question: "What approval details are documented for Bridge County?",
        answer:
          "The reviewed records reference DTCP TLP No. 160/2024/H and Telangana RERA registration P01100009141 for survey numbers 186/P, 187/P and 189/P at Kamkole.",
      },
      {
        question: "What period is shown on the Bridge County RERA certificate?",
        answer:
          "The reviewed Form C shows a registration period from 30 October 2024 to 30 October 2026, unless extended by the Authority. Buyers should verify the latest status directly with TG RERA.",
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
      "Explore Sindhu Sarovar open plots in Mominpet with documented project approval references, gated community infrastructure and plotted development planning by Sri Supraja Infracon.",
    ogImage: `${SITE_URL}/og/sindhu-sarovar-og.webp`,
    location: "Mominpet, Telangana",
    latitude: 17.50216579948956,
    longitude: 77.87623247462946,
    projectName: "Sindhu Sarovar",
    approval: "Documented DTCP & RERA project records",
    approvalDetail: {
      phase: "Phase 2",
      dtcpNumbers: ["TLP No. 154/2021/H", "TLP No. 233/2021/H"],
      reraNumbers: ["P02100009951"],
      surveyNumbers: ["18/P", "19/P"],
      reraValidFrom: "2021-10-23",
      reraValidUntil: "2025-08-23",
      approvalAuthorities: ["Telangana RERA", "DTCP Telangana"],
      verificationNote:
        "The uploaded Phase 2 Form C records a period ending 23 August 2025. Any extension or current status should be verified directly with TG RERA.",
    },
    keywords: [
      "Mominpet open plots",
      "premium plots near Hyderabad",
      "RERA project records in Mominpet",
      "gated community plots near Hyderabad",
      "DTCP plotted development",
      "open plots near Mominpet",
    ],
    faqs: [
      {
        question: "What RERA record is documented for Sindhu Sarovar Phase 2?",
        answer:
          "The reviewed Phase 2 Form C references Telangana RERA registration P02100009951 for survey numbers 18/P and 19/P at Morangapally, Mominpet.",
      },
      {
        question: "Is the uploaded Sindhu Sarovar Phase 2 certificate enough to prove current status?",
        answer:
          "No. The reviewed certificate records a period ending 23 August 2025 unless extended. Buyers should check TG RERA for any extension or current project status before relying on it.",
      },
      {
        question: "Where is Sindhu Sarovar located?",
        answer:
          "Sindhu Sarovar is located in the Mominpet area of Vikarabad district.",
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
    latitude: 17.524786798833457,
    longitude: 78.16053747462993,
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
          "Subhash Meadows is positioned for buyers evaluating affordable open plots near ORR Hyderabad and nearby growth locations. Buyers should independently review the applicable title and approval records for the plot being considered.",
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
  if (!isValidSlug(slug)) {
    return { title: "Project Not Found | Sri Supraja Infracon" };
  }

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

function approvalProperties(project: ProjectSeo) {
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
  if (details.verificationNote) properties.push({ "@type": "PropertyValue", name: "Verification Note", value: details.verificationNote });
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: project.latitude,
          longitude: project.longitude,
        },
        additionalProperty: approvalProperties(project),
        subjectOf: {
          "@type": "WebPage",
          "@id": `${VERIFICATION_URL}#webpage`,
          url: VERIFICATION_URL,
          name: "Sri Supraja Infracon Project Verification Center",
        },
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
        relatedLink: [VERIFICATION_URL, `${SITE_URL}/telangana-plot-verification/`],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: project.ogImage,
          width: 1200,
          height: 630,
          caption: `${project.focusKeyword} - ${project.projectName}`,
        },
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
      <section className="border-t border-slate-200 bg-[#F8F6F1] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl border border-[#DED4BD] bg-white p-7 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A26]">Buyer verification</p>
            <h2 className="mt-2 text-xl font-bold text-[#17211B]">Check phase-specific approval references before purchase</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Review the summarized RERA, DTCP/TLP and survey-number references, then independently confirm the latest government status for the exact phase and plot you are considering.
            </p>
          </div>
          <Link href="/project-verification" className="shrink-0 rounded-full bg-[#10251D] px-5 py-3 text-center text-sm font-semibold text-white">
            Open Verification Center
          </Link>
        </div>
      </section>
    </>
  );
}
