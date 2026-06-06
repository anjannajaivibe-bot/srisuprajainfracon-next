import SmartImage from "@/components/shared/SmartImage";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const ProjectGallery = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const seo = getProjectSeo(project.slug);

  if (!content?.gallery?.length) return null;

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Project Gallery
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {seo.focusKeyword} Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Explore project visuals, layout views, entrance concepts,
            development progress and infrastructure highlights for{" "}
            <strong>{seo.synonyms[0]}</strong>.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.gallery.map((image, index) => (
            <div
              key={image}
              className="group overflow-hidden rounded-[30px] bg-slate-100 shadow-lg"
            >
              <SmartImage
                src={image}
                alt={`${seo.focusKeyword} gallery image ${index + 1}`}
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;




