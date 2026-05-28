import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectHighlights = ({ project }: Props) => {
  return (
    <section className="relative overflow-hidden bg-[#0B1633] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#E8D7A5]">
            Project Highlights
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
            Why Buyers Prefer {project.title}
          </h2>

          <p className="text-lg leading-relaxed text-slate-200">
            Explore the key advantages of this Sri Supraja Infracon plotted
            development, including location connectivity, approval-led planning,
            lifestyle potential and buyer support for site visits and project
            documentation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {project.highlights.map((item, index) => (
            <div
              key={item}
              className="group rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C9A227]/60 hover:bg-white/15"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227] text-lg font-extrabold text-[#0B1633] transition group-hover:scale-110">
                {index + 1}
              </span>

              <p className="font-semibold leading-relaxed text-white">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur md:grid-cols-3">
          <Link
            href="/projects"
            className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]"
          >
            Compare All Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-[#C9A227]/50 px-5 py-4 text-center text-sm font-bold text-[#E8D7A5] transition hover:bg-[#C9A227] hover:text-[#0B1633]"
          >
            Request Availability
          </Link>

          <a
            href="https://www.rera.telangana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#0B1633]"
          >
            Verify RERA Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;