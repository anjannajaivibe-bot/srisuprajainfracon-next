

const faqs = [
  {
    question: "Which Sri Supraja Infracon projects are currently open for sales?",
    answer:
      "Sales are open across selected Sri Supraja Infracon plotted development projects, including Supraja IRIS Resort Plots, Bridge County, Sindhu Sarovar and Subash Meadows, subject to current inventory availability.",
  },
  {
    question: "Do you offer DTCP and RERA approved open plots near Hyderabad?",
    answer:
      "Yes. Sri Supraja Infracon offers DTCP and RERA approved open plot projects in selected locations. Buyers should verify project-wise approval details before booking.",
  },
  {
    question: "Why are Kamkole open plots gaining buyer interest?",
    answer:
      "Kamkole is gaining attention because of Woxsen University, NH-65 connectivity, Regional Ring Road influence, NIMZ Zaheerabad growth corridor and increasing demand for plotted investments near Hyderabad.",
  },
  {
    question: "Is Lemon Tree Resort already operational at Supraja IRIS?",
    answer:
      "No. Lemon Tree Resort is under construction within the Supraja IRIS ecosystem. Planned attractions such as water villas, water theme park, amusement park and go-karting should be communicated as planned or upcoming.",
  },
  {
    question: "Are bank loans available for these open plot projects?",
    answer:
      "Bank loan availability depends on project approval status, buyer eligibility and lender policy. For selected projects, loan support may be available up to applicable limits.",
  },
  {
    question: "How should buyers evaluate open plots before booking?",
    answer:
      "Buyers should review approval documents, location connectivity, project development status, road access, nearby growth drivers, current availability, price revision schedule and registration process.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Buyer FAQs
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            FAQs About DTCP & RERA Approved Open Plots Near Hyderabad
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            These answers help buyers understand sales status, approvals,
            location advantage, resort ecosystem progress and site visit
            planning.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-extrabold text-slate-950">
                {item.question}
              </h3>

              <p className="leading-relaxed text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold">
          <a href="/projects" className="text-blue-700 underline">
            View available plotted communities
          </a>
          <a
            href="https://www.rera.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            Telangana RERA official website
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;




