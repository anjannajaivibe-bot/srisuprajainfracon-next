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
        question:
          "Why should I consider Supraja IRIS plots near Sadashivapet?",
        answer:
          "Supraja IRIS offers open plots in Kamkole near Sadashivapet for investors and families seeking plotted ownership, strong NH-65 connectivity, planned lifestyle attractions, and long-term growth potential.",
      },
      {
        question:
          "What lifestyle attractions are planned within Supraja IRIS?",
        answer:
          "The Supraja IRIS master plan includes Lemon Tree Resort under construction, Water Villas under construction, and a Water Theme and Amusement Park under construction. A Go-Kart track is planned. Buyers should confirm the latest on-site progress before making a decision.",
      },
      {
        question: "What is the current status of Lemon Tree Resort?",
        answer:
          "Lemon Tree Resort within Supraja IRIS is under construction. Please confirm the latest construction progress with Supraja Management during your enquiry or site visit.",
      },
      {
        question:
          "What is the status of the water park, Water Villas, and Go-Kart track?",
        answer:
          "The Water Theme and Amusement Park and Water Villas are under construction, while the Go-Kart track is planned. Current progress and expected timelines should be verified directly with Supraja Management.",
      },
      {
        question:
          "How is Supraja IRIS connected to Woxsen University, NH-65, and NIMZ?",
        answer:
          "Supraja IRIS is located at Kamkole near Sadashivapet, with access to NH-65 and proximity to Woxsen University. The wider region also benefits from the NIMZ and other emerging infrastructure and employment corridors.",
      },
    ];
  }

  if (slug === "bridge-county") {
    return [
      {
        question: "What is Bridge County near Woxsen University?",
        answer:
          "Bridge County is a dedicated 15-acre plotted enclave within the larger Supraja IRIS development at Kamkole, adjacent to Woxsen University.",
      },
      {
        question: "How is Bridge County connected to Supraja IRIS?",
        answer:
          "Bridge County is located within the larger Supraja IRIS ecosystem, giving customers a focused plotted setting while remaining connected to the broader project vision and planned attractions.",
      },
      {
        question: "Who should consider investing in Bridge County plots?",
        answer:
          "Bridge County may suit investors and families looking for open plots near Woxsen University, NH-65 connectivity, and the emerging Kamkole and Sadashivapet growth corridor.",
      },
    ];
  }

  if (slug === "sindhu-sarovar") {
    return [
      {
        question: "What should buyers know about Sindhu Sarovar plots?",
        answer:
          "Sindhu Sarovar is a planned plotted development at Mominpet focused on organized layouts, practical infrastructure, accessibility, and long-term location potential.",
      },
      {
        question: "Is Sindhu Sarovar a waterfront project?",
        answer:
          "No. Sindhu Sarovar should not be positioned as a waterfront project. The focus should remain on planning, infrastructure, accessibility, and future growth relevance.",
      },
      {
        question: "Who should consider open plots in Sindhu Sarovar?",
        answer:
          "Sindhu Sarovar may suit investors and families seeking open plots in Mominpet with organized infrastructure and evolving location advantages.",
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
        question: "Where are Subhash Meadows open plots located?",
        answer:
          "Subhash Meadows is located at Indrakaran, with connectivity toward the Outer Ring Road, IIT Hyderabad, ICRISAT, BHEL, and Sangareddy.",
      },
      {
        question: "What does LRS mean for Subhash Meadows?",
        answer:
          "Use the wording “LRS charges paid as per applicable regulations.” Customers should verify the latest documentation with Supraja Management.",
      },
      {
        question: "Who should consider plots in Subhash Meadows?",
        answer:
          "Subhash Meadows may suit investors and future homeowners looking for open plots near IIT Hyderabad with practical infrastructure, regional connectivity, and long-term location relevance.",
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
    eyebrow: "PROJECT FAQs",
    title: "Supraja IRIS Plots Near Sadashivapet: FAQs",
    intro:
      "Clear answers about Supraja IRIS open plots in Kamkole, connectivity, lifestyle attractions, and current development status.",
  },

  "supraja-iris": {
    eyebrow: "PROJECT FAQs",
    title: "Supraja IRIS Plots Near Sadashivapet: FAQs",
    intro:
      "Clear answers about Supraja IRIS open plots in Kamkole, connectivity, lifestyle attractions, and current development status.",
  },

  "bridge-county": {
    eyebrow: "PROJECT FAQs",
    title: "Bridge County Near Woxsen University: FAQs",
    intro:
      "Helpful details about this 15-acre plotted enclave within Supraja IRIS, its location, and what buyers should know before visiting.",
  },

  "sindhu-sarovar": {
    eyebrow: "PROJECT FAQs",
    title: "Sindhu Sarovar Open Plots: FAQs",
    intro:
      "Straightforward answers about Sindhu Sarovar plots in Mominpet, planning, accessibility, infrastructure, and project positioning.",
  },

  "subhash-meadows": {
    eyebrow: "PROJECT FAQs",
    title: "Subhash Meadows Open Plots: FAQs",
    intro:
      "Useful information about Subhash Meadows plots in Indrakaran, connectivity, infrastructure, LRS wording, and ownership planning.",
  },
};

const fallbackCopy = {
  eyebrow: "PROJECT FAQs",
  title: "Real Estate Project Questions, Answered Clearly",
  intro:
    "Helpful answers about project details, location, documentation, availability, and site visit planning.",
};

const normalizeQuestion = (question: string) =>
  question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const deduplicateFaqs = (faqs: FaqItem[]) => {
  const seen = new Set<string>();

  return faqs.filter((faq) => {
    const key = normalizeQuestion(faq.question);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const ProjectFAQ = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const copy = faqCopy[project.slug] ?? fallbackCopy;

  const faqs = deduplicateFaqs([
    ...getExtraFaqs(project.slug),
    ...(content?.faq || []),
  ]);

  if (!faqs.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.srisuprajainfracon.com/projects/${project.slug}/#faq`,
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
    <section
      className="bg-[#F8F6F1] px-5 py-20 sm:px-6 lg:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#8A6500]">
            {copy.eyebrow}
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            {copy.intro}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={`${faq.question}-${index}`}
              className="group overflow-hidden rounded-[24px] border border-[#E8E2D5] bg-white shadow-[0_8px_28px_rgba(11,22,51,0.05)] transition-colors open:border-[#D6B84D]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B88900] sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] font-extrabold leading-snug text-[#111827] sm:text-lg">
                  {faq.question}
                </h3>

                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#FFF4C7] text-[#0B1633] transition-transform duration-200 group-open:rotate-45 group-open:bg-[#C9A227]">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-[#F3EBD6] px-6 py-5 sm:px-7 sm:py-6">
                <p className="text-base leading-7 text-[#4B5563]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFAQ;
