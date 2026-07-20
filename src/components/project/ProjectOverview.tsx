import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";
import LazyGoogleMap from "@/components/shared/LazyGoogleMap";

type Props = {
  project: Project;
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
    label: "Resort Project",
    title: "A Landmark Destination Taking Shape",
    description: "",
    closing: "",
  },

  "supraja-iris-resort-plots": {
    label: "Resort Project",
    title: "A Landmark Destination Taking Shape",
    description: "",
    closing: "",
  },

  "bridge-county": {
    label: "A Distinct Address within a Larger Vision",
    title: "More Than a Plot. Part of a Destination.",
    description:
      "Bridge County is a dedicated 15-acre plotted enclave within the larger Supraja IRIS ecosystem at Kamkole. Planned with organized infrastructure, strategic connectivity, and proximity to key growth drivers, it offers investors and future homeowners an opportunity to be part of a larger destination designed for sustained value creation.",
    closing: "",
  },

  "sindhu-sarovar": {
    label: "DESIGNED FOR LASTING VALUE · MOMINPET",
    title:
      "A Well-Planned Gated Community Built for Secure Ownership and Future Growth",
    description:
      "Discover DTCP & RERA approved plotted development, planned infrastructure, wide internal roads, landscaped open spaces, and a location positioned for long-term value at Mominpet.",
    closing: "",
  },

  "subhash-meadows": {
    label: "Strategically Positioned Community",

    title: "Future in place.",

    description:
      "Subhash Meadows is a thoughtfully planned plotted community at Indrakaran, strategically positioned just 5 minutes from Outer Ring Road, 10 minutes from ICRISAT, and 15 minutes from IIT Hyderabad, offering excellent connectivity to key educational, employment, and infrastructure destinations.",

    closing:
      "With Regional Ring Road connectivity accessible within approximately 20 minutes, along with convenient access to Sangareddy, BHEL, and major growth corridors across western Hyderabad, Subhash Meadows combines location advantage, planned infrastructure, and long-term investment potential in a rapidly evolving region.",
  },
};

const fallbackOverview = {
  label: "Project Overview",
  title: "Thoughtfully Planned for Long-Term Value.",
  description:
    "A well-planned project by Sri Supraja Infracon, shaped around accessibility, infrastructure, and future location potential.",
  closing:
    "The project is designed for investors, clients, and families seeking dependable planning and long-term ownership confidence.",
};

const projectMaps: Record<
  string,
  {
    embedUrl: string;
    externalUrl: string;
  }
> = {
  "supraja-iris": {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9919.84604372614!2d77.79124881460227!3d17.631095215457595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1781594940721!5m2!1sen!2sin",
    externalUrl:
      "https://www.google.com/maps/search/?api=1&query=Supraja%20IRIS%20Resorts",
  },

  "supraja-iris-resort-plots": {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9919.84604372614!2d77.79124881460227!3d17.631095215457595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc953e9e3ac09bb%3A0xfbf45f72331801f1!2sSupraja%20IRIS%20Resorts!5e1!3m2!1sen!2sin!4v1781594940721!5m2!1sen!2sin",
    externalUrl:
      "https://www.google.com/maps/search/?api=1&query=Supraja%20IRIS%20Resorts",
  },

  "bridge-county": {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8484356747235!2d77.79436807688003!3d17.6377793524897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc95300175108ef%3A0x969626319a3e14f1!2sSupraja%20Bridge%20County!5e1!3m2!1sen!2sin!4v1781595045957!5m2!1sen!2sin",
    externalUrl:
      "https://www.google.com/maps/search/?api=1&query=Supraja%20Bridge%20County",
  },

  "sindhu-sarovar": {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4281846986564!2d77.87623247462946!3d17.50216579948956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc957dabf153fa9%3A0x794f231ecb9cce5e!2sSupraja%20Sindhuja%20Sarovar!5e1!3m2!1sen!2sin!4v1781595078987!5m2!1sen!2sin",
    externalUrl:
      "https://www.google.com/maps/search/?api=1&query=Supraja%20Sindhuja%20Sarovar",
  },

  "subhash-meadows": {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.9992101737885!2d78.16053747462993!3d17.524786798833457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf1004d95c521%3A0x78d4dfe9922ab864!2sSubhash%20Meadows!5e1!3m2!1sen!2sin!4v1781595112903!5m2!1sen!2sin",
    externalUrl:
      "https://www.google.com/maps/search/?api=1&query=Subhash%20Meadows",
  },
};

const ProjectOverview = ({ project }: Props) => {
  const seo = getProjectSeo(project.slug);
  const brochureUrl = project.brochure;
  const availabilityMapUrl = project.availabilityMapUrl;
  const overview = overviewCopy[project.slug] ?? fallbackOverview;
  const map = projectMaps[project.slug];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-600">
            {overview.label} · {project.location}
          </p>

          <h2 className="mb-6 w-full text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {overview.title}
          </h2>

          {availabilityMapUrl && (
            <div className="mb-8">
              <a
                href={availabilityMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-amber-500 hover:text-slate-950"
              >
                View Live Plot Availability
              </a>
            </div>
          )}

          <div className="max-w-5xl">
            {overview.description && (
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                {overview.description}
              </p>
            )}

            {overview.closing && (
              <p className="text-lg leading-relaxed text-slate-600">
                {overview.closing}
              </p>
            )}

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

        {map && (
          <div className="mb-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-amber-600">
                PROJECT LOCATION
              </p>

              <h3 className="text-2xl font-extrabold text-slate-950">
                Explore the master plan, location advantages, plot configuration,
                infrastructure features, and project specifications in detail.
              </h3>

              <p className="mt-2 text-slate-600">
                A Destination with Strong Potential
              </p>
            </div>

            <LazyGoogleMap
              embedUrl={map.embedUrl}
              externalUrl={map.externalUrl}
              title={`${project.title} Location Map`}
              height={500}
            />
          </div>
        )}

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
      </div>
    </section>
  );
};

export default ProjectOverview;