import { BadgePercent, MessageCircle, Phone, Sparkles } from "lucide-react";

const PHONE_NUMBER = "919052996161";
const WHATSAPP_URL =
  "https://wa.me/919052996161?text=Hi%2C%20I%20want%20complete%20details%20about%20the%20Bridge%20County%200%25%20Easy%20EMI%20offer.";

const BridgeCountyPaymentPlan = () => {
  return (
    <section
      id="bridge-county-emi-plan"
      className="scroll-mt-24 bg-[#07111F] px-6 py-20 text-white"
      aria-labelledby="bridge-county-payment-plan-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-[#D6B15C]/30 bg-[radial-gradient(circle_at_top_right,rgba(214,177,92,0.14),transparent_36%)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-10 lg:p-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6B15C]/40 bg-[#D6B15C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D7A5]">
            <BadgePercent className="h-4 w-4" />
            0% Easy EMI Available
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2
                id="bridge-county-payment-plan-title"
                className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
              >
                EMI Starts From Just{" "}
                <span className="text-[#D6B15C]">₹25,000/Month*</span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Interested in Bridge County? Speak with our sales team for the
                current plot price, available plot options and complete payment
                plan details.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                We will explain the applicable booking requirements, payment
                milestones, registration-stage details and current availability
                directly based on your preferred plot.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 sm:p-8">
              <div className="flex gap-4">
                <Sparkles className="mt-1 h-6 w-6 shrink-0 text-[#D6B15C]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#E8D7A5]">
                    Get Complete Details
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">
                    Talk to Our Bridge County Team
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Call or WhatsApp us for the latest payment plan, plot
                    availability and site visit assistance.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D6B15C] px-6 py-3.5 text-sm font-extrabold text-[#07111F] transition hover:bg-[#E4C97F]"
                >
                  <Phone className="h-4 w-4" />
                  Call for Full Details
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#D6B15C] bg-transparent px-6 py-3.5 text-sm font-extrabold text-[#E8D7A5] transition hover:bg-[#D6B15C] hover:text-[#07111F]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp for Details
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-slate-400">
            *Terms and conditions apply. EMI starting amount, payment structure
            and plot availability are subject to the applicable offer and should
            be confirmed with the project sales team before booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BridgeCountyPaymentPlan;
