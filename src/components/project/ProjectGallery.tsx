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

const galleryCategoryMap: Record<string, string[]> = {
  "supraja-iris": [
    "Entrance",
    "Lifestyle",
    "Resort",
    "Infrastructure",
    "Open Spaces",
    "Planning",
    "Community",
  ],

  "supraja-iris-resort-plots": [
    "Resort",
    "Resort",
    "Lifestyle",
    "Location",
    "Lifestyle",
    "Amenities",
    "Amenities",
  ],

  "bridge-county": [
    "Resort",
    "Resort",
    "Lifestyle",
    "Location",
    "Lifestyle",
    "Amenities",
    "Amenities",
    "Community",
    "Entrance",
    "Infrastructure",
    "Open Spaces",
    "Planning",
  ],

  "sindhu-sarovar": [
    "Entrance",
    "Infrastructure",
    "Open Spaces",
    "Lifestyle",
    "Planning",
    "Layout",
  ],

  "subhash-meadows": [
    "Entrance",
    "Infrastructure",
    "Open Spaces",
    "Connectivity",
    "Location",
    "Planning",
    "Map",
  ],
};

const getCardClassName = (index: number, total: number) => {
  if (index === 0) {
    return "md:col-span-2 xl:col-span-2";
  }

  if (index === total - 1 && total > 5) {
    return "md:col-span-2 xl:col-span-3";
  }

  return "";
};

const getImageHeightClassName = (index: number, total: number) => {
  if (index === 0) {
    return "h-[360px] md:h-[460px]";
  }

  if (index === total - 1 && total > 5) {
    return "h-[300px] md:h-[390px]";
  }

  return "h-[300px] md:h-[340px]";
};

const ProjectGallery = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const copy = galleryCopy[project.slug] ?? fallbackGallery;

  const gallery = extraGalleryImages[project.slug] ?? content?.gallery ?? [];

  if (!gallery.length) return null;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.45em] text-amber-700">
            Project Visuals
          </p>

          <div className="mx-auto mb-5 h-px w-20 bg-amber-600/60" />

          <h2 className="font-display text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {copy.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["All", "Lifestyle", "Location", "Infrastructure", "Amenities"].map(
              (item, index) => (
                <span
                  key={item}
                  className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition ${
                    index === 0
                      ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                      : "border-slate-200 bg-white text-slate-600 shadow-sm"
                  }`}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((image, index) => {
            const overlayText =
              galleryOverlayText[project.slug]?.[index] ??
              `${copy.title} View ${index + 1}`;

            const category =
              galleryCategoryMap[project.slug]?.[index] ?? "Project View";

            return (
              <article
                key={image}
                className={`group relative overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.16)] ${getCardClassName(
                  index,
                  gallery.length,
                )}`}
              >
                <SmartImage
                  src={image}
                  alt={`${copy.altPrefix} image ${index + 1}`}
                  className={`${getImageHeightClassName(
                    index,
                    gallery.length,
                  )} w-full transition-transform duration-700 group-hover:scale-105`}
                  imageClassName="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md">
                    {category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="mb-4 h-[2px] w-12 bg-amber-400" />

                  <h3 className="max-w-xl text-2xl font-extrabold leading-tight text-white md:text-3xl">
                    {overlayText}
                  </h3>

                  {index === 0 && (
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
                      A premium visual highlight from the project environment.
                    </p>
                  )}
                </div>

                <div className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-950 shadow-xl transition duration-500 group-hover:scale-110 md:flex">
                  →
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;