export const projectSeo = {
  "supraja-iris-resort-plots": {
    focusKeyword: "DTCP & RERA Approved Resort Plots Near Hyderabad",
    h1: "DTCP & RERA Approved Resort Plots Near Hyderabad",
    h2: "Supraja IRIS Resort Plots Near Hyderabad at Kamkole",
    h3: "Why Choose Supraja IRIS for Resort Plot Investment",
    subtitle: "Supraja IRIS at Kamkole by Sri Supraja Infracon",
    description:
      "Supraja IRIS is a premium resort-style plotted development at Kamkole near Hyderabad with DTCP & RERA approvals, Lemon Tree Resort under construction, planned water villas, planned water theme park and strong growth corridor connectivity.",
    firstParagraph:
      "Supraja IRIS offers DTCP & RERA Approved Resort Plots Near Hyderabad for buyers looking at premium plotted developments, resort plots, villa plot potential, gated community living and long-term growth near Kamkole.",
    lastParagraph:
      "For buyers evaluating DTCP & RERA Approved Resort Plots Near Hyderabad, Supraja IRIS combines project approvals, resort ecosystem positioning, NH-65 access, Woxsen University adjacency and future-ready infrastructure planning.",
    synonyms: [
      "premium resort plots near Hyderabad",
      "Kamkole open plots",
      "RERA approved plots near Woxsen University",
      "villa plots near NH-65",
      "gated community plots near Hyderabad",
      "resort-style plotted development",
    ],
    imageAlt:
      "DTCP & RERA Approved Resort Plots Near Hyderabad at Supraja IRIS Kamkole",
    internalLinks: [
      { label: "View all Sri Supraja projects", href: "/projects" },
      { label: "Explore resort plot guide", href: "/resort-plots-in-hyderabad" },
    ],
  },

  "bridge-county": {
    focusKeyword: "DTCP & RERA Approved Luxury Plots at Kamkole",
    h1: "DTCP & RERA Approved Luxury Plots at Kamkole",
    h2: "Bridge County Luxury Open Plots Near Woxsen University",
    h3: "Why Choose Bridge County at Kamkole",
    subtitle: "Bridge County at Kamkole by Sri Supraja Infracon",
    description:
      "Bridge County is a luxury plotted development at Kamkole with DTCP approval, RERA registration, premium layout planning, wide roads and strong location advantage near Woxsen University and NH-65.",
    firstParagraph:
      "Bridge County offers DTCP & RERA Approved Luxury Plots at Kamkole for buyers looking at premium open plots, plotted communities, villa plot potential and high-quality land investment near Hyderabad.",
    lastParagraph:
      "For buyers comparing DTCP & RERA Approved Luxury Plots at Kamkole, Bridge County offers a premium plotted layout, strong connectivity and a trusted Sri Supraja Infracon development experience.",
    synonyms: [
      "luxury open plots near Woxsen University",
      "Kamkole luxury plots",
      "premium plotted development near Hyderabad",
      "RERA approved open plots",
      "DTCP approved plots at Kamkole",
      "plots near NH-65",
    ],
    imageAlt:
      "DTCP & RERA Approved Luxury Plots at Kamkole Bridge County",
    internalLinks: [
      { label: "Compare open plot projects", href: "/projects" },
      { label: "Contact for Bridge County availability", href: "/contact-us" },
    ],
  },

  "sindhu-sarovar": {
    focusKeyword: "DTCP & RERA Approved Open Plots in Mominpet",
    h1: "DTCP & RERA Approved Open Plots in Mominpet",
    h2: "Sindhu Sarovar Premium Plots Near Hyderabad",
    h3: "Why Choose Sindhu Sarovar in Mominpet",
    subtitle: "Sindhu Sarovar by Sri Supraja Infracon",
    description:
      "Sindhu Sarovar is a DTCP & RERA approved plotted development in Mominpet with gated community infrastructure, wide roads, landscaped spaces and planned open plot options near Hyderabad.",
    firstParagraph:
      "Sindhu Sarovar offers DTCP & RERA Approved Open Plots in Mominpet for buyers looking at premium plotted developments, gated community plots, open plots near Hyderabad and long-term land investment options.",
    lastParagraph:
      "For buyers searching DTCP & RERA Approved Open Plots in Mominpet, Sindhu Sarovar offers approval confidence, planned infrastructure and location-led future growth potential.",
    synonyms: [
      "Mominpet open plots",
      "premium plots near Hyderabad",
      "RERA approved plots in Mominpet",
      "gated community plots near Hyderabad",
      "DTCP approved plotted development",
      "open plots near Mominpet",
    ],
    imageAlt:
      "DTCP & RERA Approved Open Plots in Mominpet Sindhu Sarovar",
    internalLinks: [
      { label: "View all plotted communities", href: "/projects" },
      { label: "Request Sindhu Sarovar details", href: "/contact-us" },
    ],
  },

  "subhash-meadows": {
    focusKeyword: "Affordable Open Plots Near ORR Hyderabad",
    h1: "Affordable Open Plots Near ORR Hyderabad",
    h2: "Subhash Meadows Open Plots at Indrakaran",
    h3: "Why Choose Subhash Meadows for Budget-Friendly Plot Investment",
    subtitle: "Subhash Meadows at Indrakaran by Sri Supraja Infracon",
    description:
      "Subhash Meadows is an affordable plotted development at Indrakaran with planned roads, Vastu-compliant layout, drainage, avenue plantation and connectivity to ORR, IIT Hyderabad, ICRISAT, BHEL and Sangareddy.",
    firstParagraph:
      "Subhash Meadows offers Affordable Open Plots Near ORR Hyderabad for buyers looking at budget-friendly plotted developments, Indrakaran plots, open plots near IIT Hyderabad and practical land investment options.",
    lastParagraph:
      "For buyers comparing Affordable Open Plots Near ORR Hyderabad, Subhash Meadows provides planned infrastructure, strategic connectivity and accessible plot investment potential near Hyderabad.",
    synonyms: [
      "Indrakaran open plots",
      "budget-friendly plots near Hyderabad",
      "plots near IIT Hyderabad",
      "open plots near BHEL",
      "plots near Sangareddy",
      "affordable plotted development",
    ],
    imageAlt:
      "Affordable Open Plots Near ORR Hyderabad Subhash Meadows Indrakaran",
    internalLinks: [
      { label: "Explore all affordable projects", href: "/projects" },
      { label: "Book a Subhash Meadows site visit", href: "/contact-us" },
    ],
  },
} as const;

export type ProjectSeoKey = keyof typeof projectSeo;

export const getProjectSeo = (slug: string) =>
  projectSeo[slug as ProjectSeoKey] || projectSeo["supraja-iris-resort-plots"];
