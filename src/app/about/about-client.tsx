"use client";

import SmartImage from "@/components/shared/SmartImage";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  ChevronRight,
  Drama,
  HandHeart,
  HeartPulse,
  MapPinned,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import ownerPhoto from "@/assets/tudi-praveen.webp";

const awards = Array.from({ length: 10 }, (_, index) => ({
  image:
    index === 0
      ? "/About/Awards/Award Receipt.webp"
      : `/About/Awards/Award Receipt ${index + 1}.webp`,
  alt: `Sri Supraja Infracon award and recognition ${index + 1}`,
}));

const companyFacts = [
  ["2003", "Established"],
  ["10+", "Completed Projects"],
  ["DTCP & RERA", "Project Approval Details"],
  ["5000+", "Customers Served"],
];

const buyerFocus = [
  {
    icon: ShieldCheck,
    title: "Project Information Up Front",
    desc: "Approval references, location details, plot information and current development status are presented project by project.",
  },
  {
    icon: MapPinned,
    title: "Projects Around Hyderabad",
    desc: "Current plotted developments are located across Kamkole, Mominpet, Indrakaran and the wider Sangareddy region.",
  },
  {
    icon: BadgeCheck,
    title: "Site Visits Before Booking",
    desc: "Buyers can review the site, available plots, roads, amenities and construction progress before making a decision.",
  },
  {
    icon: Users,
    title: "Support Through Registration",
    desc: "The team assists with project selection, availability, site visits, applicable loan support and registration coordination.",
  },
];

const socialWelfare = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Support for education and student-focused community initiatives.",
  },
  {
    icon: HeartPulse,
    title: "Health & Well-being",
    desc: "Participation in health and well-being initiatives where community support is needed.",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    desc: "Community assistance during urgent or difficult circumstances.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Skills & Employment",
    desc: "Encouragement of local skills, work opportunities and practical training.",
  },
  {
    icon: Building2,
    title: "Local Infrastructure",
    desc: "Support for facilities and infrastructure that improve day-to-day community life.",
  },
  {
    icon: Drama,
    title: "Culture & Community",
    desc: "Participation in local cultural and community activities.",
  },
];

const currentProjects = [
  {
    name: "Supraja IRIS",
    location: "Kamkole",
    detail: "350-acre resort-style plotted development",
    href: "/projects/supraja-iris-resort-plots",
  },
  {
    name: "Bridge County",
    location: "Kamkole",
    detail: "15-acre plotted enclave within Supraja IRIS",
    href: "/projects/bridge-county",
  },
  {
    name: "Sindhu Sarovar",
    location: "Mominpet",
    detail: "Plotted development with multiple plot-size options",
    href: "/projects/sindhu-sarovar",
  },
  {
    name: "Subhash Meadows",
    location: "Indrakaran",
    detail: "Affordable open plots with planned infrastructure",
    href: "/projects/subhash-meadows",
  },
];

const milestones = [
  {
    year: "2003",
    title: "Sri Supraja Infracon Established",
    desc: "The company began its real estate development journey with residential and plotted projects in Telangana.",
  },
  {
    year: "Completed Portfolio",
    title: "Residential and Plotted Projects Delivered",
    desc: "The completed portfolio includes apartments, villas and plotted developments in and around Hyderabad.",
  },
  {
    year: "2024",
    title: "Supraja IRIS Launched",
    desc: "Supraja IRIS at Kamkole expanded the portfolio into a large resort-style plotted development with hospitality and recreation components.",
  },
  {
    year: "2026",
    title: "Four Current Plotted Developments",
    desc: "Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows form the current plotted project portfolio shown on this website.",
  },
];

