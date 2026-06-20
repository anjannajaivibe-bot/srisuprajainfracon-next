import SmartImage from "@/components/shared/SmartImage";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const extraGalleryImages: Record<string, string[]> = {
  "supraja-iris": [
    "/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-3.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-4.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-6.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-7.webp",
  ],

  "supraja-iris-resort-plots": [
    "/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-3.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-4.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-6.webp",
    "/projects/supraja-iris/gallery/supraja-iris-gallery-7.webp",
  ],

  "bridge-county": [
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-1.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-2.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-3.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-4.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-5.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-6.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-7.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-8.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-9.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-10.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-11.webp",
    "/projects/supraja-bridge/gallery/supraja-iris-gallery-12.webp",
  ],

  "sindhu-sarovar": [
    "/projects/supraja-sindhusarovar/gallery/gallery-1.webp",
    "/projects/supraja-sindhusarovar/gallery/gallery-2.webp",
    "/projects/supraja-sindhusarovar/gallery/gallery-3.webp",
    "/projects/supraja-sindhusarovar/gallery/gallery-4.webp",
    "/projects/supraja-sindhusarovar/gallery/gallery-5.webp",
    "/projects/supraja-sindhusarovar/gallery/gallery-6.webp",
  ],

  "subhash-meadows": [
    "/projects/subhash-meadows/gallery/gallery-1.webp",
    "/projects/subhash-meadows/gallery/gallery-2.webp",
    "/projects/subhash-meadows/gallery/gallery-3.webp",
    "/projects/subhash-meadows/gallery/gallery-4.webp",
    "/projects/subhash-meadows/gallery/gallery-5.webp",
    "/projects/subhash-meadows/gallery/gallery-6.webp",
    "/projects/subhash-meadows/gallery/gallery-7.webp",
  ],
};

const galleryOverlayText: Record<string, string[]> = {
  "supraja-iris": [
    "Grand Entrance",
    "Lifestyle Attractions",
    "Resort-Inspired Setting",
    "Blacktop Roads",
    "Open Green Spaces",
    "Future-Ready Infrastructure",
    "Premium Plotted Community",
  ],

  "supraja-iris-resort-plots": [
    "Lemon Tree Resort Under Construction",
    "Lemon Tree Resort After Completion",
    "Water Villas Under Construction",
    "Adjacent to Woxsen University",
    "Destination Wedding Hall - Under Construction",
    "Water & Amusement Park Planned",
    "Go-Karting Planned",
  ],

  "bridge-county": [
    "Lemon Tree Resort Under Construction",
    "Lemon Tree Resort Vision",
    "Water Villas Concept",
    "Adjacent to Woxsen University",
    "Destination Wedding Hall - Under Construction",
    "Water & Amusement Park Planned",
    "Go-Karting Zone Planned",
    "Supraja IRIS Master-Planned Community",
    "Bridge County Entrance Vision",
    "Wide Internal Blacktop Roads",
    "Parks & Open Green Spaces",
    "Well-Planned Plot Infrastructure",
  ],

  "sindhu-sarovar": [
    "Grand Project Entrance",
    "Wide Internal Blacktop Roads",
    "Landscaped Open Spaces",
    "Community Park Setting",
    "Master-Planned Layout",
    "Clear Plot Layout Plan",
  ],

  "subhash-meadows": [
    "Signature Project Entrance",
    "Infrastructure-Ready Road Network",
    "Parks & Landscaped Open Spaces",
    "Connected to Key Growth Destinations",
    "Well-Connected Location Advantage",
    "Planned Infrastructure for Better Tomorrow",
    "Strategic Project Location Map",
  ],
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
    title: "Future Growth Drivers Around Bridge County",
    intro:
      "Discover the landmarks and growth catalysts surrounding Bridge County, including hospitality destinations, educational institutions, recreation zones, and major connectivity corridors shaping the future of the region.",
    altPrefix:
      "Bridge County 15-acre plotted enclave within Supraja IRIS gallery",
  },

  "sindhu-sarovar": {
    title: "Supraja Sindhu Sarovar Gallery",
    intro:
      "Explore the entrance, internal roads, landscaped spaces, layout views, and planned infrastructure that define the project environment.",
    altPrefix:
      "Supraja Sindhu Sarovar planned plotted development gallery",
  },

  "subhash-meadows": {
    title: "Subhash Meadows Gallery",
    intro:
      "View the entrance, internal roads, landscaped open spaces, location highlights, and planned infrastructure that position Subhash Meadows as a well-connected plotted project.",
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

  const gallery = extraGalleryImages[project.slug] ?? content?.gallery ?? [];

  if (!gallery.length) return null;

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
          {gallery.map((image, index) => {
            const overlayText =
              galleryOverlayText[project.slug]?.[index] ??
              `${copy.title} View ${index + 1}`;

            return (
              <div
                key={image}
                className="group relative overflow-hidden rounded-[30px] bg-slate-100 shadow-lg"
              >
                <SmartImage
                  src={image}
                  alt={`${copy.altPrefix} image ${index + 1}`}
                  className="h-[320px] w-full transition-transform duration-500 group-hover:scale-105"
                  imageClassName="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
                    {overlayText}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;