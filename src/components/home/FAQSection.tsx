import Link from "next/link";

const faqs = [
  {
    question: "Where can buyers explore open plots near Hyderabad?",
    answer:
      "Sri Supraja Infracon offers plotted development options including Supraja IRIS, Bridge County, Sindhu Sarovar, and Subhash Meadows. Buyers should compare each project’s location, current availability, development status, and applicable approval documents before booking.",
  },
  {
    question: "Are resort-themed plots near Hyderabad worth evaluating?",
    answer:
      "Resort-themed plotted developments may appeal to buyers seeking lifestyle positioning and long-term growth potential. Before investing, verify the project approvals, road access, title documents, current construction progress, and whether each advertised attraction is operational, under construction, or planned.",
  },
  {
    question: "Which open plots are near Woxsen University and NH-65?",
    answer:
      "Supraja IRIS and Bridge County are located at Kamkole near Sadashivapet, with access to Woxsen University, NH-65, and surrounding growth corridors. Bridge County is a plotted enclave within the larger Supraja IRIS development.",
  },
  {
    question: "What documents should buyers verify before purchasing a plot?",
    answer:
      "Buyers should verify the title chain, link documents, encumbrance certificate, sanctioned layout, applicable DTCP or other approvals, RERA registration where required, survey details, road access, pricing, payment terms, and registration process. Use an independent legal professional when necessary.",
  },
  {
    question: "What is the current development status at Supraja IRIS?",
    answer:
      "Lemon Tree Resort, the Water Theme and Amusement Park, and Water Villas are under construction within Supraja IRIS. The Go-Kart track is planned. Buyers should confirm the latest construction status and timelines during a site visit.",
  },
  {
    question: "Why are buyers evaluating plots near Sadashivapet?",
    answer:
      "The Sadashivapet and Kamkole region is evaluated for NH-65 connectivity, proximity to Woxsen University, and the influence of NIMZ and other emerging employment and infrastructure corridors. Investment decisions should still be based on project documentation, access, development progress, and budget.",
  },
  {
    question: "How can I arrange a site visit to a Sri Supraja Infracon project?",
    answer:
      "Choose the project you want to evaluate, confirm current plot availability with Sri Supraja Infracon, and schedule a guided site visit. Carry a list of questions about approvals, plot dimensions, roads, amenities, pricing, registration, and current development progress.",
  },
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className="bg-white px-5 py-20 sm:px-6 lg:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
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
            INVESTOR FAQs
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Open Plots Near Hyderabad: Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Get clear information about Sri Supraja Infracon projects,
            documentation, developing locations, construction updates, and site
            visit planning before making a property decision.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-colors open:border-[#D6B84D] open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8A6500] sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-950 sm:text-lg">
                  {item.question}
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

              <div className="border-t border-slate-200 px-6 py-5 sm:px-7 sm:py-6">
                <p className="leading-7 text-slate-600">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <nav
          aria-label="Helpful property resources"
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold"
        >
          <Link
            href="/projects"
            prefetch={false}
            className="text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
          >
            Explore Sri Supraja Infracon projects
          </Link>

          <Link
            href="/open-plots-and-resorts-in-hyderabad"
            prefetch={false}
            className="text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
          >
            Read the open plot buyer guide
          </Link>

          <a
            href="https://www.rera.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
          >
            Telangana RERA official website
          </a>
        </nav>
      </div>
    </section>
  );
};

export default FAQSection;