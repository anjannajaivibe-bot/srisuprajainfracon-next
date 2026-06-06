"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const getExtraFaqs = (slug: string) => {
  if (slug === "supraja-iris-resort-plots") {
    return [
      {
        question: "Is Supraja IRIS approved by DTCP and RERA?",
        answer:
          "Yes. Supraja IRIS is positioned as a DTCP & RERA approved resort-style plotted development at Kamkole near Hyderabad. Buyers should review the latest approval documents during the site visit or booking discussion.",
      },
      {
        question: "Is Lemon Tree Resort already operational inside Supraja IRIS?",
        answer:
          "No. Lemon Tree Resort is currently under construction within the Supraja IRIS ecosystem. Other lifestyle features such as water villas, water theme park, amusement zone and go-karting are planned or upcoming concepts.",
      },
      {
        question: "Why is Supraja IRIS considered a resort plot investment near Hyderabad?",
        answer:
          "Supraja IRIS combines plotted development ownership with a planned resort ecosystem, Kamkole location advantage, NH-65 connectivity, Woxsen University adjacency and the broader NIMZ Zaheerabad growth corridor influence.",
      },
    ];
  }

  if (slug === "bridge-county") {
    return [
      {
        question: "Is Bridge County a DTCP and RERA approved project?",
        answer:
          "Yes. Bridge County is positioned as a DTCP & RERA approved luxury plotted development at Kamkole. Buyers should verify the latest approval and registration details before booking.",
      },
      {
        question: "Why is Bridge County suitable for buyers looking near Woxsen University?",
        answer:
          "Bridge County is located at Kamkole with connectivity advantages toward Woxsen University, NH-65 and nearby growth corridors, making it suitable for buyers comparing premium open plots near Hyderabad.",
      },
      {
        question: "What type of plots are available in Bridge County?",
        answer:
          "Bridge County focuses on luxury open plots with planned infrastructure, internal roads, community features and Sri Supraja Infracon project support.",
      },
    ];
  }

  if (slug === "sindhu-sarovar") {
    return [
      {
        question: "Is Sindhu Sarovar approved by DTCP and RERA?",
        answer:
          "Yes. Sindhu Sarovar is positioned as a DTCP & RERA approved plotted development in Mominpet. Buyers should review the latest project documents and availability before booking.",
      },
      {
        question: "Why choose Sindhu Sarovar for open plots in Mominpet?",
        answer:
          "Sindhu Sarovar offers planned plotted development infrastructure, gated community features, wide roads and Mominpet location advantage for buyers looking near Hyderabad growth corridors.",
      },
      {
        question: "Is Sindhu Sarovar suitable for long-term investment?",
        answer:
          "Sindhu Sarovar may suit buyers seeking premium plots near Hyderabad with location-led appreciation potential, planned infrastructure and approval-backed project confidence.",
      },
    ];
  }

  if (slug === "subhash-meadows") {
    return [
      {
        question: "Where is Subhash Meadows located?",
        answer:
          "Subhash Meadows is located at Indrakaran with connectivity toward ORR, IIT Hyderabad, ICRISAT, BHEL and Sangareddy.",
      },
      {
        question: "Is Subhash Meadows suitable for affordable plot buyers?",
        answer:
          "Yes. Subhash Meadows is positioned for buyers looking for affordable open plots near ORR Hyderabad with practical connectivity and planned community infrastructure.",
      },
      {
        question: "What infrastructure is planned at Subhash Meadows?",
        answer:
          "The project includes black-top roads, Vastu-based layout planning, underground drainage, avenue plantation, parks, gated entrance and security room provision.",
      },
    ];
  }

  return [];
};

const ProjectFAQ = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const seo = getProjectSeo(project.slug);

  const faqs = [...getExtraFaqs(project.slug), ...(content?.faq || [])];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Buyer Questions
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Frequently Asked Questions About {seo.focusKeyword}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Get clear answers about approvals, location advantages, plotted
            development planning, current availability and site visit support
            for <strong>{seo.synonyms[0]}</strong>.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_12px_40px_rgba(11,22,51,0.06)] lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Quick Buyer Checklist
            </p>

            <h3 className="text-2xl font-extrabold leading-tight text-[#111827]">
              Before Booking {project.title}
            </h3>

            <ul className="mt-6 space-y-4 text-sm font-semibold leading-relaxed text-[#4B5563]">
              <li>✓ Verify latest approval and registration details</li>
              <li>✓ Review plot availability and preferred dimensions</li>
              <li>✓ Check route access and nearby growth drivers</li>
              <li>✓ Understand current development progress</li>
              <li>✓ Confirm booking, registration and loan support process</li>
            </ul>

            <div className="mt-7 rounded-2xl bg-[#FFF9E8] p-5">
              <p className="text-sm leading-relaxed text-[#4B5563]">
                Buyers comparing <strong>{seo.synonyms[1]}</strong> and{" "}
                <strong>{seo.synonyms[2]}</strong> should always request a site
                visit and updated availability confirmation.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#0B1633] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Ask Project Questions
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-[#C9A227] bg-white px-5 py-3 text-center text-sm font-bold text-[#0B1633] transition hover:bg-[#FFF4C7]"
              >
                Compare Other Projects
              </Link>
            </div>
          </aside>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="overflow-hidden rounded-[28px] border border-[#EFE7D3] bg-white shadow-[0_10px_35px_rgba(11,22,51,0.05)] transition duration-300 hover:border-[#C9A227]"
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
                    aria-expanded={isActive}
                  >
                    <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                      {faq.question}
                    </h3>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold transition ${
                        isActive
                          ? "bg-[#C9A227] text-[#0B1633]"
                          : "bg-[#FFF4C7] text-[#0B1633]"
                      }`}
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#F3EBD6] px-7 py-6">
                        <p className="text-base leading-relaxed text-[#4B5563]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-[0_12px_40px_rgba(11,22,51,0.05)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-[#111827]">
                Need Updated Availability or Approval Details?
              </h3>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#6B7280]">
                Connect with the Sri Supraja Infracon team for brochures, site
                visits, current plot availability, approval details and guidance
                on <strong>{seo.focusKeyword}</strong>. This helps buyers make
                informed decisions without relying on outdated project
                information.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Contact Sales Team
              </Link>

              <a
                href="https://www.rera.telangana.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#C9A227] bg-[#FFF9E8] px-6 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
              >
                Visit Telangana RERA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFAQ;




