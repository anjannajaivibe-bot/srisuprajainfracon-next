"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trustBadges = [
  "Clear Title & Approvals",
  "Strategic Growth Locations",
  "High Return Potential",
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
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-[#0B1633]">
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

      <div className="container-max relative z-10 px-4 pb-16 pt-19 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
          <span className="text-sm font-semibold text-[#E8D7A5]">
            Sri Supraja Infracon Builders & Developers
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-6 max-w-6xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          DTCP & RERA Approved{" "}
          <span className="text-[#C9A227]">Open Plots</span>
          <br className="hidden md:block" /> Near Hyderabad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mb-9 max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg"
        >
          Explore premium plotted developments across Kamkole, Sangareddy,
          Mominpet and Indrakaran, thoughtfully positioned around connectivity,
          infrastructure growth and high returns potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 backdrop-blur-sm sm:text-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          {projectLinks.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="min-w-[155px] rounded-full bg-[#C9A227] px-6 py-3 text-center text-sm font-bold text-[#0B1633] shadow-md transition hover:-translate-y-0.5 hover:bg-white"
            >
              {project.name}
            </Link>
          ))}
        </motion.div>

        <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-0 md:flex-row">
            <div className="shrink-0 border-b border-white/10 px-5 py-2.5 md:border-b-0 md:border-r">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#E8D7A5]">
                Completed Projects
              </span>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden py-4">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0B1633] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0B1633] to-transparent" />

              <div className="legacy-marquee-track flex w-max">
                {[...legacyProjects, ...legacyProjects].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="mx-6 whitespace-nowrap text-sm font-semibold text-slate-200"
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
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0B1633] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#C9A227]"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact-us/"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B1633]"
          >
            Plan a Site Visit
          </Link>
        </motion.div>

        <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm">
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