import type { Metadata } from "next";
import Link from "next/link";

import SmartImage from "@/components/SmartImage";

const siteUrl = "https://suprajahotels.com";

export const metadata: Metadata = {
  title: "About Supraja Hotels | Hotels in Hyderabad",
  description:
    "Learn about Supraja Hotels, a trusted hospitality brand offering clean, comfortable and convenient hotel stays in Madhapur, Hitech City and Chandanagar.",
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
      "Discover Supraja Hotels, a trusted hospitality brand offering clean rooms, comfortable stays, direct booking support and convenient locations across Hyderabad.",
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
    text: "Our properties are positioned near key business hubs, residential areas and travel routes, making every stay convenient for work, family visits and city access.",
  },
  {
    title: "Clean, Comfortable Rooms",
    text: "We focus on well-maintained rooms, practical amenities and a peaceful stay environment for short visits, business trips and family stays.",
  },
  {
    title: "Easy Direct Booking",
    text: "Guests can contact Supraja Hotels directly through phone or WhatsApp for room availability, booking assistance and stay-related support.",
  },
  {
    title: "Trusted Local Hospitality",
    text: "Supraja Hotels is built on responsive service, clean stays and dependable guest support across our Hyderabad properties.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#aboutpage`,
  url: `${siteUrl}/about`,
  name: "About Supraja Hotels",
  description:
    "Supraja Hotels offers comfortable hotel stays in Hyderabad with clean rooms, direct booking support and convenient locations in Madhapur, Hitech City and Chandanagar.",
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
                <strong>Supraja Hotels</strong> is a trusted hospitality brand
                offering comfortable stays across Hyderabad. With properties in{" "}
                <strong>Madhapur</strong> and <strong>Chandanagar</strong>, we
                provide clean rooms, convenient access to key business and
                residential hubs, direct booking support and dependable
                hospitality for business travellers, families and long-stay
                guests.
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
                Supraja Hotels was established with a simple vision: to provide
                comfortable, reliable and value-driven accommodation for guests
                visiting Hyderabad. Whether travelling for business, family
                commitments, medical visits or personal work, our hotels are
                designed to deliver a practical and stress-free stay experience.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our portfolio includes <strong>Hotel Supraja Cyber View</strong>{" "}
                in Madhapur and <strong>Hotel Supraja Residency</strong> and{" "}
                <strong>Hotel Supraja Lodge</strong> in Chandanagar. These
                properties are located near major IT corridors, commercial
                centres, hospitals, residential communities and transportation
                routes, making them suitable for both short and extended stays.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                At Supraja Hotels, we focus on cleanliness, guest comfort,
                responsive support and location convenience. Our commitment is to
                ensure every guest enjoys a welcoming environment backed by
                dependable service and a smooth booking experience.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our mission is to provide dependable hospitality through clean
                accommodation, convenient locations and attentive guest support.
                We strive to create comfortable stay experiences that combine
                affordability, accessibility and genuine hospitality for every
                guest.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Clean and well-maintained rooms for peaceful stays</li>
                <li>Direct booking support through phone and WhatsApp</li>
                <li>Convenient access to Madhapur, Hitech City and Kondapur</li>
                <li>Comfortable stays in Chandanagar, Gangaram and BHEL areas</li>
                <li>Practical amenities for business, family and long-stay guests</li>
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Supraja Hotels Guest Promise
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  We are committed to providing clean accommodation, courteous
                  service and a comfortable environment where guests can relax,
                  work and stay with confidence. Every interaction is guided by
                  our dedication to guest satisfaction and hospitality
                  excellence.
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
              Guests choose Supraja Hotels for convenient locations, reliable
              accommodation, direct booking support and a hospitality experience
              built on comfort, cleanliness and trust.
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
              Our hotels are strategically positioned near Hyderabad's major
              business districts, residential communities and transportation
              corridors. This allows guests to enjoy easy access to work
              locations, family destinations, hospitals, educational
              institutions and key city attractions.
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
              Experience comfortable stays, convenient locations and trusted
              hospitality with Supraja Hotels. Whether you are travelling for
              business, family visits or personal work, our hotels are ready to
              welcome you with dependable service and a comfortable stay
              experience.
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