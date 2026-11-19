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
    <section aria-labelledby="homepage-hero-title" className="relative isolate overflow-hidden bg-[#071525] text-white">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <video
          className="h-full w-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/supraja-iris-hero-poster.webp"
          disablePictureInPicture
          tabIndex={-1}
        >
          <source src="/videos/Supraja_IRIS_Hero_With_Lemon_Tree_HD.mp4" type="video/mp4" />
          <source src="/videos/supraja-iris-hero.webm" type="video/webm" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#06111F]/95 via-[#071525]/76 to-[#071525]/30 lg:to-[#071525]/25" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071525] to-transparent" aria-hidden="true" />

      <div className="container-max relative grid min-h-[680px] items-center gap-10 px-5 pb-12 pt-36 sm:px-8 lg:min-h-[760px] lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20 lg:px-10 lg:pt-40">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E8D7A5] sm:text-xs">
            <span aria-hidden="true" className="h-px w-9 bg-[#DDBB73]" />
            Sri Supraja Infracon Builders &amp; Developers
          </div>
          <h1 id="homepage-hero-title" className="max-w-3xl font-display text-[clamp(3.1rem,6vw,6.6rem)] font-semibold leading-[0.99] tracking-[-0.045em] text-white">
            Explore <span className="block font-normal italic text-[#E9BF72]">Open Plots</span>
            <span className="block">Near Hyderabad</span>
          </h1>
          <p className="mt-8 max-w-[590px] text-sm leading-[1.9] text-slate-100 sm:text-base">
            Explore plotted developments across Kamkole, Sangareddy, Mominpet and
            Indrakaran. Compare project-wise DTCP and RERA records, payment options and on-site development before planning a visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#E5C078] px-6 py-3 text-sm font-semibold text-[#071525] transition hover:bg-[#F3D69E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Plan a Site Visit <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/projects" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-white/45 bg-[#071525]/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#E5C078] hover:bg-[#071525]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore Projects <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-slate-200">
            {trustBadges.map((badge) => (
              <span className="before:mr-2 before:text-[#E5C078] before:content-['◦']" key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <nav aria-label="Featured projects" className="w-full max-w-sm border border-white/15 bg-[#06111F]/65 p-5 backdrop-blur-md lg:justify-self-end">
          <div className="mb-3 flex items-center justify-between border-b border-white/20 pb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8D7A5]">
            <span>Featured Projects</span><span aria-hidden="true">↗</span>
          </div>
          {projectLinks.map((project,index) => (
            <Link key={project.name} href={project.href} className="group flex items-center gap-4 border-b border-white/15 px-1 py-4 last:border-b-0 hover:text-[#E5C078] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              <span className="text-[10px] text-[#E8D7A5]">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1 font-display text-lg leading-tight">{project.name}</span>
              <span aria-hidden="true" className="transition group-hover:translate-x-1">↗</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative z-10 border-y border-white/15 bg-[#05101D]/90">
        <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row lg:items-center">
          <div className="shrink-0 border-b border-white/15 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8D7A5] lg:border-b-0 lg:border-r">
            Completed Projects
          </div>
          <div className="relative min-w-0 flex-1 overflow-hidden py-4" aria-label="Our completed projects">
            <div className="legacy-marquee-track">
              <div className="legacy-marquee-group">
                {legacyProjects.map((project) => <span className="legacy-marquee-item" key={project}>{project}</span>)}
              </div>
              <div aria-hidden="true" className="legacy-marquee-group">
                {legacyProjects.map((project) => <span className="legacy-marquee-item" key={project}>{project}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 bg-[#05101D] px-5 py-4 text-[11px] text-[#E8D7A5]">
        <Link href="/projects" className="underline underline-offset-4 hover:text-white">Project Brochures</Link>
        <Link href="/projects" className="underline underline-offset-4 hover:text-white">Location Advantages</Link>
        <a href="https://www.rera.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">Telangana RERA</a>
        <a href="https://dtcp.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">Telangana DTCP</a>
      </div>
    </section>
  );
};
export default HeroSection;
