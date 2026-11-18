import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import SmartImage from "@/components/shared/SmartImage";
import { projects } from "@/data/projects";

const projectCardCopy: Record<string, { badge: string; alt: string }> = {
  "supraja-iris-resort-plots": {
    badge: "Flagship Plotted Development",
    alt: "Supraja IRIS resort-inspired plots in Kamkole",
  },
  "supraja-iris": {
    badge: "Flagship Plotted Development",
    alt: "Supraja IRIS resort plots in Kamkole",
  },
  "bridge-county": {
    badge: "15-Acre Enclave within Supraja IRIS",
    alt: "Bridge County 15-acre plotted enclave within Supraja IRIS",
  },
  "sindhu-sarovar": {
    badge: "100 Ft Road Frontage",
    alt: "Sindhu Sarovar planned project with organized layout",
  },
  "subhash-meadows": {
    badge: "Plotted Development at Indrakaran",
    alt: "Subhash Meadows well-connected plotted project",
  },
};

export default function ProjectsSection() {
  return (
    <section className="fi-projects">
      <div className="fi-project-intro">
        <p className="fi-section-label"><span aria-hidden="true" />Our Ongoing Projects</p>
        <h2>
          Ongoing <span>Plotted Developments</span> Near Hyderabad
        </h2>
        <p className="fi-section-description">
          Compare our current projects by location, approval status, plot size,
          price, connectivity and on-site development. Each project page includes
          the details you need before arranging a site visit.
        </p>
      </div>

      <div className="fi-project-list">
        {projects.map((project, index) => {
          const cardCopy = projectCardCopy[project.slug] ?? {
            badge: "Sri Supraja Project",
            alt: project.title + " by Sri Supraja Infracon",
          };
          return (
            <article
              key={project.id}
              className={"fi-project " + (index % 2 ? "fi-project-reverse" : "")}
            >
              <div className="fi-project-image">
                <Link
                  href={project.link}
                  className="fi-project-photo-link"
                  aria-label={"View " + project.title + " project details"}
                >
                  <SmartImage
                    src={project.image}
                    alt={project.imageAlt || cardCopy.alt}
                    wrapperClassName="fi-project-photo"
                    imageClassName="object-cover"
                    sizes="(max-width: 767px) 100vw, 62vw"
                  />
                </Link>
                <span className="fi-photo-count" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}<span> / 04</span>
                </span>
              </div>

              <div className="fi-project-content">
                <div className="fi-project-topline">
                  <span className="fi-project-badge">{cardCopy.badge}</span>
                  <span className="fi-project-location"><MapPin size={14} aria-hidden="true" />{project.location}</span>
                </div>

                <h3><Link href={project.link}>{project.title}</Link></h3>

                {(project.dtcpNo || project.reraNo) && (
                  <div className="fi-project-approvals" aria-label="Project approval details">
                    {project.dtcpNo && <span>DTCP: {project.dtcpNo}</span>}
                    {project.reraNo && <span>RERA: {project.reraNo}</span>}
                  </div>
                )}

                <div className="fi-project-rule" aria-hidden="true" />

                <p className="fi-project-description">{project.shortDescription}</p>

                <div className="fi-project-highlights">
                  {project.highlights.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="fi-project-actions">
                  <Link href={project.link} className="fi-project-primary">
                    View Project Details <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>

                  {project.availabilityMapUrl && (
                    <a
                      href={project.availabilityMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fi-project-secondary"
                    >
                      Live Plot Availability <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  )}

                  {project.brochure && (
                    <a
                      href={project.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fi-project-secondary"
                    >
                      <FileText size={15} aria-hidden="true" /> View Brochure
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
