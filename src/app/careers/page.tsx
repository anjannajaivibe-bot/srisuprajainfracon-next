import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  FileText,
  Handshake,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.srisuprajainfracon.com";
const PHONE_DISPLAY = "+91 96407 53929";
const PHONE_NUMBER = "+919640753929";
const CONTACT_NAME = "Anjan Margam";
const CONTACT_ROLE = "HR Manager";
const WHATSAPP_URL =
  "https://wa.me/919640753929?text=Hi%2C%20I%20am%20interested%20in%20joining%20Sri%20Supraja%20Infracon%20as%20a%20channel%20partner.%20Please%20share%20the%20details.";

export const metadata: Metadata = {
  title: "Channel Partner Opportunities in Hyderabad",
  description:
    "Join Sri Supraja Infracon as a channel partner and represent established real estate projects with project information, site visit coordination and sales support.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "Join as a Channel Partner | Sri Supraja Infracon",
    description:
      "Explore channel partner opportunities with Sri Supraja Infracon and connect buyers with established real estate projects.",
    url: `${SITE_URL}/careers`,
    type: "website",
    images: [
      {
        url: "/uploads/blog/channel-partner-hyderabad-meeting.webp",
        width: 1600,
        height: 900,
        alt: "Illustrative channel partner discussion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Channel Partner Opportunities | Sri Supraja Infracon",
    description:
      "Explore an independent real estate partnership with Sri Supraja Infracon.",
    images: ["/uploads/blog/channel-partner-hyderabad-meeting.webp"],
  },
};

const benefits = [
  {
    icon: Building2,
    title: "Established Projects",
    text: "Represent thoughtfully planned developments backed by an experienced real estate team.",
  },
  {
    icon: FileText,
    title: "Reliable Project Information",
    text: "Access relevant project details and updates to guide prospective buyers with confidence.",
  },
  {
    icon: Users,
    title: "Sales & Site Visit Support",
    text: "Coordinate smoothly with our team when prospects need guidance or wish to visit a project.",
  },
];

const whoCanJoin = [
  "Real estate consultants",
  "Property brokers and agents",
  "Referral professionals",
  "Experienced property sales professionals",
  "People with a strong local customer network",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/careers#webpage`,
      url: `${SITE_URL}/careers`,
      name: "Join Sri Supraja Infracon as a Channel Partner",
      description:
        "Channel partner opportunity with Sri Supraja Infracon for real estate consultants, brokers, referral professionals and property sales professionals.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${SITE_URL}/careers#breadcrumb` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/careers#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Channel Partner Opportunity",
          item: `${SITE_URL}/careers`,
        },
      ],
    },
  ],
};

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate overflow-hidden bg-[#06142b] text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
          <Image
            src="/uploads/careers/careers-hero-handshake-v2.webp"
            alt="Business handshake representing Sri Supraja Infracon channel partner opportunity"
            fill
            priority
            sizes="62vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142b] via-[#06142b]/95 to-[#06142b]/10 lg:via-[#06142b]/82" />

        <div className="container-max relative z-10 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <Handshake size={15} /> Channel Partner Opportunity
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              Join Sri Supraja Infracon as a{" "}
              <span className="text-amber-400">Channel Partner</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-200">
              Represent established real estate projects, connect genuine buyers
              with suitable opportunities and grow with the support of our team.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                data-track-label="Channel partner enquiry: WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-800"
              >
                <MessageCircle size={18} /> Join as Channel Partner
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                data-track-label="Channel partner enquiry: phone"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={17} /> {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              {CONTACT_NAME} <span className="mx-2 text-slate-500">|</span>{" "}
              {CONTACT_ROLE}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-11 sm:py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Why Partner With Us
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Practical support at every stage
            </h2>
          </div>
          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="text-center md:border-r md:border-slate-200 md:last:border-r-0 md:px-7"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-11 sm:py-14">
        <div className="container-max grid gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 shadow-sm">
            <Image
              src="/uploads/careers/careers-consultation.webp"
              alt="Real estate professionals discussing a property plan"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Who Can Join
            </p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built for people who understand property buyers
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              This opportunity suits professionals who know their local market,
              communicate clearly and can introduce serious buyers to relevant
              projects.
            </p>
            <div className="mt-5 space-y-2.5">
              {whoCanJoin.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-amber-700"
                    size={18}
                  />
                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
              New to channel partnerships? Read our{" "}
              <Link
                href="/blog/become-real-estate-channel-partner-hyderabad"
                className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
              >
                complete guide to becoming a real estate channel partner in Hyderabad
              </Link>{" "}
              to understand the role, preparation and questions to ask before getting started.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-11 sm:py-14"
        aria-labelledby="partner-start"
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2
            id="partner-start"
            className="font-display text-3xl font-bold text-slate-950"
          >
            Start with a conversation
          </h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            <li className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                1. Introduce yourself
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Share your operating area, relevant experience and the type of
                property buyers you usually speak with.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                2. Explore the projects
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Ask about project information, partner coordination and
                arranging an introductory site visit.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">
                3. Discuss the arrangement
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Clarify responsibilities, buyer introductions and commercial
                terms before getting started.
              </p>
            </li>
          </ol>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                Get to know Supraja IRIS
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explore our project near Sadashivapet in the Kamkole area, with
                NH 65 as a regional connectivity reference.
              </p>
              <Link
                href="/projects/supraja-iris-resort-plots"
                className="mt-4 inline-block font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
              >
                Explore the Supraja IRIS project
              </Link>
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                Prepare for your first discussion
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Understand the partner role, what information to prepare and
                which questions to ask the team.
              </p>
              <Link
                href="/blog/become-real-estate-channel-partner-hyderabad"
                className="mt-4 inline-block font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
              >
                Read our channel partner guide
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-slate-50 py-11 sm:py-14"
        aria-labelledby="partner-questions"
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2
            id="partner-questions"
            className="font-display text-3xl font-bold text-slate-950"
          >
            Your partnership questions
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-slate-900">
                Is this a salaried role?
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                This is an independent business arrangement. It is not salaried
                employment.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                Can I enquire if I am new to property sales?
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Share your background and local network with the team to discuss
                whether the opportunity suits you and what preparation may be
                needed.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                How are commission terms agreed?
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Commercial terms are discussed separately with each partner. Ask
                about eligibility, payment milestones and the written
                arrangement before starting.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                What should I include in my enquiry?
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Include your name, location and relevant property experience.
                You can describe your buyer network without sharing customer
                details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-11 sm:py-14">
        <div className="container-max grid overflow-hidden rounded-xl border border-slate-200 bg-[#fffaf2] lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Take the Next Step
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ready to explore the partnership?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              Connect with us to understand current projects, partner
              coordination and the process for getting started.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={WHATSAPP_URL}
                data-track-label="Channel partner enquiry: WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-800"
              >
                <MessageCircle size={17} /> Enquire on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                data-track-label="Channel partner enquiry: phone"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-400"
              >
                <Phone size={16} /> Call {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 text-sm font-bold text-slate-800">
              {CONTACT_NAME}{" "}
              <span className="mx-2 font-normal text-slate-400">|</span>{" "}
              {CONTACT_ROLE}
            </p>
          </div>
          <div className="relative min-h-[250px] lg:min-h-[315px]">
            <Image
              src="/uploads/careers/careers-layout-discussion.webp"
              alt="Real estate team reviewing a plotted development layout"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-4 text-white sm:px-6">
        <div className="container-max flex items-start gap-3 text-xs leading-5 text-slate-300 sm:text-sm">
          <Handshake className="mt-0.5 shrink-0 text-amber-300" size={18} />
          <p>
            Channel partner opportunities are independent business arrangements
            and are not salaried employment. Terms are discussed and agreed
            separately with each partner.
          </p>
        </div>
      </section>
    </main>
  );
}
