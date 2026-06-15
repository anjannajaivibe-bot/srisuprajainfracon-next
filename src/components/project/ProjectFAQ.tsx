"use client";

import { useState } from "react";
import Link from "next/link";
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
        question: "What makes Supraja IRIS different?",
        answer:
          "Supraja IRIS combines plotted ownership with planned lifestyle attractions, including Lemon Tree Resort under construction, Water & Amusement Theme Park, Go-Karting, and Water Villas.",
      },
      {
        question: "Is Lemon Tree Resort operational?",
        answer:
          "No. Lemon Tree Resort is currently under construction within the Supraja IRIS project ecosystem.",
      },
      {
        question: "Are the lifestyle attractions ready?",
        answer:
          "The Water & Amusement Theme Park, Go-Karting, and Water Villas are planned features. Clients should confirm current development status during their site visit.",
      },
      {
        question: "Why is Kamkole important for investors?",
        answer:
          "Kamkole benefits from NH-65 connectivity, nearby institutions such as Woxsen University, and access to the broader NIMZ and RRR growth corridor influence.",
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
          "It is planned as a quieter plotted area inside the broader Supraja IRIS ecosystem, giving clients a more focused project setting with access to the larger location vision.",
      },
      {
        question: "Who is Bridge County suitable for?",
        answer:
          "Bridge County is suitable for investors, clients, and families seeking a peaceful plotted environment within Kamkole’s emerging growth corridor.",
      },
    ];
  }

  if (slug === "sindhu-sarovar") {
    return [
      {
        question: "What is Sindhu Sarovar focused on?",
        answer:
          "Sindhu Sarovar is focused on organized layouts, accessibility, practical infrastructure, and long-term location relevance.",
      },
      {
        question: "Is Sindhu Sarovar a waterfront project?",
        answer:
          "No. Sindhu Sarovar should not be positioned as a waterfront project. Its communication should focus on planning quality, accessibility, and future potential.",
      },
      {
        question: "Who should consider Sindhu Sarovar?",
        answer:
          "It is suitable for investors and families looking for a planned project with dependable infrastructure and evolving location advantages.",
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
        question: "What should be mentioned about LRS?",
        answer:
          "Use professional wording such as “LRS charges paid as per applicable regulations” instead of informal wording.",
      },
      {
        question: "Who is Subhash Meadows suitable for?",
        answer:
          "It is suitable for investors and future homeowners seeking accessibility, essential infrastructure, and long-term location relevance.",
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
    checklistTitle: string;
    checklistNote: string;
    ctaTitle: string;
    ctaText: string;
  }
> = {
  "supraja-iris-resort-plots": {
    eyebrow: "Project Questions",
    title: "Supraja IRIS FAQs",
    intro:
      "Clear answers about project planning, lifestyle attractions, location value, and site visit essentials.",
    checklistTitle: "Before Visiting Supraja IRIS",
    checklistNote:
      "Confirm current availability, development status, attraction timelines, and documentation with Supraja Management.",
    ctaTitle: "Need Current IRIS Details?",
    ctaText:
      "Connect with Supraja Management for brochures, site visits, availability, and current project information.",
  },

  "supraja-iris": {
    eyebrow: "FAQs",
    title: "Let's Clear Things Up",
    intro:
      "Clear answers about project planning, lifestyle attractions, location value, and site visit essentials.",
    checklistTitle: "Before Visiting Supraja IRIS",
    checklistNote:
      "Confirm current availability, development status, attraction timelines, and documentation with Supraja Management.",
    ctaTitle: "Need Current IRIS Details?",
    ctaText:
      "Connect with Supraja Management for brochures, site visits, availability, and current project information.",
  },

  "bridge-county": {
    eyebrow: "FAQs",
    title: "Let's Clear Things Up",
    intro:
      "Key details about this 15-acre enclave within Supraja IRIS, its location context, and planning value.",
    checklistTitle: "Before Visiting Bridge County",
    checklistNote:
      "Confirm plot availability, enclave details, documentation, and site visit options with Supraja Management.",
    ctaTitle: "Need Bridge County Details?",
    ctaText:
      "Speak with Supraja Management for current availability, brochure information, and visit planning.",
  },

  "sindhu-sarovar": {
    eyebrow: "FAQs",
    title: "Let's Clear Things Up",
    intro:
      "Focused answers about planning quality, location relevance, documentation, and project suitability.",
    checklistTitle: "Before Visiting Sindhu Sarovar",
    checklistNote:
      "Review layout details, availability, documentation, and current project information before booking.",
    ctaTitle: "Need Sindhu Sarovar Details?",
    ctaText:
      "Connect with Supraja Management for updated information, site visit support, and availability.",
  },

  "subhash-meadows": {
    eyebrow: "FAQs",
    title: "Let's Clear Things Up",
    intro:
      "Important answers about location access, infrastructure, LRS wording, and project suitability.",
    checklistTitle: "Before Visiting Subhash Meadows",
    checklistNote:
      "Confirm LRS documentation, availability, project features, and location access before scheduling your visit.",
    ctaTitle: "Need Subhash Meadows Details?",
    ctaText:
      "Speak with Supraja Management for documentation, availability, and site visit assistance.",
  },
};

const fallbackCopy = {
  eyebrow: "Project Questions",
  title: "Project FAQs",
  intro:
    "Clear answers about project details, location, availability, and site visit planning.",
  checklistTitle: "Before Visiting",
  checklistNote:
    "Confirm project information, documentation, and availability with Supraja Management.",
  ctaTitle: "Need Updated Project Details?",
  ctaText:
    "Connect with Supraja Management for brochures, site visits, availability, and current information.",
};

const checklistItems = [
  "Verify latest approval and documentation details",
  "Review current plot availability",
  "Check route access and nearby growth drivers",
  "Understand current development progress",
  "Confirm booking and registration process",
];

const ProjectFAQ = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const copy = faqCopy[project.slug] ?? fallbackCopy;

  const faqs = [...getExtraFaqs(project.slug), ...(content?.faq || [])];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-6xl">
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

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_12px_40px_rgba(11,22,51,0.06)] lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Site Visit Checklist
            </p>

            <h3 className="text-2xl font-extrabold leading-tight text-[#111827]">
              {copy.checklistTitle}
            </h3>

            <ul className="mt-6 space-y-4 text-sm font-semibold leading-relaxed text-[#4B5563]">
              {checklistItems.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl bg-[#FFF9E8] p-5">
              <p className="text-sm leading-relaxed text-[#4B5563]">
                {copy.checklistNote}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/contact-us/"
                className="rounded-full bg-[#0B1633] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Ask Project Questions
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-[#C9A227] bg-white px-5 py-3 text-center text-sm font-bold text-[#0B1633] transition hover:bg-[#FFF4C7]"
              >
                Explore Other Projects
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
                {copy.ctaTitle}
              </h3>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#6B7280]">
                {copy.ctaText}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us/"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Contact Supraja Management
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