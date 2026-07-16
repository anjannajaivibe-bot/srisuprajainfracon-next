import SmartImage from "@/components/shared/SmartImage";
import Link from "next/link";
import projectIris from "@/assets/project-iris.webp";

const stats = [
  {
    value: "350",
    label: "Acres Master Planned Development",
  },
  {
    value: "4000",
    label: "Plotted Units Planned",
  },
  {
    value: "Sales",
    label: "Open for Selected Inventory",
  },
];

const attractions = [
  {
    icon: "🏨",
    title: "Lemon Tree Resort Under Construction",
    desc: "A hospitality anchor under construction within the wider Supraja IRIS resort ecosystem.",
  },
  {
    icon: "🌊",
    title: "Planned Water Villas",
    desc: "A premium leisure concept planned as part of the future lifestyle environment.",
  },
  {
    icon: "💒",
    title: "Destination Wedding Convention",
    desc: "A planned event venue concept for celebrations, gatherings and destination experiences.",
  },
  {
    icon: "🎢",
    title: "Water Theme Park and Amusement Zone",
    desc: "Future recreation attractions planned to support family leisure and destination appeal.",
  },
  {
    icon: "🏁",
    title: "Go-Karting Attraction",
    desc: "A planned entertainment feature designed to enhance weekend recreation value.",
  },
  {
    icon: "📍",
    title: "Near Woxsen University and NH-65",
    desc: "A strategic Kamkole location with access to education, highway and growth corridor advantages.",
  },
];

const FlagshipProject = () => {
  return (
    <section
      id="flagship"
      className="section-padding bg-section-alt"
      aria-labelledby="flagship-project-heading"
    >
      <div className="container-max">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full gold-gradient px-4 py-1.5 text-sm font-semibold text-navy">
            FLAGSHIP RESORT PLOT DEVELOPMENT
          </span>

          <h2
            id="flagship-project-heading"
            className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            Supraja IRIS – DTCP &amp; RERA Approved Open Plots Near Hyderabad
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            Supraja IRIS is a{" "}
            <strong>resort-style plotted development</strong> at Kamkole near
            Hyderabad, positioned adjacent to Woxsen University, NH-65,
            Regional Ring Road influence zones and the NIMZ Zaheerabad growth
            corridor.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link
              href="/projects/supraja-iris-resort-plots"
              className="font-bold text-blue-700 underline decoration-blue-700/60 underline-offset-4 transition hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              View Supraja IRIS project details
            </Link>

            <a
              href="https://www.woxsen.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 underline decoration-blue-700/60 underline-offset-4 transition hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Adjacent to Woxsen University
            </a>
          </div>
        </div>

        {/* Project image */}
        <div className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl">
          <SmartImage
            src={projectIris}
            alt="DTCP and RERA approved open plots near Hyderabad at Supraja IRIS"
            className="h-[360px] w-full rounded-[32px] object-cover shadow-2xl md:h-[500px]"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/10"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-400/60 bg-emerald-900/90 px-4 py-1.5 text-sm font-semibold text-emerald-100 shadow-md lg:backdrop-blur-sm">
                ✓ Sales Open for Selected Inventory
              </span>

              <span className="rounded-full border border-yellow-300/70 bg-yellow-500/95 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-md lg:backdrop-blur-sm">
                DTCP &amp; RERA Approved
              </span>

              <span className="rounded-full border border-white/70 bg-slate-950/90 px-4 py-1.5 text-sm font-semibold text-white shadow-md lg:backdrop-blur-sm">
                Up to 70% Bank Loan Support Available*
              </span>
            </div>
          </div>
        </div>

        {/* Project statistics */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="font-display text-3xl font-bold text-primary">
                {stat.value}
              </div>

              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle attractions */}
        <h3 className="mb-8 text-center font-display text-2xl font-bold text-foreground">
          Lifestyle Attractions
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((item) => (
            <article
              key={item.title}
              className="glass-card p-6 hover-lift"
            >
              <span
                className="mb-3 block text-3xl"
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <h4 className="mb-2 font-display font-bold text-foreground">
                {item.title}
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          *Loan support and project availability are subject to project status,
          investor eligibility and lender terms.
        </p>
      </div>
    </section>
  );
};

export default FlagshipProject;