import Link from "next/link";

const trustBadges = [
  "24+ Years of Real Estate Stewardship",
  "Positioned Along High-Growth Corridors",
  "Fully Documented, Fully Transparent",
];

const projectLinks = [
  {
    name: "Supraja IRIS",
    href: "/projects/supraja-iris-resort-plots",
  },
  {
    name: "Bridge County",
    href: "/projects/bridge-county",
  },
  {
    name: "Sindhu Sarovar",
    href: "/projects/sindhu-sarovar",
  },
  {
    name: "Subhash Meadows",
    href: "/projects/subhash-meadows",
  },
];

const legacyProjects = [
  "Sai Sreenivasam Apartments, Nallagandla",
  "Sreenivasa Anandam Apartments, Huda Trade Centre",
  "Supraja Harmony Villas, Ameenpur",
  "Supraja Harivillu Open Plots, Beeramguda",
  "Supraja Marvel Open Plots, Isnapur",
  "Supraja IIT Technopark Open Plots, IIT Kandi",
  "Many more projects completed",
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1633] pt-24 sm:pt-28 lg:min-h-[88vh] lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/*
          The source media condition prevents this video from being requested
          on mobile and tablet devices.

          Mobile users receive the lightweight navy background and overlays.
        */}
        <video
          className="hidden h-full w-full object-cover opacity-35 lg:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
        >
          <source
            src="/videos/heroBg.mp4"
            type="video/mp4"
            media="(min-width: 1024px)"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/95 via-[#0B1633]/88 to-[#1A2F5A]/82" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1633] to-transparent" />
      </div>

      {/* Hero content */}
      <div className="container-max relative z-10 w-full px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 md:pb-14 lg:px-8 lg:pb-16">
        <div className="hero-reveal hero-delay-1 mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-3 py-2 sm:mb-6 sm:px-5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-[#C9A227]"
            aria-hidden="true"
          />

          <span className="text-[11px] font-semibold text-[#E8D7A5] sm:text-sm">
            Sri Supraja Infracon Builders &amp; Developers
          </span>
        </div>

        <h1 className="hero-reveal hero-delay-2 mx-auto mb-4 max-w-6xl font-display text-[30px] font-bold leading-[1.12] tracking-tight text-white min-[390px]:text-[34px] sm:text-5xl md:text-[52px] lg:mb-6 lg:text-7xl lg:leading-[1.03]">
          DTCP &amp; RERA Approved{" "}
          <span className="text-[#C9A227]">Open Plots</span>
          <br className="hidden md:block" /> Near Hyderabad
        </h1>

        <p className="hero-reveal hero-delay-3 mx-auto mb-6 max-w-4xl text-sm leading-6 text-slate-200 sm:mb-8 sm:text-base sm:leading-7 md:text-lg md:leading-relaxed">
          Meticulously planned plotted projects across Kamkole, Sangareddy,
          Mominpet and Indrakaran, anchored to infrastructure corridors and
          engineered for sustained capital appreciation.
        </p>

        {/* Trust badges */}
        <div className="hero-reveal hero-delay-4 mb-6 flex flex-wrap justify-center gap-2 sm:mb-7 sm:gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-semibold text-slate-100 sm:px-4 sm:text-sm lg:backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Project links */}
        <nav
          aria-label="Featured projects"
          className="hero-reveal hero-delay-5 mx-auto mb-6 grid max-w-[520px] grid-cols-2 gap-3 sm:mb-7 md:max-w-3xl md:grid-cols-4"
        >
          {projectLinks.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="rounded-full bg-[#C9A227] px-3 py-3 text-center text-[11px] font-bold text-[#0B1633] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1633] sm:text-sm"
            >
              {project.name}
            </Link>
          ))}
        </nav>

        {/* Completed projects marquee */}
        <div className="relative left-1/2 right-1/2 mt-5 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-white/10 bg-white/5 sm:mt-7 lg:backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-0 px-4 sm:px-6 lg:flex-row lg:px-8">
            <div className="w-full shrink-0 border-b border-white/10 px-4 py-2.5 lg:w-auto lg:border-b-0 lg:border-r">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8D7A5] sm:text-sm sm:tracking-[0.18em]">
                Completed Projects
              </span>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden py-3 sm:py-4">
              <div
                className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#0B1633] to-transparent sm:w-16"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#0B1633] to-transparent sm:w-16"
                aria-hidden="true"
              />

              <div className="legacy-marquee-track flex w-max">
                {[...legacyProjects, ...legacyProjects].map(
                  (project, index) => (
                    <span
                      key={`${project}-${index}`}
                      className="mx-4 whitespace-nowrap text-[11px] font-semibold text-slate-200 sm:mx-6 sm:text-sm"
                      aria-hidden={index >= legacyProjects.length}
                    >
                      {project}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA buttons */}
        <div className="hero-reveal hero-delay-6 mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10">
          <Link
            href="/contact-us/"
            className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white transition duration-200 hover:bg-white hover:text-[#0B1633] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1633] sm:px-8 sm:py-4 lg:backdrop-blur-sm"
          >
            Plan a Site Visit
          </Link>

          <Link
            href="/projects"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0B1633] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#C9A227] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1633] sm:px-8 sm:py-4"
          >
            Explore Projects
          </Link>
        </div>

        {/* Supporting links */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] sm:mt-7 sm:text-sm">
          <Link
            href="/projects"
            className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white"
          >
            Project Brochures
          </Link>

          <Link
            href="/projects"
            className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white"
          >
            Location Advantages
          </Link>

          <a
            href="https://www.rera.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white"
          >
            Telangana RERA
          </a>

          <a
            href="https://dtcp.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white"
          >
            Telangana DTCP
          </a>
        </div>
      </div>

      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(16px);
          animation: hero-reveal-animation 550ms ease-out forwards;
          will-change: opacity, transform;
        }

        .hero-delay-1 {
          animation-delay: 40ms;
        }

        .hero-delay-2 {
          animation-delay: 90ms;
        }

        .hero-delay-3 {
          animation-delay: 140ms;
        }

        .hero-delay-4 {
          animation-delay: 190ms;
        }

        .hero-delay-5 {
          animation-delay: 240ms;
        }

        .hero-delay-6 {
          animation-delay: 290ms;
        }

        .legacy-marquee-track {
          animation: legacy-marquee-scroll 38s linear infinite;
          will-change: transform;
        }

        .legacy-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes hero-reveal-animation {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes legacy-marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1;
            transform: none;
            animation: none;
            will-change: auto;
          }

          .legacy-marquee-track {
            animation: none;
            transform: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;