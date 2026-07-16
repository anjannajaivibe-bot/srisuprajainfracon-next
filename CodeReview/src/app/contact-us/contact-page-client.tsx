"use client";

import ContactForm from "./ContactForm";
import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";
import Link from "next/link";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

import heroBg from "@/assets/hero-bg.webp";

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/95 via-[#102348]/90 to-[#0B1633]/95" />

        <div className="container-max relative px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#E8D7A5]"
          >
            Connect With Sri Supraja Infracon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-5xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Let&apos;s Start the Conversation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-200"
          >
            Whether you&apos;re evaluating project options, coordinating a site visit, 
            or seeking further clarity, our team is on hand to offer informed guidance 
            and prompt assistance.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Contact Information
            </p>

            <h2 className="mb-6 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
              Get in Touch
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <Phone className="mt-1 text-[#C9A227]" size={22} />

                <div>
                  <p className="font-bold text-[#111827]">Phone</p>

                  <a
                    href="tel:+919052996161"
                    className="text-[#4B5563] hover:text-[#0B1633]"
                  >
                    +91 90529 96161
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <Mail className="mt-1 text-[#C9A227]" size={22} />

                <div>
                  <p className="font-bold text-[#111827]">Email</p>

                  <a
                    href="mailto:info@srisuprajainfracon.com"
                    className="text-[#4B5563] hover:text-[#0B1633]"
                  >
                    info@srisuprajainfracon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-white p-5 shadow-sm">
                <MapPin className="mt-1 text-[#C9A227]" size={22} />

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
                <Clock className="mt-1 text-[#C9A227]" size={22} />

                <div>
                  <p className="font-bold text-[#111827]">Office Hours</p>

                  <p className="text-[#4B5563]">
                    Our advisory team is available to assist with project enquiries and site visit scheduling.
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
                className="rounded-full border border-[#C9A227] px-6 py-3 font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
              >
                View Projects
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="container-max text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Explore Projects
          </p>

          <h2 className="font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            OUR PROJECT PORTFOLIO
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[#4B5563]">
            Discover projects across Kamkole, Sangareddy, Mominpet and Indrakaran, 
            each conceived to serve distinct investment horizons and long-term ownership 
            aspirations.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-[#4B5563]">
            Review project specifications, locational advantages, site visuals 
            and current availability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects/supraja-iris-resort-plots"
              className="rounded-full bg-[#0B1633] px-5 py-3 font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Supraja IRIS
            </Link>

            <Link
              href="/projects/bridge-county"
              className="rounded-full bg-[#0B1633] px-5 py-3 font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Bridge County
            </Link>

            <Link
              href="/projects/sindhu-sarovar"
              className="rounded-full bg-[#0B1633] px-5 py-3 font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Sindhu Sarovar
            </Link>

            <Link
              href="/projects/subhash-meadows"
              className="rounded-full bg-[#0B1633] px-5 py-3 font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Subhash Meadows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}