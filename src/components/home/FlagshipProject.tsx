"use client";


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectIris from "@/assets/project-iris.webp";

const stats = [
  { value: "350", label: "Acres Master Planned Development" },
  { value: "4000+", label: "Plotted Units Planned" },
  { value: "Sales", label: "Open Now for Selected Inventory" },
];

const attractions = [
  {
    icon: "🏨",
    title: "Lemon Tree Resort Under Construction",
    desc: "A hospitality anchor planned within the wider resort ecosystem.",
  },
  {
    icon: "🌊",
    title: "Planned Water Villas",
    desc: "Premium leisure concept designed to improve lifestyle value.",
  },
  {
    icon: "💒",
    title: "Destination Wedding Convention",
    desc: "A planned event venue concept for family celebrations and gatherings.",
  },
  {
    icon: "🎢",
    title: "Water Theme Park and Amusement Zone",
    desc: "Future recreation attractions planned to improve destination value.",
  },
  {
    icon: "🏁",
    title: "Go-Karting Attraction",
    desc: "Planned entertainment feature to support weekend footfall.",
  },
  {
    icon: "📍",
    title: "Near Woxsen University and NH-65",
    desc: "Strategic location advantage for open plot buyers near Hyderabad.",
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
            Supraja IRIS Resort Plots Adjacent to Woxsen University
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            Supraja IRIS at Kamkole is designed for buyers searching for{" "}
            <strong>DTCP & RERA approved resort plots near Hyderabad</strong>,
            with sales open now and strong high ROI potential from the NH-65,
            RRR influence and NIMZ Zaheerabad growth corridor.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <a href="/projects/supraja-iris-resort-plots" className="text-blue-700 underline">
              View Supraja IRIS project details
            </a>
            <a
              href="https://www.woxsen.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              Nearby Woxsen University
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={typeof projectIris === "string" ? projectIris : projectIris.src}
            alt="Supraja IRIS Resort Plots near Woxsen University and NH-65 growth corridor"
            className="h-72 w-full object-cover sm:h-[430px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-success/30 bg-success/20 px-3 py-1 text-sm font-medium text-success">
                ✓ Sales Open Now
              </span>
              <span className="rounded-full border border-gold/30 bg-gold/20 px-3 py-1 text-sm font-medium text-gold">
                DTCP & RERA Approved
              </span>
              <span className="rounded-full border border-hero-foreground/30 bg-hero-foreground/20 px-3 py-1 text-sm font-medium text-hero-foreground">
                Up to 70% Bank Loan Available
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
          Top Attractions Planned Around Supraja IRIS Resort Plots
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
      </div>
    </section>
  );
};

export default FlagshipProject;





