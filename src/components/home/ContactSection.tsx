

const ContactSection = () => {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Contact Sri Supraja Infracon
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Plan a Site Visit for Open Plots Near Hyderabad
          </h2>

          <p className="mb-7 text-lg leading-relaxed text-slate-600">
            Speak with our team to review current sales availability, location
            advantages, project approvals, bank loan support and upcoming price
            revision details for selected plotted communities.
          </p>

          <div className="space-y-4 text-slate-700">
            <p>
              <strong className="text-slate-950">Projects:</strong> Supraja
              IRIS Resort Plots, Bridge County, Sindhu Sarovar and Subash
              Meadows
            </p>
            <p>
              <strong className="text-slate-950">Focus Locations:</strong>{" "}
              Kamkole, Sangareddy, Mominpet and Indrakaran
            </p>
            <p>
              <strong className="text-slate-950">Buyer Search Intent:</strong>{" "}
              DTCP approved plots, RERA approved plots, villa plots, resort
              plots and high ROI open plots near Hyderabad
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold">
            <a href="/projects" className="text-blue-700 underline">
              Browse project details
            </a>
            <a
              href="https://www.nicdc.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              Learn about industrial corridor development
            </a>
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-7 shadow-xl">
          <h3 className="mb-5 text-2xl font-extrabold text-slate-950">
            What to Ask Before Booking
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Current plot availability",
              "Latest price and revision date",
              "Project approval details",
              "Bank loan eligibility",
              "Site visit schedule",
              "Nearby growth drivers",
              "Registration process",
              "Development progress",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 font-semibold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            Call and WhatsApp enquiry buttons are available in the website
            header and floating action area for faster response.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;




