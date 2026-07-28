import { siteMeta } from "@/seo/meta";
import { projects } from "@/data/projects";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteMeta.domain}/#organization`,
  name: "Sri Supraja Infracon",
  url: siteMeta.domain,
  logo: {
    "@type": "ImageObject",
    url: `${siteMeta.domain}${siteMeta.logo}`,
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Supraja Group",
  },
  sameAs: siteMeta.socialProfiles,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteMeta.domain}/#website`,
  name: "Sri Supraja Infracon",
  url: siteMeta.domain,
  publisher: {
    "@id": `${siteMeta.domain}/#organization`,
  },
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






