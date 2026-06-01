import Link from "next/link";

const faqs = [
  {
    question: "Which are the best DTCP & RERA approved open plots near Hyderabad?",
    answer:
      "Sri Supraja Infracon offers plotted development options such as Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows, subject to project-wise approvals and current availability.",
  },
  {
    question: "Are resort plots near Hyderabad a good option for buyers?",
    answer:
      "Resort-style plotted developments can be attractive for buyers who want lifestyle positioning, weekend-use potential and long-term growth corridor advantages. Buyers should review approvals, access roads and development status before booking.",
  },
  {
    question: "Which plotted developments are near Woxsen University?",
    answer:
      "Supraja IRIS and Bridge County are positioned at Kamkole with location advantages connected to Woxsen University, NH-65 and surrounding growth corridors.",
  },
  {
    question: "What should buyers check before choosing DTCP & RERA approved open plots near Hyderabad?",
    answer:
      "Buyers should review approval documents, RERA details where applicable, location connectivity, current development status, road access, nearby growth drivers, pricing, availability and registration process.",
  },
  {
    question: "Is Lemon Tree Resort operational at Supraja IRIS?",
    answer:
      "No. Lemon Tree Resort is under construction within the Supraja IRIS ecosystem. Planned attractions such as water villas, water theme park, amusement zone and go-karting should be understood as planned or upcoming features.",
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
            These answers help buyers understand approvals, sales status,
            location advantages, resort ecosystem progress and site visit
            planning for <strong>approved plotted developments</strong>.
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
          <Link href="/projects" className="text-blue-700 underline">
            View available plotted communities
          </Link>

          <Link href="/open-plots-and-resorts-in-hyderabad" className="text-blue-700 underline">
            Read open plot buyer guide
          </Link>

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

