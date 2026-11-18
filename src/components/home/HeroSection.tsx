import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

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

export default function HeroSection() {
  return (
    <section className="fi-hero">
      <div className="fi-hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="none" poster="/videos/supraja-iris-hero-poster.webp" tabIndex={-1}>
          <source src="/videos/heroBg.mp4" type="video/mp4" media="(min-width: 1024px)" />
        </video>
      </div>
      <div className="fi-hero-shade" aria-hidden="true" />
      <div className="fi-hero-accent" aria-hidden="true" />

      <div className="fi-hero-inner">
        <div className="fi-hero-copy">
          <p className="fi-hero-kicker">
            <span aria-hidden="true" className="fi-hero-kicker-line" />
            Sri Supraja Infracon Builders &amp; Developers
          </p>

          <h1 className="fi-hero-title">
            <span className="fi-hero-title-line">Explore</span>
            <span className="fi-hero-title-line fi-hero-title-accent">Open Plots</span>
            <span className="fi-hero-title-line">Near Hyderabad</span>
          </h1>

          <p className="fi-hero-summary">
            Explore plotted developments across Kamkole, Sangareddy, Mominpet and
            Indrakaran. Compare project-wise DTCP and RERA records, payment options and on-site development before planning a visit.
          </p>

          <div className="fi-hero-actions">
            <Link href="/contact-us" className="fi-btn fi-btn-gold">
              Plan a Site Visit <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/projects" className="fi-btn fi-btn-outline">
              Explore Projects <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="fi-hero-trust">
            {trustBadges.map((badge) => (
              <span key={badge} className="fi-hero-trust-badge">
                <span className="fi-hero-trust-dot" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Featured projects" className="fi-featured-nav">
          <div className="fi-featured-nav-heading">
            <span>Featured projects</span>
            <ArrowDownRight size={19} aria-hidden="true" />
          </div>
          {projectLinks.map((project, index) => (
            <Link href={project.href} key={project.href} className="fi-featured-link">
              <span className="fi-featured-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="fi-featured-name">{project.name}</span>
              <ArrowUpRight className="fi-featured-icon" size={19} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>

      <div className="fi-hero-bottom">
        <div className="fi-legacy-wrap">
          <span className="fi-legacy-heading">Completed Projects</span>
          <div className="fi-legacy-window">
            <div className="fi-legacy-track">
              {[0, 1].map((copy) => (
                <div className="fi-legacy-group" key={copy} aria-hidden={copy === 1}>
                  {legacyProjects.map((project) => (
                    <span className="fi-legacy-item" key={project}>
                      <span className="fi-legacy-separator" aria-hidden="true" />
                      {project}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <nav aria-label="Project information resources" className="fi-resource-nav">
          <Link href="/projects">Project Brochures</Link>
          <Link href="/projects">Location Advantages</Link>
          <a href="https://www.rera.telangana.gov.in/" target="_blank" rel="noopener noreferrer">Telangana RERA</a>
          <a href="https://dtcp.telangana.gov.in/" target="_blank" rel="noopener noreferrer">Telangana DTCP</a>
        </nav>
      </div>
    </section>
  );
}
