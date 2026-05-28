"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import SmartImage from "@/components/shared/SmartImage";

type ProjectHeroProps = {
  project: any;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[#081225] pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <SmartImage
          src={project.heroImage}
          alt={project.title}
          priority
          sizes="100vw"
          wrapperClassName="h-full w-full"
          imageClassName="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/96 via-[#0B1633]/90 to-[#1D355E]/82" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#081225] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container-max relative z-10 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300"
          >
            <Link
              href="/"
              className="transition hover:text-[#C9A227]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/projects"
              className="transition hover:text-[#C9A227]"
            >
              Projects
            </Link>

            <span>/</span>

            <span className="text-[#E8D7A5]">
              {project.title}
            </span>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-5 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

            <span className="text-sm font-semibold text-[#E8D7A5]">
              {project.status || "Premium Plotted Development"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-5xl text-4xl font-display font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-7 max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            {project.description}
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.highlights?.slice(0, 4).map((item: string) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white sm:text-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#0B1633] shadow-lg transition hover:bg-white"
            >
              Schedule Site Visit
            </Link>

            {project.brochure && (
              <a
                href={project.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B1633]"
              >
                Download Brochure
              </a>
            )}
          </motion.div>

          {/* Stats */}
          {project.stats && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {project.stats.map((stat: any) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-[#C9A227]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;