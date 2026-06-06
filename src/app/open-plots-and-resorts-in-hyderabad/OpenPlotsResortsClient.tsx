"use client";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/home/CTASection";

export default function OpenPlotsResortsClient() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#081225] px-6 pb-24 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#E8D7A5]">
            Hyderabad Growth Corridors
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.03] md:text-6xl">
            Open Plots and Resort Plots Near Hyderabad
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-slate-200">
            Explore DTCP and RERA approved open plots, villa plots and
            resort-themed plotted developments near Hyderabad across
            Kamkole, Sangareddy, Mominpet and emerging Telangana growth
            corridors.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#081225] transition hover:bg-white"
            >
              Explore Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#081225]"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#111827] md:text-5xl">
            Why Open Plots Near Hyderabad Are Seeing Strong Demand
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#4B5563]">
            <p>
              Hyderabad growth corridors are witnessing increasing demand
              for plotted developments due to infrastructure expansion,
              industrial influence zones, educational hubs and long-term
              connectivity improvements.
            </p>

            <p>
              Buyers are increasingly exploring DTCP and RERA approved
              open plots near Kamkole, Sangareddy, Mominpet and NH-65
              corridors for future residential development, plotted
              investments and resort-themed community projects.
            </p>

            <p>
              Sri Supraja Infracon focuses on plotted developments with
              strategic location positioning, planned infrastructure,
              buyer-focused assistance and growth-corridor relevance
              across Telangana.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Link
              href="/projects/supraja-iris-resort-plots"
              className="rounded-[28px] border border-[#EFE7D3] bg-[#F8F6F1] p-6 transition hover:border-[#C9A227]"
            >
              <h3 className="text-xl font-extrabold text-[#111827]">
                Supraja IRIS Resort Plots
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Resort ecosystem positioned plotted development near
                Woxsen University and NH-65 growth corridor.
              </p>
            </Link>

            <Link
              href="/resort-plots-in-hyderabad"
              className="rounded-[28px] border border-[#EFE7D3] bg-[#F8F6F1] p-6 transition hover:border-[#C9A227]"
            >
              <h3 className="text-xl font-extrabold text-[#111827]">
                Resort Plot Communities
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Explore plotted communities with lifestyle-oriented and
                resort ecosystem positioning.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
</div>
  );
}





