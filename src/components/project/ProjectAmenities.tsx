import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const extraAmenities: Record<string, string[]> = {
  "supraja-iris": [
    "Lemon Tree Resort under construction",
    "Water & Amusement Theme Park planned",
    "Go-Karting planned",
    "Water Villas planned",
    "Resort-inspired project environment",
  ],

  "supraja-iris-resort-plots": [
    "Lemon Tree Resort under construction",
    "Water & Amusement Theme Park planned",
    "Go-Karting planned",
    "Water Villas planned",
    "Resort-inspired project environment",
  ],

  "bridge-county": [
    "Dedicated 15-acre plotted enclave",
    "Within the larger Supraja IRIS project",
    "Peaceful plotted environment",
    "Access to Kamkole growth corridor",
  ],

  "subhash-meadows": [
    "LRS charges paid as per applicable regulations",
  ],
};

const sectionCopy: Record<
  string,
  {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
  }
> = {
  "supraja-iris": {
    eyebrow: "Project Features",
    title: "Designed for Everyday Comfort",
    intro:
      "Infrastructure, recreational, and lifestyle features planned to support a well-rounded ownership experience.",
    note:
      "Review project features, lifestyle attractions, availability information, and planning details before scheduling a site visit.",
  },

  "supraja-iris-resort-plots": {
    eyebrow: "Project Features",
    title: "Designed for Everyday Comfort",
    intro:
      "Infrastructure, recreational, and lifestyle features planned to support a well-rounded ownership experience.",
    note:
      "Review project features, lifestyle attractions, availability information, and planning details before scheduling a site visit.",
  },

  "bridge-county": {
    eyebrow: "Project Features",
    title: "Thoughtfully Planned Features",
    intro:
      "Practical infrastructure and project features designed to support convenience, accessibility, and long-term value.",
    note:
      "Review project context, availability information, and site visit details with Supraja Management.",
  },

  "sindhu-sarovar": {
    eyebrow: "Project Features",
    title: "Infrastructure and Everyday Convenience",
    intro:
      "Project features focused on planning quality, accessibility, and a comfortable ownership experience.",
    note:
      "Review layout information, project features, availability details, and documentation before planning your visit.",
  },

  "subhash-meadows": {
    eyebrow: "Project Features",
    title: "Built Around Practical Living",
    intro:
      "Essential infrastructure and planning elements that contribute to usability, accessibility, and future relevance.",
    note:
      "Review project features, LRS information, availability details, and documentation before scheduling your visit.",
  },
};

const fallbackCopy = {
  eyebrow: "Project Features",
  title: "Thoughtfully Planned Project Features",
  intro:
    "Essential planning and infrastructure elements designed to support ownership confidence.",
  note:
    "Review project information, availability details, and documentation before scheduling a site visit.",
};

const ProjectAmenities = ({ project }: Props) => {
  const copy = sectionCopy[project.slug] ?? fallbackCopy;

  const amenities = [
    ...(project.amenities || []),
    ...(extraAmenities[project.slug] || []),
  ];

  if (!amenities.length) return null;

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            {copy.eyebrow}
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            {copy.intro}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <div
              key={`${amenity}-${index}`}
              className="group rounded-[28px] border border-[#EFE7D3] bg-[#F8F6F1] p-6 shadow-[0_10px_35px_rgba(11,22,51,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:bg-white hover:shadow-[0_20px_55px_rgba(11,22,51,0.12)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4C7] text-sm font-extrabold text-[#0B1633] ring-1 ring-[#E8D7A5] transition group-hover:bg-[#C9A227]">
                {index + 1}
              </div>

              <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                {amenity}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Supporting a more comfortable and organized ownership
                experience.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] border border-[#EFE7D3] bg-[#F8F6F1] p-7 text-center shadow-[0_12px_40px_rgba(11,22,51,0.05)]">
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[#4B5563]">
            {copy.note}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us/"
              className="rounded-full bg-[#0B1633] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Request Project Details
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-[#C9A227] bg-white px-7 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#FFF4C7]"
            >
              Explore More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAmenities;