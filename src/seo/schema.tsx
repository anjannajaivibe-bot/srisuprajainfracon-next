import { siteMeta } from "@/seo/meta";
import { projects } from "@/data/projects";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sri Supraja Infracon",
  url: siteMeta.domain,
  logo: `${siteMeta.domain}/logo.png`,
  parentOrganization: {
    "@type": "Organization",
    name: "Supraja Group",
  },
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sri Supraja Infracon",
  url: siteMeta.domain,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteMeta.domain}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const realEstateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Sri Supraja Infracon",
  url: siteMeta.domain,
  image: `${siteMeta.domain}${siteMeta.defaultImage}`,
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



