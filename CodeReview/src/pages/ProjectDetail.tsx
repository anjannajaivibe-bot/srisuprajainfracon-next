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

/* Lazy Loaded Below Fold Sections */
const ProjectGallery = dynamic(
  () => import("@/components/project/ProjectGallery"),
  {
    loading: () => (
      <div className="py-24 text-center text-slate-500">
        Loading gallery...
      </div>
    ),
  }
);

const ProjectFAQ = dynamic(() => import("@/components/project/ProjectFAQ"), {
  loading: () => (
    <div className="py-24 text-center text-slate-500">
      Loading FAQs...
    </div>
  ),
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
        <ProjectTestimonials projectSlug={project.slug} />

        {/* FAQ */}
        <ProjectFAQ project={project} />

        {/* CTA */}
        <ProjectCTA project={project} />
      </main>
    </div>
  );
};

export default ProjectDetail;