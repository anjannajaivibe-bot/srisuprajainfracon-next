import type { Project } from "@/data/projects";
import {
  BadgeCheck,
  Building2,
  Compass,
  Landmark,
  LayoutGrid,
  Lightbulb,
  MapPin,
  Road,
  Route,
  ShieldCheck,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react";

type Props = {
  project: Project;
};

type HighlightItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type HighlightSection = {
  heading: string;
  intro: string;
  note: string;
  items: HighlightItem[];
};

const projectHighlights: Record<string, HighlightSection> = {
  "supraja-iris-resort-plots": {
    heading: "Supraja IRIS Amenities and Current Development Status",
    intro:
      "Review what is approved, what is under construction and what is planned within the 350-acre Supraja IRIS development at Kamkole.",
    note:
      "Construction status and plot availability can change. Confirm the latest position with the project team during your site visit.",
    items: [
      {
        icon: Trees,
        title: "350-Acre Master Plan",
        description:
          "A large plotted development at Kamkole with approximately 4,000 plots in the overall master plan.",
      },
      {
        icon: BadgeCheck,
        title: "DTCP & RERA Approved",
        description:
          "Project approval references are displayed on the project page so buyers can verify the applicable records.",
      },
      {
        icon: Landmark,
        title: "Lemon Tree Resort Under Construction",
        description:
          "The Lemon Tree Resort is currently under construction within the Supraja IRIS development.",
      },
      {
        icon: Waves,
        title: "Water Villas Under Construction",
        description:
          "Water villas are under construction as part of the wider resort and recreation development.",
      },
      {
        icon: Building2,
        title: "Water & Amusement Parks Under Development",
        description:
          "The water theme park and amusement park are currently being developed within the project.",
      },
      {
        icon: Compass,
        title: "Go-Kart Track Planned",
        description:
          "A go-kart track is planned as an additional recreation facility and is not presented as completed.",
      },
      {
        icon: Road,
        title: "80, 60, 40 & 33 Ft Black Top Roads",
        description:
          "The layout includes multiple internal road widths for access across the plotted development.",
      },
      {
        icon: Lightbulb,
        title: "Underground Utilities & Street Lighting",
        description:
          "Planned utility infrastructure includes underground services and street lighting within the layout.",
      },
      {
        icon: MapPin,
        title: "Adjacent to Woxsen University",
        description:
          "Supraja IRIS is at Kamkole, adjacent to Woxsen University and connected to the NH-65 corridor.",
      },
    ],
  },
  "supraja-iris": {
    heading: "Supraja IRIS Amenities and Current Development Status",
    intro:
      "Review what is approved, what is under construction and what is planned within the 350-acre Supraja IRIS development at Kamkole.",
    note:
      "Construction status and plot availability can change. Confirm the latest position with the project team during your site visit.",
    items: [],
  },
  "bridge-county": {
    heading: "Bridge County Project Features at Kamkole",
    intro:
      "Bridge County is a 15-acre plotted enclave within the larger Supraja IRIS development, with 211 plots and access toward Woxsen University and NH-65.",
    note:
      "Check current plot availability, applicable approval documents and the latest quoted price before booking.",
    items: [
      {
        icon: ShieldCheck,
        title: "DTCP & RERA Approved",
        description:
          "Approval references are provided for buyer review and independent verification.",
      },
      {
        icon: LayoutGrid,
        title: "15 Acres, 211 Plots",
        description:
          "A dedicated plotted enclave planned within the larger Supraja IRIS development at Kamkole.",
      },
      {
        icon: MapPin,
        title: "Adjacent to Woxsen University",
        description:
          "The project is located at Kamkole near Woxsen University and the NH-65 corridor.",
      },
      {
        icon: Road,
        title: "50 & 33 Ft Black Top Roads",
        description:
          "Internal road planning includes 50 ft and 33 ft black top roads across the layout.",
      },
      {
        icon: Lightbulb,
        title: "Underground Infrastructure",
        description:
          "The planned layout includes underground electricity, street lighting, drainage and water connections.",
      },
      {
        icon: Trees,
        title: "Parks & Avenue Plantation",
        description:
          "Landscaped areas, avenue plantation and a jogging track are included in the project amenities.",
      },
    ],
  },
  "sindhu-sarovar": {
    heading: "Sindhu Sarovar Layout and Infrastructure",
    intro:
      "Review the plot sizes, road access, gated layout and utility planning at Sindhu Sarovar in Mominpet.",
    note:
      "The reviewed Phase 2 RERA record has a stated validity period. Buyers should verify any extension or current registration status directly with TG RERA before purchase.",
    items: [
      {
        icon: LayoutGrid,
        title: "150 to 569 Sq. Yard Plots",
        description:
          "The layout includes a range of plot sizes, subject to current availability.",
      },
      {
        icon: Road,
        title: "100 Ft Road Connectivity",
        description:
          "The project has access from a 100 ft road, with planned internal road infrastructure.",
      },
      {
        icon: ShieldCheck,
        title: "Gated Community Planning",
        description:
          "The layout includes compound-wall and security-room provisions for controlled access.",
      },
      {
        icon: Route,
        title: "Black Top Internal Roads",
        description:
          "Internal black top roads are part of the project infrastructure plan.",
      },
      {
        icon: Waves,
        title: "Drainage System",
        description:
          "Drainage and sewage infrastructure are included in the planned community services.",
      },
      {
        icon: Lightbulb,
        title: "Electricity & Street Lighting",
        description:
          "Electricity, transformer and street-lighting provisions are part of the layout planning.",
      },
      {
        icon: Compass,
        title: "Vastu-Oriented Plot Planning",
        description:
          "The project presents its plotted layout as planned according to Vastu principles.",
      },
      {
        icon: Trees,
        title: "Parks, Gazebo & Open Spaces",
        description:
          "Landscaped parks, a gazebo and open spaces are included for community use.",
      },
      {
        icon: MapPin,
        title: "Mominpet Location",
        description:
          "The project is located in the Mominpet area of Vikarabad district.",
      },
    ],
  },
  "subhash-meadows": {
    heading: "Subhash Meadows Connectivity and Infrastructure",
    intro:
      "Subhash Meadows is an affordable plotted development at Indrakaran with planned roads, drainage, lighting, parks and access toward major west-Hyderabad destinations.",
    note:
      "LRS charges are stated as paid in the project information. Confirm current title, documentation and plot availability before booking.",
    items: [
      {
        icon: Route,
        title: "5 Minutes to Outer Ring Road",
        description:
          "Road access connects the Indrakaran location toward Hyderabad's Outer Ring Road network.",
      },
      {
        icon: MapPin,
        title: "15 Minutes to IIT Hyderabad",
        description:
          "The project is positioned for road access toward IIT Hyderabad and nearby institutional areas.",
      },
      {
        icon: BadgeCheck,
        title: "GP LRS Paid",
        description:
          "Project information states that applicable LRS charges have been paid.",
      },
      {
        icon: Road,
        title: "40, 33 & 30 Ft Roads",
        description:
          "The planned internal road network includes 40 ft, 33 ft and 30 ft black top roads.",
      },
      {
        icon: Waves,
        title: "Underground Drainage",
        description:
          "Underground drainage is included in the planned layout infrastructure.",
      },
      {
        icon: Lightbulb,
        title: "Electricity & Street Lighting",
        description:
          "Electricity and street-lighting provisions are included in the project plan.",
      },
      {
        icon: Trees,
        title: "Parks & Avenue Plantation",
        description:
          "The layout includes parks, open spaces and avenue plantation.",
      },
      {
        icon: Compass,
        title: "Vastu-Oriented Plot Planning",
        description:
          "The project presents its plots as planned according to Vastu principles.",
      },
    ],
  },
};

const ProjectHighlights = ({ project }: Props) => {
  const isSuprajaIris =
    project.slug === "supraja-iris" || project.slug === "supraja-iris-resort-plots";

  const primary = projectHighlights[project.slug];
  const irisFallback = projectHighlights["supraja-iris-resort-plots"];
  const section =
    project.slug === "supraja-iris" && primary?.items.length === 0
      ? irisFallback
      : primary;

  const fallbackItems: HighlightItem[] = project.highlights.map((title) => ({
    icon: LayoutGrid,
    title,
    description: "",
  }));

  const items = section?.items.length ? section.items : fallbackItems;
  const heading = section?.heading ?? `${project.title} Project Highlights`;
  const intro =
    section?.intro ??
    "Review the project features, infrastructure and location information before planning a site visit.";
  const note =
    section?.note ??
    "Please verify current availability, approval details and development status before booking.";

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p
            className={
              isSuprajaIris
                ? "mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#2E7D32]"
                : "mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#8A6500]"
            }
          >
            Project Highlights
          </p>

          <h2
            className={
              isSuprajaIris
                ? "mx-auto max-w-5xl text-3xl font-extrabold leading-tight text-[#0F3D24] md:text-5xl"
                : "mx-auto max-w-5xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl"
            }
          >
            {heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            {intro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={`${item.title}-${index}`}
                className="flex gap-5 rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <div
                  className={
                    isSuprajaIris
                      ? "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAF5EC] ring-1 ring-[#CFE3D3]"
                      : "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF8E7] ring-1 ring-[#E8D7A5]"
                  }
                >
                  <Icon
                    className={isSuprajaIris ? "h-7 w-7 text-[#2E7D32]" : "h-7 w-7 text-[#8A6500]"}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-5 text-center">
          <p className="text-sm leading-6 text-[#475569]">{note}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
