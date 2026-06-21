"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trustBadges = [
  "24+ Years Legacy",
  "Prime Growth Corridors",
  "Transparent Documentation",
];

const projectLinks = [
  { name: "Supraja IRIS", href: "/projects/supraja-iris-resort-plots" },
  { name: "Bridge County", href: "/projects/bridge-county" },
  { name: "Sindhu Sarovar", href: "/projects/sindhu-sarovar" },
  { name: "Subhash Meadows", href: "/projects/subhash-meadows" },
];

const legacyProjects = [
  "Sai Sreenivasam Apartments, Nallagandla",
  "Sreenivasa Anandam Apartments, Huda Trade Centre",
  "Supraja Harmony Villas, Ameenpur",
  "Supraja Harivillu Open Plots, Beeramguda",
  "Supraja Marvel Open Plots, Isnapur",
  "Supraja IIT Technopark Open Plots, IIT Kandi",
  "many other projects completed",
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1633] pt-24 sm:pt-28 lg:min-h-[88vh] lg:pt-0">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/heroBg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/95 via-[#0B1633]/88 to-[#1A2F5A]/82" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1633] to-transparent" />
      </div>

      <div className="container-max relative z-10 w-full px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 md:pb-14 lg:px-8 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-3 py-2 sm:mb-6 sm:px-5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#C9A227]" />
          <span className="text-[11px] font-semibold text-[#E8D7A5] sm:text-sm">
            Sri Supraja Infracon Builders & Developers
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-4 max-w-6xl font-display text-[30px] font-bold leading-[1.12] tracking-tight text-white min-[390px]:text-[34px] sm:text-5xl md:text-[52px] lg:mb-6 lg:text-7xl lg:leading-[1.03]"
        >
          DTCP & RERA Approved{" "}
          <span className="text-[#C9A227]">Open Plots</span>
          <br className="hidden md:block" /> Near Hyderabad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mb-6 max-w-4xl text-sm leading-6 text-slate-200 sm:mb-8 sm:text-base sm:leading-7 md:text-lg md:leading-relaxed"
        >
          Explore premium plotted developments across Kamkole, Sangareddy,
          Mominpet and Indrakaran, thoughtfully positioned around connectivity,
          infrastructure growth and high returns potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-7 sm:gap-3"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-semibold text-slate-100 backdrop-blur-sm sm:px-4 sm:text-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mx-auto mb-6 grid max-w-[520px] grid-cols-2 gap-3 sm:mb-7 md:max-w-3xl md:grid-cols-4"
        >
          {projectLinks.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="rounded-full bg-[#C9A227] px-3 py-3 text-center text-[11px] font-bold text-[#0B1633] shadow-md transition hover:-translate-y-0.5 hover:bg-white sm:text-sm"
            >
              {project.name}
            </Link>
          ))}
        </motion.div>

        <div className="mx-auto mt-5 max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm sm:mt-7">
          <div className="flex flex-col items-center gap-0 lg:flex-row">
            <div className="w-full shrink-0 border-b border-white/10 px-4 py-2.5 lg:w-auto lg:border-b-0 lg:border-r">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8D7A5] sm:text-sm sm:tracking-[0.18em]">
                Completed Projects
              </span>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden py-3 sm:py-4">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#0B1633] to-transparent sm:w-16" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#0B1633] to-transparent sm:w-16" />

              <div className="legacy-marquee-track flex w-max">
                {[...legacyProjects, ...legacyProjects].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="mx-4 whitespace-nowrap text-[11px] font-semibold text-slate-200 sm:mx-6 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10"
        >
          <Link
            href="/projects"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0B1633] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#C9A227] sm:px-8 sm:py-4"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact-us/"
            className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B1633] sm:px-8 sm:py-4"
          >
            Plan a Site Visit
          </Link>
        </motion.div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] sm:mt-7 sm:text-sm">
          <Link
            href="/projects"
            className="font-bold text-[#E8D7A5] underline"
          >
            Project Brochures
          </Link>

          <Link
            href="/projects"
            className="font-bold text-[#E8D7A5] underline"
          >
            Location Advantages
          </Link>

          <a
            href="https://www.rera.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#E8D7A5] underline"
          >
            Telangana RERA
          </a>

          <a
            href="https://dtcp.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#E8D7A5] underline"
          >
            Telangana DTCP
          </a>
        </div>
      </div>

      <style jsx>{`
        .legacy-marquee-track {
          animation: legacy-marquee-scroll 38s linear infinite;
        }

        .legacy-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes legacy-marquee-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;