import { notFound, permanentRedirect } from "next/navigation";

const legacyBlogSlugs = [
  "upcoming-attractions-near-hyderabad-2026",
  "what-is-dtcp-approval-in-hyderabad",
  "kamkole-real-estate-investment-hotspot",
  "dtcp-rera-approved-plots-in-hyderabad",
  "open-villa-plot-projects-in-hyderabad",
  "best-open-plots-in-hyderabad-for-sale",
  "upcoming-developing-areas-in-hyderabad-2026",
  "dtcp-approved-plots-in-hyderabad",
  "best-plots-in-hyderabad",
  "hyderabad-investment-areas",
  "rera-approved-plots-hyderabad-guide",
  "open-plots-in-hyderabad",
  "plots-near-orr-hyderabad",
  "hyderabad-real-estate-market-trends-2025",
  "top-open-plots-resorts-hyderabad",
  "best-open-plots-resorts-in-hyderabad",
  "open-plots-in-hyderabad-investment-2025",
];

export default async function LegacySlugRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (legacyBlogSlugs.includes(slug)) {
    permanentRedirect(`/blog/${slug}/`);
  }

  notFound();
}