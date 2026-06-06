import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const getExtraAmenities = (slug: string) => {
  if (slug === "supraja-iris-resort-plots") {
    return [
      "Lemon Tree Resort under construction",
      "Water villas planned",
      "Water theme park planned",
      "Go-karting attraction planned",
      "Destination event spaces planned",
      "Resort ecosystem positioning",
    ];
  }

  return [];
};

const ProjectAmenities = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const seo = getProjectSeo(project.slug);

  if (!content?.amenities?.length) return null;

  const amenities = [...content.amenities, ...getExtraAmenities(project.slug)];

  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Lifestyle Amenities
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Amenities for {seo.focusKeyword}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            {project.title} is planned with infrastructure and amenities that
            support <strong>{seo.synonyms[0]}</strong>,{" "}
            <strong>{seo.synonyms[1]}</strong> and future-ready community
            living near Hyderabad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="group rounded-[30px] border border-[#EFE7D3] bg-white p-7 shadow-[0_10px_35px_rgba(11,22,51,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_18px_55px_rgba(11,22,51,0.12)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4C7] text-xl font-extrabold text-[#0B1633] ring-1 ring-[#E8D7A5] transition group-hover:bg-[#C9A227]">
                ✓
              </div>

              <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                {item}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Planned infrastructure and community-oriented development
                support designed to improve project livability and buyer
                experience.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-[#EFE7D3] bg-white p-8 shadow-[0_12px_40px_rgba(11,22,51,0.05)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-[#111827]">
                {seo.h3}
              </h3>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#6B7280]">
                Buyers evaluating <strong>{seo.synonyms[2]}</strong>,{" "}
                <strong>{seo.synonyms[3]}</strong> and{" "}
                <strong>{seo.synonyms[4]}</strong> can review amenities,
                approvals, location and current availability before planning a
                site visit.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Explore Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#C9A227] bg-[#FFF9E8] px-6 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
              >
                Schedule Site Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAmenities;




