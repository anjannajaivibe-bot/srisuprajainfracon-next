import SmartImage from "@/components/shared/SmartImage";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const galleryCopy: Record<
  string,
  {
    title: string;
    intro: string;
    altPrefix: string;
  }
> = {
  "supraja-iris": {
    title: "Supraja IRIS",
    intro:
      "Explore site visuals, project layouts, entrance features, lifestyle attractions, and key infrastructure elements.",
    altPrefix:
      "Supraja IRIS resort-inspired plots in Kamkole project gallery",
  },

  "supraja-iris-resort-plots": {
    title: "Supraja IRIS",
    intro:
      "Explore site visuals, project layouts, entrance features, lifestyle attractions, and key infrastructure elements.",
    altPrefix:
      "Supraja IRIS resort-inspired plots in Kamkole project gallery",
  },

  "bridge-county": {
    title: "Bridge County Gallery",
    intro:
      "View project visuals, layout references, entrance features, and site infrastructure from this 15-acre enclave within Supraja IRIS.",
    altPrefix:
      "Bridge County 15-acre plotted enclave within Supraja IRIS gallery",
  },

  "sindhu-sarovar": {
    title: "Sindhu Sarovar Gallery",
    intro:
      "Explore project visuals, layout references, entrance features, and infrastructure elements.",
    altPrefix:
      "Supraja Sindhu Sarovar planned project gallery",
  },

  "subhash-meadows": {
    title: "Subhash Meadows Gallery",
    intro:
      "View site visuals, layout references, entrance features, and key project infrastructure.",
    altPrefix:
      "Subhash Meadows well-connected plotted project gallery",
  },
};

const fallbackGallery = {
  title: "Project Gallery",
  intro:
    "Explore site visuals, layout references, entrance features, and project infrastructure.",
  altPrefix: "Sri Supraja Infracon project gallery",
};

const ProjectGallery = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const copy = galleryCopy[project.slug] ?? fallbackGallery;

  if (!content?.gallery?.length) return null;

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Project Gallery
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            {copy.intro}
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
                alt={`${copy.altPrefix} image ${index + 1}`}
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