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
    heading: "Strategic Location. Planned Infrastructure. Future Value.",
    intro:
      "Thoughtfully planned features that support connectivity today, everyday convenience, and long-term growth potential.",
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

const subhashConnectivityHighlights = [
  {
    value: "5 Mins",
    title: "to Outer Ring Road",
    description: "Quick access to Hyderabad's key connectivity corridor.",
  },
  {
    value: "15 Mins",
    title: "to IIT Hyderabad",
    description: "Close to one of the region's premier education hubs.",
  },
  {
    value: "20 Mins",
    title: "to Regional Ring Road",
    description: "Future-ready regional connectivity advantage.",
  },
  {
    value: "Near",
    title: "ICRISAT & Growth Corridors",
    description: "Positioned close to major institutional and employment zones.",
  },
];

const subhashInfrastructureHighlights = [
  {
    title: "GP LRS Paid",
    description: "Clear documentation support for confident ownership.",
  },
  {
    title: "40, 33 & 30 Ft Roads",
    description: "Well-planned internal road network for smooth movement.",
  },
  {
    title: "Underground Drainage",
    description: "Modern drainage system for a cleaner community environment.",
  },
  {
    title: "Electricity & Street Lighting",
    description: "Essential infrastructure planned for safety and convenience.",
  },
];

const subhashCommunityHighlights = [
  {
    title: "100% Vaastu Plots",
    description: "Plots planned with positive orientation and practical layout.",
  },
  {
    title: "Avenue Plantation",
    description: "Tree-lined streets for greener surroundings.",
  },
  {
    title: "Parks & Open Spaces",
    description: "Dedicated spaces for recreation and community living.",
  },
  {
    title: "Planned Residential Environment",
    description: "Organized layout designed for long-term community value.",
  },
];

const ProjectHighlights = ({ project }: Props) => {
  const isBridgeCounty = project.slug === "bridge-county";
  const isSubhashMeadows = project.slug === "subhash-meadows";

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

        {isSubhashMeadows ? (
          <>
            <div className="mb-14">
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-px flex-1 bg-[#E7D7AF]" />
                <span className="rounded-md bg-[#0B1633] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                  Excellent Connectivity
                </span>
                <span className="h-px flex-1 bg-[#E7D7AF]" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {subhashConnectivityHighlights.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-[28px] border border-[#EFE7D3] bg-[#FFFCF7] p-7 text-center shadow-[0_12px_40px_rgba(11,22,51,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_22px_55px_rgba(11,22,51,0.12)]"
                  >
                    <p className="font-display text-5xl font-extrabold leading-none text-[#B8860B]">
                      {item.value}
                    </p>

                    <h3 className="mt-3 text-lg font-extrabold leading-snug text-[#0B1633]">
                      {item.title}
                    </h3>

                    <div className="mx-auto mt-5 h-[2px] w-12 rounded-full bg-[#C9A227]" />

                    <p className="mt-5 text-sm leading-6 text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-px flex-1 bg-[#E7D7AF]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B1633]">
                  Well-Planned Infrastructure
                </span>
                <span className="h-px flex-1 bg-[#E7D7AF]" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {subhashInfrastructureHighlights.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-[28px] border border-[#EFE7D3] bg-white p-7 text-center shadow-[0_10px_35px_rgba(11,22,51,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_20px_50px_rgba(11,22,51,0.1)]"
                  >
                    <h3 className="text-xl font-extrabold leading-snug text-[#0B1633]">
                      {item.title}
                    </h3>

                    <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C9A227]" />

                    <p className="mt-5 text-sm leading-6 text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-px flex-1 bg-[#E7D7AF]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B1633]">
                  Thoughtful Community Features
                </span>
                <span className="h-px flex-1 bg-[#E7D7AF]" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {subhashCommunityHighlights.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-[28px] border border-[#EFE7D3] bg-white p-7 text-center shadow-[0_10px_35px_rgba(11,22,51,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_20px_50px_rgba(11,22,51,0.1)]"
                  >
                    <h3 className="text-xl font-extrabold leading-snug text-[#0B1633]">
                      {item.title}
                    </h3>

                    <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C9A227]" />

                    <p className="mt-5 text-sm leading-6 text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[28px] border border-[#EFE7D3] bg-[#FFFCF7] p-8 text-center shadow-[0_12px_40px_rgba(11,22,51,0.06)]">
              <h3 className="text-2xl font-extrabold text-[#0B1633]">
                A Secure Today. A Stronger Tomorrow.
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4B5563]">
                Strategic location, planned infrastructure, and transparent
                documentation come together to create long-term value for
                investors and future homeowners.
              </p>
            </div>
          </>
        ) : (
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
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHighlights;