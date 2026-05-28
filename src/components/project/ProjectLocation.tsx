import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const getNearbyHighlights = (slug: string) => {
  if (slug === "supraja-iris-resort-plots") {
    return [
      "Near Woxsen University",
      "Near NH-65 Highway",
      "Regional Ring Road influence zone",
      "Near NIMZ Zaheerabad growth corridor",
      "West Hyderabad expansion corridor",
      "Emerging resort and villa investment zone",
    ];
  }

  return [
    "Strategic Telangana growth corridor",
    "Strong future infrastructure connectivity",
    "Emerging plotted development zone",
    "Accessible from Hyderabad growth regions",
  ];
};

const ProjectLocation = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];

  const locationAdvantages =
    content?.locationAdvantages || [];

  const nearbyHighlights = getNearbyHighlights(project.slug);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Strategic Location Advantage
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Connectivity & Growth Potential Around {project.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            {project.title} is strategically positioned within emerging
            Telangana growth corridors with access to educational hubs,
            industrial influence zones, transportation infrastructure and
            future-ready connectivity expansion near Hyderabad.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Left Card */}
          <div className="rounded-[34px] border border-[#EFE7D3] bg-[#F8F6F1] p-8 shadow-[0_18px_55px_rgba(11,22,51,0.06)]">
            <h3 className="mb-7 text-2xl font-extrabold text-[#111827]">
              Location Highlights
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              {locationAdvantages.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-2xl border border-[#E8D7A5] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4C7] text-sm font-extrabold text-[#0B1633]">
                    {index + 1}
                  </div>

                  <p className="font-semibold leading-relaxed text-[#111827]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Internal Links */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Explore More Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#C9A227] bg-white px-6 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#FFF4C7]"
              >
                Schedule Site Visit
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-[34px] border border-[#EFE7D3] bg-white p-8 shadow-[0_18px_55px_rgba(11,22,51,0.06)]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Nearby Growth Drivers
            </p>

            <h3 className="text-2xl font-extrabold leading-tight text-[#111827]">
              Emerging Hyderabad Investment Corridor
            </h3>

            <div className="mt-8 space-y-5">
              {nearbyHighlights.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-[#FCFBF8] p-5 transition duration-300 hover:border-[#C9A227]"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A227] text-sm font-bold text-[#0B1633]">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-[#111827]">
                      {item}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                      Strategic infrastructure and regional development
                      positioning supporting long-term plotted development
                      relevance.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* SEO Links */}
            <div className="mt-10 rounded-[28px] border border-[#E8D7A5] bg-[#FFF9E8] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Explore Related Resources
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/open-plots-and-resorts-in-hyderabad"
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
                >
                  Open Plots & Resorts
                </Link>

                <Link
                  href="/resort-plots-in-hyderabad"
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
                >
                  Resort Plots
                </Link>

                <Link
                  href="/gated-community-plots-in-hyderabad"
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
                >
                  Gated Community Plots
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLocation;