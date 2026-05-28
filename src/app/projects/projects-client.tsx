"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FlagshipProject from "@/components/home/FlagshipProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";

import Link from "next/link";
import { motion } from "framer-motion";

import heroBg from "@/assets/hero-bg.webp";

const locationLinks = [
  "Kamkole",
  "Mominpet",
  "Sangareddy",
  "Indrakaran",
  "NH-65 Corridor",
  "Woxsen University Zone",
];

export default function ProjectsClient() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#081225] pb-24 pt-32">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/96 via-[#0B1633]/88 to-[#18345F]/78" />

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_380px] lg:items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-5xl"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#E8D7A5]">
                Sri Supraja Infracon Projects
              </p>

              <h1 className="text-4xl font-display font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                DTCP & RERA Approved{" "}
                <span className="text-[#C9A227]">
                  Open Plot Projects
                </span>{" "}
                Near Hyderabad
              </h1>

              <p className="mt-7 max-w-4xl text-lg leading-relaxed text-slate-200">
                Explore premium plotted developments by Sri Supraja
                Infracon across Kamkole, Mominpet, Sangareddy and
                Indrakaran near NH-65, Woxsen University, Regional Ring
                Road influence zones and Telangana growth corridors.
              </p>

              {/* Location Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {locationLinks.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#081225] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Schedule Site Visit
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#081225]"
                >
                  About Sri Supraja
                </Link>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="grid gap-5"
            >
              <div className="rounded-[30px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
                <p className="text-4xl font-extrabold text-[#C9A227]">
                  4+
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Premium plotted communities
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
                <p className="text-4xl font-extrabold text-[#C9A227]">
                  DTCP
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Approval-focused plotted developments
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
                <p className="text-4xl font-extrabold text-[#C9A227]">
                  RERA
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Buyer-oriented project positioning
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP */}
      <FlagshipProject />

      {/* PROJECTS GRID */}
      <ProjectsSection />

      {/* LOCATION SEO SECTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Hyderabad Growth Corridors
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Open Plot Investment Corridors Near Hyderabad
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4B5563]">
            Sri Supraja Infracon projects are strategically positioned
            across Telangana growth zones including Kamkole,
            Sangareddy, Mominpet and Indrakaran with connectivity to
            NH-65, Woxsen University surroundings and emerging
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
              Resort Plots
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
}