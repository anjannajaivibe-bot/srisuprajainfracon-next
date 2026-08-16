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
  Sparkles,
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
      <section className="relative isolate min-h-[720px] overflow-hidden bg-slate-950 pt-28 text-white lg:min-h-[760px]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp"
            alt="Sri Supraja Infracon plotted development"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
        <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-max relative z-10 grid items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur-sm">
              <Handshake size={16} />
              Channel Partner Opportunities
            </div>

            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Build Your Real Estate Business With
              <span className="block text-amber-300">Sri Supraja Infracon</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              We are expanding our channel partner network and looking for
              motivated real estate professionals who want to work with strong
              plotted development opportunities across Hyderabad growth corridors.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 font-bold text-white shadow-xl shadow-green-950/20 transition hover:bg-green-600"
              >
                <MessageCircle size={19} />
                Become a Channel Partner
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <Phone size={18} />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-300" />
                Real estate professionals welcome
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-300" />
                Hyderabad and regional network
              </span>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xl lg:block">
            <div className="relative ml-auto h-[500px] w-[78%] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp"
                alt="Supraja IRIS project view"
                fill
                sizes="520px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-60 w-64 overflow-hidden rounded-[1.75rem] border-8 border-slate-950 shadow-2xl">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-3.webp"
                alt="Sri Supraja Infracon project infrastructure"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-5 top-10 rounded-2xl border border-white/15 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Partner With Us
              </p>
              <p className="mt-2 max-w-[190px] text-lg font-bold leading-snug text-white">
                Grow through trusted real estate opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Why Partner With Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              A partnership designed around real sales opportunities
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The right channel partnership should give you more than inventory.
              It should give you clarity, support and a portfolio you can present
              confidently to prospective buyers.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  <Icon size={23} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-max grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[520px]">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-4.webp"
                alt="Developed roads at Sri Supraja Infracon project"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-52 overflow-hidden rounded-[2rem] sm:h-64">
                <Image
                  src="/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp"
                  alt="Plotted development by Sri Supraja Infracon"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
                <Sparkles className="text-amber-300" size={24} />
                <p className="mt-5 text-2xl font-bold leading-tight">
                  Your network. Our projects. A stronger sales opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Who Can Join
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              We are building a wider partner network
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you already work in real estate or have a strong buyer and
              referral network, we would like to explore how we can work together.
            </p>

            <div className="mt-8 space-y-4">
              {partnerTypes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={20} />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
              Channel partner opportunities are independent business arrangements
              and are not salaried employment unless specifically communicated in
              writing for a separate role.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
                Simple Onboarding
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Start the conversation. We will take it forward from there.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                We keep the first step simple. Speak with our team, understand the
                opportunity and decide whether the partnership is right for you.
              </p>
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300 font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-2 font-semibold text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-100 via-white to-slate-100 px-6 py-12 ring-1 ring-slate-200 sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-amber-800 shadow-sm">
                  <MapPin size={16} />
                  Hyderabad & Telangana
                </div>
                <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Interested in becoming a Sri Supraja Infracon channel partner?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Call or WhatsApp us directly. We will share the current project
                  opportunities and explain the partner onboarding process.
                </p>
              </div>

              <div className="flex min-w-[280px] flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-green-600"
                >
                  <MessageCircle size={19} />
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
                >
                  <Phone size={18} />
                  {PHONE_DISPLAY}
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-800"
                >
                  Explore Projects
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
