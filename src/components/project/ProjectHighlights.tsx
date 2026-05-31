import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const getExtraHighlights = (slug: string) => {
  if (slug === "supraja-iris-resort-plots") {
    return [
      "Lemon Tree Resort under construction",
      "Planned water villas",
      "Planned water theme park",
      "Planned amusement park",
      "Planned go-karting attraction",
      "Near Woxsen University and NH-65",
    ];
  }

  return [];
};

const ProjectHighlights = ({ project }: Props) => {
  const seo = getProjectSeo(project.slug);
  const allHighlights = [...project.highlights, ...getExtraHighlights(project.slug)];

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Project Highlights
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {seo.focusKeyword} Highlights
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4B5563]">
            {project.title} brings together <strong>{seo.synonyms[0]}</strong>,{" "}
            <strong>{seo.synonyms[1]}</strong>, approval-focused planning,
            plotted development infrastructure and buyer support from Sri Supraja
            Infracon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allHighlights.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="group rounded-[28px] border border-[#EFE7D3] bg-white p-6 shadow-[0_10px_35px_rgba(11,22,51,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_20px_55px_rgba(11,22,51,0.12)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4C7] text-sm font-extrabold text-[#0B1633] ring-1 ring-[#E8D7A5] transition group-hover:bg-[#C9A227]">
                {index + 1}
              </div>

              <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] border border-[#EFE7D3] bg-white p-7 shadow-[0_12px_40px_rgba(11,22,51,0.06)]">
          <p className="text-center text-base leading-relaxed text-[#6B7280]">
            Buyers comparing <strong>{seo.synonyms[2]}</strong>,{" "}
            <strong>{seo.synonyms[3]}</strong> and{" "}
            <strong>{seo.synonyms[4]}</strong> should verify project-wise
            approval details, current availability and development status before
            booking.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link
              href="/projects"
              className="rounded-2xl bg-[#0B1633] px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
            >
              Compare All Projects
            </Link>

            <Link
              href="/contact-us"
              className="rounded-2xl border border-[#C9A227] bg-[#FFF9E8] px-5 py-4 text-center text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
            >
              Request Availability
            </Link>

            <a
              href="https://www.rera.telangana.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-center text-sm font-bold text-[#0B1633] transition hover:border-[#C9A227] hover:bg-[#FFF9E8]"
            >
              Verify RERA Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
