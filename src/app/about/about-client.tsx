"use client";

import SmartImage from "@/components/shared/SmartImage";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Eye,
  Landmark,
  MapPinned,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.webp";
import ownerPhoto from "@/assets/tudi-praveen.webp";

const socialWelfare = [
  {
    icon: BookOpen,
    title: "Education Support",
    desc: "Encouraging education and supporting students to build a brighter future.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Support",
    desc: "Initiatives that promote health, well-being, and stronger communities.",
  },
  {
    icon: Siren,
    title: "Emergency Relief",
    desc: "Standing by communities and providing support during critical times.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Skill Encouragement",
    desc: "Encouraging local employment and skill development for future growth.",
  },
  {
    icon: Building2,
    title: "Community Infrastructure",
    desc: "Supporting local infrastructure and facilities that improve everyday life.",
  },
  {
    icon: Drama,
    title: "Cultural Development",
    desc: "Preserving traditions and encouraging cultural and social development.",
  },
];
const stats = [
  { num: "24+", label: "Years of Legacy" },
  { num: "4", label: "Active Project Pages" },
  { num: "350", label: "Acres Master Plan at IRIS" },
  { num: "4000", label: "Plotted Units Planned at IRIS" },
  { num: "DTCP", label: "Approved Layout Focus" },
  { num: "RERA", label: "Registered Project Focus" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    desc: "Clear documentation, approval transparency and honest communication for every investor.",
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

const whyChoose = [
  "DTCP and RERA approved plotted communities",
  "Strategic locations near Hyderabad growth corridors",
  "Transparent project communication",
  "Strong focus on roads, parks, utilities and layout planning",
  "investor support for availability, site visit, loan and registration",
  "Premium projects such as Supraja IRIS and Bridge County",
];

const milestones = [
  {
    year: "2003",
    title: "Company Foundation",
    desc: "Sri Supraja Infracon began its journey with a vision to create reliable real estate opportunities with trust, documentation and customer confidence.",
  },
  {
    year: "2010",
    title: "First Major Delivery",
    desc: "The company expanded its plotted development presence and strengthened its reputation for planned layouts and investor-focused service.",
  },
  {
    year: "2020",
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
    desc: "Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows continue to serve investors looking for open plots near Hyderabad.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sri Supraja Infracon",
  url: "https://www.srisuprajainfracon.com",
  logo: "https://www.srisuprajainfracon.com/logo.png",
  description:
    "Sri Supraja Infracon develops DTCP and RERA approved open plot communities near Hyderabad growth corridors.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "India",
  },
};

export default function AboutClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="min-h-screen bg-[#F8F6F1]">
        <Navbar />

        <section className="relative overflow-hidden pb-24 pt-32 lg:pb-28">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBg.src})` }}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#071531]/95 via-[#071531]/85 to-[#071531]/55" />

  <div className="container-max relative px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px]">

        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#E8D7A5]"
          >
            About Sri Supraja Infracon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl font-display text-[42px] font-bold leading-[1.08] text-white md:text-[56px] lg:text-[72px]"
          >
            Over 24 Years of Building Trust,
            <br />
            <span className="text-[#C9A227]">
              Communities.
            </span>
            <br />
            <span className="text-[#C9A227]">
              Long-Term Value.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-200"
          >
            Sri Supraja Infracon is a trusted real estate development company
            focused on approved layouts, planned infrastructure, and
            customer-first property development across Hyderabad and Telangana.
          </motion.p>

          {/* TRUST METRICS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-3xl font-bold text-[#C9A227]">
                24+
              </div>
              <div className="mt-1 text-sm text-slate-300">
                Years of Legacy
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-3xl font-bold text-[#C9A227]">
                10+
              </div>
              <div className="mt-1 text-sm text-slate-300">
                Completed Projects
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-3xl font-bold text-[#C9A227]">
                DTCP &amp; RERA
              </div>
              <div className="mt-1 text-sm text-slate-300">
                Approved Developments
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-3xl font-bold text-[#C9A227]">
                5000+
              </div>
              <div className="mt-1 text-sm text-slate-300">
                Happy Property Owners
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LEGACY CARD */}
        <div className="hidden lg:block">
          <div className="rounded-[32px] border border-[#C9A227]/30 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8D7A5]">
              Building Since
            </p>

            <h2 className="mt-3 text-6xl font-bold text-[#C9A227]">
              2003
            </h2>

            <div className="my-8 h-px bg-white/10" />

            <div>
              <div className="text-5xl font-bold text-white">
                24+
              </div>
              <p className="mt-2 text-slate-300">
                Years of Legacy
              </p>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="space-y-4 text-slate-300">
              <p>✓ Multiple Completed Projects</p>
              <p>✓ Trusted Across Telangana</p>
              <p>✓ Customer-First Development</p>
              <p>✓ Long-Term Value Creation</p>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-16 hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur lg:block">
        <div className="flex items-center justify-between text-center">
          <div>
            <div className="text-3xl font-bold text-[#C9A227]">
              2003
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Foundation
            </div>
          </div>

          <div className="mx-6 h-px flex-1 bg-white/10" />

          <div>
            <div className="font-semibold text-white">
              Multiple Communities
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Delivered
            </div>
          </div>

          <div className="mx-6 h-px flex-1 bg-white/10" />

          <div>
            <div className="font-semibold text-white">
              Continued Growth
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Across Telangana
            </div>
          </div>

          <div className="mx-6 h-px flex-1 bg-white/10" />

          <div>
            <div className="text-3xl font-bold text-[#C9A227]">
              2026
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Building the Future
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        <section className="bg-white px-6 py-24">
  <div className="container-max">
    <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-start">

      {/* Left Column */}
      <div>
        <SmartImage
          src={ownerPhoto}
          alt="Tudi Praveen Chairman and Managing Director of Sri Supraja Infracon"
          className="h-[500px] w-full rounded-[12px] lg:h-[650px]"
          imageClassName="object-cover object-top"
        />
      </div>

      {/* Right Column */}
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
          CHAIRMAN'S MESSAGE
        </p>

        <div className="space-y-5 text-[17px] leading-8 text-[#4B5563]">
          <p>
            “Over the past 24 years, Sri Supraja Infracon has grown with a simple belief:
            trust is the foundation of every successful development.”
          </p>

          <p>
            What began as a vision to create quality communities has evolved into a mission
            to shape destinations that inspire growth, opportunity, and a better way of living.
            Every project we undertake is built on trust, guided by quality, and driven by a
            commitment to create lasting value for generations.
          </p>

          <p>
            We have had the privilege of contributing to the growth of Hyderabad and Telangana
            through residential communities, approved layouts, plotted developments,
            and large-scale real estate ventures. Our focus has always remained the same:
            combining strategic locations, strong infrastructure, and future-ready planning to
            create places people are proud to own and call their own.
          </p>

          <p>
            Today, developments such as Supraja IRIS, Bridge County, Sindhu Sarovar,
            and Subhash Meadows represent the next chapter of our journey.
            More than projects, they are emerging destinations designed around connectivity,
            lifestyle, and the aspirations of tomorrow.
          </p>

          <p>
            As we look ahead, our commitment remains unwavering in upholding the highest
            standards of integrity, transparency, and customer trust while creating
            developments that stand the test of time. I extend my heartfelt gratitude
            to our customers, employees, partners, stakeholders, and well-wishers for
            their continued faith and support. Together, we are shaping tomorrow's
            landmarks today.
          </p>

          {/* Signature */}
<div className="pt-2">
  <p className="text-xl font-display font-semibold text-[#111827]">
    Tudi Praveen
  </p>

  <p className="mt-1 text-[15px] font-medium text-[#6B7280]">
    Chairman &amp; Managing Director
  </p>

  <p className="text-[15px] text-[#6B7280]">
    Sri Supraja Infracon
  </p>
</div>
        </div>
      </div>

    </div>
  </div>
</section>

        <section className="relative overflow-hidden bg-white px-6 py-24">
  <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />
  <div className="absolute right-0 bottom-24 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />

  <div className="container-max relative">
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#C9A227]">
        BEYOND REAL ESTATE
      </p>

      <div className="mx-auto mb-6 flex max-w-xs items-center justify-center gap-4">
        <span className="h-px flex-1 bg-[#C9A227]/40" />
        <span className="h-2 w-2 rotate-45 border border-[#C9A227]" />
        <span className="h-px flex-1 bg-[#C9A227]/40" />
      </div>

      <h2 className="font-display text-4xl font-bold leading-tight text-[#111827] md:text-6xl">
        Creating Value Beyond Developments
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
        Sri Supraja Infracon believes growth should benefit people,
        communities, and future generations.
      </p>
    </div>

    <div className="grid gap-7 lg:grid-cols-[1.05fr_2fr]">
      <div className="relative overflow-hidden rounded-[28px] border border-[#EFE7D3] bg-[#FFFCF6] p-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] md:p-10">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="relative">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#E8D7A5] bg-white shadow-inner">
            <HandHeart className="h-10 w-10 text-[#C9A227]" />
          </div>

          <h3 className="font-display text-3xl font-bold leading-tight text-[#111827]">
            Community-First Growth
          </h3>

          <div className="my-6 h-px w-16 bg-[#C9A227]" />

          <p className="text-[17px] leading-8 text-[#4B5563]">
            Our commitment extends beyond developments to meaningful
            contributions that create lasting social impact and stronger
            communities.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {socialWelfare.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-[28px] border border-[#EFE7D3] bg-white p-7 shadow-[0_12px_38px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E8D7A5] bg-[#FFF9E8] transition group-hover:bg-[#FFF3CC]">
                <Icon className="h-8 w-8 text-[#C9A227]" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#111827]">
                {item.title}
              </h3>

              <div className="my-4 h-px w-12 bg-[#C9A227]" />

              <p className="text-[15px] leading-7 text-[#4B5563]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

<section className="bg-white px-6 py-24">
  <div className="container-max">
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
        Our Legacy
      </p>

      <h2 className="text-3xl font-display font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
        Building History
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
        From humble beginnings to landmark developments, Sri Supraja Infracon&apos;s
        journey reflects a steady commitment to approvals, transparency,
        customer confidence and responsible real estate development.
      </p>
    </div>

    <div className="relative mx-auto max-w-5xl">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#C9A227] via-[#E8D7A5] to-[#C9A227] md:left-1/2" />

      {milestones.map((m, i) => (
        <div
          key={m.year}
          className={`relative mb-12 flex md:items-center ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="pl-12 md:w-1/2 md:px-8">
            <div className="group rounded-[24px] border border-[#EFE7D3] bg-[#FCFBF8] p-7 shadow-[0_12px_35px_rgba(11,22,51,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-[0_18px_45px_rgba(11,22,51,0.10)]">
              <div className="mb-4 inline-flex rounded-full bg-[#F3E8C5] px-4 py-1 text-sm font-bold tracking-[0.18em] text-[#9A7415]">
                {m.year}
              </div>

              <h3 className="mb-3 text-xl font-display font-bold text-[#111827]">
                {m.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#4B5563]">
                {m.desc}
              </p>
            </div>
          </div>

          <div className="absolute left-4 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-4 ring-[#F8F6F1] md:left-1/2">
            <div className="h-3 w-3 rounded-full bg-[#C9A227]" />
          </div>
        </div>
      ))}
    </div>

    <div className="mx-auto mt-8 max-w-4xl rounded-[24px] border border-[#EFE7D3] bg-[#FCFBF8] p-8 text-center shadow-[0_10px_35px_rgba(11,22,51,0.06)]">
      <p className="text-lg font-semibold leading-relaxed text-[#111827]">
        Every milestone represents more than growth. It represents the trust of
        customers, the strength of relationships and the responsibility to build
        developments that serve generations.
      </p>
    </div>
  </div>
