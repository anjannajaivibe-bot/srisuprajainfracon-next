import Image from "next/image";
import { getProjectSeo } from "@/data/projectSeo";

type ProjectTestimonialsProps = {
  projectSlug?: string;
};

const testimonials = [
  {
    slug: "supraja-iris-resort-plots",
    project: "Supraja IRIS",
    name: "Anjanna Margam",
    role: "Plot No. 120 • 645 Sq. Yards",
    image: "/testimonials/anjanna-margam-supraja-iris-investor.webp",
    alt: "Anjanna Margam investor testimonial at Supraja IRIS Kamkole",
    text: `I purchased Plot No. 120 measuring 645 Sq. Yards in Supraja IRIS, and I am extremely satisfied with my investment decision. The project impressed me with its well-planned layout, premium infrastructure, DTCP & RERA approvals, and future growth potential near Kamkole. What gave me the most confidence was the transparent approach of the Sri Supraja Infracon team and the overall vision of developing a premium resort ecosystem.`,
  },
  {
    slug: "supraja-iris-resort-plots",
    project: "Supraja IRIS",
    name: "Raju Kodipelly",
    role: "Plot No. 160 • 160 Sq. Yards",
    image: "/testimonials/raju-kodiipally-supraja-iris-investor.webp",
    alt: "Raju Kodipelly investor testimonial at Supraja IRIS Kamkole",
    text: `I invested in Plot No. 160 measuring 160 Sq. Yards at Supraja IRIS after carefully evaluating multiple projects near Hyderabad. The excellent location near Kamkole, planned infrastructure, DTCP & RERA approvals, and future growth potential convinced me to choose this project. I especially appreciated the professional guidance and transparent support provided by the Sri Supraja Infracon team throughout the process.`,
  },
  {
    slug: "bridge-county",
    project: "Bridge County",
    name: "Verified Investor",
    role: "Bridge County Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Bridge County customer testimonial",
    text: `Bridge County offers the perfect balance between peaceful surroundings and investment potential. The layout planning, premium feel, and professional guidance from the team made our investment decision confident and smooth.`,
  },
  {
    slug: "sindhu-sarovar",
    project: "Sindhu Sarovar",
    name: "Verified Customer",
    role: "Sindhu Sarovar Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Sindhu Sarovar customer testimonial",
    text: `Sindhu Sarovar gives a calm and premium atmosphere with excellent planning and greenery. We liked the peaceful environment, clear documentation, and long-term value offered by Sri Supraja Infracon.`,
  },
  {
    slug: "subhash-meadows",
    project: "Subhash Meadows",
    name: "Verified Buyer",
    role: "Subhash Meadows Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Subhash Meadows customer testimonial",
    text: `Subhash Meadows is a strong option for buyers looking for affordable plots with good connectivity and future growth potential near Hyderabad. The planned roads, layout, and location advantages impressed us.`,
  },
];

export default function ProjectTestimonials({
  projectSlug,
}: ProjectTestimonialsProps) {
  const visibleTestimonials = projectSlug
    ? testimonials.filter((item) => item.slug === projectSlug)
    : testimonials;

  if (visibleTestimonials.length === 0) return null;

  const seo = projectSlug ? getProjectSeo(projectSlug) : null;

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Customer Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {seo
              ? `Customer Experiences for ${seo.focusKeyword}`
              : "Trusted by Investors Across Hyderabad"}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Real experiences from customers who invested in Sri Supraja Infracon
            plotted developments.
          </p>
        </div>

        <div
          className={
            visibleTestimonials.length === 1
              ? "mx-auto max-w-4xl"
              : "grid gap-8 md:grid-cols-2"
          }
        >
          {visibleTestimonials.map((item, index) => (
            <article
              key={`${item.slug}-${item.name}-${index}`}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg md:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="relative h-[86px] w-[86px] flex-shrink-0 overflow-hidden rounded-full bg-gray-100 shadow-md">
                  <Image
                    src={item.image}
                    alt={seo ? `${seo.focusKeyword} testimonial by ${item.name}` : item.alt}
                    fill
                    sizes="86px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-700">
                    {item.project}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="mt-6 text-[17px] leading-8 text-gray-700">
                “{item.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}