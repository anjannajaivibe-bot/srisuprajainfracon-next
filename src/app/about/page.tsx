import type { Metadata } from "next";
import Link from "next/link";

import SmartImage from "@/components/SmartImage";

const siteUrl = "https://www.srisuprajainfracon.com";

export const metadata: Metadata = {
  title: "About Sri Supraja Infracon | Real Estate Developers in Hyderabad",
  description:
    "Learn about Sri Supraja Infracon, a trusted real estate development company creating open plots, villas, apartments and investment-focused communities near Hyderabad.",
  keywords: [
    "Sri Supraja Infracon",
    "Real Estate Developers in Hyderabad",
    "Open Plots in Hyderabad",
    "Villas in Hyderabad",
    "Apartments in Hyderabad",
    "Investment Plots Hyderabad",
    "DTCP Approved Open Plots",
    "Hyderabad Real Estate Investment",
    "Supraja Iris",
    "Supraja Bridge County",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Sri Supraja Infracon | Real Estate Developers in Hyderabad",
    description:
      "Discover Sri Supraja Infracon, a trusted real estate brand focused on open plots, villas, apartments and long-term investor value.",
    url: `${siteUrl}/about`,
    siteName: "Sri Supraja Infracon",
    images: [
      {
        url: `${siteUrl}/images/homepage/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sri Supraja Infracon real estate developments in Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sri Supraja Infracon | Real Estate Developers in Hyderabad",
    description:
      "Sri Supraja Infracon creates open plots, villas, apartments and investment-focused real estate communities near Hyderabad.",
    images: [`${siteUrl}/images/homepage/hero.webp`],
  },
};

const locations = [
  "Hyderabad",
  "Kamkole",
  "Mumbai Highway",
  "Sangareddy",
  "Sadashivpet",
  "Woxsen University",
  "IIT Hyderabad",
  "NIMZ",
  "Zaheerabad",
  "West Hyderabad Growth Corridor",
];

const promises = [
  {
    title: "Investor-Focused Developments",
    text: "Every Sri Supraja Infracon project is planned to support long-term value, strong location potential and confident real estate investment decisions.",
  },
  {
    title: "Clear Documentation",
    text: "We focus on approved layouts, transparent documentation and practical guidance so investors can move forward with clarity.",
  },
  {
    title: "Planned Communities",
    text: "Our developments are designed with roads, infrastructure, accessibility and future growth potential in mind.",
  },
  {
    title: "Long-Term Value Creation",
    text: "From open plots to villas and residential developments, our goal is to create real estate assets that stand the test of time.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#aboutpage`,
  url: `${siteUrl}/about`,
  name: "About Sri Supraja Infracon",
  description:
    "Sri Supraja Infracon is a trusted real estate development company creating open plots, villas, apartments and investment-focused communities near Hyderabad.",
  isPartOf: {
    "@id": `${siteUrl}#website`,
  },
  about: {
    "@id": `${siteUrl}#organization`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <main className="bg-white text-slate-900">
        <section className="bg-slate-950 px-4 py-20 text-white">
          <div className="container-custom grid gap-10 lg:grid-cols-[55%_45%] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                About Sri Supraja Infracon
              </p>

              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Real Estate Developers in Hyderabad Creating Long-Term Value
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                <strong>Sri Supraja Infracon</strong> is a trusted real estate
                development company focused on creating open plot communities,
                villas, apartments and future-ready developments for families,
                homeowners and investors. Every project is planned with a clear
                focus on location growth, transparent documentation, practical
                infrastructure and long-term value creation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Explore Our Projects
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Contact Investment Team
                </Link>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-3xl">
              <SmartImage
                src="/images/homepage/hero.webp"
                alt="Sri Supraja Infracon real estate developments in Hyderabad"
                fill
                isHero
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20">
          <div className="container-custom grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Building Real Estate Destinations with Purpose
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Sri Supraja Infracon was built with a clear vision: to create
                real estate developments that deliver lifestyle value, investment
                confidence and long-term growth. Our portfolio includes{" "}
                <strong>open plot communities</strong>,{" "}
                <strong>premium villas</strong>,{" "}
                <strong>residential apartments</strong> and planned developments
                designed for modern families and smart investors.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                We understand that real estate is not just about land, homes or
                buildings. It is about creating secure assets, strong
                communities and meaningful opportunities for the future. Every
                Supraja development is planned with careful attention to
                accessibility, infrastructure, documentation, usability and
                regional growth potential.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our projects are developed with a practical understanding of
                investor expectations. From location selection to layout
                planning, from project positioning to on-ground execution, our
                approach is guided by transparency, responsibility and a
                commitment to sustained value.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our mission is to create trusted real estate developments where
                investors, homeowners and families can move forward with
                confidence. We focus on delivering projects that combine
                transparent documentation, thoughtful planning, practical
                infrastructure and strong long-term growth potential.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Open plot communities with strong investment potential</li>
                <li>Premium villas and residential developments</li>
                <li>Clear documentation and investor-focused guidance</li>
                <li>Planned layouts with practical infrastructure</li>
                <li>Developments positioned around future growth corridors</li>
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Supraja Investor Promise
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  We believe every investment decision should be supported by
                  trust, clarity and long-term value. Our promise is to create
                  developments that help investors feel confident today and
                  proud tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20">
          <div className="container-custom">
            <h2 className="text-center text-3xl font-semibold text-slate-900">
              Why Investors Choose Sri Supraja Infracon
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-slate-600">
              Sri Supraja Infracon is trusted by investors and families looking
              for real estate developments backed by transparency, planning,
              location advantage and long-term growth potential.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {promises.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20">
          <div className="container-custom grid gap-12 lg:grid-cols-[45%_55%] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Owner Message
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Mr. Tudi Praveen
              </h2>

              <p className="mt-2 text-lg font-semibold text-amber-600">
                Chairman & Managing Director
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-xl leading-9 text-slate-800">
                “Our vision is to create enduring value through thoughtfully
                planned developments that enhance lifestyles, strengthen
                communities and generate long-term wealth for families and
                investors.”
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                At Sri Supraja Infracon, we believe real estate is more than
                land, buildings or infrastructure. It is about creating
                opportunities, building trust and shaping environments where
                people can live, invest and prosper with confidence.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Over the years, we have developed open plot communities,
                residential projects, villas and integrated developments designed
                to meet the evolving aspirations of modern families and
                investors. Every Supraja project is guided by transparency,
                quality, responsible planning and a commitment to long-term
                growth.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our focus extends beyond project delivery. We strive to create
                developments that contribute positively to surrounding
                communities, support regional growth and provide lasting value
                for generations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-semibold text-slate-900">
              Growth Locations We Focus On
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Sri Supraja Infracon focuses on locations with strong connectivity,
              expanding infrastructure, educational institutions, employment
              drivers and future development potential. These factors help
              investors evaluate projects with better clarity and confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {locations.map((location) => (
                <span
                  key={location}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800"
                >
                  <strong>{location}</strong>
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Useful Links for Investors
              </h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/projects" className="text-blue-700 hover:underline">
                  Explore our projects
                </Link>

                <Link href="/supraja-iris" className="text-blue-700 hover:underline">
                  View Supraja Iris
                </Link>

                <Link href="/gallery" className="text-blue-700 hover:underline">
                  View project gallery
                </Link>

                <Link href="/contact" className="text-blue-700 hover:underline">
                  Contact investment team
                </Link>

                <a
                  href="https://rera.telangana.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Telangana RERA
                </a>

                <a
                  href="https://dtcp.telangana.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Telangana DTCP
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-20 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Looking for a Trusted Real Estate Investment?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
              Sri Supraja Infracon creates open plots, villas, apartments and
              investment-focused communities designed around transparency,
              location potential and long-term value creation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Speak to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}