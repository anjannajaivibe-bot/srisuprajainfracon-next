import Link from "next/link";

const reasons = [
  {
    title: "Approved Plotted Development Focus",
    desc: "Sri Supraja Infracon focuses on planned open plot communities with clear documentation, layout visibility and buyer-focused communication.",
  },
  {
    title: "Strategic Hyderabad Growth Corridors",
    desc: "Projects are positioned around Kamkole, Mominpet and Indrakaran with access to NH-65, ORR, institutional zones and industrial development corridors.",
  },
  {
    title: "Location-Led Investment Planning",
    desc: "Project locations are evaluated based on connectivity, infrastructure movement, residential demand and long-term growth potential.",
  },
  {
    title: "Resort and Lifestyle Positioning",
    desc: "Supraja IRIS adds a differentiated lifestyle advantage with Lemon Tree Resort under construction and planned family recreation attractions.",
  },
  {
    title: "Site Visit and Booking Support",
    desc: "Our team supports buyers with project walkthroughs, availability details, approval information, loan guidance and registration coordination.",
  },
  {
    title: "Local Real Estate Understanding",
    desc: "The company understands Telangana plotted development demand, buyer expectations and location-based value creation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Why Choose Us
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Why Choose Sri Supraja Infracon for Open Plot Investment Near Hyderabad
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Buyers can evaluate <strong>RERA approved plots near Hyderabad</strong>,{" "}
            <strong>premium villa plots</strong>,{" "}
            <strong>resort plot communities</strong> and{" "}
            <strong>gated community plots</strong> with practical location
            insights and site visit support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-lg font-extrabold text-slate-950">
                {index + 1}
              </div>

              <h3 className="mb-4 text-xl font-extrabold text-slate-950">
                {item.title}
              </h3>

              <p className="leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-amber-100 bg-white p-7 shadow-sm">
          <p className="text-lg leading-relaxed text-slate-700">
            Buyers searching for{" "}
            <strong className="text-slate-950">
              DTCP & RERA Approved plots near Hyderabad, RERA approved plotted communities
              in Telangana, resort plots near Woxsen University, villa plots near
              NH-65 and premium open plots in Hyderabad growth corridors
            </strong>{" "}
            can compare Sri Supraja Infracon projects based on approvals,
            location advantages, development progress and current availability.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
            <Link href="/projects" className="text-blue-700 underline">
              Compare all projects
            </Link>

            <Link href="/contact" className="text-blue-700 underline">
              Request availability details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;




