"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Building2,
  Download,
  Eye,
  GraduationCap,
  Landmark,
  MapPinned,
  Ruler,
  Route,
} from "lucide-react";
import SmartImage from "@/components/shared/SmartImage";
import { getProjectSeo } from "@/data/projectSeo";

type ProjectHeroProps = {
  project: any;
};

const heroCopy: Record<
  string,
  {
    badge: string;
    h1: string;
    subtitle: string;
    firstParagraph: string;
    description: string;
    tags: string[];
    imageAlt: string;
  }
> = {
  "supraja-iris-resort-plots": {
    badge: "SUPRAJA IRIS • KAMKOLE",
    h1: "DTCP & RERA Approved Resort Plots at Kamkole",
    subtitle:
      "350-acre plotted development adjacent to Woxsen University, with Lemon Tree Resort and water villas under construction.",
    firstParagraph:
      "Supraja IRIS is a large plotted development at Kamkole with approved plots and resort and recreation facilities at different stages of development.",
    description:
      "Review the approvals, current construction, available plots, pricing and location before planning a site visit.",
    tags: [
      "DTCP Approved",
      "RERA Registered",
      "Plots from 165 Sq. Yards",
      "Near NH-65",
    ],
    imageAlt:
      "Supraja IRIS DTCP and RERA approved resort plots at Kamkole near Woxsen University",
  },
  "supraja-iris": {
    badge: "SUPRAJA IRIS • KAMKOLE",
    h1: "DTCP & RERA Approved Resort Plots at Kamkole",
    subtitle:
      "350-acre plotted development adjacent to Woxsen University, with Lemon Tree Resort and water villas under construction.",
    firstParagraph:
      "Supraja IRIS is a large plotted development at Kamkole with approved plots and resort and recreation facilities at different stages of development.",
    description:
      "Review the approvals, current construction, available plots, pricing and location before planning a site visit.",
    tags: [
      "DTCP Approved",
      "RERA Registered",
      "Plots from 165 Sq. Yards",
      "Near NH-65",
    ],
    imageAlt:
      "Supraja IRIS DTCP and RERA approved resort plots at Kamkole near Woxsen University",
  },
  "bridge-county": {
    badge: "BRIDGE COUNTY • KAMKOLE",
    h1: "DTCP & RERA Approved Open Plots at Kamkole",
    subtitle:
      "15-acre plotted enclave within Supraja IRIS, adjacent to Woxsen University and connected to the NH-65 corridor.",
    firstParagraph:
      "Bridge County is a 15-acre plotted enclave within the larger Supraja IRIS development at Kamkole.",
    description:
      "The layout includes 211 plots, 50 and 33 ft roads, underground utility planning and access toward Woxsen University and NH-65.",
    tags: [
      "₹13,500 per Sq. Yard",
      "15 Acre Enclave",
      "211 Plots",
      "Near Woxsen University",
      "50 & 33 Ft Roads",
      "Underground Infrastructure",
    ],
    imageAlt:
      "Bridge County DTCP and RERA approved open plots within Supraja IRIS at Kamkole",
  },
  "sindhu-sarovar": {
    badge: "SINDHU SAROVAR • MOMINPET",
    h1: "DTCP & RERA Approved Open Plots at Mominpet",
    subtitle:
      "Plots from 150 to 569 sq. yards with 100 ft road access, blacktop roads and gated community planning.",
    firstParagraph:
      "Sindhu Sarovar is a plotted development at Mominpet with documented DTCP and RERA project records.",
    description:
      "The layout includes wide roads, electricity and drainage planning, landscaped areas and gated access. Buyers should verify the latest RERA status before purchase.",
    tags: [
      "150-569 Sq. Yard Plots",
      "100 Ft Road Access",
      "Gated Layout",
      "Blacktop Roads",
      "Parks & Open Spaces",
      "Mominpet Location",
    ],
    imageAlt:
      "Sindhu Sarovar open plots at Mominpet with wide roads and gated community planning",
  },
  "subhash-meadows": {
    badge: "SUBHASH MEADOWS • INDRAKARAN",
    h1: "Affordable Open Plots at Indrakaran Near ORR",
    subtitle:
      "Planned blacktop roads, drainage, parks and access toward IIT Hyderabad, ICRISAT and BHEL.",
    firstParagraph:
      "Subhash Meadows is an affordable plotted development at Indrakaran with planned community infrastructure.",
    description:
      "The project has road access toward ORR, IIT Hyderabad, ICRISAT, BHEL and Sangareddy, with blacktop roads, drainage, lighting and park provisions.",
    tags: [
      "GP LRS Paid",
      "5 Min to ORR",
      "15 Min to IIT Hyderabad",
      "40, 33 & 30 Ft Roads",
      "Underground Drainage",
      "Parks & Avenue Plantation",
    ],
    imageAlt:
      "Subhash Meadows affordable open plots at Indrakaran near ORR and IIT Hyderabad",
  },
};

