import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const ProjectCTA = ({ project }: Props) => {
  const seo = getProjectSeo(project.slug);

  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          Sales Open Now
        </p>

        <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
          Plan Your Site Visit for {seo.focusKeyword}
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          Review current plot availability, location advantages, approvals and
          development progress for <strong>{seo.synonyms[0]}</strong>,{" "}
          <strong>{seo.synonyms[1]}</strong> and {project.title} before making
          your next site visit decision.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
          <Link href="/projects" className="text-amber-300 underline">
            Explore all Sri Supraja Infracon projects
          </Link>

          <Link href="/contact-us/" className="text-amber-300 underline">
            Visit contact page for enquiry details
          </Link>

          <a
            href="https://wa.me/919640753929"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 underline"
          >
            Schedule site visit on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;




