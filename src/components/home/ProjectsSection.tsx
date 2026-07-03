import Link from "next/link";
import SmartImage from "@/components/shared/SmartImage";
import { projects } from "@/data/projects";

const projectCardCopy: Record<
  string,
  {
    badge: string;
    alt: string;
  }
> = {
  "supraja-iris-resort-plots": {
    badge: "Flagship Lifestyle Destination",
    alt: "Supraja IRIS resort-inspired plots in Kamkole",
  },
  "supraja-iris": {
    badge: "Flagship Lifestyle Destination",
    alt: "Supraja IRIS resort plots in Kamkole",
  },
  "bridge-county": {
    badge: "Premium 15-Acre Enclave",
    alt: "Bridge County 15-acre plotted enclave within Supraja IRIS",
  },
  "sindhu-sarovar": {
    badge: "100 Ft Road Frontage Community",
    alt: "Sindhu Sarovar planned project with organized layout",
  },
  "subhash-meadows": {
    badge: "Ready for Future Growth",
    alt: "Subhash Meadows well-connected plotted project",
  },
};

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#B88900]">
            Our Ongoing Projects
          </p>

          <div className="mx-auto mb-6 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#C9A227]/40" />
            <span className="h-2 w-2 rotate-45 border border-[#C9A227]" />
            <span className="h-px flex-1 bg-[#C9A227]/40" />
          </div>

          <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight text-[#07111F] md:text-6xl">
            Curated Land.{" "}
            <span className="text-[#C48912]">Considered Locations.</span>{" "}
            Deliberate Timing.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            Every Sri Supraja Infracon Projects is chosen for what surrounds it - universities, 
            transit corridors, employment hubs - not just what's built on it. Four communities, 
            each at a different stage of maturity, offer entry points suited to different 
            investment timelines.
          </p>
        </div>
      </div>

      <div>
        {projects.map((project, index) => {
          const cardCopy = projectCardCopy[project.slug] ?? {
            badge: "Sri Supraja Project",
            alt: `${project.title} by Sri Supraja Infracon`,
          };

          const imageFirst = index % 2 === 1;

          return (
            <article
              key={project.id}
              className="group relative overflow-hidden border-t border-[#EFE7D3] bg-white last:border-b"
            >
              <div
                className={`absolute inset-y-0 hidden w-[58%] lg:block ${
                  imageFirst ? "left-0" : "right-0"
                }`}
              >
                <Link
                  href={project.link}
                  aria-label={`View ${project.title} project details`}
                  className="block h-full w-full"
                >
                  <SmartImage
                    src={project.image}
                    alt={project.imageAlt || cardCopy.alt}
                    wrapperClassName="h-full w-full"
                    imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>

              <div
                className={`absolute inset-0 hidden lg:block ${
                  imageFirst
                    ? "bg-gradient-to-l from-white via-white/95 to-white/10"
                    : "bg-gradient-to-r from-white via-white/95 to-white/10"
                }`}
              />

              <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:min-h-[560px] lg:grid-cols-2 lg:items-center">
                <div
                  className={`relative z-10 max-w-xl ${
                    imageFirst ? "lg:col-start-2 lg:ml-auto" : ""
                  }`}
                >
                  <div className="mb-7 inline-flex w-fit rounded-lg bg-[#FFF4D8] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#B88900]">
                    {cardCopy.badge}
                  </div>

                  <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#B88900]">
                    {project.location}
                  </p>

                  <h3 className="mb-3 font-display text-4xl font-bold leading-tight text-[#07111F] md:text-5xl">
                    <Link
                      href={project.link}
                      className="transition hover:text-[#B88900]"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <div className="mb-6 h-px w-16 bg-[#C48912]" />

                  <p className="mb-8 text-[18px] leading-9 text-[#334155]">
                    {project.shortDescription}
                  </p>

                  <div className="mb-9 flex flex-wrap gap-3">
                    {project.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[#E8D7A5] bg-white px-4 py-2 text-xs font-bold text-[#374151] shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.link}
                      className="inline-flex items-center justify-center rounded-lg bg-[#07111F] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#C9A227] hover:text-[#07111F]"
                    >
                      View Project Details
                    </Link>

                    {project.availabilityMapUrl && (
                      <a
                        href={project.availabilityMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#07111F] shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:bg-[#FFF9E8]"
                      >
                        Live Plot Availability
                      </a>
                    )}

                    {project.brochure && (
                      <a
                        href={project.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-[#E8D7A5] bg-white px-6 py-3 text-sm font-bold text-[#B88900] shadow-sm transition hover:-translate-y-1 hover:bg-[#C9A227] hover:text-[#07111F]"
                      >
                        View Brochure
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] lg:hidden">
                  <SmartImage
                    src={project.image}
                    alt={project.imageAlt || cardCopy.alt}
                    wrapperClassName="h-[280px] w-full"
                    imageClassName="object-cover"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;