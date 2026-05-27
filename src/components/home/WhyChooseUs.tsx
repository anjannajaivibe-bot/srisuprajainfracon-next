

const reasons = [
  {
    title: "Focused on Approved Open Plot Projects",
    desc: "Sri Supraja Infracon focuses on planned open plot developments with buyer-friendly documentation, layout clarity and transparent project communication.",
  },
  {
    title: "Projects in Hyderabad Growth Corridors",
    desc: "Our plotted communities are positioned around locations such as Kamkole, Mominpet and Indrakaran with access to NH-65, ORR, institutional zones and industrial growth corridors.",
  },
  {
    title: "High ROI Location Planning",
    desc: "Every project is selected with growth potential, connectivity, infrastructure movement and future residential demand in mind.",
  },
  {
    title: "Resort and Lifestyle Positioning",
    desc: "Supraja IRIS adds a strong lifestyle advantage with Lemon Tree Resort under construction and planned family recreation attractions.",
  },
  {
    title: "Buyer Confidence and Site Visit Support",
    desc: "Our team supports buyers with project walkthroughs, availability details, approval information, loan guidance and registration coordination.",
  },
  {
    title: "Strong Local Real Estate Understanding",
    desc: "The company understands Telangana land demand, investor psychology, plotted development planning and location-based value creation.",
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
            Why Buyers Choose Sri Supraja Infracon for Open Plots Near Hyderabad
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            We help buyers evaluate approved open plots, villa plots and
            investment plots with stronger location logic, clearer project
            positioning and practical site visit support.
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
              DTCP approved open plots near Hyderabad, RERA approved villa plots
              in Telangana and resort plots near Woxsen University
            </strong>{" "}
            can compare our projects based on approvals, location advantages,
            development progress and current sales availability.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
            <a href="/projects" className="text-blue-700 underline">
              Compare all Sri Supraja Infracon projects
            </a>
            <a href="/contact" className="text-blue-700 underline">
              Request project availability details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;




