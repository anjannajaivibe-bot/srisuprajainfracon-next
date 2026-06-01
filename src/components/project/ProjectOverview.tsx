import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const getCorrectedSeo = (project: Project) => {
  const seo = getProjectSeo(project.slug);

  if (project.slug !== "sindhu-sarovar") {
    return seo;
  }

  return {
    ...seo,
    h2: "DTCP & RERA Approved Gated Community Open Plots at Supraja Sindhu Sarovar",
    h3: "Supraja Sindhu Sarovar Brochure, Layout and Project Details",
    description:
      "Supraja Sindhu Sarovar is a DTCP & RERA Approved plotted development planned with gated community infrastructure, 100-feet road connectivity, wide internal roads, landscaped parks, avenue plantation, pedestrian walkways, street lighting, rainwater harvesting pits, and clear-title vastu-compliant plots.",
    lastParagraph:
      "Supraja Sindhu Sarovar is suitable for buyers looking for DTCP & RERA Approved open plots with gated community planning, strong road connectivity, landscaped open spaces, and infrastructure-focused plotted development. Project details, availability, approvals, and specifications should be verified before booking.",
    synonyms: [
      "DTCP & RERA Approved open plots",
      "gated community plots",
      "100 feet road connectivity",
      "vastu-compliant plots",
      "black top roads",
    ],
  };
};

const ProjectOverview = ({ project }: Props) => {
  const seo = getCorrectedSeo(project);
  const brochureUrl = project.brochure;
  const availabilityMapUrl = project.availabilityMapUrl;

  const comparisonText =
    project.slug === "sindhu-sarovar" ? (
      <>
        Buyers also compare this project with{" "}
        <strong className="text-slate-950">DTCP & RERA Approved open plots</strong>,{" "}
        <strong className="text-slate-950">gated community plots</strong>,{" "}
        <strong className="text-slate-950">100 feet road connectivity</strong>,{" "}
        <strong className="text-slate-950">vastu-compliant layouts</strong> and{" "}
        <strong className="text-slate-950">black top road infrastructure</strong>{" "}
        before shortlisting a plotted community.
      </>
    ) : (
      <>
        Buyers also compare this project with{" "}
        <strong className="text-slate-950">{seo.synonyms[0]}</strong>,{" "}
        <strong className="text-slate-950">{seo.synonyms[1]}</strong>,{" "}
        <strong className="text-slate-950">{seo.synonyms[2]}</strong>,{" "}
        <strong className="text-slate-950">{seo.synonyms[3]}</strong> and{" "}
        <strong className="text-slate-950">{seo.synonyms[4]}</strong> before
        shortlisting a Sri Supraja Infracon plotted community.
      </>
    );

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
              {project.location}
            </p>

            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              {seo.h2}
            </h2>

            {availabilityMapUrl && (
              <a
                href={availabilityMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-amber-500 hover:text-slate-950"
              >
                View Live Plot Availability
              </a>
            )}
          </div>

          <div>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              {seo.description}
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              {comparisonText}
            </p>

            <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold">
              {seo.internalLinks.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-700 underline"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Check route planning
              </a>
            </div>
          </div>
        </div>

        {brochureUrl && (
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950">
                  {seo.h3}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Explore brochure details, master plan layout, approvals,
                  connectivity, plotted development highlights and infrastructure
                  planning information for {project.title}.
                </p>
              </div>

              <div className="hidden flex-wrap gap-3 md:flex">
                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-amber-400"
                >
                  Open PDF
                </a>

                <a
                  href={brochureUrl}
                  download
                  className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition hover:border-amber-500 hover:bg-amber-50"
                >
                  Download
                </a>
              </div>
            </div>

            <iframe
              src={`${brochureUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              title={`${project.title} Brochure`}
              className="hidden h-[900px] w-full md:block"
            />

            <div className="block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 text-white md:hidden">
              <div className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/10 p-6 text-center shadow-2xl backdrop-blur">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                  Brochure Preview
                </p>

                <h4 className="mb-4 text-2xl font-extrabold">
                  View {project.title} PDF Brochure
                </h4>

                <p className="mb-6 text-sm leading-relaxed text-slate-200">
                  Open the brochure to review project layout, approvals,
                  connectivity, plotted development details and infrastructure
                  planning information.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-md"
                  >
                    Open Brochure PDF
                  </a>

                  <a
                    href={brochureUrl}
                    download
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white"
                  >
                    Download Brochure
                  </a>

                  {availabilityMapUrl && (
                    <a
                      href={availabilityMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-amber-300/40 bg-transparent px-5 py-3 text-sm font-bold text-amber-300"
                    >
                      View Live Plot Availability
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="mt-10 text-lg leading-relaxed text-slate-600">
          {seo.lastParagraph}
        </p>
      </div>
    </section>
  );
};

export default ProjectOverview;