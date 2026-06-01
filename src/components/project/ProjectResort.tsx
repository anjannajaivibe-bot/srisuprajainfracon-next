import Link from "next/link";
import SmartImage from "@/components/shared/SmartImage";
import type { Project } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";
import resortImage from "@/assets/project-iris.webp";

type Props = {
  project: Project;
};

const resortFeatures = [
  {
    title: "Lemon Tree Resort Under Construction",
    desc: "A major hospitality anchor under development within the ecosystem, improving lifestyle appeal and buyer confidence.",
  },
  {
    title: "Planned Water Villas",
    desc: "Premium water villa concept planned to strengthen the resort-style experience around the plotted community.",
  },
  {
    title: "Destination Wedding Convention",
    desc: "A planned venue concept for premium gatherings, events and family celebrations within the wider development vision.",
  },
  {
    title: "Water Theme Park Concept",
    desc: "Planned recreation-focused infrastructure designed to create weekend destination value for families and visitors.",
  },
  {
    title: "Amusement Park and Go-Karting",
    desc: "Adventure and entertainment attractions planned to improve footfall, recall value and lifestyle positioning.",
  },
  {
    title: "High ROI Growth Corridor",
    desc: "Located near NH-65, Woxsen University, Regional Ring Road influence zone and the Zaheerabad NIMZ corridor.",
  },
];

const ProjectResort = ({ project }: Props) => {
  if (project.slug !== "supraja-iris-resort-plots") return null;

  const seo = getProjectSeo(project.slug);

  return (
    <section className="bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
            Resort Lifestyle Ecosystem
          </p>

          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {seo.focusKeyword} with Resort Ecosystem
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            Supraja IRIS is positioned as a{" "}
            <strong>resort-style plotted development</strong> near Kamkole with
            Lemon Tree Resort under construction and planned leisure attractions
            such as water villas, water theme park and go-karting.
          </p>
        </div>

        <div className="mb-16 overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <SmartImage
            src={typeof resortImage === "string" ? resortImage : resortImage.src}
            alt={seo.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resortFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-amber-700">
                ✓
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-100 bg-white p-7 shadow-sm">
          <p className="text-lg leading-relaxed text-slate-700">
            Buyers searching for <strong>{seo.synonyms[0]}</strong>,{" "}
            <strong>{seo.synonyms[2]}</strong> and{" "}
            <strong>{seo.synonyms[3]}</strong> can evaluate Supraja IRIS for its
            combination of land ownership, planned leisure infrastructure and
            strategic corridor advantage.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
            <Link href="/projects" className="text-blue-700 underline">
              Explore more Sri Supraja Infracon projects
            </Link>

            <a
              href="https://www.woxsen.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              View Woxsen University
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectResort;



