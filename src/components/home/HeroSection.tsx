
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tags = [
  "DTCP & RERA Approved Open Plots",
  "Premium Villa Plots Near Hyderabad",
  "Resort Plots Near Woxsen University",
  "Sales Open Now",
  "High ROI Growth Corridor",
];

const projectLinks = [
  {
    name: "Supraja IRIS Resort Plots",
    href: "/projects/supraja-iris-resort-plots",
  },
  {
    name: "Bridge County Open Plots",
    href: "/projects/bridge-county",
  },
  {
    name: "Sindhu Sarovar Plots",
    href: "/projects/sindhu-sarovar",
  },
  {
    name: "Subash Meadows Plots",
    href: "/projects/subash-meadows",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/heroBg.mp4" type="video/mp4" />
        </video>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-[#061225]/78" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#08172d]/85 via-[#0b1d35]/72 to-[#07111f]/92" />

        <div className="absolute inset-0 backdrop-blur-[1.5px]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07111f] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container-max relative z-10 px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />

          <span className="text-sm font-semibold text-gold">
            Sri Supraja Infracon Builders & Developers
          </span>
        </motion.div>

        {/* HERO TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-6 max-w-6xl text-4xl font-display font-bold leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-7xl"
        >
          DTCP & RERA Approved Open Plots Near Sangareddy for High ROI Growth
        </motion.h1>

        {/* HERO DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mb-10 max-w-4xl text-lg font-medium leading-relaxed text-white opacity-95 drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
          style={{
            color: "#ffffff",
          }}
        >
          Explore premium open plots, villa plots and resort plots across
          Kamkole, Sangareddy, Mominpet and Indrakaran. Our plotted communities
          are planned near high-growth corridors including NH-65, Woxsen
          University, Regional Ring Road influence zones and the NIMZ Zaheerabad
          corridor.
        </motion.p>

        {/* TAGS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />

              {tag}
            </span>
          ))}
        </motion.div>

        {/* PROJECT LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-10 flex flex-wrap justify-center gap-4"
        >
          {projectLinks.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="rounded-full border border-gold/40 bg-gold px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              {project.name}
            </Link>
          ))}
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-gold"
          >
            Explore Projects
          </Link>

          <a
            href="https://wa.me/919640753929?text=Hi%20May%20I%20know%20more%20details%20about%20the%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