const fallbackHero = {
  badge: "SRI SUPRAJA INFRACON PROJECT",
  h1: "Plotted Development by Sri Supraja Infracon",
  subtitle:
    "Review the project location, approvals, infrastructure and current availability before planning a visit.",
  firstParagraph:
    "This project is part of Sri Supraja Infracon's real estate portfolio in the Hyderabad region.",
  description:
    "Project details, current availability and documentation can be reviewed with our team before booking.",
  tags: ["Project Details", "Location Information", "Site Visit Available"],
  imageAlt: "Sri Supraja Infracon plotted development",
};

const premiumHeroStats: Record<string, any[]> = {
  "bridge-county": [
    { icon: BadgeCheck, label: "DTCP & RERA", value: "Approved" },
    { icon: Ruler, label: "15", value: "Acres" },
    { icon: Award, label: "211", value: "Plots" },
    { icon: GraduationCap, label: "Adjacent", value: "Woxsen University" },
    { icon: Route, label: "NH-65", value: "Connectivity" },
  ],
  "sindhu-sarovar": [
    { icon: BadgeCheck, label: "DTCP", value: "Project Records" },
    { icon: Ruler, label: "150-569", value: "Sq. Yard Plots" },
    { icon: Award, label: "Gated", value: "Layout" },
    { icon: MapPinned, label: "100 Ft", value: "Road Access" },
    { icon: Route, label: "Mominpet", value: "Location" },
  ],
  "subhash-meadows": [
    { icon: BadgeCheck, label: "LRS", value: "Charges Paid" },
    { icon: Ruler, label: "30 Ft+", value: "Blacktop Roads" },
    { icon: Award, label: "Planned", value: "Amenities" },
    { icon: MapPinned, label: "15 Min", value: "IIT Hyderabad" },
    { icon: Route, label: "5 Min", value: "ORR" },
  ],
};

