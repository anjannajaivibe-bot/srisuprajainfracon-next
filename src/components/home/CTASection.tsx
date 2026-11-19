import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919052996161?text=Hi%2C%20May%20I%20know%20more%20details%20about%20the%20project%3F";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-[#071525] to-[#132D49] px-6 py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 text-left lg:grid-cols-2 lg:gap-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C078]">
          PLAN YOUR VISIT
        </p>

        <h2 className="mb-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          See the Project Before You Decide
        </h2>

        <p className="max-w-xl text-base leading-8 text-slate-300">
          Visit the site, review current development, compare available plots and ask our team about approvals, pricing and registration before making a decision.
        </p>

        <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
          <Link href="/projects" className="text-amber-300 underline">
            View Projects
          </Link>

          <Link href="/contact-us" className="text-amber-300 underline">
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
