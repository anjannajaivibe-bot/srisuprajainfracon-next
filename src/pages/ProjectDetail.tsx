import Link from "next/link";
import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectCTA from "@/components/project/ProjectCTA";
import ProjectTestimonials from "@/components/project/ProjectTestimonials";

import { projects } from "@/data/projects";

import {
  projectContent,
  type ProjectContentKey,
} from "@/data/projectContent";

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

/* Lazy Loaded Below Fold Sections */
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <ProjectHero project={project} />

        {/* Overview / Brochure */}
        <ProjectOverview project={project} />

        {/* Highlights */}
        <ProjectHighlights project={project} />

        {/* Gallery */}
        <ProjectGallery project={project} />

        {/* Testimonials */}
        {project.slug !== "subhash-meadows" && (
          <ProjectTestimonials projectSlug={project.slug} />
        )}

        {/* FAQ */}
        <ProjectFAQ project={project} />

        {/* CTA */}
        <ProjectCTA project={project} />
      </main>
    </div>
  );
};

export default ProjectDetail;
