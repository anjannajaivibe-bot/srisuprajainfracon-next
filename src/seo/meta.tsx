export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export const siteMeta = {
  siteName: "Sri Supraja Infracon",
  domain: "https://srisuprajainfracon.com",
  defaultImage: "/og/sri-supraja-infracon-og.jpg",
};

export const meta: Record<string, PageMeta> = {
  home: {
    title: "Sri Supraja Infracon | Trusted Open Plot Developers in Telangana",
    description:
      "Sri Supraja Infracon offers DTCP and RERA approved open plots, resort plots and planned developments across Telangana.",
    canonical: `${siteMeta.domain}/`,
    ogTitle: "Sri Supraja Infracon | Trusted Real Estate Developers",
    ogDescription:
      "Explore approved open plot projects, resort-style developments and high ROI potential locations by Sri Supraja Infracon.",
    ogImage: siteMeta.defaultImage,
  },

  about: {
    title: "About Sri Supraja Infracon | Vision, Trust and Real Estate Growth",
    description:
      "Learn about Sri Supraja Infracon, its vision, project development approach, customer trust and real estate growth journey.",
    canonical: `${siteMeta.domain}/about`,
    ogTitle: "About Sri Supraja Infracon",
    ogDescription:
      "Discover the vision, values and development philosophy behind Sri Supraja Infracon.",
    ogImage: siteMeta.defaultImage,
  },

  projects: {
    title: "Sri Supraja Infracon Projects | Open Plots and Resort Plots",
    description:
      "Explore Sri Supraja Infracon projects including Supraja IRIS, Bridge County, Sindhu Sarovar and Subhash Meadows.",
    canonical: `${siteMeta.domain}/projects`,
    ogTitle: "Sri Supraja Infracon Projects",
    ogDescription:
      "View ongoing, ready-for-sale and upcoming plotted development projects by Sri Supraja Infracon.",
    ogImage: siteMeta.defaultImage,
  },

  contact: {
    title: "Contact Sri Supraja Infracon | Book Site Visit",
    description:
      "Contact Sri Supraja Infracon to know more about open plots, project details, availability and site visits.",
    canonical: `${siteMeta.domain}/contact`,
    ogTitle: "Contact Sri Supraja Infracon",
    ogDescription:
      "Get project details, book a site visit or speak with the Sri Supraja Infracon team.",
    ogImage: siteMeta.defaultImage,
  },
};


