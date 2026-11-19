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
    badge: "Flagship Plotted Development",
    alt: "Supraja IRIS resort-inspired plots in Kamkole",
  },
  "supraja-iris": {
    badge: "Flagship Plotted Development",
    alt: "Supraja IRIS resort plots in Kamkole",
  },
  "bridge-county": {
    badge: "15-Acre Enclave within Supraja IRIS",
    alt: "Bridge County 15-acre plotted enclave within Supraja IRIS",
  },
  "sindhu-sarovar": {
    badge: "100 Ft Road Frontage",
    alt: "Sindhu Sarovar planned project with organized layout",
  },
  "subhash-meadows": {
    badge: "Plotted Development at Indrakaran",
    alt: "Subhash Meadows well-connected plotted project",
  },
};

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F2] py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 lg:mb-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#987737]">
            Our Ongoing Projects
          </p>

          <div className="mb-6 flex max-w-[100px] items-center gap-4">
            <span className="h-px flex-1 bg-[#C9A227]/40" />
            <span className="h-2 w-2 rotate-45 border border-[#C9A227]" />
            <span className="h-px flex-1 bg-[#C9A227]/40" />
          </div>

          <h2 className="max-w-[780px] font-display text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#071525] md:text-7xl">
            Ongoing <span className="text-[#C48912]">Plotted Developments</span> Near Hyderabad
          </h2>

          <p className="mt-8 max-w-[680px] text-base leading-8 text-[#555D64] lg:ml-auto lg:max-w-[490px]">
            Compare our current projects by location, approval status, plot size,
            price, connectivity and on-site development. Each project page includes
            the details you need before arranging a site visit.
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
              className="group relative overflow-hidden bg-[#F7F6F2] py-10 lg:py-16"
            >
              <div
                className={`absolute inset-y-6 hidden w-[49%] overflow-hidden rounded-[20px] lg:block ${
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
                    ? "bg-gradient-to-l from-[#F7F6F2]/15 to-transparent"
                     : "bg-gradient-to-r from-[#F7F6F2]/15 to-transparent"
                }`}
              />

              <div className="relative mx-auto grid max-w-7xl gap-7 px-6 py-10 lg:min-h-[510px] lg:grid-cols-2 lg:items-center lg:px-10">
                <div
                  className={`relative z-10 max-w-xl rounded-[20px] bg-white p-7 shadow-[0_18px_65px_rgba(8,21,40,0.08)] sm:p-10 lg:w-[110%] lg:p-12 ${
                    imageFirst ? "lg:col-start-2 lg:-ml-[10%]" : ""
                  }`}
                >
                  <div className="mb-5 inline-flex w-fit text-[10px] font-semibold uppercase tracking-[0.16em] text-[#987737]">
                    {cardCopy.badge}
                  </div>

                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#987737]">
                    {project.location}
                  </p>

                  <h3 className="mb-4 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071525] md:text-5xl">
                    <Link
                      href={project.link}
                      className="transition hover:text-[#725700]"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  {(project.dtcpNo || project.reraNo) && (
                    <div className="mb-5 flex flex-wrap gap-2" aria-label="Project approval details">
                      {project.dtcpNo && (
                        <span className="rounded-md border border-[#E8D7A5] bg-[#FFF9E8] px-3 py-1.5 text-xs font-bold text-[#725700]">
                          DTCP: {project.dtcpNo}
                        </span>
                      )}

                      {project.reraNo && (
                        <span className="rounded-md border border-[#D7DEE8] bg-[#F8FAFC] px-3 py-1.5 text-xs font-bold text-[#334155]">
                          RERA: {project.reraNo}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mb-6 h-px w-16 bg-[#C48912]" />

                  <p className="mb-7 text-[15px] leading-7 text-[#4D5966]">
                    {project.shortDescription}
                  </p>

                  <div className="mb-7 flex flex-wrap gap-x-4 gap-y-2">
                    {project.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-medium text-[#515D66] before:mr-2 before:text-[#C9A227] before:content-['•']"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                    <Link
                      href={project.link}
                      className="inline-flex items-center justify-center rounded-sm bg-[#071525] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#A57B30]"
                    >
                      View Project Details
                    </Link>

                    {project.availabilityMapUrl && (
                      <a
                        href={project.availabilityMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center border-b border-[#C9A227] py-2 text-xs font-semibold text-[#071525] transition hover:text-[#987737]"
                      >
                        Live Plot Availability
                      </a>
                    )}

                    {project.brochure && (
                      <a
                        href={project.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center border-b border-[#C9A227] py-2 text-xs font-semibold text-[#725700] transition hover:text-[#071525]"
                      >
                        View Brochure
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[20px] lg:hidden">
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
