const reasons = [
  {
    title: "Proven Real Estate Experience",
    desc: "A strong track record across plotted developments, residential projects, villas, and lifestyle-led communities.",
  },
  {
    title: "Projects in Growth Corridors",
    desc: "Strategic project locations across Kamkole, Mominpet, Sangareddy, and Indrakaran with access to key development zones.",
  },
  {
    title: "Transparent Documentation",
    desc: "Clear project information, approval details, layout visibility, and guided support before every site visit or booking decision.",
  },
  {
    title: "Investor-Focused Guidance",
    desc: "Practical location insights, availability updates, pricing guidance, and comparison support for confident decision-making.",
  },
  {
    title: "Multiple Project Options",
    desc: "Choose from resort-inspired plots, premium plotted enclaves, gated communities, and affordable growth-corridor projects.",
  },
  {
    title: "Long-Term Value Focus",
    desc: "Each project is planned around connectivity, infrastructure movement, residential demand, and future growth potential.",
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
            Why Investors Trust Sri Supraja Infracon
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Sri Supraja Infracon helps investors and families evaluate plotted,
            residential, and lifestyle-led real estate projects with clear
            documentation, practical location insights, and guided site visit
            support.
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
      </div>
    </section>
  );
};

export default WhyChooseUs;