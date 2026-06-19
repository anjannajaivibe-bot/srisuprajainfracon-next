"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";


import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";

const locationLinks = [
  {
    label: "Supraja IRIS",
    href: "/projects/supraja-iris-resort-plots",
  },
  {
    label: "Bridge County",
    href: "/projects/bridge-county",
  },
  {
    label: "Sindhu Sarovar",
    href: "/projects/sindhu-sarovar",
  },
  {
    label: "Subhash Meadows",
    href: "/projects/subhash-meadows",
  },
  {
    label: "Resort Plot Guide",
    href: "/resort-plots-in-hyderabad",
  },
  {
    label: "West Hyderabad Corridor",
    href: "/open-plots-in-west-hyderabad-mumbai-highway",
  },
];

export default function ProjectsClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FBF8EF] to-[#F4EFE1]">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E8D7A5]/35 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#C9A227]/20 blur-3xl" />

        <div className="container-max relative z-10 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-flex rounded-full border border-[#E8D7A5] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9A7A16] shadow-sm"
            >
              Sri Supraja Infracon Projects
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-[#111827] sm:text-5xl lg:text-7xl"
            >
              Real Estate Projects Across{" "}
              <span className="text-[#B88900]">Hyderabad Growth Corridors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-[#4B5563]"
            >
              Explore Sri Supraja Infracon projects across Kamkole, Mominpet,
              Sangareddy and Indrakaran, including resort-inspired plots,
              residential project layouts, and future-focused land ownership
              opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {locationLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#E8D7A5] bg-white px-4 py-2 text-sm font-bold text-[#111827] shadow-sm transition hover:border-[#C9A227] hover:bg-[#FFF7DD]"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact-us/"
                className="rounded-full bg-[#111827] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#C9A227] hover:text-[#111827]"
              >
                Schedule Site Visit
              </Link>

              <Link
                href="#projects-list"
                className="rounded-full border border-[#C9A227] bg-white px-8 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#FFF7DD]"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
            >
              <div className="rounded-3xl border border-[#EFE7D3] bg-white p-6 shadow-sm">
                <p className="text-3xl font-extrabold text-[#B88900]">4+</p>
                <p className="mt-2 text-sm font-bold text-[#374151]">
                  Current project destinations
                </p>
              </div>

              <div className="rounded-3xl border border-[#EFE7D3] bg-white p-6 shadow-sm">
                <p className="text-3xl font-extrabold text-[#B88900]">15</p>
                <p className="mt-2 text-sm font-bold text-[#374151]">
                  Acre Bridge County enclave
                </p>
              </div>

              <div className="rounded-3xl border border-[#EFE7D3] bg-white p-6 shadow-sm">
                <p className="text-3xl font-extrabold text-[#B88900]">350</p>
                <p className="mt-2 text-sm font-bold text-[#374151]">
                  Acre Supraja IRIS project vision
                </p>
              </div>
            </motion.div>

            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://www.rera.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#7A5A00] underline"
              >
                Telangana RERA
              </a>

              <a
                href="https://dtcp.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#7A5A00] underline"
              >
                Telangana DTCP
              </a>
            </div>
          </div>
        </div>
      </section>

      <FlagshipProject />

      <div id="projects-list">
        <ProjectsSection />
      </div>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#B88900]">
            Location Advantage
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Projects Positioned Around Emerging Growth Corridors
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4B5563]">
            Our projects are planned across locations influenced by improving
            connectivity, education hubs, employment activity, and regional
            infrastructure. Each project offers a different ownership perspective
            based on location, scale, lifestyle value, and future relevance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/open-plots-and-resorts-in-hyderabad"
              className="rounded-full bg-[#111827] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#111827]"
            >
              Open Plots & Resorts
            </Link>

            <Link
              href="/gated-community-plots-in-hyderabad"
              className="rounded-full border border-[#C9A227] bg-[#FFF9E8] px-6 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#C9A227]"
            >
              Gated Project Guide
            </Link>

            <Link
              href="/resort-plots-in-hyderabad"
              className="rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-bold text-[#111827] transition hover:border-[#C9A227] hover:bg-[#FFF9E8]"
            >
              Resort Plot Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF8EF] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-sm md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#B88900]">
              Investor Guidance
            </p>

            <h3 className="text-2xl font-extrabold leading-tight text-[#111827] md:text-4xl">
              How to Evaluate a Project Before Planning Your Visit
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
              Review the project location, access roads, documentation, current
              availability, development progress, brochure details, and site
              visit options. For locations near NH-65, Woxsen University, ORR
              influence zones, and emerging infrastructure corridors, clarity at
              this stage helps investors and families make informed decisions.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/projects" className="text-blue-700 underline">
                Explore project options
              </Link>

              <Link href="/contact-us/" className="text-blue-700 underline">
                Request site visit support
              </Link>

              <a
                href="https://www.woxsen.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Woxsen University
              </a>
            </div>

            <p className="mt-7 text-base leading-relaxed text-[#4B5563]">
              Sri Supraja Infracon focuses on transparent project communication,
              organized planning, location-led decision support, and dependable
              customer assistance across its project portfolio.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}