import SmartImage from "@/components/shared/SmartImage";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Sales Open Projects
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            DTCP & RERA Approved Open Plots Near Hyderabad Growth Corridors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Explore Sri Supraja Infracon open plot projects in Kamkole,
            Mominpet and Indrakaran, planned for buyers searching for premium
            villa plots, resort plots and high ROI plotted investments near
            Hyderabad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <a
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className="block h-full w-full"
                >
                  <SmartImage
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                </a>

                <div className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg">
                  Sales Open
                </div>

                {project.approvalType && (
                  <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur">
                    {project.approvalType}
                  </div>
                )}
              </div>

              <div className="p-7">
                <p className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-600">
                  {project.location}
                </p>

                <h3 className="mb-4 text-2xl font-extrabold text-slate-950">
                  <a
                    href={project.link}
                    className="transition hover:text-amber-600"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mb-6 leading-relaxed text-slate-600">
                  {project.shortDescription}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.highlights.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-amber-500 hover:text-slate-950"
                  >
                    View Project Details
                  </a>

                  {project.availabilityMapUrl && (
                    <a
                      href={project.availabilityMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-50"
                    >
                      Live Plot Availability
                    </a>
                  )}

                  {project.brochure && (
                    <a
                      href={project.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-5 py-2.5 text-sm font-bold text-amber-700 shadow-sm transition hover:-translate-y-1 hover:bg-amber-500 hover:text-slate-950"
                    >
                      View Brochure
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-amber-100 bg-amber-50/60 p-7 text-center">
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-700">
            Compare current open plot availability, project brochures, location
            advantages and approval details before selecting the right Sri
            Supraja Infracon project near Hyderabad growth corridors.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-bold">
            <a href="/projects" className="text-blue-700 underline">
              View all plotted communities
            </a>

            <a href="/contact" className="text-blue-700 underline">
              Request project guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;