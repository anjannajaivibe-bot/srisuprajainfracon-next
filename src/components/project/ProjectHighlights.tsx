import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectHighlights = ({ project }: Props) => {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
          Project Highlights
        </p>

        <h2 className="mb-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
          Key Reasons Buyers Prefer {project.title}
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-600">
          These highlights support buyer confidence for open plot investment,
          weekend home planning and high ROI growth potential.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 font-bold text-slate-950">
                ✓
              </span>
              <p className="font-semibold leading-relaxed text-slate-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;


