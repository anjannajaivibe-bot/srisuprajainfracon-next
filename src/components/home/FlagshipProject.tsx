"use client";

import SmartImage from "@/components/shared/SmartImage";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import projectIris from "@/assets/project-iris.webp";

const stats = [
  { value: "350", label: "Acres Master Planned Development" },
  { value: "4000", label: "Plotted Units Planned" },
  { value: "Sales", label: "Open for Selected Inventory" },
];

const attractions = [
  {
    icon: "🏨",
    title: "Lemon Tree Resort Under Construction",
    desc: "A hospitality anchor under construction within the wider Supraja IRIS resort ecosystem.",
  },
  {
    icon: "🌊",
    title: "Planned Water Villas",
    desc: "A premium leisure concept planned as part of the future lifestyle environment.",
  },
  {
    icon: "💒",
    title: "Destination Wedding Convention",
    desc: "A planned event venue concept for celebrations, gatherings and destination experiences.",
  },
  {
    icon: "🎢",
    title: "Water Theme Park and Amusement Zone",
    desc: "Future recreation attractions planned to support family leisure and destination appeal.",
  },
  {
    icon: "🏁",
    title: "Go-Karting Attraction",
    desc: "A planned entertainment feature designed to enhance weekend recreation value.",
  },
  {
    icon: "📍",
    title: "Near Woxsen University and NH-65",
    desc: "A strategic Kamkole location with access to education, highway and growth corridor advantages.",
  },
];

const FlagshipProject = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="flagship" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full gold-gradient px-4 py-1.5 text-sm font-semibold text-navy">
            FLAGSHIP RESORT PLOT DEVELOPMENT
          </span>

          <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl lg:text-5xl">
            Supraja IRIS – DTCP & RERA Approved Open Plots Near Hyderabad
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            Supraja IRIS is a <strong>resort-style plotted development</strong>{" "}
            at Kamkole near Hyderabad, positioned Adjacent to Woxsen University,
            NH-65, Regional Ring Road influence zones and the NIMZ Zaheerabad
            growth corridor.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link
              href="/projects/supraja-iris-resort-plots"
              className="font-bold text-blue-700 underline"
            >
              View Supraja IRIS project details
            </Link>

            <a
              href="https://www.woxsen.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 underline"
            >
              Adjacent to Woxsen University
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl"
        >
          <SmartImage
            src={projectIris}
            alt="DTCP & RERA approved open plots near Hyderabad"
            className="h-[360px] w-full rounded-[32px] shadow-2xl md:h-[500px]"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
  <span className="rounded-full border border-emerald-400/60 bg-emerald-900/80 px-4 py-1.5 text-sm font-semibold text-emerald-100 shadow-md backdrop-blur-sm">
    ✓ Sales Open for Selected Inventory
  </span>
              <span className="rounded-full border border-yellow-300/70 bg-yellow-500/90 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-md backdrop-blur-sm">
    DTCP & RERA Approved
  </span>

  <span className="rounded-full border border-white/70 bg-slate-950/85 px-4 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm">
    Upto 70% Bank Loan Support Available*
  </span>
</div>
          </div>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="text-3xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="mb-8 text-center text-2xl font-display font-bold text-foreground">
          Lifestyle Attractions
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
              className="glass-card p-6 hover-lift"
            >
              <span className="mb-3 block text-3xl">{item.icon}</span>
              <h4 className="mb-2 font-display font-bold text-foreground">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          *Loan support and project availability are subject to project status,
          buyer eligibility and lender terms.
        </p>
      </div>
    </section>
  );
};

export default FlagshipProject;




