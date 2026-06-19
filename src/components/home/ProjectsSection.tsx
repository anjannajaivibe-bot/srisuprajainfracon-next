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
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />
      <div className="absolute right-0 bottom-24 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
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
            Explore{" "}
            <span className="text-[#C48912]">
              Sri Supraja Infracon
            </span>{" "}
            Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            Discover projects across Kamkole, Mominpet, Sangareddy, and
            Indrakaran, each planned with a distinct location advantage,
            ownership purpose, and future growth perspective.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => {
            const cardCopy = projectCardCopy[project.slug] ?? {
              badge: "Sri Supraja Project",
              alt: `${project.title} by Sri Supraja Infracon`,
            };

            const imageFirst = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[34px] border border-[#E8E2D4] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A227]/45 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)]"
              >
                <div
                  className={`grid min-h-[430px] lg:grid-cols-2 ${
                    imageFirst ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <div className="mb-7 inline-flex w-fit rounded-lg bg-[#FFF4D8] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#B88900]">
                      {cardCopy.badge}
                    </div>

                    <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#B88900]">
                      {project.location}
                    </p>

                    <h3 className="mb-3 font-display text-3xl font-bold leading-tight text-[#07111F] md:text-4xl">
                      <Link
                        href={project.link}
                        className="transition hover:text-[#B88900]"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <div className="mb-5 h-px w-16 bg-[#C48912]" />

                    <p className="mb-7 max-w-xl text-[17px] leading-8 text-[#334155]">
                      {project.shortDescription}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-3">
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

                  <div className="relative min-h-[280px] overflow-hidden lg:min-h-[430px]">
                    <Link
                      href={project.link}
                      aria-label={`View ${project.title} project details`}
                      className="block h-full w-full"
                    >
                      <SmartImage
                        src={project.image}
                        alt={project.imageAlt || cardCopy.alt}
                        className="h-full w-full"
                        imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>

                    <div
                      className={`absolute inset-0 hidden lg:block ${
                        imageFirst
                          ? "bg-gradient-to-l from-white via-white/80 to-white/0"
                          : "bg-gradient-to-r from-white via-white/80 to-white/0"
                      }`}
                    />

                    {project.approvalType && (
                      <div className="absolute bottom-6 left-6 rounded-lg bg-[#07111F]/80 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur">
                        {project.approvalType}
                      </div>
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