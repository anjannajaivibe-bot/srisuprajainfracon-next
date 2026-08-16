import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Handshake, MapPin, MessageCircle, Phone, ShieldCheck, Users } from "lucide-react";

const SITE_URL = "https://www.srisuprajainfracon.com";
const PHONE_DISPLAY = "+91 96407 53929";
const PHONE_NUMBER = "+919640753929";
const CONTACT_NAME = "Anjan Margam";
const CONTACT_ROLE = "HR Manager";
const WHATSAPP_URL = "https://wa.me/919640753929?text=Hi%2C%20I%20am%20interested%20in%20joining%20Sri%20Supraja%20Infracon%20as%20a%20channel%20partner.%20Please%20share%20the%20details.";

export const metadata: Metadata = {
  title: "Careers & Business Associations | Sri Supraja Infracon",
  description: "Explore professional and channel partner opportunities with Sri Supraja Infracon for real estate consultants, agencies and referral professionals.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: { title: "Careers & Business Associations | Sri Supraja Infracon", description: "Connect with Sri Supraja Infracon for professional opportunities and real estate business associations across our project portfolio.", url: `${SITE_URL}/careers`, type: "website", images: [{ url: `${SITE_URL}/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp`, width: 1200, height: 630, alt: "Sri Supraja Infracon professional opportunities" }] },
};

const strengths = [
  { icon: Building2, title: "Established Portfolio", text: "Present plotted development opportunities backed by clear project information and an experienced development team." },
  { icon: ShieldCheck, title: "Clear Communication", text: "Receive relevant project details and updates so conversations with prospective buyers remain informed and transparent." },
  { icon: Users, title: "Sales Coordination", text: "Work with our team on enquiries, site visits and the practical information required during the buyer journey." },
];
const associates = ["Independent real estate consultants", "Property brokers and agencies", "Referral professionals with established local networks", "Digital lead generation and property marketing professionals", "Experienced real estate sales professionals"];
const steps = [
  { title: "Connect", text: "Introduce yourself and tell us about your market or customer network." },
  { title: "Discuss", text: "Understand the current projects, customer segments and commercial terms." },
  { title: "Onboard", text: "Complete the applicable channel partner formalities with our team." },
  { title: "Begin", text: "Receive project material and start coordinating genuine buyer enquiries." },
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20"><Image src="/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp" alt="Sri Supraja Infracon development" fill priority sizes="100vw" className="object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/65" />
        <div className="container-max relative z-10 grid items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300"><Handshake size={15} /> Channel Partner Opportunities</div>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.45rem]">Grow Your Real Estate Business With Us</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">Join Sri Supraja Infracon as a channel partner and work with our team to promote established real estate projects to genuine buyers.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-600"><MessageCircle size={18} /> Join as Channel Partner</a>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"><Phone size={17} /> {PHONE_DISPLAY}</a>
            </div>
            <p className="mt-3 text-sm text-slate-300">{CONTACT_NAME} · {CONTACT_ROLE}</p>
          </div>
          <div className="relative mx-auto hidden w-full max-w-lg lg:block"><div className="relative ml-auto h-[390px] w-[88%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"><Image src="/projects/supraja-iris/gallery/supraja-iris-gallery-2.webp" alt="Sri Supraja Infracon project environment" fill sizes="500px" className="object-cover" /></div><div className="absolute -bottom-8 left-0 max-w-[250px] rounded-xl border border-white/10 bg-slate-900/95 p-5 shadow-xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Join Our Network</p><p className="mt-2 text-base font-semibold leading-6 text-white">Get project information, sales support and direct coordination from our team.</p></div></div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-20"><div className="container-max px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Why Join Us</p><h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Support that helps you work with buyers confidently</h2><p className="mt-4 max-w-lg text-base leading-7 text-slate-600">We keep the process practical with useful project information, responsive communication and support when your customers need clarity.</p></div><div className="grid gap-4 md:grid-cols-3">{strengths.map(({ icon: Icon, title, text }) => <article key={title} className="border-t-2 border-amber-400 bg-white px-5 py-6 shadow-sm"><Icon size={21} className="text-amber-700" /><h3 className="mt-4 text-base font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></div></section>

      <section className="py-16 sm:py-20"><div className="container-max grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8"><div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[440px]"><Image src="/projects/supraja-iris/gallery/supraja-iris-gallery-5.webp" alt="Sri Supraja Infracon plotted development project" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-6 pb-6 pt-24 text-white"><p className="max-w-md text-base font-semibold leading-6">Your local network can become a stronger business opportunity with the right projects and support.</p></div></div><div className="lg:pl-4"><p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">Who Can Join</p><h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">People who know their market and can reach genuine buyers</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-600">If you work in real estate, property marketing or have a strong local customer network, speak with us to understand the opportunity.</p><div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">{associates.map((item) => <div key={item} className="flex items-start gap-3 py-3.5"><CheckCircle2 className="mt-0.5 shrink-0 text-amber-700" size={18} /><span className="text-sm font-semibold leading-6 text-slate-700">{item}</span></div>)}</div><p className="mt-5 text-xs leading-5 text-slate-500">Channel partner opportunities are independent business arrangements and are not salaried employment unless separately confirmed in writing.</p></div></div></section>

      <section className="bg-slate-950 py-16 text-white sm:py-20"><div className="container-max px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">How to Start</p><h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Joining is simple</h2><p className="mt-5 max-w-lg text-base leading-7 text-slate-300">Call, WhatsApp or submit your details. We will explain the current projects, working process and next steps.</p></div><div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">{steps.map((step, index) => <div key={step.title} className="border-t border-white/15 pt-4"><div className="flex items-center gap-3"><span className="text-sm font-bold text-amber-300">0{index + 1}</span><h3 className="text-base font-bold text-white">{step.title}</h3></div><p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p></div>)}</div></div></div></section>

      <section className="py-16 sm:py-20"><div className="container-max px-4 sm:px-6 lg:px-8"><div className="grid gap-8 border border-slate-200 bg-slate-50 px-6 py-9 sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10"><div><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-700"><MapPin size={14} /> Hyderabad & Telangana</div><h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.15rem]">Ready to join as a channel partner?</h2><p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">Contact {CONTACT_NAME}, {CONTACT_ROLE}, to understand the current projects and how to get started.</p></div><div className="flex min-w-[245px] flex-col gap-3"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-600"><MessageCircle size={18} /> Join on WhatsApp</a><a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"><Phone size={17} /> {PHONE_DISPLAY}</a><Link href="/projects" className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 transition hover:text-amber-800">View Our Projects <ArrowRight size={16} /></Link></div></div></div></section>
    </main>
  );
}
