"use client";

import SmartImage from "@/components/shared/SmartImage";
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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/hero-bg.webp";
import ownerPhoto from "@/assets/tudi-praveen.webp";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    desc: "Clear documentation, approval transparency and honest communication for every buyer.",
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

const socialWelfare = [
  "Education support for students",
  "Healthcare and community support",
  "Support during local emergencies",
  "Employment and skill encouragement",
  "Infrastructure support for communities",
  "Cultural and social development",
];

const whyChoose = [
  "DTCP and RERA approved plotted communities",
  "Strategic locations near Hyderabad growth corridors",
  "Transparent project communication",
  "Strong focus on roads, parks, utilities and layout planning",
  "Buyer support for availability, site visit, loan and registration",
  "Premium projects such as Supraja IRIS and Bridge County",
];

const milestones = [
  {
    year: "2001",
    title: "Company Foundation",
    desc: "Sri Supraja Infracon began its journey with a vision to create reliable real estate opportunities with trust, documentation and customer confidence.",
  },
  {
    year: "2016",
    title: "First Major Delivery",
    desc: "The company expanded its plotted development presence and strengthened its reputation for planned layouts and buyer-focused service.",
  },
  {
    year: "2020s",
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
    desc: "Supraja IRIS, Bridge County, Sindhu Sarovar and Subash Meadows continue to serve buyers looking for open plots near Hyderabad.",
  },
];

const AboutClient = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sri Supraja Infracon",
    url: "https://www.suprajainfracon.com",
    logo: "https://www.suprajainfracon.com/logo.png",
    description:
      "Sri Supraja Infracon develops DTCP and RERA approved open plot communities near Hyderabad growth corridors.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="min-h-screen bg-[#F8F6F1]">
        <Navbar />

        <section className="relative overflow-hidden pb-20 pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg.src})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/95 via-[#102348]/90 to-[#0B1633]/95" />

          <div className="container-max relative px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-5xl text-center"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#E8D7A5]">
                About Sri Supraja Infracon
              </p>

              <h1 className="text-4xl font-display font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                Building Dreams,{" "}
                <span className="text-[#C9A227]">
                  Serving Communities
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-200">
                Sri Supraja Infracon Builders & Developers is focused on DTCP
                and RERA approved open plot communities near Hyderabad growth
                corridors, with a strong commitment to trust, clear
                documentation, planned infrastructure and customer-first
                service.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#F8F6F1] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 rounded-[32px] border border-[#EFE7D3] bg-white p-6 shadow-[0_18px_50px_rgba(11,22,51,0.08)] md:p-8">
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                <SmartImage
                  src={ownerPhoto}
                  alt="Mr Tudi Praveen Chairman and Managing Director of Sri Supraja Infracon"
                  className="h-[340px] w-full rounded-[24px] shadow-lg"
                  imageClassName="object-cover object-top"
                />

                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                    Owner Message
                  </p>

                  <h2 className="mb-2 text-3xl font-display font-bold text-[#111827]">
                    Mr. Tudi Praveen
                  </h2>

                  <p className="mb-5 font-bold text-[#C9A227]">
                    Chairman & Managing Director
                  </p>

                  <p className="mb-4 leading-relaxed text-[#4B5563]">
                    “Our vision is to make open plot ownership simple,
                    transparent and valuable for families and investors.”
                  </p>

                  <p className="leading-relaxed text-[#4B5563]">
                    Sri Supraja Infracon believes in approved layouts, clear
                    documentation and practical infrastructure planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                Social Welfare
              </p>

              <h2 className="text-3xl font-display font-bold text-[#111827]">
                Community Responsibility Beyond Real Estate
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[#4B5563]">
                The company believes growth should support people, families and
                local communities through education, welfare and meaningful
                social contribution.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {socialWelfare.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                >
                  <CheckCircle2
                    className="mb-3 text-[#C9A227]"
                    size={24}
                  />

                  <p className="font-semibold text-[#111827]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutClient;