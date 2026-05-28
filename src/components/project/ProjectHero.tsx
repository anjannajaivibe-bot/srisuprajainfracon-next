"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SmartImage from "@/components/shared/SmartImage";

type ProjectHeroProps = {
  project: any;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#07111f] pt-28">
      <div className="absolute inset-0">
        <SmartImage
          src={project.heroImage || project.image}
          alt={`${project.title} by Sri Supraja Infracon`}
          priority
          sizes="100vw"
          wrapperClassName="h-full w-full"
          imageClassName="object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061225]/88 via-[#061225]/58 to-[#061225]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061225]/95 via-transparent to-[#061225]/35" />
      </div>

      <div className="container-max relative z-10 flex min-h-[calc(88vh-7rem)] items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80"
          >
            <Link href="/" className="hover:text-[#C9A227]">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#C9A227]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#E8D7A5]">{project.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/15 px-5 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
            <span className="text-sm font-semibold text-[#E8D7A5]">
              {project.status || "Premium Plotted Development"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-display font-bold leading-[1.04] text-white drop-shadow-xl sm:text-5xl lg:text-7xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg"
          >
            {project.description}
          </motion.p>

          {project.highlights?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {project.highlights.slice(0, 4).map((item: string) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#061225] shadow-lg transition hover:bg-white"
            >
              Schedule Site Visit
            </Link>

            {project.brochure && (
              <a
                href={project.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 bg-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#061225]"
              >
                Download Brochure
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;