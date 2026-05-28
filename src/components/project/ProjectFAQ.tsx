"use client";

import { useState } from "react";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

const getExtraFaqs = (slug: string) => {
  if (slug === "supraja-iris-resort-plots") {
    return [
      {
        question:
          "Is Lemon Tree Resort operational at Supraja IRIS?",
        answer:
          "Lemon Tree Resort is currently under construction as part of the broader resort ecosystem positioning planned for Supraja IRIS.",
      },

      {
        question:
          "Are water villas and theme park attractions available now?",
        answer:
          "Water villas, water theme park concepts, go-karting and related lifestyle attractions are planned developments and may be implemented in phases.",
      },

      {
        question:
          "Is Supraja IRIS located near Woxsen University?",
        answer:
          "Yes. Supraja IRIS is positioned near the Woxsen University growth corridor with connectivity advantages towards NH-65 and surrounding infrastructure zones.",
      },
    ];
  }

  return [];
};

const ProjectFAQ = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];

  const faqs = [
    ...(content?.faq || []),
    ...getExtraFaqs(project.slug),
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Frequently Asked Questions
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Common Questions About {project.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Explore important details about approvals, connectivity,
            plotted development planning, location advantages and buyer
            assistance support related to this Sri Supraja Infracon
            project.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={`${faq.question}-${index}`}
                className="overflow-hidden rounded-[28px] border border-[#EFE7D3] bg-white shadow-[0_10px_35px_rgba(11,22,51,0.05)] transition duration-300"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold transition ${
                      isActive
                        ? "bg-[#C9A227] text-[#0B1633]"
                        : "bg-[#FFF4C7] text-[#0B1633]"
                    }`}
                  >
                    {isActive ? "−" : "+"}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isActive
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
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

        {/* Bottom CTA */}
        <div className="mt-14 rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-[0_12px_40px_rgba(11,22,51,0.05)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-[#111827]">
                Need More Project Information?
              </h3>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#6B7280]">
                Connect with the Sri Supraja Infracon team for project
                brochures, site visit scheduling, availability updates,
                documentation support and plotted development guidance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Contact Sales Team
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-[#C9A227] bg-[#FFF9E8] px-6 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
              >
                Explore More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFAQ;