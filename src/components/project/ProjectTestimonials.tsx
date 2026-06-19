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
    role: "Plot No. 160 • 201.67 Sq. Yards",
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
    title: "Investor Experiences",
    intro:
      "Real feedback from clients who reviewed the project, visited the site, and interacted with Supraja Management.",
  },
  "supraja-iris": {
    title: "Investor Experiences",
    intro:
      "Real feedback from clients who reviewed the project, visited the site, and interacted with Supraja Management.",
  },
  "bridge-county": {
    title: "Investor Experiences",
    intro:
      "Feedback from clients who explored this dedicated enclave within the Supraja IRIS project.",
  },
  "sindhu-sarovar": {
    title: "Investor Experiences",
    intro:
      "Customer feedback focused on project clarity, documentation, and overall experience.",
  },
  "subhash-meadows": {
    title: "Investor Experiences",
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
        (item) =>
          item.slug === projectSlug ||
          (item.slug === "supraja-iris-resort-plots" &&
            projectSlug === "supraja-iris")
      )
    : testimonials;

  if (visibleTestimonials.length === 0) return null;

  const copy = projectSlug
    ? sectionCopy[projectSlug] ?? fallbackCopy
    : fallbackCopy;

  const carouselItems =
    visibleTestimonials.length > 1
      ? [...visibleTestimonials, ...visibleTestimonials]
      : visibleTestimonials;

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#B88900]">
            WORDS OF TRUST
          </p>

          <div className="mx-auto mb-6 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#C9A227]/40" />
            <span className="h-2 w-2 rotate-45 border border-[#C9A227]" />
            <span className="h-px flex-1 bg-[#C9A227]/40" />
          </div>

          <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight text-[#07111F] md:text-6xl">
            {projectSlug ? copy.title : "Hear From Our Investors"}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            {copy.intro}
          </p>
        </div>

        {visibleTestimonials.length === 1 ? (
          <div className="mx-auto max-w-4xl">
            {visibleTestimonials.map((item, index) => (
              <article
                key={`${item.slug}-${item.name}-${index}`}
                className="overflow-hidden rounded-[30px] border border-[#EFE7D3] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <div className="grid md:grid-cols-[320px_1fr]">
                  <div className="relative min-h-[320px] bg-[#F8FAFC]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#B88900]">
                      {item.project}
                    </p>

                    <h3 className="font-display text-3xl font-bold text-[#07111F]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#64748B]">
                      {item.role}
                    </p>

                    <div className="my-6 h-px w-16 bg-[#C48912]" />

                    <p className="text-[17px] leading-8 text-[#334155]">
                      “{item.text}”
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-24 bg-gradient-to-r from-white to-transparent lg:block" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-24 bg-gradient-to-l from-white to-transparent lg:block" />

            <div className="overflow-hidden">
              <div className="testimonial-marquee flex w-max gap-7">
                {carouselItems.map((item, index) => (
                  <article
                    key={`${item.slug}-${item.name}-${index}`}
                    className="w-[340px] shrink-0 overflow-hidden rounded-[30px] border border-[#EFE7D3] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:w-[390px]"
                  >
                    <div className="relative h-[260px] bg-[#F8FAFC]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="390px"
                        className="object-cover"
                      />

                      <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#B88900] shadow-sm backdrop-blur">
                        {item.project}
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="font-display text-2xl font-bold text-[#07111F]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-[#64748B]">
                        {item.role}
                      </p>

                      <div className="my-5 h-px w-14 bg-[#C48912]" />

                      <p className="text-[16px] leading-7 text-[#334155]">
                        “{item.text}”
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-9 flex justify-center gap-2">
              {visibleTestimonials.map((item, index) => (
                <span
                  key={`${item.slug}-${index}`}
                  className={`h-2.5 rounded-full ${
                    index === 0 ? "w-8 bg-[#C48912]" : "w-2.5 bg-[#D6D3D1]"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .testimonial-marquee {
          animation: testimonial-scroll 36s linear infinite;
        }

        .testimonial-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}