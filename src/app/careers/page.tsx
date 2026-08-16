import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
  "https://wa.me/919640753929?text=Hi%2C%20I%20am%20interested%20in%20working%20with%20Sri%20Supraja%20Infracon%20as%20a%20channel%20partner.%20Please%20share%20the%20details.";

export const metadata: Metadata = {
  title: "Careers & Business Associations | Sri Supraja Infracon",
  description:
    "Explore professional and business association opportunities with Sri Supraja Infracon, including opportunities for experienced real estate consultants, agencies and referral professionals.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "Careers & Business Associations | Sri Supraja Infracon",
    description:
      "Connect with Sri Supraja Infracon for professional opportunities and real estate business associations across our project portfolio.",
    url: `${SITE_URL}/careers`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp`,
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon professional opportunities",
      },
    ],
  },
};

const strengths = [
  {
    icon: Building2,
    title: "Established Portfolio",
    text: "Present plotted development opportunities backed by clear project information and an experienced development team.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Communication",
    text: "Receive relevant project details and updates so conversations with prospective buyers remain informed and transparent.",
  },
  {
    icon: Users,
    title: "Sales Coordination",
    text: "Work with our team on enquiries, site visits and the practical information required during the buyer journey.",
  },
];

const associates = [
  "Independent real estate consultants",
  "Property brokers and agencies",
  "Referral professionals with established local networks",
  "Digital lead generation and property marketing professionals",
  "Experienced real estate sales professionals",
];

const steps = [
  { title: "Connect", text: "Introduce yourself and tell us about your market or customer network." },
  { title: "Discuss", text: "Understand the current projects, customer segments and commercial terms." },
  { title: "Onboard", text: "Complete the applicable association formalities with our team." },
  { title: "Begin", text: "Receive relevant project material and start coordinating genuine buyer enquiries." },
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 pt-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp"
            alt="Sri Supraja Infracon development"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/65" />

        <div className="container-max relative z-10 grid items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <Handshake size={15} />
              Business Associations
            </div>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.45rem]">
              Build Your Real Estate Business With Confidence
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Sri Supraja Infracon welcomes experienced consultants, agencies and
              referral professionals who value credible projects, clear information
              and long-term working relationships.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={18} />
                Discuss an Association
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <Phone size={17} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-lg lg:block">
            <div className="relative ml-auto h-[390px] w-[88%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp"
                alt="Sri Supraja Infracon project environment"
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-0 max-w-[250px] rounded-xl border border-white/10 bg-slate-900/95 p-5 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Work With Us</p>
              <p className="mt-2 text-base font-semibold leading-6 text-white">
                A professional relationship supported by project knowledge and responsive coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Working Together</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What you can expect from the relationship
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
                Productive associations depend on reliable information, timely communication and a shared focus on helping buyers make considered property decisions.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {strengths.map(({ icon: Icon, title, text }) => (
                <article key={title} className="border-t-2 border-amber-400 bg-white px-5 py-6 shadow-sm">
                  <Icon size={21} className="text-amber-700" />
                  <h3 className="mt-4 text-base font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-max grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[440px]">
            <Image
              src="/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp"
              alt="Sri Supraja Infracon plotted development project"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-6 pb-6 pt-24 text-white">
              <p className="max-w-md text-base font-semibold leading-6">
                Strong local relationships become more valuable when they are supported by dependable project information.
              </p>
            </div>
          </div>

          <div className="lg:pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Who We Work With</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Experienced professionals with genuine market reach
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We are interested in people and organisations that understand their customers, communicate responsibly and can build trust within the markets they serve.
            </p>

            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {associates.map((item) => (
                <div key={item} className="flex items-start gap-3 py-3.5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={18} />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Business associations are independent arrangements and do not constitute salaried employment unless a separate role is expressly offered in writing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Getting Started</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A simple route from introduction to active collaboration
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
                The first conversation is exploratory. We understand your experience and reach, then discuss where there may be a suitable fit.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="border-t border-white/15 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-amber-300">0{index + 1}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 border border-slate-200 bg-slate-50 px-6 py-9 sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                <MapPin size={14} /> Hyderabad & Telangana
              </div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.15rem]">
                Interested in exploring a business association with us?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Speak directly with our team to understand the current portfolio, working model and next steps.
              </p>
            </div>

            <div className="flex min-w-[245px] flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                <Phone size={17} /> {PHONE_DISPLAY}
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 transition hover:text-amber-800"
              >
                View Our Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
