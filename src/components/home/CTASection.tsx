

const CTASection = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          Sales Open Now
        </p>

        <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
          Compare Open Plots Before the Next Price Revision
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
          Explore DTCP & RERA approved open plots near Hyderabad, premium villa
          plots near growth corridors and resort plots near Woxsen University.
          Use the header or floating enquiry buttons to request current
          availability, pricing and site visit details.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold">
          <a href="/projects" className="text-amber-300 underline">
            Explore open plot projects
          </a>

          <a href="/contact" className="text-amber-300 underline">
            View contact and enquiry details
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;




