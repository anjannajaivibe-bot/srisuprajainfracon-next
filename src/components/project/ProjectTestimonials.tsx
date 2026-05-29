import Image from "next/image";

const testimonials = [
  {
    project: "Supraja IRIS",
    name: "Anjanna Margam",
    role: "Plot No. 120 • 645 Sq. Yards",
    image: "/testimonials/anjanna-margam-supraja-iris-investor.webp",
    alt: "Anjanna Margam investor testimonial at Supraja IRIS Kamkole",
    text: `I purchased Plot No. 120 measuring 645 Sq. Yards in Supraja IRIS, and I am extremely satisfied with my investment decision. The project impressed me with its well-planned layout, premium infrastructure, DTCP & RERA approvals, and future growth potential near Kamkole. What gave me the most confidence was the transparent approach of the Sri Supraja Infracon team and the overall vision of developing a premium resort ecosystem.`,
  },
  {
    project: "Bridge County",
    name: "Verified Investor",
    role: "Bridge County Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Bridge County customer testimonial",
    text: `Bridge County offers the perfect balance between peaceful surroundings and investment potential. The layout planning, premium feel, and professional guidance from the team made our investment decision confident and smooth.`,
  },
  {
    project: "Sindhu Sarovar",
    name: "Verified Customer",
    role: "Sindhu Sarovar Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Sindhu Sarovar customer testimonial",
    text: `Sindhu Sarovar gives a calm and premium atmosphere with excellent planning and greenery. We liked the peaceful environment, clear documentation, and long-term value offered by Sri Supraja Infracon.`,
  },
  {
    project: "Subash Meadows",
    name: "Verified Buyer",
    role: "Subash Meadows Customer",
    image: "/testimonials/default-investor.webp",
    alt: "Subash Meadows customer testimonial",
    text: `Subash Meadows is a strong option for buyers looking for affordable plots with good connectivity and future growth potential near Hyderabad. The planned roads, layout, and location advantages impressed us.`,
  },
];

export default function ProjectTestimonials() {
  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-green-700 uppercase">
            Customer Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Investors Across Hyderabad
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from customers who invested in Sri Supraja Infracon
            plotted developments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <article
              key={item.project}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 md:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="relative w-[86px] h-[86px] rounded-full overflow-hidden flex-shrink-0 shadow-md bg-gray-100">
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

                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="mt-6 text-gray-700 leading-8 text-[17px]">
                “{item.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}