import SmartImage from "@/components/shared/SmartImage";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectHero = ({ project }: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fffaf0] via-white to-[#eef4ff] px-6 py-24 md:py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-300/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-200/45 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-amber-200 bg-white/90 px-5 py-2 text-sm font-bold text-amber-700 shadow-sm">
            Sales Open Now
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
            {project.title}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
            {project.shortDescription}
          </p>

          <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              href="/projects"
              className="rounded-2xl border border-amber-200 bg-white/90 px-5 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-amber-50"
            >
              Explore Sri Supraja Infracon Projects
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-blue-100 bg-white/90 px-5 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Check Plot Availability and Location Details
            </a>
          </div>
        </div>

        <div className="relative [perspective:1800px]">
          <div className="absolute inset-0 scale-95 rounded-[44px] bg-gradient-to-br from-amber-300/35 via-white to-blue-300/35 blur-3xl" />

          <div className="relative rotate-[-2.5deg] transform-gpu transition duration-700 hover:rotate-0 hover:scale-[1.02]">
            <SmartImage
              src={project.image}
              alt={project.imageAlt}
              className="h-[360px] w-full rounded-[34px] object-cover shadow-[0_35px_90px_rgba(15,23,42,0.30)] md:h-[500px]"
            />

            <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-5 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                High ROI Growth Corridor
              </p>
              <p className="text-sm font-bold text-slate-950">
                {project.location}
              </p>
            </div>
          </div>

          <div className="absolute -bottom-8 left-8 rounded-2xl border border-white/70 bg-white/95 px-6 py-4 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Location
            </p>
            <p className="text-xl font-bold text-slate-950">
              {project.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;