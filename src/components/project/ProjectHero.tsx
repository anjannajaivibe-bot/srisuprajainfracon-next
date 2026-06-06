"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SmartImage from "@/components/shared/SmartImage";
import { getProjectSeo } from "@/data/projectSeo";

type ProjectHeroProps = {
  project: any;
};

const getCorrectedSeo = (project: any) => {
  const seo = getProjectSeo(project.slug);

  if (project.slug !== "sindhu-sarovar") {
    return seo;
  }

  return {
    ...seo,
    h1: "Supraja Sindhu Sarovar DTCP & RERA Approved Open Plots",
    subtitle:
      "A thoughtfully planned gated community with 100-feet road connectivity, vastu-compliant layouts, black top roads, landscaped parks, and clear-title plotted development.",
    firstParagraph:
      "Supraja Sindhu Sarovar is a DTCP & RERA Approved plotted development designed with gated community planning, wide internal roads, landscaped parks, plantation-focused open spaces, and essential infrastructure for residential plot buyers.",
    description:
      "The project features abutting 100-feet road access, compound wall planning, 50-feet roads with central plantation median, black top roads, electricity with street lighting, overhead water tank, rainwater harvesting pits, and well-designed parks.",
    imageAlt:
      "Supraja Sindhu Sarovar DTCP & RERA Approved gated community open plots with entrance arch and internal roads",
    synonyms: [
      "DTCP & RERA Approved Open Plots",
      "Gated Community Plots",
      "100 Ft Road Connectivity",
      "Black Top Roads",
      "Vastu Compliant Layout",
    ],
  };
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const seo = getCorrectedSeo(project);
  const isSuprajaIris = project.slug === "supraja-iris-resort-plots";

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
            {project.status || "Premium Plotted Development"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-6xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          {seo.h1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 max-w-4xl text-lg font-semibold leading-relaxed text-[#E8D7A5] sm:text-xl"
        >
          {seo.subtitle}
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_18px_55px_rgba(11,22,51,0.10)] sm:p-8"
          >
            <p className="text-lg leading-relaxed text-[#4B5563]">
              {seo.firstParagraph}
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {seo.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {seo.synonyms.slice(0, 5).map((item: string) => (
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
                href="/contact"
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
                  aria-label={seo.imageAlt}
                >
                  <source src="/videos/supraja-iris-hero.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1633]/35 via-transparent to-transparent" />
              </div>
            ) : (
              <SmartImage
                src={project.heroImage || project.image}
                alt={seo.imageAlt}
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
