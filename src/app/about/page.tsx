"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  Eye,
  HeartHandshake,
  Landmark,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Target,
  Timeline,
  Users,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/hero-bg.webp";
import ownerPhoto from "@/assets/tudi-praveen.webp";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    desc: "Clear documentation, approval transparency and honest communication for every buyer.",
  },
  {
    icon: Landmark,
    title: "Approved Layouts",
    desc: "Focus on DTCP and RERA approved open plot communities in growth locations.",
  },
  {
    icon: MapPinned,
    title: "Strategic Locations",
    desc: "Projects planned near NH-65, Woxsen University, ORR influence zones and emerging corridors.",
  },
  {
    icon: Users,
    title: "Customer Support",
    desc: "Guidance from project selection to site visit, booking, loan support and registration.",
  },
];

const socialWelfare = [
  "Education support for students",
  "Healthcare and community support",
  "Support during local emergencies",
  "Employment and skill encouragement",
  "Infrastructure support for communities",
  "Cultural and social development",
];

const whyChoose = [
  "DTCP and RERA approved plotted communities",
  "High ROI locations near Hyderabad growth corridors",
  "Transparent project communication",
  "Strong focus on roads, parks, utilities and layout planning",
  "Buyer support for availability, visit, loan and registration",
  "Premium projects such as Supraja IRIS and Bridge County",
];

