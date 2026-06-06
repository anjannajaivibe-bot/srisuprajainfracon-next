import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectContent } from "@/data/projectContent";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const mapEmbeds: Record<string, string> = {
  "supraja-iris-resort-plots":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8183.9651954877745!2d77.78669037624174!3d17.633323871052095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1780043173712!5m2!1sen!2sin",

  "bridge-county":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8183.9651954877745!2d77.78669037624174!3d17.633323871052095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1780043173712!5m2!1sen!2sin",

  "sindhu-sarovar":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511.8695815160396!2d77.8786709080152!3d17.50183945649242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc957dabf153fa9%3A0x794f231ecb9cce5e!2sSupraja%20Sindhuja%20Sarovar!5e1!3m2!1sen!2sin!4v1780043266570!5m2!1sen!2sin",

  "subhash-meadows":
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d511.8047095687335!2d78.16270280975331!3d17.524852435391264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1780043343336!5m2!1sen!2sin",
};

const ProjectLocation = ({ project }: Props) => {
  const content = projectContent[project.slug as keyof typeof projectContent];
  const seo = getProjectSeo(project.slug);
  const mapSrc = mapEmbeds[project.slug];
  const locationAdvantages = content?.locationAdvantages || [];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Strategic Location Advantage
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Location Advantage for {seo.focusKeyword}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            {project.title} is positioned for buyers evaluating{" "}
            <strong>{seo.synonyms[0]}</strong>,{" "}
            <strong>{seo.synonyms[1]}</strong> and{" "}
            <strong>{seo.synonyms[2]}</strong> with practical access to
            Hyderabad growth corridors.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-[#EFE7D3] bg-[#F8F6F1] p-8 shadow-[0_18px_55px_rgba(11,22,51,0.06)]">
            <h3 className="mb-7 text-2xl font-extrabold text-[#111827]">
              {seo.h3}
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              {locationAdvantages.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-2xl border border-[#E8D7A5] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4C7] text-sm font-extrabold text-[#0B1633]">
                    {index + 1}
                  </div>

                  <p className="font-semibold leading-relaxed text-[#111827]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
              >
                Explore More Projects
              </Link>

              <Link
                href="/contact-us/"
                className="rounded-full border border-[#C9A227] bg-white px-6 py-3 text-sm font-bold text-[#0B1633] transition hover:bg-[#FFF4C7]"
              >
                Schedule Site Visit
              </Link>
            </div>
          </div>

          <div className="rounded-[34px] border border-[#EFE7D3] bg-white p-8 shadow-[0_18px_55px_rgba(11,22,51,0.06)]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Nearby Growth Drivers
            </p>

            <h3 className="text-2xl font-extrabold leading-tight text-[#111827]">
              Growth Corridor Connectivity
            </h3>

            <div className="mt-8 space-y-5">
              {seo.synonyms.slice(0, 5).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-[#EFE7D3] bg-[#FCFBF8] p-5 transition duration-300 hover:border-[#C9A227]"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A227] text-sm font-bold text-[#0B1633]">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-[#111827]">{item}</p>

                    <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                      Regional development positioning supporting long-term
                      plotted development relevance.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-[#E8D7A5] bg-[#FFF9E8] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Explore Related Resources
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/open-plots-and-resorts-in-hyderabad" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]">
                  Open Plots & Resorts
                </Link>

                <Link href="/resort-plots-in-hyderabad" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]">
                  Resort Plot Guide
                </Link>

                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B1633] transition hover:bg-[#C9A227]">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {mapSrc && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <iframe
              src={mapSrc}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${project.title} Google Map`}
              className="w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectLocation;




