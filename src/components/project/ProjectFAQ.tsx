import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const ProjectFAQ = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];

  if (!content?.faq?.length) return null;

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
          Frequently Asked Questions
        </p>

        <h2 className="mb-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
          Buyer Questions About {project.title}
        </h2>

        <p className="mb-10 text-lg leading-relaxed text-slate-600">
          These answers help buyers understand project positioning, location
          value, approvals, sales status and site visit planning.
        </p>

        <div className="space-y-5">
          {content.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-950">
                {item.question}
              </h3>

              <p className="leading-relaxed text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFAQ;


