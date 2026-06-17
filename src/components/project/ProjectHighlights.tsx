import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

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
    heading: "Distinctive Features. Lasting Value.",
    intro:
      "Discover the planning, accessibility, and growth factors that make Bridge County a compelling investment destination.",
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
  const allHighlights = project.highlights;
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
      </div>
    </section>
  );
};

export default ProjectHighlights;