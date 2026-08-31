import { siteMeta } from "@/seo/meta";
import { projects } from "@/data/projects";

export const organizationEntity = {
  "@type": ["Organization", "Corporation", "LocalBusiness"],
  "@id": `${siteMeta.domain}/#organization`,
  name: "Sri Supraja Infracon",
  alternateName: "Supraja Infracon",
  legalName: "Sri Supraja Infracon",
  url: `${siteMeta.domain}/`,
  image: `${siteMeta.domain}${siteMeta.defaultImage}`,
  logo: {
    "@type": "ImageObject",
    url: `${siteMeta.domain}${siteMeta.logo}`,
  },
  email: "info@srisuprajainfracon.com",
  telephone: "+91 90529 96161",
  description:
    "Sri Supraja Infracon is a real estate developer, land developer and project developer creating plotted, residential, villa and resort-inspired developments across Hyderabad growth corridors.",
  publishingPrinciples: `${siteMeta.domain}/editorial-policy/`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 90529 96161",
    email: "info@srisuprajainfracon.com",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  knowsAbout: [
    "Real estate development", "Land development", "Project development",
    "Plotted development", "Residential development",
    "Resort-inspired plotted development", "DTCP layout approvals",
    "Telangana RERA project information",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No. 4-91, Above Parampara Mithai, Chandanagar",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500050",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4950506675388,
    longitude: 78.32710481827314,
  },
  areaServed: ["Hyderabad", "Kamkole", "Sangareddy", "Mominpet", "Indrakaran", "Telangana"],
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  }],
  parentOrganization: {
    "@type": "Organization",
    name: "Supraja Group",
  },
  sameAs: siteMeta.socialProfiles,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  ...organizationEntity,
};

export const websiteEntity = {
  "@type": "WebSite",
  "@id": `${siteMeta.domain}/#website`,
  name: "Sri Supraja Infracon",
  alternateName: "Supraja Infracon",
  url: `${siteMeta.domain}/`,
  publisher: {
    "@id": `${siteMeta.domain}/#organization`,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  ...websiteEntity,
};

export const realEstateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${siteMeta.domain}/#realestateagent`,
  name: "Sri Supraja Infracon",
  url: siteMeta.domain,
  image: `${siteMeta.domain}${siteMeta.defaultImage}`,
  logo: `${siteMeta.domain}${siteMeta.logo}`,
  sameAs: siteMeta.socialProfiles,
  areaServed: ["Telangana", "Hyderabad", "Kamkole"],
  priceRange: "₹₹",
  description:
    "Sri Supraja Infracon develops approved open plot, resort plot and planned community projects across Telangana.",
};

export const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Place",
      name: project.title,
      url: `${siteMeta.domain}${project.link}`,
      image: project.image,
      description: project.shortDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: project.location,
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
  })),
};

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});





