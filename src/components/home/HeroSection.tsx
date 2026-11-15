import Image from "next/image";
import Link from "next/link";

const projects = [
  { name: "Supraja IRIS", location: "Kamkole", href: "/projects/supraja-iris-resort-plots" },
  { name: "Bridge County", location: "Kamkole", href: "/projects/bridge-county" },
  { name: "Sindhu Sarovar", location: "Mominpet", href: "/projects/sindhu-sarovar" },
  { name: "Subhash Meadows", location: "Indrakaran", href: "/projects/subhash-meadows" },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="homepage-hero-title"
      className="relative isolate flex min-h-[740px] items-end overflow-hidden bg-[#09172A] sm:min-h-[740px] lg:min-h-[790px] lg:items-center"
    >
      {/* The poster is essential for mobile, slow networks and motion preferences. */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/videos/supraja-iris-hero-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/supraja-iris-hero-poster.webp"
          className="hero-footage absolute inset-0 hidden h-full w-full object-cover lg:block"
          tabIndex={-1}
        >
          <source src="/videos/supraja-iris-hero.webm" type="video/webm" />
          <source src="/videos/heroBg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient keeps the video visible on the right while protecting readability. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#071525]/95 via-[#081729]/75 to-[#081729]/40 lg:bg-gradient-to-r lg:from-[#071525]/95 lg:via-[#0A1A30]/75 lg:to-[#0A1A30]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071525]/70 to-transparent"
      />

      <div className="container-max relative w-full px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="max-w-[850px]">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.20em] text-[#ECD8A7] sm:text-xs">
            <span aria-hidden="true" className="h-px w-9 shrink-0 bg-[#C8A763]" />
            Sri Supraja Infracon · Hyderabad
          </p>

          <h1
            id="homepage-hero-title"
            className="max-w-[820px] font-display text-[clamp(2.6rem,6vw,5.2rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white"
          >
            Open Plots Near Hyderabad.
            <span className="mt-2 block font-normal text-[#F0DBB2]">
              See the Site Before You Decide.
            </span>
          </h1>

          <p className="mt-6 max-w-[600px] text-[15px] leading-[1.8] text-slate-100 sm:text-lg">
            Exploring land at Kamkole, Mominpet or Indrakaran? See the layout,
            understand the approvals and find out what has been developed on
            the ground. We will help you take a closer look.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact-us"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#C8A763] px-7 py-3 text-center text-sm font-bold text-[#0A1A30] transition hover:bg-[#E6CE96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Arrange a Site Visit
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/60 bg-[#0A1A30]/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-[#E6CE96] hover:bg-[#0A1A30]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>

        <nav
          aria-label="Explore Sri Supraja Infracon projects"
          className="mt-12 border-t border-white/25 pt-5 lg:mt-16"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5D2A7]">
            Explore by project
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.name}
                className="group block w-fit max-w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="block text-sm font-semibold text-white transition group-hover:text-[#E6CE96] sm:text-base">
                  {project.name}
                </span>
                <span className="mt-1 block text-xs text-slate-300">
                  {project.location}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-footage {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
