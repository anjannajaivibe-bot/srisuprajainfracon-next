import {
  BadgeCheck,
  Building2,
  Handshake,
  Landmark,
  MapPinned,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Landmark,
    value: "24+",
    label: "Years",
    text: "of Real Estate Legacy",
  },
  {
    icon: Building2,
    value: "Multiple",
    label: "Completed",
    text: "Projects",
  },
  {
    icon: BadgeCheck,
    value: "Investor",
    label: "Focused",
    text: "Approach",
  },
  {
    icon: BadgeCheck,
    value: "5000+",
    label: "Happy",
    text: "Customers",
  },
];

const reasons = [
  {
    icon: Landmark,
    title: "Over Two Decades of Ground Reality",
    desc: "A strong track record across plotted developments, residential projects, villas, and lifestyle-led developments.",
  },
  {
    icon: MapPinned,
    title: "Corridor-First Site Selection",
    desc: "Strategic project locations across Kamkole, Mominpet, Sangareddy, and Indrakaran with access to key development zones.",
  },
  {
    icon: ShieldCheck,
    title: "Documentation You Can Audit ",
    desc: "Approvals, title chain, and layout sanctions made available for independent verification before you commit.",
  },
  {
    icon: Handshake,
    title: "Advisory, Not Sales Pressure",
    desc: "Practical location insights, availability updates, pricing guidance, and comparison support for confident decision-making.",
  },
  {
    icon: Building2,
    title: "A Portfolio, Not a Single Bet",
    desc: "Choose from resort-inspired plots, premium plotted enclaves, gated layouts, and affordable growth-corridor projects.",
  },
  {
    icon: TrendingUp,
    title: "Appreciation by Design",
    desc: "Each layout is positioned around demand drivers already in motion — not speculative future promises.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#B88900]">
            WHY CHOOSE US
          </p>

          <div className="mx-auto mb-6 flex max-w-xs items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#C9A227]/40" />
            <span className="h-2 w-2 rotate-45 border border-[#C9A227]" />
            <span className="h-px flex-1 bg-[#C9A227]/40" />
          </div>

          <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight text-[#07111F] md:text-6xl">
            Built on Trust.{" "}
            <span className="text-[#C48912]">Backed by Delivery. Chosen for Growth.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#334155]">
            A track record measured in decades, not testimonials — deliberate site selection, 
            transparent process, and outcomes our clients can independently verify.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.value}-${item.label}`}
                className="flex items-center gap-5 border-b border-[#E5E7EB] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6 last:border-r-0"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E8D7A5] bg-[#FFF9E8]">
                  <Icon className="h-8 w-8 text-[#C48912]" />
                </div>

                <div>
                  <p className="font-display text-3xl font-bold leading-none text-[#07111F]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-lg font-bold leading-tight text-[#C48912]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#334155]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-[#E8E2D4] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227]/50 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
              >
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#E8D7A5] bg-[#FBF8EF] shadow-inner transition group-hover:bg-[#FFF3CC]">
                  <Icon className="h-10 w-10 text-[#C48912]" />
                </div>

                <h3 className="mb-4 font-display text-2xl font-bold leading-tight text-[#07111F]">
                  {item.title}
                </h3>

                <div className="mb-6 h-px w-14 bg-[#C48912]" />

                <p className="text-[16px] leading-7 text-[#334155]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;