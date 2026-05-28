"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tags = [
  "DTCP & RERA Approved Plotted Communities",
  "Premium Open Plots Near Hyderabad",
  "Resort Plots Near Woxsen University",
  "Strategic Growth Corridor Locations",
];

const projectLinks = [
  {
    name: "Supraja IRIS",
    href: "/projects/supraja-iris-resort-plots",
  },
  {
    name: "Bridge County",
    href: "/projects/bridge-county",
  },
  {
    name: "Sindhu Sarovar",
    href: "/projects/sindhu-sarovar",
  },
  {
    name: "Subash Meadows",
    href: "/projects/subash-meadows",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#07111f]">
      
      {/* Background Video */}
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

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#061225]/72" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#08172d]/70 via-[#0b1d35]/55 to-[#07111f]/88" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111f] to-transparent" />
      </div>

      {/* Content */}
      <div className="container-max relative z-10 px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

          <span className="text-sm font-semibold text-[#E8D7A5]">
            Sri Supraja Infracon Builders & Developers
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-6 max-w-6xl text-4xl font-display font-bold leading-[1.02] text-white sm:text-5xl lg:text-7xl"
        >
          DTCP & RERA Approved{" "}
          <span className="text-[#C9A227]">
            Open Plots Near Hyderabad
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-white/90 sm:text-lg"
        >
          Explore premium open plots, villa plots and resort plots across
          Kamkole, Sangareddy, Mominpet and Indrakaran. Sri Supraja Infracon
          develops plotted communities near NH-65, Woxsen University, Regional
          Ring Road influence zones and the NIMZ Zaheerabad growth corridor.
        </motion.p>

        {/* Keyword Tags */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm sm:text-sm"
            >
              {tag}
            </div>
          ))}
        </motion.div>

        {/* Project Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {projectLinks.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="rounded-full border border-[#C9A227]/40 bg-[#C9A227] px-5 py-3 text-sm font-semibold text-[#0B1633] transition hover:bg-white"
            >
              {project.name}
            </Link>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
          >
            Explore Projects
          </Link>

          <a
            href="https://wa.me/919640753929?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sri%20Supraja%20Infracon%20open%20plot%20projects."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B1633]"
          >
            WhatsApp Enquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;