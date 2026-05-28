import Link from "next/link";
import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectAmenities from "@/components/project/ProjectAmenities";
import ProjectLocation from "@/components/project/ProjectLocation";
import ProjectCTA from "@/components/project/ProjectCTA";

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

const ProjectFAQ = dynamic(
  () => import("@/components/project/ProjectFAQ"),
  {
    loading: () => (
      <div className="py-24 text-center text-slate-500">
        Loading FAQs...
      </div>
    ),
  }
);

const ProjectResort = dynamic(
  () => import("@/components/project/ProjectResort"),
  {
    loading: () => (
      <div className="py-24 text-center text-slate-500">
        Loading resort details...
      </div>
    ),
  }
);

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

        <Footer />
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

        {/* Overview */}
        <ProjectOverview project={project} />

        {/* Highlights */}
        <ProjectHighlights project={project} />

        {/* Amenities */}
        <ProjectAmenities project={project} />

        {/* Resort Section */}
        {project.slug === "supraja-iris-resort-plots" && (
          <ProjectResort project={project} />
        )}

        {/* Gallery */}
        <ProjectGallery project={project} />

        {/* Location */}
        <ProjectLocation project={project} />

        {/* FAQ */}
        <ProjectFAQ project={project} />

        {/* CTA */}
        <ProjectCTA project={project} />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;