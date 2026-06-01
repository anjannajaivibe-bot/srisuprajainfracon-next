import Link from "next/link";

const checklist = [
  "Current plot availability",
  "Latest price details",
  "Project approval documents",
  "Bank loan eligibility",
  "Site visit schedule",
  "Nearby growth drivers",
  "Registration process",
  "Development progress",
];

const ContactSection = () => {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Contact Sri Supraja Infracon
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Contact Sri Supraja Infracon for Open Plot Site Visits
          </h2>

          <p className="mb-7 text-lg leading-relaxed text-slate-600">
            Speak with our team to review current plot availability, location
            advantages, project approvals, bank loan support, registration
            process and site visit options for selected plotted communities.
          </p>

          <div className="space-y-4 text-slate-700">
            <p>
              <strong className="text-slate-950">Projects:</strong> Supraja
              IRIS Resort Plots, Bridge County, Sindhu Sarovar and Subhash
              Meadows
            </p>

            <p>
              <strong className="text-slate-950">Focus Locations:</strong>{" "}
              Kamkole, Sangareddy, Mominpet and Indrakaran
            </p>

            <p>
              <strong className="text-slate-950">Buyer Search Intent:</strong>{" "}
              <strong>DTCP approved plots</strong>,{" "}
              <strong>RERA approved plots</strong>,{" "}
              <strong>villa plots</strong>, <strong>resort plots</strong> and{" "}
              <strong>premium open plots near Hyderabad</strong>
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold">
            <Link href="/projects" className="text-blue-700 underline">
              Browse project details
            </Link>

            <Link href="/contact" className="text-blue-700 underline">
              Contact sales team
            </Link>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri%20Supraja%20Infracon%20Chandanagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              View office location
            </a>
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-7 shadow-xl">
          <h3 className="mb-5 text-2xl font-extrabold text-slate-950">
            Checklist for DTCP & RERA Approved Open Plots Near Hyderabad
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            Availability, pricing, loan support and approvals may vary by
            project. Sri Supraja Infracon continues developing{" "}
            <strong>DTCP & RERA approved open plots near Hyderabad</strong>{" "}
            with a focus on premium infrastructure, strategic growth corridors
            and long-term buyer confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
