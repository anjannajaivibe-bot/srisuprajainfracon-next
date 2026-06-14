import type { Metadata } from "next";
import Link from "next/link";

import SmartImage from "@/components/SmartImage";

const siteUrl = "https://suprajahotels.com";

export const metadata: Metadata = {
  title: "About Supraja Hotels | Hotels in Hyderabad",
  description:
    "Learn about Supraja Hotels, a trusted hospitality brand offering comfortable hotel stays in Hyderabad across Hitech City, Madhapur and Chandanagar.",
  keywords: [
    "Hotels in Hyderabad",
    "About Supraja Hotels",
    "Hotel in Madhapur Hyderabad",
    "Hotel in Chandanagar Hyderabad",
    "Hotels near Hitech City",
    "Direct hotel booking Hyderabad",
    "Budget hotel in Chandanagar",
    "Family hotel in Hyderabad",
    "Business hotel in Hyderabad",
    "Hyderabad accommodation",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Supraja Hotels | Hotels in Hyderabad",
    description:
      "Discover Supraja Hotels, a trusted hospitality brand offering clean rooms, direct booking support and convenient locations across Hyderabad.",
    url: `${siteUrl}/about`,
    siteName: "Supraja Hotels",
    images: [
      {
        url: `${siteUrl}/images/homepage/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Hotels in Hyderabad by Supraja Hotels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Supraja Hotels | Hotels in Hyderabad",
    description:
      "Comfortable rooms, trusted hospitality and direct booking support across Hyderabad.",
    images: [`${siteUrl}/images/homepage/hero.webp`],
  },
};

const locations = [
  "Hitech City",
  "Madhapur",
  "Kondapur",
  "Gachibowli",
  "Chandanagar",
  "Gangaram",
  "BHEL",
  "Serilingampally",
  "Nallagandla",
  "Miyapur",
];

const promises = [
  {
    title: "Prime Hyderabad Locations",
    text: "Our hotels are located near Hitech City, Madhapur, Chandanagar, BHEL, Miyapur and nearby Hyderabad areas.",
  },
  {
    title: "Comfortable Rooms",
    text: "We focus on clean, practical and comfortable rooms for short stays, family stays and business visits.",
  },
  {
    title: "Direct Booking Support",
    text: "Guests can contact Supraja Hotels directly through phone or WhatsApp for room availability and booking support.",
  },
  {
    title: "Trusted Hospitality",
    text: "Supraja Hotels is built on responsive service, clean stays and practical guest support across our properties.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#aboutpage`,
  url: `${siteUrl}/about`,
  name: "About Supraja Hotels",
  description:
    "Supraja Hotels offers hotels in Hyderabad with comfortable rooms, direct booking support and convenient locations in Madhapur, Hitech City and Chandanagar.",
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
                About Supraja Hotels
              </p>

              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Hotels in Hyderabad by Supraja Hotels
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                <strong>Hotels in Hyderabad</strong> by Supraja Hotels are built
                around clean rooms, convenient locations, direct hotel booking
                and trusted hospitality. Our properties serve guests near{" "}
                <strong>Hitech City</strong>, <strong>Madhapur</strong>,{" "}
                <strong>Chandanagar</strong>, <strong>BHEL</strong> and{" "}
                <strong>Miyapur</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hotels"
                  className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Explore Our Hotels
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Contact Booking Team
                </Link>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-3xl">
              <SmartImage
                src="/images/homepage/hero.webp"
                alt="Hotels in Hyderabad by Supraja Hotels"
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
                Supraja Hotels for Comfortable Stays in Hyderabad
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Supraja Hotels was built with a clear purpose: to provide{" "}
                <strong>comfortable accommodation in Hyderabad</strong> with
                practical amenities, helpful service and easy access to important
                locations. Guests choose us when they need dependable stays for
                work, family visits, medical needs, short trips and city travel.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Hotel Supraja Cyber View is suitable for guests looking for a{" "}
                <strong>Hotel in Madhapur Hyderabad</strong>,{" "}
                <strong>Hotels near Hitech City</strong>, or accommodation
                around <strong>Kondapur</strong> and{" "}
                <strong>Gachibowli</strong>. Hotel Supraja Residency and Hotel
                Supraja Lodge are ideal for guests searching for a{" "}
                <strong>Hotel in Chandanagar Hyderabad</strong>,{" "}
                <strong>Budget hotel in Chandanagar</strong>, and stays near{" "}
                <strong>Gangaram</strong>, <strong>BHEL</strong>,{" "}
                <strong>Serilingampally</strong>, <strong>Nallagandla</strong>{" "}
                and <strong>Miyapur</strong>.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                As a local hospitality brand, Supraja Hotels focuses on clean
                rooms, direct booking support, location convenience, practical
                amenities and responsive assistance before and during the stay.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our mission is to deliver reliable hospitality for guests
                searching for <strong>Direct hotel booking Hyderabad</strong>,{" "}
                <strong>Family hotel in Hyderabad</strong> and{" "}
                <strong>Business hotel in Hyderabad</strong>. We aim to keep the
                booking journey simple and the stay experience comfortable.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Clean and well-maintained rooms</li>
                <li>Direct hotel booking through phone and WhatsApp</li>
                <li>Hotels near Hitech City, Madhapur, Kondapur and Gachibowli</li>
                <li>Hotels in Chandanagar, Gangaram, BHEL and Miyapur</li>
                <li>Practical amenities for business and family guests</li>
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Supraja Hotels Guest Promise
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  We focus on honest service, clean rooms and practical
                  hospitality. Our goal is to make every guest feel supported
                  from enquiry to checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20">
          <div className="container-custom">
            <h2 className="text-center text-3xl font-semibold text-slate-900">
              Why Guests Choose Supraja Hotels
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-slate-600">
              Supraja Hotels is preferred by guests looking for{" "}
              <strong>Hotels in Hyderabad</strong>, easy connectivity, direct
              booking support and a dependable local hospitality brand.
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
          <div className="container-custom">
            <h2 className="text-3xl font-semibold text-slate-900">
              Locations We Serve in Hyderabad
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Supraja Hotels serves guests looking for accommodation around
              major Hyderabad business and residential areas. These location
              signals help guests quickly choose the right property based on
              their travel plan.
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

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Useful Links for Guests
              </h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/hotels" className="text-blue-700 hover:underline">
                  Explore all Supraja Hotels
                </Link>

                <Link href="/offers" className="text-blue-700 hover:underline">
                  View current hotel offers
                </Link>

                <Link href="/gallery" className="text-blue-700 hover:underline">
                  View hotel gallery
                </Link>

                <Link href="/contact" className="text-blue-700 hover:underline">
                  Contact our booking team
                </Link>

                <a
                  href="https://www.telanganatourism.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Telangana Tourism
                </a>

                <a
                  href="https://tourism.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  India Tourism
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-20 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Looking for Hotels in Hyderabad?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
              For <strong>Hotels in Hyderabad</strong>, Supraja Hotels offers
              convenient locations, clean rooms and direct booking support across
              Hitech City, Madhapur and Chandanagar.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/hotels"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                View Hotels
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Book Directly
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}