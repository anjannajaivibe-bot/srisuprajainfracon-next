import type { StaticImageData } from "next/image";
import irisImage from "@/assets/project-iris.webp";
import bridgeImage from "@/assets/project-bridge.webp";
import sindhuImage from "@/assets/project-sindhu.webp";
import subashImage from "@/assets/project-meadows.webp";

export type ProjectStatus =
  | "Ongoing"
  | "Ready for Sale"
  | "Sales Open"
  | "Limited Plots Available";

export type Project = {
  id: string;
  slug: string;
  title: string;
  location: string;
  status: ProjectStatus;
  approvalType: string;
  dtcpNo?: string;
  reraNo?: string;
  shortDescription: string;
  image: string | StaticImageData;
  imageAlt: string;
  highlights: string[];
  link: string;

  brochure?: string;
  availabilityMapUrl?: string;
};

export const projects: Project[] = [
  {
    id: "supraja-iris",
    slug: "supraja-iris-resort-plots",
    title: "Supraja IRIS Resort Plots",
    location: "Kamkole",
    status: "Sales Open",
    approvalType: "DTCP & RERA Approved Open Plots",
    dtcpNo: "TLP No. 272/2022/H",
    reraNo: "RERA Approved",

    shortDescription:
      "DTCP & RERA approved open plots at Kamkole near Woxsen University with Lemon Tree Resort under construction, planned water villas, theme park attractions and strong high ROI growth potential.",

    image: irisImage,

    imageAlt:
      "Supraja IRIS Resort Plots at Kamkole near Woxsen University with Lemon Tree Resort under construction",

    highlights: [
      "DTCP & RERA approved open plots",
      "Sales open for limited plotted inventory",
      "350-acre resort-style master plan",
      "Lemon Tree Resort under construction",
      "Near Woxsen University and NH-65",
      "High ROI growth corridor near NIMZ Zaheerabad",
    ],

    link: "/projects/supraja-iris-resort-plots",

    brochure: "/brochures/supraja-iris-brochure.pdf",

    availabilityMapUrl:
      "https://suprajagroup.tranquilcrmp.in/mobileapp/newmaps/4",
  },

  {
    id: "bridge-county",
    slug: "bridge-county",
    title: "Bridge County",
    location: "Kamkole",
    status: "Sales Open",
    approvalType: "DTCP & RERA Approved Open Plots",
    dtcpNo: "TLP No. 160/2024/H",
    reraNo: "P01100009141",

    shortDescription:
      "DTCP & RERA approved luxury open plots at Kamkole near Woxsen University with clear title, planned infrastructure, bank loan support and strong high ROI growth potential.",

    image: bridgeImage,

    imageAlt:
      "Bridge County DTCP and RERA approved open plots at Kamkole near Woxsen University",

    highlights: [
      "DTCP & RERA approved open plots",
      "Sales open for premium plotted units",
      "15-acre luxury plotted layout",
      "211 well-planned open plots",
      "Near NH-65 and Woxsen University",
      "High ROI potential near NIMZ corridor",
    ],

    link: "/projects/bridge-county",

    brochure: "/brochures/bridge-county-brochure.pdf",

    availabilityMapUrl:
      "https://suprajagroup.tranquilcrmp.in/mobileapp/newmaps/2",
  },

  {
    id: "sindhu-sarovar",
    slug: "sindhu-sarovar",
    title: "Sindhu Sarovar",
    location: "Mominpet",
    status: "Sales Open",
    approvalType: "DTCP & RERA Approved Open Plots",
    dtcpNo: "TLP No. 154/2021/H, 233/2021/H",
    reraNo: "P02100003339",

    shortDescription:
      "DTCP & RERA approved open plots at Mominpet with gated community planning, wide roads, landscaped parks, plot sizes from 150 to 569 sq. yards and strong appreciation potential.",

    image: sindhuImage,

    imageAlt:
      "Sindhu Sarovar DTCP and RERA approved open plots at Mominpet",

    highlights: [
      "DTCP & RERA approved open plots",
      "Sales open for selected plot sizes",
      "Plot sizes from 150 to 569 sq. yards",
      "Gated community with compound wall",
      "100 feet road connectivity",
      "Strong future growth potential",
    ],

    link: "/projects/sindhu-sarovar",

    brochure: "/brochures/sindhu-sarovar-brochure.pdf",

    availabilityMapUrl:
      "https://suprajagroup.tranquilcrmp.in/mobileapp/newmaps/1",
  },

  {
    id: "subash-meadows",
    slug: "subash-meadows",
    title: "Subash Meadows",
    location: "Indrakaran",
    status: "Sales Open",
    approvalType: "Open Plots with Planned Layout Infrastructure",

    shortDescription:
      "Affordable open plots at Indrakaran with planned black top roads, drainage, parks, avenue plantation and quick connectivity to ORR, IIT Hyderabad, ICRISAT and BHEL.",

    image: subashImage,

    imageAlt:
      "Subash Meadows affordable open plots at Indrakaran near ORR and IIT Hyderabad",

    highlights: [
      "Affordable open plots at Indrakaran",
      "Sales open with limited availability",
      "40, 33 and 30 feet black top roads",
      "Layout planned as per Vastu",
      "5 minutes to Outer Ring Road",
      "15 minutes to IIT Hyderabad",
    ],

    link: "/projects/subash-meadows",

    brochure: "/brochures/subhash-meadows-brochure.pdf",

    availabilityMapUrl:
      "https://suprajagroup.tranquilcrmp.in/mobileapp/newmaps/7",
  },
];


