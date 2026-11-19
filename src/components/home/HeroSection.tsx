import Link from "next/link";

const trustBadges = [
  "Real Estate Development Since 2003",
  "Projects Across Key Hyderabad Locations",
  "DTCP & RERA Details Available",
];

const projectLinks = [
  { name: "Supraja IRIS", href: "/projects/supraja-iris-resort-plots" },
  { name: "Bridge County", href: "/projects/bridge-county" },
  { name: "Sindhu Sarovar", href: "/projects/sindhu-sarovar" },
  { name: "Subhash Meadows", href: "/projects/subhash-meadows" },
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
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/supraja-iris-hero-poster.webp"
          disablePictureInPicture
          tabIndex={-1}
        >
          <source src="/videos/Supraja_IRIS_Hero_With_Lemon_Tree_HD.mp4" type="video/mp4" />
          <source src="/videos/supraja-iris-hero.webm" type="video/webm" />
          <source src="/videos/heroBg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#081225]/90 via-[#0B1633]/65 to-[#1A2F5A]/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1633] to-transparent" />
      </div>

      <div className="container-max relative z-10 w-full px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 md:pb-14 lg:px-8 lg:pb-16">
        <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C9A227]/35 bg-[#C9A227]/10 px-3 py-2 sm:mb-6 sm:px-5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#C9A227]" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-[#E8D7A5] sm:text-sm">
            Sri Supraja Infracon Builders &amp; Developers
          </span>
        </div>

        <h1 className="mx-auto mb-4 max-w-6xl font-display text-[30px] font-bold leading-[1.12] tracking-tight text-white min-[390px]:text-[34px] sm:text-5xl md:text-[52px] lg:mb-6 lg:text-7xl lg:leading-[1.03]">
          Explore{" "}
          <span className="text-[#C9A227]">Open Plots</span>
          <br className="hidden md:block" /> Near Hyderabad
        </h1>

        <p className="mx-auto mb-6 max-w-4xl text-sm leading-6 text-slate-200 sm:mb-8 sm:text-base sm:leading-7 md:text-lg md:leading-relaxed">
          Explore plotted developments across Kamkole, Sangareddy, Mominpet and
          Indrakaran. Compare project-wise DTCP and RERA records, payment options and on-site development before planning a visit.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-7 sm:gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-semibold text-slate-100 sm:px-4 sm:text-sm lg:backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        <nav
          aria-label="Featured projects"
          className="mx-auto mb-6 grid max-w-[520px] grid-cols-2 gap-3 sm:mb-7 md:max-w-3xl md:grid-cols-4"
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

        <div className="relative left-1/2 right-1/2 mt-5 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-white/10 bg-white/5 sm:mt-7 lg:backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-0 px-4 sm:px-6 lg:flex-row lg:px-8">
            <div className="w-full shrink-0 border-b border-white/10 px-4 py-2.5 lg:w-auto lg:border-b-0 lg:border-r">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8D7A5] sm:text-sm sm:tracking-[0.18em]">
                Completed Projects
              </span>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden py-3 sm:py-4">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#0B1633] to-transparent sm:w-16" aria-hidden="true" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#0B1633] to-transparent sm:w-16" aria-hidden="true" />

              <div className="legacy-marquee-track">
                <div className="legacy-marquee-group">
                  {legacyProjects.map((project) => (
                    <span key={`primary-${project}`} className="legacy-marquee-item">
                      {project}
                    </span>
                  ))}
                </div>

                <div
                  className="legacy-marquee-group legacy-marquee-duplicate"
                  aria-hidden="true"
                  role="presentation"
                >
                  {legacyProjects.map((project) => (
                    <span
                      key={`duplicate-${project}`}
                      className="legacy-marquee-item"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10">
          <Link
            href="/contact-us"
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

        <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] sm:mt-7 sm:text-sm">
          <Link href="/projects" className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white">
            Project Brochures
          </Link>
          <Link href="/projects" className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white">
            Location Advantages
          </Link>
          <a href="https://www.rera.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white">
            Telangana RERA
          </a>
          <a href="https://dtcp.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#E8D7A5] underline decoration-[#E8D7A5]/60 underline-offset-4 transition hover:text-white">
            Telangana DTCP
          </a>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
