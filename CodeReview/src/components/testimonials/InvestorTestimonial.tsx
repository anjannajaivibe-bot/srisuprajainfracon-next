import Image from "next/image";

export default function InvestorTestimonial() {
  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Investors Across Hyderabad
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Real experiences from customers who invested in Supraja IRIS
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">

          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Investor Image */}
            <div className="flex-shrink-0">
              <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-lg">

                <Image
                  src="/testimonials/anjanna-margam-supraja-iris-investor.webp"
                  alt="Anjanna Margam investor testimonial at Supraja IRIS Kamkole"
                  fill
                  className="object-cover"
                  sizes="120px"
                  priority
                />

              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">

              <svg
                className="w-10 h-10 text-green-600 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H5.08A3.001 3.001 0 017.17 8H9V6H7.17zm10 0A5.001 5.001 0 0012 11v7h7v-7h-3.92A3.001 3.001 0 0117.17 8H19V6h-1.83z" />
              </svg>

              <p className="text-lg leading-9 text-gray-700">
                I purchased Plot No. 120 measuring 645 Sq. Yards in Supraja
                IRIS, and I am extremely satisfied with my investment decision.
                The project impressed me with its well-planned layout, premium
                infrastructure, DTCP & RERA approvals, and future growth
                potential near Kamkole.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                What gave me the most confidence was the transparent approach of
                the Sri Supraja Infracon team and the overall vision of
                developing a premium resort ecosystem. The connectivity to NH65,
                upcoming regional developments, and the peaceful surroundings
                make this project highly promising for long-term appreciation
                and future living.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                I strongly recommend Supraja IRIS to anyone looking for a
                secure, premium plotted development near Hyderabad with
                excellent investment potential.
              </p>

              {/* Investor Details */}
              <div className="mt-8 border-t border-gray-200 pt-6">

                <h3 className="text-2xl font-semibold text-gray-900">
                  Anjanna Margam
                </h3>

                <p className="text-gray-600 mt-1">
                  Plot No. 120 • 645 Sq. Yards
                </p>

                <p className="text-gray-600">
                  Supraja IRIS Investor
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}




