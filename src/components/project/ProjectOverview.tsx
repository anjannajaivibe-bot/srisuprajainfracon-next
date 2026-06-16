import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";

type Props = {
  project: Project;
};

const projectMaps: Record<string, string> = {
  "supraja-iris":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9919.84604372614!2d77.79124881460227!3d17.631095215457595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1781594940721!5m2!1sen!2sin",

  "supraja-iris-resort-plots":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9919.84604372614!2d77.79124881460227!3d17.631095215457595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1781594940721!5m2!1sen!2sin",

  "bridge-county":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8484356747235!2d77.79436807688003!3d17.6377793524897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc95300175108ef%3A0x969626319a3e14f1!2sSupraja%20Bridge%20County!5e1!3m2!1sen!2sin!4v1781595045957!5m2!1sen!2sin",

  "sindhu-sarovar":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4281846986564!2d77.87623247462946!3d17.50216579948956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc957dabf153fa9%3A0x794f231ecb9cce5e!2sSupraja%20Sindhuja%20Sarovar!5e1!3m2!1sen!2sin!4v1781595078987!5m2!1sen!2sin",

  "subhash-meadows":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.9992101737885!2d78.16053747462993!3d17.524786798833457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf1004d95c521%3A0x78d4dfe9922ab864!2sSubhash%20Meadows!5e1!3m2!1sen!2sin!4v1781595112903!5m2!1sen!2sin",
};

const projectLocationCopy: Record<string, string> = {
  "supraja-iris":
    "Supraja IRIS is positioned at Kamkole with access to the Mumbai Highway growth corridor, making it suitable for investors looking at plotted investment, weekend lifestyle potential, and future connectivity advantages near Hyderabad.",

  "supraja-iris-resort-plots":
    "Supraja IRIS is positioned at Kamkole with access to the Mumbai Highway growth corridor, making it suitable for investors looking at plotted investment, weekend lifestyle potential, and future connectivity advantages near Hyderabad.",

  "bridge-county":
    "Supraja Bridge County is located adjacent to Woxsen University within the larger Supraja IRIS project environment, giving investorss a calm plotted community setting with the advantage of nearby education, connectivity, and future development activity.",

  "sindhu-sarovar":
    "Supraja Sindhu Sarovar offers a planned project location with practical access and long-term land value potential, making it relevant for investors who prefer organized layouts in a developing real estate corridor.",

  "subhash-meadows":
    "Supraja Subhash Meadows is placed in a well-connected zone with access to nearby routes and surrounding development, making it a dependable option for families and investors evaluating future-ready land ownership.",
};

const overviewCopy: Record<
  string,
  {
    label: string;
    title: string;
    description: string;
    closing: string;
  }
> = {
  "supraja-iris": {
    label: "Resort-Inspired Project",
    title: "A Landmark Destination Taking Shape.",
    description:
      "",
    closing:
      "",
  },

  "supraja-iris-resort-plots": {
    label: "Resort-Inspired Project",
    title: "A Landmark Destination Taking Shape.",
    description:
      "",
    closing:
      "",
  },

  "bridge-county": {
    label: "A DISTINCT ADDRESS WITHIN A LARGER VISION",
    title: "Connected to Something Bigger.",
    description:
      "Bridge County is a dedicated 15-acre plotted enclave within the larger Supraja IRIS project environment at Kamkole, offering a quieter setting while staying connected to a broader lifestyle destination.",
    closing:
      "With organized planning, peaceful surroundings, and access to the wider Kamkole growth corridor, Bridge County is designed for clients seeking both comfort and future potential.",
  },

  "sindhu-sarovar": {
    label: "Planned Project",
    title: "Built Around Planning and Potential.",
    description:
      "Sindhu Sarovar is a thoughtfully planned project focused on organized layouts, accessibility, and long-term location relevance within an evolving region.",
    closing:
      "Created for investors and families seeking clear planning standards and future growth prospects, the project reflects Sri Supraja Infracon’s commitment to dependable real estate delivery.",
  },

  "subhash-meadows": {
    label: "Well-Connected Project",
    title: "Well-Planned. Well-Connected.",
    description:
      "Subhash Meadows offers a practical land ownership opportunity near important education, employment, and transportation corridors.",
    closing:
      "With essential infrastructure, convenient access, and long-term location relevance, Subhash Meadows is suited for investors and future homeowners planning with clarity.",
  },
};

const fallbackOverview = {
  label: "Project Overview",
  title: "Thoughtfully Planned for Long-Term Value.",
  description:
    "A well-planned project by Sri Supraja Infracon, shaped around accessibility, infrastructure, and future location potential.",
  closing: "",
};

const ProjectOverview = ({ project }: Props) => {
  const seo = getProjectSeo(project.slug);
  const brochureUrl = project.brochure;
  const availabilityMapUrl = project.availabilityMapUrl;
  const overview = overviewCopy[project.slug] ?? fallbackOverview;
  const mapUrl = projectMaps[project.slug];
  const locationText =
    projectLocationCopy[project.slug] ??
    `Explore the exact location of ${project.title} on Google Maps and understand its surrounding connectivity, nearby access points, and project approach before planning your visit.`;

  if (project.slug === "supraja-iris") {
    if (!brochureUrl) return null;

    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Project Brochure
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              Supraja IRIS Master Plan &amp; Brochure
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              View the official brochure for layout, location, connectivity and
              key project information.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-semibold text-slate-600">
                Open or download the brochure for detailed project reference.
              </p>

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

                {availabilityMapUrl && (
                  <a
                    href={availabilityMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition hover:border-amber-500 hover:bg-amber-50"
                  >
                    View Availability
                  </a>
                )}
              </div>
            </div>

            <iframe
              src={`${brochureUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Supraja IRIS Master Plan and Brochure"
              className="hidden h-[900px] w-full md:block"
            />

            <div className="block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 text-white md:hidden">
              <div className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/10 p-6 text-center shadow-2xl backdrop-blur">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                  Brochure Preview
                </p>

                <h4 className="mb-4 text-2xl font-extrabold">
                  View Supraja IRIS Brochure
                </h4>

                <p className="mb-6 text-sm leading-relaxed text-slate-200">
                  Open the PDF to view layout details and project information.
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

          {mapUrl && (
            <div className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <div className="border-b border-slate-200 bg-slate-50 px-8 py-6">
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Project Location
                </h3>

                <p className="mt-2 text-slate-600">{locationText}</p>
              </div>

              <iframe
                src={mapUrl}
                title={`${project.title} Location Map`}
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
              {overview.label} · {project.location}
            </p>

            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              {overview.title}
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
              {overview.description}
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              {overview.closing}
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
                  Explore project details, layout plans, connectivity
                  information, key features, and brochure resources for{" "}
                  {project.title}.
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
                  Open the brochure to explore project information, layout
                  plans, location insights, and key features.
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

        {mapUrl && (
          <div className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            <div className="border-b border-slate-200 bg-slate-50 px-8 py-6">
              <h3 className="text-2xl font-extrabold text-slate-950">
                Project Location
              </h3>

              <p className="mt-2 text-slate-600">{locationText}</p>
            </div>

            <iframe
              src={mapUrl}
              title={`${project.title} Location Map`}
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectOverview;