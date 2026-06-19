import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          PLAN YOUR VISIT
        </p>

        <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
          Visit. Evaluate. Invest with Confidence.
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
          Visit our project locations, understand development progress, 
          review approvals, explore available plots, 
          and evaluate the right opportunity with guidance from our team.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold">
          <Link href="/projects" className="text-amber-300 underline">
            View Projects
          </Link>

          <Link href="/contact-us/" className="text-amber-300 underline">
            Contact Our Team
          </Link>

          <a
            href="https://wa.me/919052996161?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20Sri%20Supraja%20Infracon%20projects."
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