const milestones = [
  {
    year: "2001",
    title: "Company Foundation",
    desc: "Sri Supraja Infracon began its journey with a vision to create reliable real estate opportunities with trust, documentation and customer confidence.",
  },
  {
    year: "2016",
    title: "First Major Delivery",
    desc: "The company expanded its plotted development presence and strengthened its reputation for planned layouts and buyer-focused service.",
  },
  {
    year: "2020s",
    title: "Expansion Phase",
    desc: "Sri Supraja Infracon expanded into multiple plotted communities across Telangana growth corridors with stronger infrastructure planning.",
  },
  {
    year: "2024",
    title: "Supraja IRIS Launch",
    desc: "The flagship Supraja IRIS Resort Plots project at Kamkole strengthened the company’s position in resort-style plotted development.",
  },
  {
    year: "2026",
    title: "Sales Open Across Projects",
    desc: "Supraja IRIS, Bridge County, Sindhu Sarovar and Subash Meadows continue to serve buyers looking for open plots near Hyderabad.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/88 to-blue-950/90" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold-light">
              About Sri Supraja Infracon
            </p>

            <h1 className="text-4xl font-display font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Building Dreams,{" "}
              <span className="text-gold-gradient">Serving Communities</span>
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-200">
              Sri Supraja Infracon Builders & Developers is focused on DTCP and
              RERA approved open plot communities near Hyderabad growth
              corridors, with a strong commitment to trust, clear documentation,
              planned infrastructure and customer-first service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 rounded-[32px] bg-white p-6 text-slate-950 shadow-2xl md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <img
                src={typeof ownerPhoto === "string" ? ownerPhoto : ownerPhoto.src}
                alt="Mr Tudi Praveen Chairman and Managing Director of Sri Supraja Infracon"
                className="h-[340px] w-full rounded-[24px] object-cover object-top shadow-xl"
                loading="eager"
                decoding="async"
              />

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                  Owner Message
                </p>

                <h2 className="mb-2 text-3xl font-display font-bold">
                  Mr. Tudi Praveen
                </h2>

                <p className="mb-5 font-bold text-amber-600">
                  Chairman & Managing Director
                </p>

                <p className="mb-4 leading-relaxed text-slate-700">
                  “Our vision is to make open plot ownership simple,
                  transparent and valuable for families and investors. Every
                  Supraja project is planned with a long-term responsibility
                  toward customers, community and location growth.”
                </p>

                <p className="leading-relaxed text-slate-700">
                  Sri Supraja Infracon believes in approved layouts, clear
                  documentation, practical infrastructure and honest guidance.
                  Our goal is not just to sell plots, but to create trusted
                  communities where buyers feel confident about their decision.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold-light">
              Social Welfare
            </p>

            <h2 className="text-3xl font-display font-bold">
              Community Responsibility Beyond Real Estate
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              The company believes growth should support people, families and
              local communities through education, welfare and meaningful social
              contribution.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {socialWelfare.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur"
              >
                <CheckCircle2 className="mb-3 text-amber-400" size={24} />
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Our Story
            </p>

            <h2 className="mb-6 text-3xl font-display font-bold text-foreground sm:text-4xl">
              A Trusted Real Estate Journey Built on Approvals and Service
            </h2>

            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Sri Supraja Infracon has grown with a simple belief: land
                ownership must be transparent, secure and useful for the buyer.
                The company focuses on open plot projects that combine approval
                clarity, location advantage and planned infrastructure.
              </p>

              <p>
                Our projects are positioned across important growth locations
                such as Kamkole, Mominpet and Indrakaran, with strong relevance
                to buyers searching for DTCP approved plots near Hyderabad, RERA
                approved plots near Hyderabad and high ROI open plots in
                Telangana.
              </p>

              <p>
                From project planning to registration, our team supports buyers
                with availability details, site visits, approval information,
                loan guidance and practical decision-making support.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/projects" className="text-blue-700 underline">
                View Sri Supraja Infracon projects
              </Link>

              <Link href="/contact" className="text-blue-700 underline">
                Request project guidance
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "24+", label: "Years of Legacy" },
              { num: "4", label: "Active Project Pages" },
              { num: "350", label: "Acres Master Plan at IRIS" },
              { num: "4000+", label: "Plotted Units Planned at IRIS" },
              { num: "DTCP", label: "Approved Layout Focus" },
              { num: "RERA", label: "Registered Project Focus" },
            ].map((s) => (
              <div key={s.label} className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-display font-bold text-gold-gradient">
                  {s.num}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become one of Telangana’s most trusted names in approved plotted development by creating communities that combine transparency, infrastructure and location-led growth potential.",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver buyer-focused open plot projects with clear approvals, practical amenities, strategic connectivity and reliable support from enquiry to registration.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full gold-gradient">
                  <item.icon className="text-navy" size={26} />
                </div>

                <h3 className="mb-3 text-2xl font-display font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 hover-lift">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gold-gradient">
                  <v.icon className="text-navy" size={22} />
                </div>

                <h3 className="mb-2 font-display font-bold text-foreground">
                  {v.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
              Why Buyers Trust Sri Supraja Infracon
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => (
              <div key={item} className="glass-card p-6 hover-lift">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-semibold leading-relaxed text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Timeline
            </p>

            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
              Our Journey
            </h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gold/40 md:left-1/2" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative mb-10 flex md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="pl-12 md:w-1/2 md:px-8">
                  <div className="glass-card p-6 hover-lift">
                    <div className="mb-2 text-xl font-display font-bold text-gold-gradient">
                      {m.year}
                    </div>

                    <h3 className="mb-2 font-bold text-foreground">
                      {m.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {m.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full gold-gradient ring-4 ring-background md:left-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="glass-card p-10 text-center md:p-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Certifications & Approvals
            </p>

            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
              Approval-Focused Real Estate Development
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Buyers are encouraged to verify project-wise DTCP, HMDA and RERA
              details before booking. Sri Supraja Infracon focuses on clear
              approvals, transparent communication and buyer confidence.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                "DTCP Approved Layout Focus",
                "RERA Registered Project Focus",
                "Clear Documentation Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm"
                >
                  <Award className="mx-auto mb-3 text-amber-500" size={32} />
                  <p className="font-bold text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-display font-bold sm:text-4xl">
            Ready to Explore Open Plots Near Hyderabad?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Compare Supraja IRIS, Bridge County, Sindhu Sarovar and Subash
            Meadows before choosing the right project for your budget, location
            preference and high ROI growth expectation.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-full gold-gradient px-6 py-3 font-bold text-navy transition hover:opacity-90"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-gold px-6 py-3 font-bold text-gold transition hover:bg-gold hover:text-navy"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;




