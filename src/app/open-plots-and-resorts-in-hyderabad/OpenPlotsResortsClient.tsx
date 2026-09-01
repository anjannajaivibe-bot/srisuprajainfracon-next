"use client";

import Link from "next/link";
import CTASection from "@/components/home/CTASection";

const projects = [
  {
    name: "Supraja IRIS",
    href: "/projects/supraja-iris-resort-plots",
    location: "Kamkole and Sadashivapet growth corridor",
    approval: "DTCP & RERA approved active phase",
    description:
      "A resort-inspired plotted development near Woxsen University and the NH-65 corridor, with project-specific approval details published on the project page.",
  },
  {
    name: "Bridge County",
    href: "/projects/bridge-county",
    location: "Kamkole",
    approval: "DTCP & RERA approved",
    description:
      "A plotted enclave in the broader Supraja IRIS environment, positioned near Woxsen University with project-specific DTCP and Telangana RERA details.",
  },
  {
    name: "Sindhu Sarovar",
    href: "/projects/sindhu-sarovar",
    location: "Mominpet",
    approval: "DTCP & RERA approved active phase",
    description:
      "A gated plotted development at Mominpet with phase-specific approval information, planned infrastructure and project documentation.",
  },
  {
    name: "Subhash Meadows",
    href: "/projects/subhash-meadows",
    location: "Indrakaran",
    approval: "Plotted development",
    description:
      "A value-oriented plotted development with connectivity toward Sangareddy, IIT Hyderabad, BHEL and the western Hyderabad growth belt.",
  },
];

export default function OpenPlotsResortsClient() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <section className="relative overflow-hidden bg-[#081225] px-6 pb-24 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#E8D7A5]">
            Hyderabad Growth Corridors
          </p>
          <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.03] md:text-6xl">
            Open Plots Near Hyderabad
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-slate-200">
            Compare <strong className="font-semibold text-white">open plots and resort-style projects near Hyderabad</strong> across Kamkole,
            Mominpet, Indrakaran and nearby growth corridors. Review project
            locations, approval details, infrastructure context and direct links
            to each project before planning a site visit.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#081225] transition hover:bg-white"
            >
              Compare Projects
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#081225]"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9A7820]">
              Start with verifiable information
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827] md:text-5xl">
              How to Compare Open Plots Near Hyderabad
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#4B5563]">
              <p>
                A useful comparison starts with the project itself, not with a
                broad promise about future returns. Buyers considering <strong className="font-semibold text-[#111827]">DTCP approved plots near Hyderabad</strong> should
                review the applicable layout approval, RERA registration where
                relevant, survey details, access roads, current development status
                and the intended use of the plot.
              </p>
              <p>
                Location should then be evaluated in context. Buyers looking at
                <strong className="font-semibold text-[#111827]"> open plots in Kamkole</strong> should consider the Sadashivapet side of the NH-65 corridor,
                nearby education and hospitality activity, and actual road access.
                Mominpet and Indrakaran serve different buyer requirements, so
                price alone is not a meaningful way to compare them.
              </p>
              <p>
                Sri Supraja Infracon publishes project-specific approval numbers
                and location information on the individual project pages so that
                buyers can examine each development separately rather than rely on
                generic claims.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="rounded-[28px] border border-[#EFE7D3] bg-[#F8F6F1] p-7 transition hover:border-[#C9A227] hover:shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7820]">
                  {project.location}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-[#111827]">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#375145]">
                  {project.approval}
                </p>
                <p className="mt-4 leading-7 text-[#5D665F]">
                  {project.description}
                </p>
                <p className="mt-5 font-bold text-[#0B1633]">
                  View project details →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#111827] md:text-4xl">
            What Buyers Should Verify Before Choosing a Plot
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ["Approvals and registration", "Match the project name, phase, approval number and survey details with the applicable official records."],
              ["Access and location", "Check the actual approach road, driving route and surrounding development instead of relying only on straight-line distance."],
              ["On-ground development", "Inspect roads, drainage, utilities, plot demarcation and other completed works during the site visit."],
              ["Future development claims", "Separate completed infrastructure from facilities that are under construction or planned."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-[#111827]">{title}</h3>
                <p className="mt-3 leading-7 text-[#5D665F]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog/what-is-dtcp-approval-in-hyderabad"
              className="font-bold text-[#0B1633] underline decoration-[#C9A227] decoration-2 underline-offset-4"
            >
              Understand DTCP approval
            </Link>
            <Link
              href="/blog/rera-approved-plots-hyderabad-guide"
              className="font-bold text-[#0B1633] underline decoration-[#C9A227] decoration-2 underline-offset-4"
            >
              Read the RERA verification guide
            </Link>
            <Link
              href="/blog/how-to-verify-land-ownership-before-buying-a-plot"
              className="font-bold text-[#0B1633] underline decoration-[#C9A227] decoration-2 underline-offset-4"
            >
              Review land ownership checks
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}