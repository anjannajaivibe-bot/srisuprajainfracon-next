import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectCTA = ({ project }: Props) => {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          Sales Open Now
        </p>

        <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
          Plan Your Site Visit for {project.title}
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          Review current plot availability, location advantages, project
          approvals and development progress before the next price revision.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
          <a href="/projects" className="text-amber-300 underline">
            Explore all Sri Supraja Infracon projects
          </a>

          <a href="/contact" className="text-amber-300 underline">
            Visit contact page for enquiry details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;


