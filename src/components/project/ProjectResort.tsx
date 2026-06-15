import Link from "next/link";
import SmartImage from "@/components/shared/SmartImage";
import type { Project } from "@/data/projects";
import resortImage from "@/assets/project-iris.webp";

type Props = {
  project: Project;
};

const resortFeatures = [
  {
    title: "Lemon Tree Resort",
    desc: "Under construction within the Supraja IRIS project ecosystem.",
  },
  {
    title: "Water & Amusement Theme Park",
    desc: "Planned recreation space designed to add lifestyle value.",
  },
  {
    title: "Go-Karting",
    desc: "Planned adventure attraction for leisure and weekend activity.",
  },
  {
    title: "Water Villas",
    desc: "Planned lifestyle feature within the larger resort-inspired vision.",
  },
  {
    title: "Convention & Event Spaces",
    desc: "Planned hospitality-focused spaces for gatherings and celebrations.",
  },
  {
    title: "Growth Corridor Advantage",
    desc: "Near NH-65, Woxsen University, RRR influence zone, and NIMZ corridor.",
  },
];

const ProjectResort = ({ project }: Props) => {
  const isSuprajaIris =
    project.slug === "supraja-iris-resort-plots" ||
    project.slug === "supraja-iris";

  if (!isSuprajaIris) return null;

  return (
    <section className="bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
            Lifestyle Attractions
          </p>

          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            A Resort-Inspired Project Ecosystem
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            Supraja IRIS brings plotted ownership together with planned
            lifestyle attractions, hospitality spaces, and long-term location
            value in Kamkole.
          </p>
        </div>

        <div className="mb-16 overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <SmartImage
            src={typeof resortImage === "string" ? resortImage : resortImage.src}
            alt="Supraja IRIS resort-inspired project ecosystem with lifestyle attractions in Kamkole"
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
            Designed for investors, clients, and families, Supraja IRIS combines
            land ownership with a planned leisure ecosystem and access to key
            regional growth drivers.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
            <Link href="/projects" className="text-blue-700 underline">
              Explore more Sri Supraja Infracon projects
            </Link>

            <Link
              href="/resort-plots-in-hyderabad"
              className="text-blue-700 underline"
            >
              Read about resort plots in Hyderabad
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