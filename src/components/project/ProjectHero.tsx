"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SmartImage from "@/components/shared/SmartImage";
import { getProjectSeo } from "@/data/projectSeo";

type ProjectHeroProps = {
  project: any;
};

const heroCopy: Record<
  string,
  {
    badge: string;
    h1: string;
    subtitle: string;
    firstParagraph: string;
    description: string;
    tags: string[];
    imageAlt: string;
  }
> = {
  "supraja-iris-resort-plots": {
    badge: "Resort-Inspired Project",
    h1: "Resort-Inspired Plots in Kamkole",
    subtitle:
      "A destination-led plotted project shaped around lifestyle attractions, future-ready infrastructure, and long-term location value.",
    firstParagraph:
      "Supraja IRIS brings together plotted ownership, planned lifestyle attractions, and a growth-oriented location in Kamkole.",
    description:
      "Lemon Tree Resort is under construction, while Water & Amusement Theme Park, Go-Karting, and Water Villas are planned as part of the larger lifestyle ecosystem.",
    tags: [
      "Kamkole Growth Corridor",
      "Lemon Tree Resort",
      "Theme Park Planned",
      "Go-Karting Planned",
      "Water Villas Planned",
    ],
    imageAlt:
      "Supraja IRIS resort inspired plots in Kamkole with lifestyle attractions and project infrastructure",
  },

  "supraja-iris": {
    badge: "Resort-Inspired Project",
    h1: "Resort-Inspired Plots in Kamkole",
    subtitle:
      "A destination-led plotted project shaped around lifestyle attractions, future-ready infrastructure, and long-term location value.",
    firstParagraph:
      "Supraja IRIS brings together plotted ownership, planned lifestyle attractions, and a growth-oriented location in Kamkole.",
    description:
      "Lemon Tree Resort is under construction, while Water & Amusement Theme Park, Go-Karting, and Water Villas are planned as part of the larger lifestyle ecosystem.",
    tags: [
      "Kamkole Growth Corridor",
      "Lemon Tree Resort",
      "Theme Park Planned",
      "Go-Karting Planned",
      "Water Villas Planned",
    ],
    imageAlt:
      "Supraja IRIS resort inspired plots in Kamkole with lifestyle attractions and project infrastructure",
  },

  "bridge-county": {
    badge: "15-Acre Enclave within Supraja IRIS",
    h1: "A Peaceful Plotted Enclave within Supraja IRIS",
    subtitle:
      "A dedicated 15-acre plotted area in Kamkole, connected to the larger Supraja IRIS project environment.",
    firstParagraph:
      "Bridge County offers a quieter plotted setting within the broader Supraja IRIS lifestyle ecosystem.",
    description:
      "Planned for clients seeking calm surroundings, organized infrastructure, and access to the long-term potential of the Kamkole growth corridor.",
    tags: [
      "15-Acre Enclave",
      "Within Supraja IRIS",
      "Kamkole Location",
      "Peaceful Setting",
      "Planned Infrastructure",
    ],
    imageAlt:
      "Bridge County 15 acre plotted enclave within Supraja IRIS project at Kamkole",
  },

  "sindhu-sarovar": {
    badge: "Planned Project",
    h1: "A Project Designed Around Planning and Connectivity",
    subtitle:
      "A thoughtfully planned project focused on organized layouts, accessibility, and future location relevance.",
    firstParagraph:
      "Sindhu Sarovar is shaped around planning quality, practical infrastructure, and access to an evolving regional location.",
    description:
      "Designed for investors and families seeking clear planning standards, dependable project execution, and long-term ownership confidence.",
    tags: [
      "Planned Layout",
      "Accessible Location",
      "Future Potential",
      "Organized Infrastructure",
      "Clear Planning",
    ],
    imageAlt:
      "Supraja Sindhu Sarovar planned project with organized layout and connectivity",
  },

  "subhash-meadows": {
    badge: "Well-Connected Project",
    h1: "Well-Connected Plots Near Key Growth Destinations",
    subtitle:
      "A practical land ownership opportunity near education, employment, and transportation corridors.",
    firstParagraph:
      "Subhash Meadows offers accessibility, essential infrastructure, and long-term location relevance.",
    description:
      "The project is suited for investors and future homeowners seeking a well-planned setting close to important regional destinations.",
    tags: [
      "Indrakaran Location",
      "Near Key Hubs",
      "Accessible Project",
      "LRS Charges Paid",
      "Future Planning",
    ],
    imageAlt:
      "Subhash Meadows well connected plotted project near key growth destinations",
  },
};

const fallbackHero = {
  badge: "Sri Supraja Project",
  h1: "A Thoughtfully Planned Real Estate Project",
  subtitle:
    "Designed around accessibility, infrastructure, and long-term ownership confidence.",
  firstParagraph:
    "This project reflects Sri Supraja Infracon’s focus on dependable planning and customer trust.",
  description:
    "Created for investors, clients, and families seeking a clear and future-ready real estate opportunity.",
  tags: ["Planned Project", "Accessible Location", "Sri Supraja Infracon"],
  imageAlt: "Sri Supraja Infracon real estate project",
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const seo = getProjectSeo(project.slug);
  const hero = heroCopy[project.slug] ?? fallbackHero;

  const isSuprajaIris =
    project.slug === "supraja-iris-resort-plots" ||
    project.slug === "supraja-iris";

  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] pt-28">
      <div className="absolute inset-x-0 top-0 h-[470px] bg-gradient-to-br from-[#081225] via-[#0B1633] to-[#18345F]" />

      <div className="container-max relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-200">
          <Link href="/" className="transition hover:text-[#C9A227]">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="transition hover:text-[#C9A227]">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#E8D7A5]">{project.title}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
          <span className="text-sm font-semibold text-[#E8D7A5]">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-6xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          {hero.h1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 max-w-4xl text-lg font-semibold leading-relaxed text-[#E8D7A5] sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_18px_55px_rgba(11,22,51,0.10)] sm:p-8"
          >
            <p className="text-lg leading-relaxed text-[#4B5563]">
              {hero.firstParagraph}
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {hero.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E8D7A5] bg-[#FFF9E8] px-4 py-2 text-xs font-bold text-[#0B1633] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-us/"
                className="rounded-full bg-[#0B1633] px-7 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Schedule Site Visit
              </Link>

              {project.brochure && (
                <a
                  href={project.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#C9A227] bg-white px-7 py-4 text-sm font-bold text-[#0B1633] transition hover:-translate-y-0.5 hover:bg-[#C9A227]"
                >
                  Download Brochure
                </a>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
              {seo.internalLinks.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-700 underline"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://www.rera.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Telangana RERA
              </a>

              <a
                href="https://dtcp.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Telangana DTCP
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-[#C9A227]/45 via-white/20 to-[#0B1633]/25 blur-xl" />

            {isSuprajaIris ? (
              <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] border border-white/60 shadow-[0_22px_70px_rgba(11,22,51,0.18)] sm:h-[420px] lg:h-full lg:min-h-[460px]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp"
                  aria-label={hero.imageAlt}
                >
                  <source src="/videos/supraja-iris-hero.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1633]/35 via-transparent to-transparent" />
              </div>
            ) : (
              <SmartImage
                src={project.heroImage || project.image}
                alt={hero.imageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                wrapperClassName="relative h-[320px] w-full rounded-[32px] border border-white/60 shadow-[0_22px_70px_rgba(11,22,51,0.18)] sm:h-[420px] lg:h-full lg:min-h-[460px]"
                imageClassName="object-cover"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;