import SmartImage from "@/components/shared/SmartImage";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56 w-full overflow-hidden">
        <SmartImage
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-slate-900 shadow">
          {project.status}
        </span>
      </div>

      <div className="p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-600">
          {project.location}
        </p>

        <h3 className="mb-3 text-2xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mb-5 text-base leading-relaxed text-slate-600">
          {project.shortDescription}
        </p>

        <ul className="mb-6 space-y-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-700">
              <span className="font-bold text-amber-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={project.link}
          className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          aria-label={`View details about ${project.title}`}
        >
          View Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;