const suprajaIrisStats = [
  { icon: Ruler, value: "350", label: "Acres", text: "Master Plan" },
  {
    icon: MapPinned,
    value: "4000",
    label: "Approx. Plots",
    text: "Overall Development",
  },
  {
    icon: Building2,
    value: "5",
    label: "Acres",
    text: "Lemon Tree Resort Site",
  },
  {
    icon: Landmark,
    value: "3.5",
    label: "Acres",
    text: "Water Theme Park Area",
  },
  {
    icon: GraduationCap,
    value: "Adjacent",
    label: "Woxsen University",
    text: "Kamkole Location",
  },
];

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const seo = getProjectSeo(project.slug);
  const hero = heroCopy[project.slug] ?? fallbackHero;

  const isSuprajaIris =
    project.slug === "supraja-iris-resort-plots" ||
    project.slug === "supraja-iris";

  const hasPremiumFullHero =
    project.slug === "bridge-county" ||
    project.slug === "sindhu-sarovar" ||
    project.slug === "subhash-meadows";

  if (isSuprajaIris) {
    return (
      <section className="relative overflow-hidden bg-[#07111F]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(214,177,92,0.14),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1633_58%,#12233D_100%)]" />

        <div className="container-max relative z-10 px-4 pb-28 pt-28 sm:px-6 lg:px-8 lg:pb-36 lg:pt-32">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="transition hover:text-[#D6B15C]">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-[#D6B15C]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#E8D7A5]">{project.title}</span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] xl:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#D6B15C]">
                  {hero.badge}
                </span>
                <span className="hidden h-px w-24 bg-[#D6B15C]/60 sm:block" />
              </div>

              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hero.h1}
              </h1>

              <p className="mt-7 max-w-3xl text-xl font-semibold leading-snug text-[#E8D7A5] sm:text-2xl">
                {hero.subtitle}
              </p>

              <div className="mt-6 inline-flex rounded-[18px] border border-[#D6B15C]/35 bg-white/10 px-5 py-3 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                  Plots starting from{" "}
                  <span className="text-[#D6B15C]">₹22.3 Lakhs</span>
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {hero.tags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D6B15C]/35 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://suprajagroup.tranquilcrmp.in/mobileapp/newmaps/4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D6B15C] px-7 py-3.5 text-sm font-bold text-[#07111F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#E4C97F]"
                >
                  <Eye className="h-5 w-5" />
                  See Live Plot Availability
                </a>

                <a
                  href="/brochures/supraja-iris-brochure.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-[#D6B15C]/60 hover:bg-white/15"
                >
                  <Download className="h-5 w-5" />
                  Download Brochure
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[32px] bg-[#D6B15C]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-video w-full bg-black">
                  <video
                    className="h-full w-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/videos/supraja-iris-hero-poster.webp"
                    aria-label={hero.imageAlt}
                  >
                    <source src="/videos/supraja-iris-hero.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container-max relative z-20 -mt-20 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-0 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(7,17,31,0.18)] sm:grid-cols-2 lg:grid-cols-5">
            {suprajaIrisStats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.value}-${item.label}`}
                  className={`flex items-center gap-4 px-6 py-7 ${
                    index !== suprajaIrisStats.length - 1
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D6B15C]/50 bg-[#FFF8E5]">
                    <Icon className="h-7 w-7 text-[#8A6500]" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold leading-none text-[#07111F]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#07111F]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-snug text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (hasPremiumFullHero) {
    const stats = premiumHeroStats[project.slug] ?? [];

    return (
      <section className="relative overflow-hidden bg-[#07111F]">
        <div className="absolute inset-0">
          <SmartImage
            src={project.heroImage || project.image}
            alt={hero.imageAlt}
            priority
            sizes="100vw"
            wrapperClassName="h-full w-full"
            imageClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/72 to-[#07111F]/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/75 via-transparent to-[#07111F]/35" />
        </div>

        <div className="container-max relative z-10 px-4 pb-28 pt-28 sm:px-6 lg:px-8 lg:pb-36 lg:pt-32">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="transition hover:text-[#D6B15C]">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-[#D6B15C]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#E8D7A5]">{project.title}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#D6B15C]">
              {hero.badge}
            </span>
            <span className="h-px w-24 bg-[#D6B15C]/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.h1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-8 max-w-3xl"
          >
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {project.slug === "bridge-county" ? (
                <>
                  15-Acre Plotted Enclave
                  <br />
                  Within <span className="text-[#D6B15C]">Supraja IRIS</span>
                </>
              ) : (
                hero.subtitle
              )}
            </p>

            {project.slug === "bridge-county" && (
              <div className="mt-8 max-w-xl rounded-[22px] border border-[#D6B15C]/35 bg-[#07111F]/65 p-6 shadow-2xl backdrop-blur-md">
                <p className="text-base font-semibold text-white">
                  Current Listed Price
                </p>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-[#D6B15C] sm:text-5xl">
                  ₹13,500 <span className="text-xl">/ Sq. Yard</span>
                </p>
              </div>
            )}

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {hero.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D6B15C]/35 bg-[#07111F]/55 px-4 py-2 text-xs font-bold text-white backdrop-blur-md sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container-max relative z-20 -mt-20 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-0 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(7,17,31,0.18)] sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.label}-${item.value}`}
                  className={`flex items-center gap-4 px-6 py-7 ${
                    index !== stats.length - 1
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D6B15C]/50 bg-[#FFF8E5]">
                    <Icon className="h-7 w-7 text-[#8A6500]" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold leading-none text-[#07111F]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] pt-28">
      <div className="absolute inset-x-0 top-0 h-[470px] bg-gradient-to-br from-[#081225] via-[#0B1633] to-[#18345F]" />

      <div className="container-max relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-200">
          <Link href="/" className="transition hover:text-[#C9A227]">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="transition hover:text-[#C9A227]">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#E8D7A5]">{project.title}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
          <span className="text-sm font-semibold text-[#E8D7A5]">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-6xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          {hero.h1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 max-w-4xl text-lg font-semibold leading-relaxed text-[#E8D7A5] sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_18px_55px_rgba(11,22,51,0.10)] sm:p-8"
          >
            <p className="text-lg leading-relaxed text-[#4B5563]">
              {hero.firstParagraph}
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {hero.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E8D7A5] bg-[#FFF9E8] px-4 py-2 text-xs font-bold text-[#0B1633] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
              {seo.internalLinks.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-700 underline"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://www.rera.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Telangana RERA
              </a>

              <a
                href="https://dtcp.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Telangana DTCP
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-[#C9A227]/45 via-white/20 to-[#0B1633]/25 blur-xl" />

            <SmartImage
              src={project.heroImage || project.image}
              alt={hero.imageAlt}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              wrapperClassName="relative h-[320px] w-full rounded-[32px] border border-white/60 shadow-[0_22px_70px_rgba(11,22,51,0.18)] sm:h-[420px] lg:h-full lg:min-h-[460px]"
              imageClassName="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
