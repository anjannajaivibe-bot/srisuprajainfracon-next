import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const ProjectLocation = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];

  if (!content?.locationAdvantages?.length) return null;

  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-400">
          Location Advantage
        </p>

        <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
          Why {project.location} Is a Strategic Growth Location
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
          Location strength is one of the biggest factors for open plot
          appreciation. This project benefits from connectivity, institutional
          presence and regional infrastructure growth.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {content.locationAdvantages.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <p className="font-semibold leading-relaxed text-slate-100">
                ✓ {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm font-bold">
          <a href="/projects" className="text-amber-300 underline">
            View plotted communities by Sri Supraja Infracon
          </a>

          <a
            href="https://www.nicdc.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 underline"
          >
            Learn about industrial corridor development
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectLocation;


