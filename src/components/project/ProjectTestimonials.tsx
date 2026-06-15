import Image from "next/image";

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
    alt: "Anjanna Margam customer feedback for Supraja IRIS at Kamkole",
    text:
      "I chose Supraja IRIS after visiting the site and understanding the overall project plan. The location, layout, and lifestyle attractions gave me confidence. Supraja Management explained the details clearly and made the process comfortable.",
  },
  {
    slug: "supraja-iris-resort-plots",
    project: "Supraja IRIS",
    name: "Raju Kodipelly",
    role: "Plot No. 160 • 160 Sq. Yards",
    image: "/testimonials/raju-kodiipally-supraja-iris-investor.webp",
    alt: "Raju Kodipelly customer feedback for Supraja IRIS at Kamkole",
    text:
      "What I liked most about Supraja IRIS was the clarity given during the site visit. The team explained the layout, location advantages, and future plans without pressure. That helped me make my decision with confidence.",
  },
  {
    slug: "bridge-county",
    project: "Bridge County",
    name: "Verified Client",
    role: "Bridge County Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Bridge County customer feedback",
    text:
      "Bridge County felt peaceful and well planned during our visit. We liked that it is a dedicated area within the larger Supraja IRIS project. Supraja Management guided us clearly and answered our questions patiently.",
  },
  {
    slug: "sindhu-sarovar",
    project: "Sindhu Sarovar",
    name: "Verified Customer",
    role: "Sindhu Sarovar Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Sindhu Sarovar customer feedback",
    text:
      "We appreciated the simple explanation of the project, location, and documentation. The interaction felt transparent, and Supraja Management helped us understand the details before taking the next step.",
  },
  {
    slug: "subhash-meadows",
    project: "Subhash Meadows",
    name: "Verified Client",
    role: "Subhash Meadows Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Subhash Meadows customer feedback",
    text:
      "Subhash Meadows appealed to us because of its connectivity and practical location. The project details were explained clearly, and the guidance from Supraja Management made the experience smooth.",
  },
];

const sectionCopy: Record<
  string,
  {
    title: string;
    intro: string;
  }
> = {
  "supraja-iris-resort-plots": {
    title: "What Customers Say About Supraja IRIS",
    intro:
      "Real feedback from clients who reviewed the project, visited the site, and interacted with Supraja Management.",
  },
  "supraja-iris": {
    title: "What Our Customers Say?",
    intro:
      "Real feedback from clients who reviewed the project, visited the site, and interacted with Supraja Management.",
  },
  "bridge-county": {
    title: "What Our Customers Say?",
    intro:
      "Feedback from clients who explored this dedicated enclave within the Supraja IRIS project.",
  },
  "sindhu-sarovar": {
    title: "What Our Customers Say?",
    intro:
      "Customer feedback focused on project clarity, documentation, and overall experience.",
  },
  "subhash-meadows": {
    title: "What Our Customers Say?",
    intro:
      "Customer feedback about location access, project information, and interaction with Supraja Management.",
  },
};

const fallbackCopy = {
  title: "Customer Experiences",
  intro:
    "Feedback from clients who explored Sri Supraja Infracon projects and interacted with Supraja Management.",
};

export default function ProjectTestimonials({
  projectSlug,
}: ProjectTestimonialsProps) {
  const visibleTestimonials = projectSlug
    ? testimonials.filter(
        (item) => item.slug === projectSlug || item.slug === "supraja-iris-resort-plots" && projectSlug === "supraja-iris"
      )
    : testimonials;

  if (visibleTestimonials.length === 0) return null;

  const copy = projectSlug
    ? sectionCopy[projectSlug] ?? fallbackCopy
    : fallbackCopy;

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Customer Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            {copy.intro}
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
                    alt={item.alt}
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