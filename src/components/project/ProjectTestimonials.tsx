"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectTestimonialsProps = {
  projectSlug?: string;
};

type Testimonial = {
  slug: string;
  project: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    slug: "supraja-iris-resort-plots",
    project: "Supraja IRIS",
    name: "Bhuthada Anilkumar",
    role: "Plot No. 28 • 636.98 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Bhuthada Anilkumar customer feedback for Supraja IRIS",
    text:
      "I liked the project location and overall planning. The team explained the plot details clearly, so the booking process felt simple and comfortable.",
  },
  {
    slug: "supraja-iris-resort-plots",
    project: "Supraja IRIS",
    name: "Margam Anjanna",
    role: "Plot No. 120 • 645.56 Sq. Yards",
    image: "/testimonials/anjanna-margam-supraja-iris-investor.webp",
    alt: "Margam Anjanna customer feedback for Supraja IRIS",
    text:
      "After seeing the site and future development plan, I felt confident about Supraja IRIS. The location and project vision looked strong for long-term value.",
  },
  {
    slug: "supraja-iris-resort-plots",
    project: "Supraja IRIS",
    name: "Pundari Babu V",
    role: "Plot No. 542 • 577.78 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Pundari Babu V customer feedback for Supraja IRIS",
    text:
      "The layout, road planning, and project features looked promising. The team gave clear information and helped us understand the project without confusion.",
  },
  {
    slug: "bridge-county",
    project: "Bridge County",
    name: "Mandarapu Radhika",
    role: "Plot No. 14 • 280.00 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Mandarapu Radhika customer feedback for Bridge County",
    text:
      "Bridge County felt peaceful and well planned. The plot size, location, and project explanation were clear, so we were comfortable with the decision.",
  },
  {
    slug: "bridge-county",
    project: "Bridge County",
    name: "Shidlty Amith Reddy",
    role: "Plot No. 207 • 300.00 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Shidlty Amith Reddy customer feedback for Bridge County",
    text:
      "The site visit gave us good confidence. We liked the location and the way the team explained the project details patiently.",
  },
  {
    slug: "bridge-county",
    project: "Bridge County",
    name: "Rushras Property Ind P Ltd",
    role: "Plot No. 3 & 4/A • 307.99 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Rushras Property Ind P Ltd customer feedback for Bridge County",
    text:
      "The project looked suitable from an investment point of view. The location inside the larger Supraja IRIS development was the main attraction.",
  },
  {
    slug: "sindhu-sarovar",
    project: "Sindhu Sarovar",
    name: "Poluru Sujith",
    role: "Plot No. 101 • 261.25 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Poluru Sujith customer feedback for Sindhu Sarovar",
    text:
      "The project details were explained in a simple way. We liked the layout and felt comfortable with the overall process.",
  },
  {
    slug: "sindhu-sarovar",
    project: "Sindhu Sarovar",
    name: "Babita Goel",
    role: "Plot No. 77 • 319.31 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Babita Goel customer feedback for Sindhu Sarovar",
    text:
      "The location and plot planning looked good. The team gave us enough clarity before taking the decision.",
  },
  {
    slug: "sindhu-sarovar",
    project: "Sindhu Sarovar",
    name: "Neelam Hema Sundari",
    role: "Plot No. 150 • 249.6 Sq. Yards",
    image: "/testimonials/default-investor.webp",
    alt: "Neelam Hema Sundari customer feedback for Sindhu Sarovar",
    text:
      "We had a good experience understanding the project. The location and documentation details were explained clearly.",
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
    title: "Selected Buyer Feedback",
    intro:
      "A small selection of feedback currently published from customers who booked plots in Supraja IRIS.",
  },
  "supraja-iris": {
    title: "Selected Buyer Feedback",
    intro:
      "A small selection of feedback currently published from customers who booked plots in Supraja IRIS.",
  },
  "bridge-county": {
    title: "Selected Buyer Feedback",
    intro:
      "A small selection of feedback currently published from customers who booked plots in Bridge County.",
  },
  "sindhu-sarovar": {
    title: "Selected Buyer Feedback",
    intro:
      "A small selection of feedback currently published from customers who booked plots in Sindhu Sarovar.",
  },
};

const fallbackCopy = {
  title: "Recent Plot Buyers",
  intro:
    "A selection of customers shown with their project and booked plot details.",
};

