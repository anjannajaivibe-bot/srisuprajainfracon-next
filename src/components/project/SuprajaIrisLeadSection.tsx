import { BadgeCheck, Building2, CalendarDays, MapPinned } from "lucide-react";

import ContactForm from "@/app/contact-us/ContactForm";

const highlights = [
  {
    icon: BadgeCheck,
    title: "DTCP & RERA Approved",
    text: "Review the active phase approval details before your visit.",
  },
  {
    icon: Building2,
    title: "Development in Progress",
    text: "Lemon Tree Resort, Water Villas and recreation components are at different stages of development.",
  },
  {
    icon: CalendarDays,
    title: "Sunday Site Visits",
    text: "Request the latest availability and confirm your preferred visit timing.",
  },
];

export default function SuprajaIrisLeadSection() {
  return (
    <section
      id="supraja-iris-enquiry"
      className="scroll-mt-24 bg-[#F7F4EC] px-4 py-14 sm:px-6 lg:px-8 lg:py-18"
      aria-labelledby="supraja-iris-enquiry-heading"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="pt-2 lg:pt-6">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#7A5B16]">
            Current Plot Enquiry
          </p>

          <h2
            id="supraja-iris-enquiry-heading"
            className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-[#07111F] sm:text-4xl lg:text-5xl"
          >
            Get Supraja IRIS Price, Availability and Site Visit Details
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#334155]">
            Plots start from 165 sq. yards. Share your details to check current
            inventory, regular pricing, available plot options and the next site
            visit schedule.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-[#D8C99D] bg-white px-5 py-4 shadow-sm">
            <MapPinned className="h-6 w-6 shrink-0 text-[#7A5B16]" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">
                Location
              </p>
              <p className="mt-1 font-bold text-[#07111F]">
                Kamkole, near Sadashivapet and NH-65
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-[#E4DCC8] bg-white p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF5D6]">
                    <Icon className="h-5 w-5 text-[#7A5B16]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#07111F]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#475569]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ContactForm
          source="supraja-iris-inline-form"
          formId="supraja-iris-inline-form"
          eyebrow="Supraja IRIS Enquiry"
          title="Request Current Price & Site Visit"
          compact
        />
      </div>
    </section>
  );
}
