// @ts-nocheck
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectAmenities from "@/components/project/ProjectAmenities";
import ProjectResort from "@/components/project/ProjectResort";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectLocation from "@/components/project/ProjectLocation";
import ProjectFAQ from "@/components/project/ProjectFAQ";
import ProjectCTA from "@/components/project/ProjectCTA";

import { projects } from "@/data/projects";
import {
  projectContent,
  type ProjectContentKey,
} from "@/data/projectContent";

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
        <ProjectHero project={project} />

        <ProjectOverview project={project} content={content} />

        <ProjectHighlights project={project} content={content} />

        <ProjectAmenities project={project} content={content} />

        {project.slug === "supraja-iris-resort-plots" && (
          <ProjectResort project={project} />
        )}

        <ProjectGallery project={project} content={content} />

        <ProjectLocation project={project} content={content} />

        <ProjectFAQ project={project} content={content} />

        <ProjectCTA project={project} />
      </main>

      <FloatingCTA />

      <Footer />
    </div>
  );
};

export default ProjectDetail;