export default function AboutClient() {
  const awardsScrollRef = useRef<HTMLDivElement>(null);

  const scrollAwards = (direction: "left" | "right") => {
    if (!awardsScrollRef.current) return;

    awardsScrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <section className="relative overflow-hidden pb-24 pt-32 lg:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071531]/95 via-[#071531]/88 to-[#071531]/62" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#E8D7A5]"
                >
                  About Sri Supraja Infracon
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-5xl font-display text-[42px] font-bold leading-[1.08] text-white md:text-[56px] lg:text-[68px]"
                >
                  Sri Supraja Infracon
                  <br />
                  <span className="text-[#C9A227]">Real Estate Development Since 2003</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-200"
                >
                  Sri Supraja Infracon is the real estate development wing of Supraja Group,
                  with experience across plotted developments, apartments and villas in and
                  around Hyderabad. Current projects include approved open plot developments
                  at Kamkole, Mominpet and Indrakaran.
                </motion.p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {companyFacts.map(([num, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/15 bg-[#071531]/45 p-4 backdrop-blur"
                    >
                      <div className="text-2xl font-bold text-[#E8C85A] sm:text-3xl">
                        {num}
                      </div>
                      <div className="mt-1 text-sm text-slate-200">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-[30px] border border-[#C9A227]/35 bg-[#071531]/55 p-8 backdrop-blur-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8D7A5]">
                    Current Portfolio
                  </p>
                  <div className="mt-6 space-y-5">
                    {currentProjects.map((project) => (
                      <Link
                        key={project.name}
                        href={project.href}
                        className="block border-b border-white/10 pb-5 last:border-0 last:pb-0"
                      >
                        <p className="font-display text-xl font-bold text-white transition hover:text-[#E8C85A]">
                          {project.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          {project.location} · {project.detail}
                        </p>
                      </Link>
                    ))}
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
            <div>
              <SmartImage
                src={ownerPhoto}
                alt="Tudi Praveen Chairman and Managing Director of Sri Supraja Infracon"
                className="h-[500px] w-full rounded-[16px] lg:h-[620px]"
                imageClassName="object-cover object-top"
              />
            </div>

            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8A6500]">
                FROM THE CHAIRMAN
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Clear Project Information and Responsible Development
              </h2>

              <div className="mt-7 space-y-5 text-[17px] leading-8 text-[#4B5563]">
                <p>
                  Our approach to real estate is straightforward: choose locations carefully,
                  plan the development properly and give buyers the information they need to
                  evaluate a project for themselves.
                </p>
                <p>
                  Over the years, Sri Supraja Infracon has worked across residential projects,
                  plotted layouts and villas in Telangana. Today, our current portfolio includes
                  Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows.
                </p>
                <p>
                  We continue to focus on project documentation, infrastructure planning,
                  on-site progress and direct communication with customers. Buyers are encouraged
                  to visit the site, review the applicable approvals and understand the project
                  before making a decision.
                </p>

                <div className="pt-3">
                  <p className="font-display text-xl font-semibold text-[#111827]">
                    Tudi Praveen
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-[#6B7280]">
                    Chairman &amp; Managing Director
                  </p>
                  <p className="text-[15px] text-[#6B7280]">Sri Supraja Infracon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-24">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8A6500]">
              HOW WE WORK WITH BUYERS
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
              What Buyers Can Review Before Choosing a Project
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
              Our project pages are designed to help buyers compare facts such as approvals,
              location, plot options, current development and site-visit information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buyerFocus.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#E6DDC5] bg-white p-7 shadow-[0_12px_35px_rgba(11,22,51,0.06)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E8D7A5] bg-[#FFF9E8]">
                    <Icon className="h-7 w-7 text-[#8A6500]" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#2E7D32]">
              COMMUNITY INITIATIVES
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
              Areas of Community Support
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
              Alongside real estate development, the group participates in community-focused
              activities across education, health, skills, local infrastructure and culture.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-[0.9fr_2fr]">
            <div className="rounded-[28px] border border-[#0F5132]/30 bg-[#0F5132] p-8 text-white shadow-[0_20px_60px_rgba(15,81,50,0.20)] md:p-10">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <HandHeart className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold leading-tight">
                Community Participation
              </h3>
              <p className="mt-6 text-[17px] leading-8 text-white/90">
                These activities sit alongside the company&apos;s real estate work and reflect
                its involvement with the communities around its operations.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {socialWelfare.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#D6E7D8] bg-white p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C8DFC9] bg-[#F4FBF5]">
                      <Icon className="h-7 w-7 text-[#2E7D32]" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">
                      {item.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-24">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#8A6500]">
              COMPANY MILESTONES
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
              From Established Business to Current Projects
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
              A concise view of the company&apos;s development history and the projects currently
              represented on this website.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {milestones.map((item) => (
              <article
                key={`${item.year}-${item.title}`}
                className="rounded-[24px] border border-[#E6DDC5] bg-white p-7 shadow-[0_10px_30px_rgba(11,22,51,0.05)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8A6500]">
                  {item.year}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#4B5563]">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {currentProjects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="rounded-[22px] border border-[#E6DDC5] bg-white p-6 transition hover:border-[#C9A227] hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A6500]">
                  {project.location}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-[#111827]">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                  {project.detail}
                </p>
                <span className="mt-5 inline-flex text-sm font-bold text-blue-700 underline">
                  View project details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container-max">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8A6500]">
              Awards &amp; Recognition
            </p>
            <h2 className="font-display text-3xl font-bold text-[#111827] sm:text-4xl">
              Awards Received Over the Years
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-[#4B5563]">
              A selection of award and recognition photographs from the company archive.
            </p>
          </div>

          <div className="relative mt-12">
            <button
              type="button"
              aria-label="Scroll awards left"
              onClick={() => scrollAwards("left")}
              className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EFE7D3] bg-white p-4 text-[#111827] shadow-[0_16px_45px_rgba(11,22,51,0.18)] transition hover:bg-[#C9A227] lg:flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              ref={awardsScrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {awards.map((award) => (
                <figure
                  key={award.image}
                  className="min-w-[280px] overflow-hidden rounded-[22px] border border-[#EFE7D3] bg-[#F8F6F1] shadow-[0_12px_40px_rgba(11,22,51,0.08)] md:min-w-[360px]"
                >
                  <img
                    src={award.image}
                    alt={award.alt}
                    loading="lazy"
                    className="h-[260px] w-full object-cover md:h-[300px]"
                  />
                </figure>
              ))}
            </div>

            <button
              type="button"
              aria-label="Scroll awards right"
              onClick={() => scrollAwards("right")}
              className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EFE7D3] bg-white p-4 text-[#111827] shadow-[0_16px_45px_rgba(11,22,51,0.18)] transition hover:bg-[#C9A227] lg:flex"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#071531] px-6 py-20 text-white">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Want to Review a Current Project?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Compare project locations, approval details, current development and available plot
            options, or contact our team to arrange a site visit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-[#C9A227] px-6 py-3 font-bold text-[#071531] transition hover:bg-white"
            >
              View Projects
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border border-[#C9A227] px-6 py-3 font-bold text-[#E8D7A5] transition hover:bg-[#C9A227] hover:text-[#071531]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
