import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Join as a Channel Partner | Sri Supraja Infracon",
  description:
    "Join Sri Supraja Infracon as a channel partner. Speak with our team about current projects, sales support and how to get started.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "Join as a Channel Partner | Sri Supraja Infracon",
    description:
      "Work with Sri Supraja Infracon and explore channel partner opportunities across our real estate projects.",
    url: `${SITE_URL}/careers`,
    type: "website",
  },
};

const benefits = [
  {
    icon: Building2,
    title: "Established Projects",
    text: "Work with well-planned developments backed by an experienced real estate team.",
  },
  {
    icon: FileText,
    title: "Clear Project Information",
    text: "Receive the details and updates you need to speak to customers with confidence.",
  },
  {
    icon: Users,
    title: "Sales & Site Visit Support",
    text: "Get coordination from our team when a customer needs guidance or wants to visit a project.",
  },
];

const whoCanJoin = [
  "Real estate consultants",
  "Property brokers and agents",
  "Referral professionals",
  "Experienced property sales professionals",
  "People with a strong local customer network",
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="bg-slate-950">
        <h1 className="sr-only">Join Sri Supraja Infracon as a Channel Partner</h1>
        <div className="container-max px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
            <Image
              src="/careers/opengraph-image"
              alt="Join Sri Supraja Infracon as a Channel Partner"
              width={1200}
              height={630}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-12 sm:py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Why Join Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Simple support for your business
            </h2>
          </div>

          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="text-center md:border-r md:border-slate-200 md:last:border-r-0 md:px-7">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-14">
        <div className="container-max grid gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
            <Image
              src="/uploads/blog/architect-planning-home-layout.webp"
              alt="Real estate professional discussing a property plan with a customer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Who Can Join</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              If you work in property sales or referrals, speak with us
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              We welcome people who understand their local market, communicate clearly and can connect interested customers with suitable projects.
            </p>

            <div className="mt-6 space-y-3">
              {whoCanJoin.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={18} />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container-max grid overflow-hidden rounded-2xl border border-slate-200 bg-[#fffaf2] lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-6 py-9 sm:px-9 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Let&apos;s Work Together</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Interested in working with us?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Share your details or contact us directly. We will explain the available projects, working process and next steps.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={undefined}
                className="hidden"
                aria-hidden="true"
              />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={17} /> Join on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-400"
              >
                <Phone size={16} /> Call {PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-5 text-sm font-bold text-slate-800">
              {CONTACT_NAME} <span className="mx-2 font-normal text-slate-400">|</span> {CONTACT_ROLE}
            </p>
          </div>

          <div className="relative min-h-[280px] lg:min-h-[350px]">
            <Image
              src="/uploads/blog/approved-layout-plan-explained.webp"
              alt="Real estate project layout being reviewed before a customer discussion"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-5 text-white sm:px-6">
        <div className="container-max flex items-start gap-3 text-xs leading-5 text-slate-300 sm:text-sm">
          <Handshake className="mt-0.5 shrink-0 text-amber-300" size={18} />
          <p>
            Channel partner opportunities are independent business arrangements and are not salaried employment. Terms are discussed and agreed separately with each partner.
          </p>
        </div>
      </section>
    </main>
  );
}
