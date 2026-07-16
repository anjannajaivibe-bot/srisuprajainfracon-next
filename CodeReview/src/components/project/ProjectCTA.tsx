import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const PHONE_NUMBER = "919052996161";

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

const ProjectCTA = ({ project }: Props) => {
  const copy = ctaCopy[project.slug] ?? fallbackCopy;

  const whatsappMessage = `Hello, I would like to know more about ${project.title}. Please share current availability, pricing, location details, and site visit options.`;

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
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-amber-400 px-8 py-4 text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
          >
            {copy.whatsappText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;