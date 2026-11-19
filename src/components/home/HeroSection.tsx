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
    <section aria-labelledby="homepage-hero-title" className="relative overflow-hidden bg-[#071525]">
      {/* Editorial split composition: authentic project film on the left, readable buyer content on the right. */}
      <div className="grid min-h-[740px] grid-cols-1 lg:min-h-[720px] lg:grid-cols-[66%_34%] xl:min-h-[780px]">
        <div className="relative isolate min-h-[310px] overflow-hidden bg-[#071525] sm:min-h-[430px] lg:min-h-full">
          <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/videos/supraja-iris-hero-poster.webp')" }} aria-hidden="true">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/supraja-iris-hero-poster.webp"
              disablePictureInPicture
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src="/videos/Supraja_IRIS_Hero_With_Lemon_Tree_HD.mp4" type="video/mp4" />
              <source src="/videos/supraja-iris-hero.webm" type="video/webm" />
            </video>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071525]/30 via-transparent to-[#071525]/10" aria-hidden="true" />
        </div>

        <div className="relative flex min-w-0 flex-col justify-center border-t-[5px] border-[#C5A15C] bg-[#FAF9F6] px-6 pb-11 pt-12 text-[#10233A] sm:px-10 sm:pb-14 lg:border-l-[8px] lg:border-t-0 lg:px-7 lg:pb-12 lg:pt-28 xl:px-12 2xl:px-16">
          <div className="mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B692B] xl:mb-7">
              <span className="h-px w-7 shrink-0 bg-[#AD8A49]" aria-hidden="true" />
              Sri Supraja Infracon Builders &amp; Developers
            </div>
            <h1 id="homepage-hero-title" className="font-display text-[clamp(2.75rem,4.4vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10233A] lg:text-[clamp(2.65rem,3.3vw,4.9rem)]">
              Explore <span className="block font-normal italic text-[#A98240]">Open Plots</span>
              <span className="block">Near Hyderabad</span>
            </h1>
            <p className="mt-6 text-[14px] leading-[1.8] text-[#485461] xl:mt-8 xl:text-[15px]">
              Explore plotted developments across Kamkole, Sangareddy, Mominpet and
              Indrakaran. Compare project-wise DTCP and RERA records, payment options and on-site development before planning a visit.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 xl:mt-9">
              <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#10233A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A98240] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10233A]">
                Plan a Site Visit <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/projects" className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#A98240]/55 bg-transparent px-5 py-3 text-sm font-semibold text-[#10233A] transition hover:bg-[#EEE6D7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10233A]">
                Explore Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-8 grid gap-3 border-t border-[#DDD5C9] pt-6 text-[11px] font-medium text-[#52606B]">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A98240]" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Featured projects" className="relative border-y border-white/15 bg-[#0B1B2D] text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row lg:items-stretch">
          <div className="flex shrink-0 items-center border-b border-white/15 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8D7A5] lg:w-[175px] lg:border-b-0 lg:border-r">
            Featured Projects
          </div>
          <div className="grid flex-1 grid-cols-2 md:grid-cols-4">
            {projectLinks.map((project, index) => (
              <Link href={project.href} key={project.name} className="group flex min-h-16 items-center gap-3 border-r border-b border-white/10 px-5 py-4 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#E5C078] md:border-b-0">
                <span className="text-[10px] text-[#C6AC78]">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1 font-display text-base font-semibold leading-tight text-white group-hover:text-[#E5C078]">{project.name}</span>
                <span aria-hidden="true" className="text-[#C6AC78]">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10 border-y border-white/15 bg-[#05101D] text-white">
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
