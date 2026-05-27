import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const ProjectAmenities = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];

  if (!content?.amenities?.length) return null;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
          Lifestyle Amenities
        </p>

        <h2 className="mb-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
          Amenities Planned for Better Living and Stronger Plot Value
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-600">
          The project amenities are designed to improve daily convenience,
          community experience and long-term buyer confidence.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.amenities.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-bold text-slate-950">
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

export default ProjectAmenities;


