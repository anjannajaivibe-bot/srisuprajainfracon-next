"use client";

import ContactForm from "./ContactForm";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-white pt-32">
        <div className="container-max relative z-10 grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="pb-10 pt-4 lg:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-sm font-bold text-[#7A4F34]"
            >
              Find Us Fast
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Discuss Your Property Goals
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 lg:translate-y-8"
          >
            <ContactForm />
          </motion.div>
        </div>

        <div className="relative -mt-6 h-[320px] overflow-hidden sm:h-[360px] lg:-mt-20 lg:h-[390px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg.src})` }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7A4F34]">
              Contact Information
            </p>

            <h2 className="mb-6 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
              Reach Us
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <Phone className="mt-1 text-[#7A4F34]" size={22} />
                <div>
                  <p className="font-bold text-[#111827]">Phone</p>
                  <a href="tel:+919052996161" className="text-[#4B5563] hover:text-[#0B1633]">
                    +91 90529 96161
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <Mail className="mt-1 text-[#7A4F34]" size={22} />
                <div>
                  <p className="font-bold text-[#111827]">Email</p>
                  <a href="mailto:info@srisuprajainfracon.com" className="text-[#4B5563] hover:text-[#0B1633]">
                    info@srisuprajainfracon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <MapPin className="mt-1 text-[#7A4F34]" size={22} />
                <div>
                  <p className="font-bold text-[#111827]">Office Location</p>
                  <p className="text-[#4B5563]">
                    D. No. 4-91, Above Parampara Sweets,
                    <br />
                    Chandanagar, Hyderabad - 500050
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <Clock className="mt-1 text-[#7A4F34]" size={22} />
                <div>
                  <p className="font-bold text-[#111827]">Office Hours</p>
                  <p className="text-[#4B5563]">
                    Our team is available to assist with project information and site visit coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919052996161?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sri%20Supraja%20Infracon%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white transition hover:scale-105"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <Link
                href="/projects"
                className="rounded-full border border-[#7A4F34] px-6 py-3 font-bold text-[#0B1633] transition hover:bg-[#7A4F34] hover:text-white"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-display text-2xl font-bold text-[#111827]">
              Quick Project Assistance
            </h3>
            <p className="leading-relaxed text-[#4B5563]">
              Share your requirement with our team. We will help you understand available projects,
              location advantages, plot options, and site visit planning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container-max text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#7A4F34]">
            Explore Projects
          </p>

          <h2 className="font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            Explore Our Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[#4B5563]">
            Discover projects across Kamkole, Mominpet, Sangareddy, and Indrakaran,
            each planned to serve different investment and future ownership aspirations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              ["Supraja IRIS", "/projects/supraja-iris-resort-plots"],
              ["Bridge County", "/projects/bridge-county"],
              ["Sindhu Sarovar", "/projects/sindhu-sarovar"],
              ["Subhash Meadows", "/projects/subhash-meadows"],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="rounded-full bg-[#0B1633] px-5 py-3 font-bold text-white transition hover:bg-[#7A4F34]"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}