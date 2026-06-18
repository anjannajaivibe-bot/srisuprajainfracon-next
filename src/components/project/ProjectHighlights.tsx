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
    heading: "Built Around Location, Infrastructure & Opportunity",
    intro:
      "Discover the advantages that position Bridge County as a strategically located plotted community within a fast-developing growth corridor.",
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

const bridgeCountyHighlights = [
  {
    title: "DTCP & RERA Approved Development",
    description:
      "Clear approvals and planned infrastructure for confident ownership.",
  },
  {
    title: "Within Supraja IRIS Ecosystem",
    description:
      "Part of a larger destination envisioned for residential, hospitality, and lifestyle growth.",
  },
  {
    title: "Adjacent to Woxsen University",
    description:
      "Located beside one of the region's leading educational institutions.",
  },
  {
    title: "Strategic NH65 Connectivity",
    description:
      "Convenient access to the Mumbai Highway and key regional corridors.",
  },
  {
    title: "Future Lifestyle Destinations",
    description:
      "Near upcoming Lemon Tree Resort, Water Villas, and Water Theme Park developments.",
  },
  {
    title: "Positioned for Long-Term Value",
    description:
      "Surrounded by growth drivers including NIMZ, employment hubs, and emerging infrastructure.",
  },
];

const ProjectHighlights = ({ project }: Props) => {
  const isBridgeCounty = project.slug === "bridge-county";
  const copy = sectionCopy[project.slug] ?? fallbackCopy;
  const allHighlights = isBridgeCounty
    ? bridgeCountyHighlights
    : project.highlights.map((item) => ({
        title: item,
        description: "",
      }));

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Project Highlights
          </p>

          <h2 className="mx-auto max-w-5xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {copy.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            {copy.intro}
          </p>
        </div>

        <div
          className={
            isBridgeCounty
              ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {allHighlights.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={
                isBridgeCounty
                  ? "group relative overflow-hidden rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-[0_12px_40px_rgba(11,22,51,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_24px_60px_rgba(11,22,51,0.12)]"
                  : "group rounded-[28px] border border-[#EFE7D3] bg-white p-6 shadow-[0_10px_35px_rgba(11,22,51,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_20px_55px_rgba(11,22,51,0.12)]"
              }
            >
              <div
                className={
                  isBridgeCounty
                    ? "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF7D6] to-[#F5E6A3] text-lg font-extrabold text-[#0B1633] shadow-sm ring-1 ring-[#E8D7A5]"
                    : "mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4C7] text-sm font-extrabold text-[#0B1633] ring-1 ring-[#E8D7A5] transition group-hover:bg-[#C9A227]"
                }
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3
                className={
                  isBridgeCounty
                    ? "text-xl font-extrabold leading-snug text-[#0B1633]"
                    : "text-lg font-extrabold leading-snug text-[#111827]"
                }
              >
                {item.title}
              </h3>

              {isBridgeCounty && (
                <>
                  <div className="mt-4 h-[3px] w-14 rounded-full bg-[#C9A227]" />

                  <p className="mt-5 text-base leading-7 text-[#4B5563]">
                    {item.description}
                  </p>

                  <span className="pointer-events-none absolute right-6 top-6 text-5xl font-black text-[#0B1633]/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;