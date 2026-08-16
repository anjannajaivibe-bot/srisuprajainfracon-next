import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.srisuprajainfracon.com";
const PHONE_DISPLAY = "+91 96407 53929";
const PHONE_NUMBER = "+919640753929";
const WHATSAPP_URL =
  "https://wa.me/919640753929?text=Hi%2C%20I%20am%20interested%20in%20becoming%20a%20channel%20partner%20with%20Sri%20Supraja%20Infracon.%20Please%20share%20the%20details.";

export const metadata: Metadata = {
  title: "Careers & Channel Partner Opportunities | Sri Supraja Infracon",
  description:
    "Explore channel partner opportunities with Sri Supraja Infracon and connect with our team to market approved plotted development projects across Hyderabad growth corridors.",
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  openGraph: {
    title: "Channel Partner Opportunities | Sri Supraja Infracon",
    description:
      "Grow your real estate business with Sri Supraja Infracon. Explore channel partner opportunities across our plotted development portfolio.",
    url: `${SITE_URL}/careers`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp`,
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon channel partner opportunities",
      },
    ],
  },
};

const benefits = [
  {
    icon: Building2,
    title: "Strong Project Portfolio",
    text: "Represent plotted development projects positioned across important Hyderabad growth corridors.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Business Growth Opportunity",
    text: "Build a long-term real estate sales pipeline with project support and structured channel coordination.",
  },
  {
    icon: Users,
    title: "Sales Support",
    text: "Get access to project information, sales material and support needed to communicate clearly with buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Buyer-Focused Approach",
    text: "Work with a developer focused on approved layouts, project transparency and informed property decisions.",
  },
];

const steps = [
  "Connect with our channel partner team",
  "Understand the active projects and buyer segments",
  "Complete partner onboarding and commercial discussion",
  "Receive project material and sales support",
  "Start generating enquiries, site visits and closures",
];

const partnerTypes = [
  "Independent real estate consultants",
  "Property brokers and agencies",
  "Digital lead generation professionals",
  "Local market and referral partners",
  "Experienced real estate sales professionals",
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 pt-24 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp"
            alt="Sri Supraja Infracon plotted development"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/55" />

        <div className="container-max relative z-10 grid items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
              <Handshake size={15} />
              Channel Partner Opportunities
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.75rem]">
              Grow Your Real Estate Business With
              <span className="block text-amber-300">Sri Supraja Infracon</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              We are expanding our channel partner network and welcome real estate
              professionals who want to work with plotted development opportunities
              across Hyderabad&apos;s key growth corridors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-green-600"
              >
                <MessageCircle size={18} />
                Become a Channel Partner
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <Phone size={17} />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-amber-300" />
                Real estate professionals welcome
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-amber-300" />
                Hyderabad and regional network
              </span>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-lg lg:block">
            <div className="relative ml-auto h-[420px] w-[82%] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp"
                alt="Supraja IRIS project view"
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-3 h-48 w-52 overflow-hidden rounded-2xl border-6 border-slate-950 shadow-2xl">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-3.webp"
                alt="Sri Supraja Infracon project infrastructure"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-2 top-8 max-w-[190px] rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
                Partner With Us
              </p>
              <p className="mt-2 text-base font-semibold leading-snug text-white">
                Build a stronger sales pipeline with the right project support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Why Partner With Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A practical partnership built around sales support
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The right channel partnership should provide clarity, dependable
              project information and the support needed to present opportunities
              confidently to prospective buyers.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-max grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[420px]">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-4.webp"
                alt="Developed roads at Sri Supraja Infracon project"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-44 overflow-hidden rounded-3xl sm:h-52">
                <Image
                  src="/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp"
                  alt="Plotted development by Sri Supraja Infracon"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-lg font-semibold leading-snug">
                  Your network. Our projects. A stronger opportunity to grow together.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Who Can Join
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              We are expanding our channel partner network
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Whether you already work in real estate or have a strong buyer and
              referral network, we would like to explore how we can work together.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {partnerTypes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={18} />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
              Channel partner opportunities are independent business arrangements
              and are not salaried employment unless specifically communicated in
              writing for a separate role.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Simple Onboarding
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A clear and straightforward way to get started
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Speak with our team, understand the opportunity and decide whether
                the partnership is right for you.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm font-semibold leading-6 text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-slate-50 px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-amber-800 shadow-sm">
                  <MapPin size={14} />
                  Hyderabad & Telangana
                </div>
                <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Interested in becoming a Sri Supraja Infracon channel partner?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Call or WhatsApp us directly. We will share the current project
                  opportunities and explain the partner onboarding process.
                </p>
              </div>

              <div className="flex min-w-[260px] flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-green-600"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  <Phone size={17} />
                  {PHONE_DISPLAY}
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-800"
                >
                  Explore Projects
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
