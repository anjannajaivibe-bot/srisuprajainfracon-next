import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

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
    eyebrow: "Plan Your Visit",
    title: "Explore Supraja IRIS in Person",
    text:
      "Review current availability, lifestyle attraction status, location advantages, and project details with Supraja Management.",
    whatsappText: "Schedule IRIS Site Visit",
  },

  "supraja-iris-resort-plots": {
    eyebrow: "Plan Your Visit",
    title: "Explore Supraja IRIS in Person",
    text:
      "Review current availability, lifestyle attraction status, location advantages, and project details with Supraja Management.",
    whatsappText: "Schedule IRIS Site Visit",
  },

  "bridge-county": {
    eyebrow: "Plan Your Visit",
    title: "Visit Bridge County within Supraja IRIS",
    text:
      "Understand this dedicated 15-acre enclave, current availability, project context, and site visit options.",
    whatsappText: "Schedule Bridge County Visit",
  },

  "sindhu-sarovar": {
    eyebrow: "Request Project Details",
    title: "Learn More About Sindhu Sarovar",
    text:
      "Review layout details, location advantages, availability, and documentation before planning your visit.",
    whatsappText: "Ask About Sindhu Sarovar",
  },

  "subhash-meadows": {
    eyebrow: "Request Project Details",
    title: "Explore Subhash Meadows",
    text:
      "Check project features, LRS documentation, location access, and current availability with Supraja Management.",
    whatsappText: "Ask About Subhash Meadows",
  },
};

const fallbackCopy = {
  eyebrow: "Project Enquiry",
  title: "Request Current Project Details",
  text:
    "Connect with Supraja Management for availability, documentation, location details, and site visit planning.",
  whatsappText: "Schedule Site Visit",
};

const ProjectCTA = ({ project }: Props) => {
  const copy = ctaCopy[project.slug] ?? fallbackCopy;

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
          <Link href="/projects" className="text-amber-300 underline">
            Explore all projects
          </Link>

          <Link href="/contact-us/" className="text-amber-300 underline">
            Contact Supraja Management
          </Link>

          <a
            href={`https://wa.me/9190529961661?text=${encodeURIComponent(
              `Hello, I would like to know more about ${project.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 underline"
          >
            {copy.whatsappText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;