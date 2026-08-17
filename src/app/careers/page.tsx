import type { Metadata } from "next";
import Image from "next/image";
import { Building2, CheckCircle2, FileText, Handshake, MessageCircle, Phone, Users } from "lucide-react";

const SITE_URL = "https://www.srisuprajainfracon.com";
const PHONE_DISPLAY = "+91 96407 53929";
const PHONE_NUMBER = "+919640753929";
const CONTACT_NAME = "Anjan Margam";
const CONTACT_ROLE = "HR Manager";
const WHATSAPP_URL = "https://wa.me/919640753929?text=Hi%2C%20I%20am%20interested%20in%20joining%20Sri%20Supraja%20Infracon%20as%20a%20channel%20partner.%20Please%20share%20the%20details.";

export const metadata: Metadata = {
  title: "Join as a Channel Partner | Sri Supraja Infracon",
  description: "Join Sri Supraja Infracon as a channel partner. Speak with our team about current projects, sales support and how to get started.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "Join as a Channel Partner | Sri Supraja Infracon",
    description: "Work with Sri Supraja Infracon and explore channel partner opportunities across our real estate projects.",
    url: `${SITE_URL}/careers`,
    type: "website",
  },
};

const benefits = [
  { icon: Building2, title: "Established Projects", text: "Work with well-planned developments backed by an experienced real estate team." },
  { icon: FileText, title: "Clear Project Information", text: "Receive the details and updates you need to speak to customers with confidence." },
  { icon: Users, title: "Sales & Site Visit Support", text: "Get coordination from our team when a customer needs guidance or wants to visit a project." },
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
      <section className="relative overflow-hidden bg-[#06142b] text-white">
        <div className="container-max grid items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-14">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <Handshake size={15} /> Channel Partner Opportunity
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Join Sri Supraja Infracon as a <span className="text-amber-400">Channel Partner</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-200">
              Work with our team to promote established real estate projects and connect interested buyers with the right opportunities.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-600">
                <MessageCircle size={18} /> Join as Channel Partner
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                <Phone size={17} /> {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              {CONTACT_NAME} <span className="mx-2 text-slate-500">|</span> {CONTACT_ROLE}
            </p>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 lg:min-h-[390px]">
            <Image
              src="/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp"
              alt="Sri Supraja Infracon project opportunity for channel partners"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06142b]/25 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/15 bg-[#06142b]/90 px-4 py-3 shadow-xl backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-slate-950"><Handshake size={21} /></div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">Work With Us</p>
                <p className="mt-0.5 text-sm font-semibold text-white">Project support. Clear coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-11 sm:py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Why Join Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Simple support for your business</h2>
          </div>
          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="text-center md:border-r md:border-slate-200 md:last:border-r-0 md:px-7">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700"><Icon size={22} /></div>
                <h3 className="mt-4 text-base font-bold text-slate-950">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-11 sm:py-14">
        <div className="container-max grid gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 shadow-sm">
            <Image
              src="/uploads/blog/architect-planning-home-layout.webp"
              alt="Real estate professionals discussing a property plan"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Who Can Join</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">If you work in property sales or referrals, speak with us</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">We welcome people who understand their local market, communicate clearly and can connect interested customers with suitable projects.</p>
            <div className="mt-5 space-y-2.5">
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

      <section className="py-11 sm:py-14">
        <div className="container-max grid overflow-hidden rounded-xl border border-slate-200 bg-[#fffaf2] lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Let&apos;s Work Together</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Interested in working with us?</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">Share your details or contact us directly. We will explain the available projects, working process and next steps.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"><MessageCircle size={17} /> Join on WhatsApp</a>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-400"><Phone size={16} /> Call {PHONE_DISPLAY}</a>
            </div>
            <p className="mt-4 text-sm font-bold text-slate-800">{CONTACT_NAME} <span className="mx-2 font-normal text-slate-400">|</span> {CONTACT_ROLE}</p>
          </div>
          <div className="relative min-h-[250px] bg-slate-100 lg:min-h-[315px]">
            <Image
              src="/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp"
              alt="Sri Supraja Infracon project presentation"
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
          <p>Channel partner opportunities are independent business arrangements and are not salaried employment. Terms are discussed and agreed separately with each partner.</p>
        </div>
      </section>
    </main>
  );
}
