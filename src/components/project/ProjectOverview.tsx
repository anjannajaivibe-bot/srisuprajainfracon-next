"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  project: any;
};

const ProjectOverview = ({ project }: Props) => {
  return (
    <section className="bg-[#F8F6F1] py-24">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Project Overview
            </p>

            <h2 className="max-w-4xl text-3xl font-display font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Premium Open Plot Development by Sri Supraja Infracon
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-[#4B5563]">
              <p>
                {project.description}
              </p>

              <p>
                This plotted development by Sri Supraja Infracon is strategically
                positioned near emerging Hyderabad growth corridors with strong
                infrastructure connectivity, long-term development potential and
                buyer-focused planning standards.
              </p>

              <p>
                The project is designed for buyers seeking DTCP and RERA approved
                open plots, villa plots and premium plotted communities near
                Hyderabad with access to NH-65, Regional Ring Road influence
                zones, Woxsen University surroundings and major industrial
                growth corridors.
              </p>

              <p>
                Sri Supraja Infracon focuses on planned plotted developments,
                transparent documentation support, strategic location selection
                and long-term infrastructure-oriented real estate growth zones
                across Telangana.
              </p>
            </div>

            {/* Internal Links */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Explore All Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#C9A227] bg-white px-6 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
              >
                Contact Sales Team
              </Link>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-[0_18px_55px_rgba(11,22,51,0.08)]"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Key Advantages
            </p>

            <h3 className="text-2xl font-display font-bold text-[#111827]">
              Why Buyers Prefer This Project
            </h3>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-[#EFE7D3] bg-[#FCFBF8] p-5">
                <p className="font-semibold text-[#111827]">
                  Strategic Growth Corridor Access
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Located near key infrastructure and emerging Telangana
                  development zones.
                </p>
              </div>

              <div className="rounded-2xl border border-[#EFE7D3] bg-[#FCFBF8] p-5">
                <p className="font-semibold text-[#111827]">
                  DTCP & RERA Focus
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Planned plotted development with documentation-oriented
                  project positioning.
                </p>
              </div>

              <div className="rounded-2xl border border-[#EFE7D3] bg-[#FCFBF8] p-5">
                <p className="font-semibold text-[#111827]">
                  Long-Term Development Potential
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Positioned near future-ready infrastructure and regional
                  connectivity corridors.
                </p>
              </div>

              <div className="rounded-2xl border border-[#EFE7D3] bg-[#FCFBF8] p-5">
                <p className="font-semibold text-[#111827]">
                  Buyer Assistance Support
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Site visits, project guidance and brochure support from the
                  Sri Supraja Infracon team.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E8D7A5] bg-[#FFF9E8] p-5">
              <p className="text-sm leading-relaxed text-[#4B5563]">
                Buyers are encouraged to verify project-wise approvals,
                availability, documentation and registration procedures before
                booking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;