"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  GraduationCap,
  MapPinned,
  Ruler,
  Route,
} from "lucide-react";
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
    badge: "Premium Plotted Enclave",
    h1: "Bridge County",
    subtitle:
      "A peaceful plotted enclave within Supraja IRIS, designed for calm living, strong connectivity, and long-term location value.",
    firstParagraph:
      "Bridge County offers a dedicated 15-acre plotted setting within the broader Supraja IRIS lifestyle ecosystem.",
    description:
      "Planned for buyers seeking organized infrastructure, peaceful surroundings, and access to the future growth potential of Kamkole.",
    tags: [
      "Starting from ₹18.22 Lakhs",
      "15-Acre Enclave",
      "211 Premium Plots",
      "Adjacent to Woxsen University",
      "NH 65 Connectivity",
    ],
    imageAlt:
      "Bridge County premium plotted enclave within Supraja IRIS at Kamkole",
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

const premiumHeroStats: Record<string, any[]> = {
  "bridge-county": [
    {
      icon: BadgeCheck,
      label: "DTCP",
      value: "Approved",
    },
    {
      icon: Ruler,
      label: "15",
      value: "Acres",
    },
    {
      icon: Award,
      label: "211",
      value: "Premium Plots",
    },
    {
      icon: GraduationCap,
      label: "Near",
      value: "Woxsen University",
    },
    {
      icon: Route,
      label: "NH 65",
      value: "Connectivity",
    },
  ],

  "sindhu-sarovar": [
    {
      icon: BadgeCheck,
      label: "DTCP",
      value: "Approved",
    },
    {
      icon: Ruler,
      label: "Wide",
      value: "Internal Roads",
    },
    {
      icon: Award,
      label: "Gated",
      value: "Community",
    },
    {
      icon: MapPinned,
      label: "100ft",
      value: "Road Access",
    },
    {
      icon: Route,
      label: "Future",
      value: "Connectivity",
    },
  ],

  "subhash-meadows": [
    {
      icon: BadgeCheck,
      label: "LRS",
      value: "Charges Paid",
    },
    {
      icon: Ruler,
      label: "30ft+",
      value: "Blacktop Roads",
    },
    {
      icon: Award,
      label: "Planned",
      value: "Amenities",
    },
    {
      icon: MapPinned,
      label: "Near",
      value: "Key Hubs",
    },
    {
      icon: Route,
      label: "ORR",
      value: "Connectivity",
    },
  ],
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const seo = getProjectSeo(project.slug);
  const hero = heroCopy[project.slug] ?? fallbackHero;

  const isSuprajaIris =
    project.slug === "supraja-iris-resort-plots" ||
    project.slug === "supraja-iris";

  const hasPremiumFullHero =
    project.slug === "bridge-county" ||
    project.slug === "sindhu-sarovar" ||
    project.slug === "subhash-meadows";

  if (hasPremiumFullHero) {
    const stats = premiumHeroStats[project.slug] ?? [];

    return (
      <section className="relative overflow-hidden bg-[#07111F]">
        <div className="absolute inset-0">
          <SmartImage
            src={project.heroImage || project.image}
            alt={hero.imageAlt}
            priority
            sizes="100vw"
            wrapperClassName="h-full w-full"
            imageClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/72 to-[#07111F]/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/75 via-transparent to-[#07111F]/35" />
        </div>

        <div className="container-max relative z-10 px-4 pb-28 pt-28 sm:px-6 lg:px-8 lg:pb-36 lg:pt-32">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="transition hover:text-[#D6B15C]">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-[#D6B15C]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#E8D7A5]">{project.title}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#D6B15C]">
              {hero.badge}
            </span>
            <span className="h-px w-24 bg-[#D6B15C]/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            {hero.h1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-8 max-w-3xl"
          >
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {project.slug === "bridge-county" ? (
                <>
                  A Peaceful Plotted Enclave
                  <br />
                  Within <span className="text-[#D6B15C]">Supraja IRIS</span>
                </>
              ) : (
                hero.subtitle
              )}
            </p>

            {project.slug === "bridge-county" && (
              <div className="mt-8 max-w-xl rounded-[22px] border border-[#D6B15C]/35 bg-[#07111F]/55 p-6 shadow-2xl backdrop-blur-md">
                <p className="text-base font-semibold text-white">
                  Premium Plots Starting from
                </p>
                <p className="mt-2 text-5xl font-extrabold tracking-tight text-[#D6B15C] sm:text-6xl">
                  ₹18.22 <span className="text-2xl">Lakhs*</span>
                </p>
              </div>
            )}

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {hero.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D6B15C]/35 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact-us/"
                className="rounded-full bg-[#D6B15C] px-8 py-4 text-sm font-extrabold text-[#07111F] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore More
              </Link>

              {project.brochure && (
                <a
                  href={project.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#D6B15C]/70 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-[#07111F]"
                >
                  Download Brochure
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <div className="container-max relative z-20 -mt-20 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-0 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(7,17,31,0.18)] sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.label}-${item.value}`}
                  className={`flex items-center gap-4 px-6 py-7 ${
                    index !== stats.length - 1
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D6B15C]/50 bg-[#FFF8E5]">
                    <Icon className="h-7 w-7 text-[#C49A2C]" />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold leading-none text-[#07111F]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

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