function getInitials(name: string) {
  return name
    .split(/[\s/&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({
  item,
  showQuote,
}: {
  item: Testimonial;
  showQuote: boolean;
}) {
  const hasCustomerPhoto = item.image !== "/testimonials/default-investor.webp";

  return (
    <article className="flex h-full min-w-0 snap-start flex-col rounded-[28px] border border-[#E8E2D5] bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.07)] sm:p-8">
      <div className="flex items-start gap-4">
        {hasCustomerPhoto ? (
          <Image
            src={item.image}
            alt={item.alt}
            width={72}
            height={72}
            loading="lazy"
            sizes="72px"
            className="h-[72px] w-[72px] shrink-0 rounded-full border-2 border-[#E7C967] object-cover"
          />
        ) : (
          <div
            className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-2 border-[#E7C967] bg-[#FFF8DE] text-xl font-bold text-[#8A6500]"
            aria-hidden="true"
          >
            {getInitials(item.name)}
          </div>
        )}

        <div className="min-w-0 pt-1">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8A6500]">
            {item.project}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#07111F]">
            {item.name}
          </h3>
          <p className="mt-1 text-sm font-medium leading-6 text-[#64748B]">
            {item.role}
          </p>
        </div>
      </div>

      {showQuote && (
        <>
          <div className="my-6 h-px w-14 bg-[#C48912]" />
          <blockquote className="flex-1 text-[16px] leading-7 text-[#334155]">
            “{item.text}”
          </blockquote>
        </>
      )}
    </article>
  );
}

export default function ProjectTestimonials({
  projectSlug,
}: ProjectTestimonialsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const projectTestimonials = projectSlug
    ? testimonials.filter(
        (item) =>
          item.slug === projectSlug ||
          (item.slug === "supraja-iris-resort-plots" &&
            projectSlug === "supraja-iris")
      )
    : [];

  const homepageTestimonials = [
    testimonials[0],
    testimonials[1],
    testimonials[3],
    testimonials[6],
  ].filter(Boolean) as Testimonial[];

  const visibleTestimonials = projectSlug
    ? projectTestimonials.slice(0, 3)
    : homepageTestimonials;

  const copy = projectSlug
    ? sectionCopy[projectSlug] ?? fallbackCopy
    : fallbackCopy;

  const updateScrollControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    setCanScrollBack(carousel.scrollLeft > 4);
    setCanScrollForward(carousel.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollControls();
    const resizeObserver = new ResizeObserver(updateScrollControls);
    resizeObserver.observe(carousel);

    return () => resizeObserver.disconnect();
  }, [updateScrollControls, visibleTestimonials.length]);

  const scrollCarousel = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.firstElementChild as HTMLElement | null;
    const gap = 24;
    const distance = (card?.offsetWidth ?? carousel.clientWidth) + gap;

    carousel.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  if (visibleTestimonials.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "620px" }}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#8A6500]">
            CUSTOMER DETAILS
          </p>

          <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight text-[#07111F] md:text-6xl">
            {copy.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#334155]">
            {copy.intro}
          </p>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={updateScrollControls}
            className="scrollbar-none grid auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] sm:auto-cols-[calc((100%_-_1.5rem)/2)] [&::-webkit-scrollbar]:hidden"
            aria-label={projectSlug ? "Customer feedback" : "Recent plot buyers"}
          >
            {visibleTestimonials.map((item, index) => (
              <TestimonialCard
                key={`${item.slug}-${item.name}-${index}`}
                item={item}
                showQuote={Boolean(projectSlug)}
              />
            ))}
          </div>

          {visibleTestimonials.length > 2 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollCarousel("previous")}
                disabled={!canScrollBack}
                aria-label="Show previous customer details"
                className="grid h-12 w-12 place-items-center rounded-full border border-[#D8BF67] bg-white text-[#8A6500] shadow-sm transition hover:border-[#8A6500] hover:bg-[#FFF9E7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6500] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                disabled={!canScrollForward}
                aria-label="Show next customer details"
                className="grid h-12 w-12 place-items-center rounded-full border border-[#D8BF67] bg-white text-[#8A6500] shadow-sm transition hover:border-[#8A6500] hover:bg-[#FFF9E7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6500] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
