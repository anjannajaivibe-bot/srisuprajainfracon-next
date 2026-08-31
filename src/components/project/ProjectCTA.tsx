import type { Project } from "@/data/projects";
import Link from "next/link";

type Props = {
  project: Project;
};

const PHONE_NUMBER = "919052996161";
const WHATSAPP_URL =
  "https://wa.me/919052996161?text=Hi%2C%20May%20I%20know%20more%20details%20about%20the%20project%3F";

const ctaCopy: Record<
  string,
  {
    eyebrow: string;
    title: string;
    text: string;
    whatsappText: string;
  }
> = {
  "supraja-iris": {
    eyebrow: "Strategic Project Consultation",
    title: "Understand the Larger Vision of Supraja IRIS",
    text:
      "Connect with our team to review current availability, development progress, location strength, lifestyle components, and the long-term value framework of the project.",
    whatsappText: "Discuss Supraja IRIS",
  },

  "supraja-iris-resort-plots": {
    eyebrow: "Strategic Project Consultation",
    title: "Understand the Larger Vision of Supraja IRIS",
    text:
      "Connect with our team to review current availability, development progress, location strength, lifestyle components, and the long-term value framework of the project.",
    whatsappText: "Discuss Supraja IRIS",
  },

  "bridge-county": {
    eyebrow: "Focused Investment Enquiry",
    title: "Explore Bridge County in Person",
    text:
      "Review location advantages, infrastructure features, plot availability, pricing options, and future growth opportunities with our project advisors. Discover how Bridge County combines strategic positioning, organized development, and long-term value within one of the region's emerging destinations.",
    whatsappText: "Discuss Bridge County",
  },

  "sindhu-sarovar": {
    eyebrow: "Project Clarity Assistance",
    title: "Explore Supraja Sindhu Sarovar in Person",
    text:
      "Understand location advantages, layout planning, infrastructure features, and current plot availability through a guided site visit.",
    whatsappText: "Discuss Sindhu Sarovar",
  },

  "subhash-meadows": {
    eyebrow: "Plan Your Visit",
    title: "Explore Subhash Meadows in Person",
    text:
      "Understand the project's connectivity to ORR, IIT Hyderabad, ICRISAT, and key growth corridors with clear plot and infrastructure details.",
    whatsappText: "Discuss Subhash Meadows",
  },
};

const fallbackCopy = {
  eyebrow: "Project Enquiry",
  title: "Request Current Project Details",
  text:
    "Connect with Supraja Management for availability, documentation, location details, project context, and site visit planning.",
  whatsappText: "Discuss Project Details",
};

const projectGuides: Record<string, { title: string; href: string }[]> = {
  "supraja-iris": [
    { title: "Kamkole Investment Guide", href: "/blog/kamkole-real-estate-investment-hotspot" },
    { title: "Understanding DTCP Approval", href: "/blog/what-is-dtcp-approval-in-hyderabad" },
  ],
  "supraja-iris-resort-plots": [
    { title: "Kamkole Investment Guide", href: "/blog/kamkole-real-estate-investment-hotspot" },
    { title: "Understanding DTCP Approval", href: "/blog/what-is-dtcp-approval-in-hyderabad" },
  ],
  "bridge-county": [
    { title: "Plot Buying Checklist", href: "/blog/plot-buying-checklist" },
    { title: "HMDA vs DTCP vs RERA", href: "/blog/hmda-vs-dtcp-vs-rera" },
  ],
  "sindhu-sarovar": [
    { title: "Documents Before Buying a Plot", href: "/blog/documents-required-before-buying-a-plot-in-telangana" },
    { title: "Verify Land Ownership", href: "/blog/how-to-verify-land-ownership-before-buying-a-plot" },
  ],
  "subhash-meadows": [
    { title: "Plots Near ORR Hyderabad", href: "/blog/plots-near-orr-hyderabad" },
    { title: "Plot Orientation Planning", href: "/blog/plot-orientation-practical-planning-every-direction" },
  ],
};

const ProjectCTA = ({ project }: Props) => {
  const copy = ctaCopy[project.slug] ?? fallbackCopy;
  const guides = projectGuides[project.slug] ?? [];

  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          {copy.eyebrow}
        </p>

        <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
          {copy.title}
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          {copy.text}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="rounded-full bg-amber-400 px-8 py-4 text-slate-950 transition hover:bg-white"
          >
            Call Now
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-amber-400 px-8 py-4 text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
          >
            {copy.whatsappText}
          </a>
        </div>

        {guides.length > 0 && (
          <nav
            aria-label={`Helpful guides for ${project.title}`}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"
          >
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="font-semibold text-amber-300 underline decoration-amber-300/50 underline-offset-4 hover:text-white"
              >
                {guide.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
};

export default ProjectCTA;
