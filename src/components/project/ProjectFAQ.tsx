"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";

type Props = {
  project: Project;
};

type FaqItem = {
  question: string;
  answer: string;
};

const getExtraFaqs = (slug: string): FaqItem[] => {
  if (slug === "supraja-iris-resort-plots" || slug === "supraja-iris") {
    return [
      {
        question: "Why should I consider Supraja IRIS?",
        answer:
          "Supraja IRIS is suited for investors and families looking for plotted ownership in Kamkole with planned lifestyle attractions, strong connectivity, and long-term location relevance.",
      },
      {
        question: "What lifestyle attractions are planned at Supraja IRIS?",
        answer:
          "The project vision includes Lemon Tree Resort under construction, along with planned Water & Amusement Theme Park, Go-Karting, and Water Villas.",
      },
      {
        question: "Is Lemon Tree Resort ready now?",
        answer:
          "Lemon Tree Resort is under construction. Please confirm the latest progress with Supraja Management during your enquiry or site visit.",
      },
      {
        question: "Are the theme park, go-karting, and water villas ready?",
        answer:
          "These are planned lifestyle attractions. Current progress and timelines should be verified directly with Supraja Management before making a decision.",
      },
      {
        question: "What makes Kamkole a location worth evaluating?",
        answer:
          "Kamkole benefits from NH-65 access, proximity to Woxsen University, and influence from upcoming infrastructure and employment corridors.",
      },
    ];
  }

  if (slug === "bridge-county") {
    return [
      {
        question: "What is Bridge County?",
        answer:
          "Bridge County is a dedicated 15-acre plotted enclave within the larger Supraja IRIS project environment at Kamkole.",
      },
      {
        question: "How is Bridge County connected to Supraja IRIS?",
        answer:
          "Bridge County is planned inside the larger Supraja IRIS ecosystem, giving customers a quieter plotted setting while staying connected to the broader project vision.",
      },
      {
        question: "Who should consider Bridge County?",
        answer:
          "Bridge County is suitable for investors, clients, and families who prefer a calm plotted environment within Kamkole’s emerging growth corridor.",
      },
    ];
  }

  if (slug === "sindhu-sarovar") {
    return [
      {
        question: "What should I know about Sindhu Sarovar?",
        answer:
          "Sindhu Sarovar is positioned around planning quality, organized layouts, accessibility, and long-term location potential.",
      },
      {
        question: "Is Sindhu Sarovar a waterfront project?",
        answer:
          "No. Sindhu Sarovar should not be positioned as a waterfront project. The focus should remain on planning, infrastructure, accessibility, and future growth relevance.",
      },
      {
        question: "Who should evaluate Sindhu Sarovar?",
        answer:
          "It is suitable for investors and families seeking a planned project with dependable infrastructure and evolving location advantages.",
      },
      {
        question: "Is Sindhu Sarovar a gated community?",
        answer:
          "Yes. The project is planned as a gated community with compound wall provisions, security infrastructure, landscaped spaces, and organized internal road networks.",
      },
      {
        question: "What infrastructure is available within the project?",
        answer:
          "The project includes wide roads, street lighting, drainage planning, utility infrastructure, parks, pedestrian walkways, rainwater harvesting provisions, and landscaped open spaces.",
      },
    ];
  }

  if (slug === "subhash-meadows") {
    return [
      {
        question: "Where is Subhash Meadows located?",
        answer:
          "Subhash Meadows is located at Indrakaran, with access toward ORR, IIT Hyderabad, ICRISAT, BHEL, and Sangareddy.",
      },
      {
        question: "What does LRS mean for Subhash Meadows?",
        answer:
          "Use the wording “LRS charges paid as per applicable regulations.” Customers should verify the latest documentation with Supraja Management.",
      },
      {
        question: "Who should consider Subhash Meadows?",
        answer:
          "Subhash Meadows is suitable for investors and future homeowners looking for accessibility, practical infrastructure, and long-term location relevance.",
      },
      {
        question: "What makes Subhash Meadows well connected?",
        answer:
          "Subhash Meadows benefits from proximity to IIT Hyderabad, Outer Ring Road, ICRISAT, Sangareddy growth corridors, and Regional Ring Road influence zones.",
      },
      {
        question: "What infrastructure is available within the project?",
        answer:
          "The project includes blacktop roads, underground drainage, avenue plantation, street lighting, landscaped open spaces, and secured entry provisions.",
      },
    ];
  }

  return [];
};

const faqCopy: Record<
  string,
  {
    eyebrow: string;
    title: string;
    intro: string;
  }
> = {
  "supraja-iris-resort-plots": {
    eyebrow: "FAQs",
    title: "On Supraja IRIS",
    intro:
      "Simple answers about the project vision, lifestyle attractions, location, and current planning status.",
  },

  "supraja-iris": {
    eyebrow: "FAQs",
    title: "On Supraja IRIS",
    intro:
      "Simple answers about the project vision, lifestyle attractions, location, and current planning status.",
  },

  "bridge-county": {
    eyebrow: "FAQs",
    title: "On Bridge County",
    intro:
      "Helpful details about this 15-acre enclave within Supraja IRIS and what customers should know before visiting.",
  },

  "sindhu-sarovar": {
    eyebrow: "FAQs",
    title: "On Sindhu Sarovar",
    intro:
      "Straightforward answers about planning, accessibility, infrastructure, and project positioning.",
  },

  "subhash-meadows": {
    eyebrow: "FAQs",
    title: "Subhash Meadows Questions, Answered Clearly",
    intro:
      "Useful information about location access, infrastructure, LRS wording, and future ownership planning.",
  },
};

const fallbackCopy = {
  eyebrow: "FAQs",
  title: "Project Questions, Answered Clearly",
  intro:
    "Helpful answers about project details, location, documentation, availability, and site visit planning.",
};

const ProjectFAQ = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const copy = faqCopy[project.slug] ?? fallbackCopy;

  const faqs = [...getExtraFaqs(project.slug), ...(content?.faq || [])];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            {copy.eyebrow}
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            {copy.intro}
          </p>
        </div>

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
    </section>
  );
};

export default ProjectFAQ;