</section>

<section className="bg-white px-6 py-24">
  <div className="container-max">
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
        Awards &amp; Recognitions
      </p>

      <h2 className="text-3xl font-display font-bold text-[#111827] sm:text-4xl">
        Recognized for Excellence, Trusted for Integrity
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-[#4B5563]">
        These recognitions reflect our commitment to quality, transparency,
        customer satisfaction and responsible real estate development over the
        years.
      </p>
    </div>

    <div className="mt-12 overflow-hidden">
      <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div
            key={item}
            className="min-w-[280px] rounded-[18px] border border-[#EFE7D3] bg-white p-4 shadow-[0_8px_30px_rgba(11,22,51,0.06)] md:min-w-[340px]"
          >
            <div className="flex h-[220px] items-center justify-center rounded-[14px] bg-[#F8F6F1]">
              <Award className="text-[#C9A227]" size={42} />
            </div>

            <p className="mt-4 text-center font-bold text-[#111827]">
              Recognition {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        <section className="bg-gradient-to-br from-[#081225] via-[#102348] to-[#0B1633] px-6 py-24 text-white">
          <div className="container-max text-center">
            <h2 className="text-3xl font-display font-bold sm:text-4xl">
              Secure Your Place in Hyderabad's Growth Story
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Discover thoughtfully planned communities backed by approvals, transparency and a legacy of trust built over 24 years.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#C9A227] px-6 py-3 font-bold text-[#0B1633] transition hover:bg-white"
              >
                View Projects
              </Link>

              <Link
                href="/contact-us/"
                className="rounded-full border border-[#C9A227] px-6 py-3 font-bold text-[#E8D7A5] transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}