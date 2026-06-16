import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const getExtraHighlights = (slug: string) => {
  if (slug === "supraja-iris-resort-plots" || slug === "supraja-iris") {
    return [
      "Lemon Tree Resort under construction",
      "Water & Amusement Theme Park Under Development",
      "Go-Karting planned",
      "Water Villas under construction",
      "Near Woxsen University and NH-65",
    ];
  }

  if (slug === "bridge-county") {
    return [
      "Dedicated 15-acre enclave",
      "Within the larger Supraja IRIS project",
      "Peaceful plotted environment",
      "Connected to Kamkole growth corridor",
    ];
  }

  return [];
};

const getCorrectedSindhuHighlights = () => [
  "Approved plotted project",
  "Abutting 100 feet road",
  "Compound wall with security room",
  "50 feet road with central plantation median",
  "Butterfly streetlights along 50 feet road",
  "Vastu-aligned layout planning",
  "Black top internal roads",
  "Developed sewage infrastructure",
  "Electricity with transformer and street lighting",
  "Children parks with gazebo",
  "Barrier-free pedestrian walkways",
  "Overhead water tank",
  "Paved park walking paths",
  "Planned bench locations",
  "Rainwater harvesting pits",
  "Near residential and commercial zones",
];

const sectionCopy: Record<
  string,
  {
    heading: string;
    intro: string;
    note: string;
  }
> = {
  "supraja-iris-resort-plots": {
    heading: "Supraja IRIS Project Highlights",
    intro:
      "Key features designed to support lifestyle value, accessibility, recreation, and long-term ownership confidence.",
    note:
      "Clients are encouraged to review current availability, approvals, layout details, and development status before planning their investment.",
  },

  "supraja-iris": {
    heading: "Supraja IRIS Project Highlights",
    intro:
      "Key features designed to support lifestyle value, accessibility, recreation, and long-term ownership confidence.",
    note:
      "Clients are encouraged to review current availability, approvals, layout details, and development status before planning their investment.",
  },

  "bridge-county": {
    heading: "Bridge County Project Highlights",
    intro:
      "A dedicated plotted enclave within Supraja IRIS, planned for calm surroundings, organized infrastructure, and future location value.",
    note:
      "Speak with Supraja Management to understand plot availability, project context, and site visit options.",
  },

  "sindhu-sarovar": {
    heading: "Supraja Sindhu Sarovar Project Highlights",
    intro:
      "A planned project with practical infrastructure, organized layout features, and access-focused location advantages.",
    note:
      "Investors and families should verify approval details, layout information, availability, and current development status before booking.",
  },

  "subhash-meadows": {
    heading: "Subhash Meadows Project Highlights",
    intro:
      "Project features focused on accessibility, everyday convenience, and long-term location relevance.",
    note:
      "LRS charges are paid as per applicable regulations. Please confirm current documentation and availability with Supraja Management.",
  },
};

const fallbackCopy = {
  heading: "Project Highlights",
  intro:
    "Essential project features designed around planning, accessibility, and long-term ownership confidence.",
  note:
    "Please verify current availability, approval details, and development status before booking.",
};

const ProjectHighlights = ({ project }: Props) => {
  const allHighlights =
    project.slug === "sindhu-sarovar"
      ? getCorrectedSindhuHighlights()
      : [...project.highlights, ...getExtraHighlights(project.slug)];

  const copy = sectionCopy[project.slug] ?? fallbackCopy;

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Project Highlights
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {copy.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            {copy.intro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allHighlights.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="group rounded-[28px] border border-[#EFE7D3] bg-white p-6 shadow-[0_10px_35px_rgba(11,22,51,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_20px_55px_rgba(11,22,51,0.12)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4C7] text-sm font-extrabold text-[#0B1633] ring-1 ring-[#E8D7A5] transition group-hover:bg-[#C9A227]">
                {index + 1}
              </div>

              <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_12px_40px_rgba(11,22,51,0.06)]">
          <p className="mx-auto max-w-4xl text-center text-base leading-relaxed text-[#6B7280]">
            {copy.note}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link
              href="/projects"
              className="rounded-2xl bg-[#0B1633] px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Explore All Projects
            </Link>

            <Link
              href="/contact-us/"
              className="rounded-2xl border border-[#C9A227] bg-[#FFF9E8] px-5 py-4 text-center text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
            >
              Request Availability
            </Link>

            <a
              href="https://www.rera.telangana.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-center text-sm font-bold text-[#0B1633] transition hover:border-[#C9A227] hover:bg-[#FFF9E8]"
            >
              Verify Project Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;