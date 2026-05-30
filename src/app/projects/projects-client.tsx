"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FlagshipProject from "@/components/home/FlagshipProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";

import heroBg from "@/assets/hero-bg.webp";

const locationLinks = [
  {
    label: "Kamkole Open Plots",
    href: "/projects/supraja-iris-resort-plots",
  },
  {
    label: "Mominpet Plots",
    href: "/projects/sindhu-sarovar",
  },
  {
    label: "Sangareddy Projects",
    href: "/projects",
  },
  {
    label: "Indrakaran Open Plots",
    href: "/projects/Subhash-meadows",
  },
  {
    label: "Plots Near NH-65",
    href: "/open-plots-in-west-hyderabad-mumbai-highway",
  },
  {
    label: "Resort Plot Guide",
    href: "/resort-plots-in-hyderabad",
  },
];

export default function ProjectsClient() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#081225]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${heroBg.src})` }}
          role="img"
          aria-label="DTCP & RERA Approved Open Plots Near Hyderabad by Sri Supraja Infracon"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/98 via-[#0B1633]/92 to-[#18345F]/80" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F8F6F1] to-transparent" />

        <div className="container-max relative z-10 px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-flex rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E8D7A5]"
            >
              Sri Supraja Infracon Projects
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-display text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              DTCP & RERA Approved{" "}
              <span className="text-[#C9A227]">
                Open Plots Near Hyderabad
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-slate-200"
            >
              Explore{" "}
              <strong>DTCP & RERA Approved Open Plots Near Hyderabad</strong>,
              including <strong>premium plotted developments</strong>,{" "}
              <strong>resort plots near Hyderabad growth corridors</strong>,{" "}
              <strong>villa plots near Hyderabad</strong>,{" "}
              <strong>gated community plots</strong> and{" "}
              <strong>affordable open plots near ORR Hyderabad</strong> across
              Kamkole, Mominpet, Sangareddy and Indrakaran by{" "}
              <strong>Sri Supraja Infracon</strong>.
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
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#081225]"
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
                href="/contact-us"
                className="rounded-full bg-[#C9A227] px-8 py-4 text-sm font-bold text-[#081225] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
              >
                Schedule Site Visit
              </Link>

              <Link
                href="#projects-list"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#081225]"
              >
                View All Projects
              </Link>
            </motion.div>

            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm">
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

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
            >
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-3xl font-extrabold text-[#C9A227]">4+</p>
                <p className="mt-2 text-sm font-bold text-white">
                  Premium plotted communities
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-3xl font-extrabold text-[#C9A227]">DTCP</p>
                <p className="mt-2 text-sm font-bold text-white">
                  Approved open plot developments
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-3xl font-extrabold text-[#C9A227]">RERA</p>
                <p className="mt-2 text-sm font-bold text-white">
                  Buyer-focused project positioning
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FlagshipProject />

      <div id="projects-list">
        <ProjectsSection />
      </div>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Hyderabad Growth Corridors
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            DTCP & RERA Approved Open Plots Near Hyderabad in Strategic Growth
            Corridors
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4B5563]">
            Sri Supraja Infracon projects are positioned across{" "}
            <strong>Kamkole open plots</strong>,{" "}
            <strong>Mominpet plotted developments</strong>,{" "}
            <strong>Sangareddy growth corridors</strong>,{" "}
            <strong>Indrakaran affordable open plots</strong> and{" "}
            <strong>premium plotted developments near Hyderabad</strong> with
            connectivity to <strong>NH-65</strong>,{" "}
            <strong>Woxsen University</strong>, ORR influence zones and upcoming
            infrastructure corridors.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/open-plots-and-resorts-in-hyderabad"
              className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#081225]"
            >
              Open Plots & Resorts
            </Link>

            <Link
              href="/gated-community-plots-in-hyderabad"
              className="rounded-full border border-[#C9A227] bg-[#FFF9E8] px-6 py-3 text-sm font-bold text-[#081225] transition hover:bg-[#C9A227]"
            >
              Gated Community Plots
            </Link>

            <Link
              href="/resort-plots-in-hyderabad"
              className="rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-bold text-[#081225] transition hover:border-[#C9A227]"
            >
              Resort Plot Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-[#E8D7A5] bg-white p-8 shadow-lg md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Buyer Guidance
            </p>

            <h3 className="text-2xl font-extrabold leading-tight text-[#111827] md:text-4xl">
              How to Compare DTCP & RERA Approved Open Plots Near Hyderabad
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
              Before choosing a project, review the project approval status,
              location connectivity, road access, current development progress,
              brochure details, plot availability and site visit options. For
              buyers evaluating <strong>open plots near NH-65</strong>,{" "}
              <strong>plots near Woxsen University</strong>,{" "}
              <strong>resort-style plotted developments near Hyderabad</strong>{" "}
              and <strong>villa plot investment options in Telangana</strong>,
              Sri Supraja Infracon provides project-wise guidance and location
              clarity.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/projects" className="text-blue-700 underline">
                Compare project options
              </Link>

              <Link href="/contact-us" className="text-blue-700 underline">
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
              Sri Supraja Infracon continues to develop{" "}
              <strong>DTCP & RERA Approved Open Plots Near Hyderabad</strong>{" "}
              with a focus on transparent project communication, premium
              infrastructure, location-led planning and buyer confidence across
              Hyderabad growth corridors.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </div>
  );
}