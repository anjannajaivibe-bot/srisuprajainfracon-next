import Link from "next/link";
import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import LemonTreeProgress from "@/components/project/LemonTreeProgress";
import ProjectCTA from "@/components/project/ProjectCTA";
import ProjectTestimonials from "@/components/project/ProjectTestimonials";

import { projects } from "@/data/projects";

import {
  projectContent,
  type ProjectContentKey,
} from "@/data/projectContent";

const SITE_URL = "https://www.srisuprajainfracon.com";

const SectionSkeleton = () => (
  <div
    className="mx-auto max-w-7xl px-6 py-24"
    aria-hidden="true"
    role="presentation"
  >
    <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-100" />
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      <div className="h-64 animate-pulse rounded-[28px] bg-slate-100" />
      <div className="h-64 animate-pulse rounded-[28px] bg-slate-100" />
      <div className="h-64 animate-pulse rounded-[28px] bg-slate-100" />
    </div>
  </div>
);

const ProjectGallery = dynamic(
  () => import("@/components/project/ProjectGallery"),
  {
    loading: () => <SectionSkeleton />,
  }
);

const ProjectFAQ = dynamic(() => import("@/components/project/ProjectFAQ"), {
  loading: () => <SectionSkeleton />,
});

const ProjectDetail = ({ slug }: { slug: string }) => {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Project Not Found
          </h1>

          <p className="mb-8 text-slate-600">
            The project you are looking for is not available.
          </p>

          <Link
            href="/projects"
            className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            View All Projects
          </Link>
        </main>
      </div>
    );
  }

  const content =
    projectContent[project.slug as ProjectContentKey] ||
    projectContent["supraja-iris-resort-plots"];

  const isKamkoleCorridor =
    project.slug === "supraja-iris-resort-plots" ||
    project.slug === "bridge-county";

  const suprajaIrisVideoSchema =
    project.slug === "supraja-iris-resort-plots"
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "@id": `${SITE_URL}/projects/supraja-iris-resort-plots/#project-video`,
          name: "Supraja IRIS Resort Plots Project Overview",
          description:
            "Project overview video showing Supraja IRIS resort plots at Kamkole, the planned lifestyle destination, project entrance and development environment.",
          thumbnailUrl: `${SITE_URL}/videos/supraja-iris-hero-poster.webp`,
          uploadDate: "2026-05-30T11:21:38+05:30",
          contentUrl: `${SITE_URL}/videos/supraja-iris-hero.webm`,
          url: `${SITE_URL}/projects/supraja-iris-resort-plots/`,
          publisher: { "@id": `${SITE_URL}/#organization` },
          inLanguage: "en-IN",
        }
      : null;

  return (
    <div className="min-h-screen bg-white">
      {suprajaIrisVideoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(suprajaIrisVideoSchema),
          }}
        />
      )}

      <Navbar />

      <main>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectHighlights project={project} />

        {project.slug === "supraja-iris-resort-plots" && <LemonTreeProgress />}

        <ProjectGallery project={project} />

        {project.slug !== "subhash-meadows" && (
          <ProjectTestimonials projectSlug={project.slug} />
        )}

        <ProjectFAQ project={project} />

        <section className="border-y border-slate-200 bg-[#F8F6F1] px-6 py-12">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-[#DED4BD] bg-white p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A26]">
              Compare before you decide
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#17211B] md:text-3xl">
              Compare Sri Supraja plotted developments across Hyderabad growth corridors
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Review current projects together by location, applicable approvals and development context before shortlisting a site visit.
              {isKamkoleCorridor
                ? " For Kamkole projects, the Sadashivapet and NH-65 corridor guide adds useful location context."
                : " The Hyderabad plots comparison page helps place this project alongside Sri Supraja's other plotted developments."}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/open-plots-and-resorts-in-hyderabad"
                className="rounded-full bg-[#10251D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8A6A26]"
              >
                Compare Current Plotted Developments
              </Link>
              {isKamkoleCorridor && (
                <Link
                  href="/blog/kamkole-real-estate-investment-hotspot"
                  className="rounded-full border border-[#CDBD98] bg-white px-5 py-3 text-sm font-semibold text-[#17211B] transition hover:border-[#8A6A26]"
                >
                  Read Kamkole & NH-65 Location Guide
                </Link>
              )}
            </div>
          </div>
        </section>

        <ProjectCTA project={project} />
      </main>
    </div>
  );
};

export default ProjectDetail;
