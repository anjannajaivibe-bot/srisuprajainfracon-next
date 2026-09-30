import {
  BadgePercent,
  CalendarDays,
  CheckCircle2,
  IndianRupee,
  Sparkles,
} from "lucide-react";

const paymentSteps = [
  {
    step: "01",
    title: "5% Plot Booking",
    description: "Start your Bridge County plot booking with 5% of the plot value.",
  },
  {
    step: "02",
    title: "25% Within 1 Month",
    description: "Pay the next 25% of the plot value within one month of booking.",
  },
  {
    step: "03",
    title: "36-Month 0% EMI",
    description: "Continue with the structured 0% interest EMI plan for 36 months.",
  },
  {
    step: "04",
    title: "Balance at Registration",
    description: "The remaining balance is payable at the time of registration.",
  },
];

const emiOptions = [
  {
    plot: "165 Sq. Yd. Plot",
    monthly: "₹25,000",
    sixthMonth: "₹1,00,000",
  },
  {
    plot: "183 Sq. Yd. Plot",
    monthly: "₹30,000",
    sixthMonth: "₹1,15,000",
  },
];

const BridgeCountyPaymentPlan = () => {
  return (
    <section
      id="bridge-county-emi-plan"
      className="scroll-mt-24 bg-[#07111F] px-6 py-20 text-white"
      aria-labelledby="bridge-county-payment-plan-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6B15C]/35 bg-[#D6B15C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8D7A5]">
              <BadgePercent className="h-4 w-4" />
              Easy Payment Plan
            </div>

            <h2
              id="bridge-county-payment-plan-title"
              className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl"
            >
              Own a Bridge County Plot with{" "}
              <span className="text-[#D6B15C]">0% EMI</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              EMI starts from just{" "}
              <strong className="text-white">₹25,000 per month*</strong> with a
              36-month structured payment plan and no interest.
            </p>

            <div className="mt-8 inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[22px] border border-white/10 bg-white/5 px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Regular Price
                </p>
                <p className="mt-1 text-2xl font-extrabold text-[#D6B15C]">
                  ₹15,000 / Sq. Yard
                </p>
              </div>
              <div className="hidden h-12 w-px bg-white/15 sm:block" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  EMI Tenure
                </p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  36 Months
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {emiOptions.map((option) => (
              <article
                key={option.plot}
                className="rounded-[28px] border border-[#D6B15C]/30 bg-white p-7 text-[#07111F] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#725700]">
                  {option.plot}
                </p>
                <div className="mt-5 flex items-end gap-2">
                  <IndianRupee className="mb-1 h-7 w-7 text-[#A47A16]" />
                  <p className="text-4xl font-extrabold tracking-tight">
                    {option.monthly.replace("₹", "")}
                  </p>
                  <span className="pb-1 text-sm font-bold text-slate-500">
                    / month
                  </span>
                </div>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-600">
                    Every 6th month
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-[#07111F]">
                    {option.sixthMonth}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Inclusive of that month&apos;s EMI.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {paymentSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#D6B15C]">
                  STEP {item.step}
                </span>
                <CheckCircle2 className="h-5 w-5 text-[#D6B15C]" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[26px] border border-[#D6B15C]/25 bg-[#0B1830] p-6 sm:p-7">
            <div className="flex gap-4">
              <Sparkles className="mt-1 h-6 w-6 shrink-0 text-[#D6B15C]" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  2 Years Complimentary Membership*
                </h3>
                <p className="mt-2 leading-7 text-slate-300">
                  Complimentary membership is included for Lemon Tree Resort and
                  Water & Amusement Park benefits as per the current Bridge County
                  offer terms.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="flex gap-4">
              <CalendarDays className="mt-1 h-6 w-6 shrink-0 text-[#D6B15C]" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Registration & Maintenance
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Maintenance: ₹200 per sq. yd., payable at registration.
                  Registration charges are as per government norms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-400">
          *Terms and conditions apply. Payment plan, plot availability, membership
          benefits and registration requirements should be confirmed with the
          project team before booking.
        </p>
      </div>
    </section>
  );
};

export default BridgeCountyPaymentPlan;
