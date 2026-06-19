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
    badge: "Resort-Inspired Project",
    alt: "Supraja IRIS resort-inspired plots in Kamkole",
  },
  "supraja-iris": {
    badge: "Resort-Inspired Project",
    alt: "Supraja IRIS resort-inspired plots in Kamkole",
  },
  "bridge-county": {
    badge: "15-Acre Enclave",
    alt: "Bridge County 15-acre plotted enclave within Supraja IRIS",
  },
  "sindhu-sarovar": {
    badge: "Planned Project",
    alt: "Sindhu Sarovar planned project with organized layout",
  },
  "subhash-meadows": {
    badge: "Well-Connected Project",
    alt: "Subhash Meadows well-connected plotted project",
  },
};

const ProjectsSection = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#B88900]">
            Current Projects
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Explore Sri Supraja Infracon Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Discover projects across Kamkole, Mominpet, Sangareddy, and
            Indrakaran, each planned with a distinct location advantage,
            ownership purpose, and future growth perspective.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const cardCopy = projectCardCopy[project.slug] ?? {
              badge: "Sri Supraja Project",
              alt: `${project.title} by Sri Supraja Infracon`,
            };

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[32px] border border-[#EFE7D3] bg-white shadow-[0_14px_40px_rgba(17,24,39,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(17,24,39,0.12)]"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Link
                    href={project.link}
                    aria-label={`View ${project.title} project details`}
                    className="block h-full w-full"
                  >
                    <SmartImage
                      src={project.image}
                      alt={project.imageAlt || cardCopy.alt}
                      className="h-full w-full"
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-[#111827] shadow-lg backdrop-blur">
                    {cardCopy.badge}
                  </div>

                  {project.approvalType && (
                    <div className="absolute bottom-5 left-5 rounded-full bg-[#FFF9E8]/95 px-4 py-2 text-xs font-bold text-[#7A5A00] shadow-lg backdrop-blur">
                      {project.approvalType}
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#B88900]">
                    {project.location}
                  </p>

                  <h3 className="mb-4 text-2xl font-extrabold text-[#111827]">
                    <Link
                      href={project.link}
                      className="font-bold transition hover:text-[#B88900]"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mb-6 leading-relaxed text-[#4B5563]">
                    {project.shortDescription}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#EFE7D3] bg-[#FBF8EF] px-3 py-1 text-xs font-bold text-[#374151]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.link}
                      className="inline-flex rounded-full bg-[#111827] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#C9A227] hover:text-[#111827]"
                    >
                      View Project Details
                    </Link>

                    {project.availabilityMapUrl && (
                      <a
                        href={project.availabilityMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full border border-[#D1D5DB] bg-white px-5 py-2.5 text-sm font-bold text-[#111827] shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:bg-[#FFF9E8]"
                      >
                        Live Plot Availability
                      </a>
                    )}

                    {project.brochure && (
                      <a
                        href={project.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full border border-[#E8D7A5] bg-[#FFF9E8] px-5 py-2.5 text-sm font-bold text-[#7A5A00] shadow-sm transition hover:-translate-y-1 hover:bg-[#C9A227] hover:text-[#111827]"
                      >
                        View Brochure
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;