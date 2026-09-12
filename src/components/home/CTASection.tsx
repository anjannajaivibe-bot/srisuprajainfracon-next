import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919052996161?text=Hi%2C%20May%20I%20know%20more%20details%20about%20the%20project%3F";

const CTASection = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          PLAN YOUR VISIT
        </p>

        <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
          See the Project Before You Decide
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
          Visit the site, review current development, compare available plots and ask our team about approvals, pricing and registration before making a decision.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold">
          <Link href="/projects" className="text-amber-300 underline">
            View Projects
          </Link>

          <Link href="/contact-us/" className="text-amber-300 underline">
            Speak to Our Team
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 underline"
          >
            Schedule a Site Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
