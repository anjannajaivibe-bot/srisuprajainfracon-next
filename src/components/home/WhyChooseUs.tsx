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
    value: "Buyer",
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
    title: "24+ Years in Real Estate",
    desc: "Experience across plotted developments, apartments, villas and residential projects in and around Hyderabad.",
  },
  {
    icon: MapPinned,
    title: "Locations Explained Clearly",
    desc: "Review road access, nearby employment and education hubs, and development activity around each project before you visit.",
  },
  {
    icon: ShieldCheck,
    title: "Approval Details Up Front",
    desc: "DTCP and RERA details are shown project by project, with project documentation available for buyer verification.",
  },
  {
    icon: Handshake,
    title: "Site Visits Before Decisions",
    desc: "Our team can walk you through the site, current development, available plot options and project information before you decide.",
  },
  {
    icon: Building2,
    title: "Projects for Different Budgets",
    desc: "Compare resort plots, gated layouts and plotted developments across our current project portfolio.",
  },
  {
    icon: TrendingUp,
    title: "Progress You Can See",
    desc: "Real site photographs and construction updates help you understand what is completed, under construction and planned.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F2] px-6 py-24 lg:py-32">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 lg:grid lg:grid-cols-2 lg:items-end lg:gap-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#987737]">
            WHY CHOOSE US
          </p>

          <div className="mb-6 flex max-w-[96px] items-center gap-4">
            <span className="h-px flex-1 bg-[#C9A227]/40" />
            <span className="h-2 w-2 rotate-45 border border-[#C9A227]" />
            <span className="h-px flex-1 bg-[#C9A227]/40" />
          </div>

          <h2 className="max-w-[660px] font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#071525] md:text-6xl">
            What Buyers Can <span className="text-[#C48912]">Review Before They Decide</span>
          </h2>

          <p className="mt-6 max-w-[530px] text-base leading-8 text-[#55616D] lg:mt-0">
            Clear approval information, real project updates, practical location details and site visits that help buyers compare projects on facts.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-0 border border-[#E5E1D7] lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.value}-${item.label}`}
                className="flex min-h-[160px] flex-col items-start justify-center gap-3 border-b border-r border-[#E5E1D7] p-5 lg:border-b-0 lg:p-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#A7823E]">
                  <Icon className="h-5 w-5 text-[#A7823E]" />
                </div>

                <div>
                  <p className="font-display text-3xl font-bold leading-none text-[#07111F]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-lg font-bold leading-tight text-[#725700]">
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

        <div className="grid gap-0 border-l border-t border-[#E5E1D7] md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group border-b border-r border-[#E5E1D7] bg-transparent p-8 transition-colors hover:bg-white lg:min-h-[260px] lg:p-10"
              >
                <div className="mb-7 flex h-8 w-8 items-center justify-center text-[#A7823E]">
                  <Icon className="h-5 w-5 text-[#A7823E]" />
                </div>

                <h3 className="mb-4 font-display text-2xl font-semibold leading-tight text-[#071525]">
                  {item.title}
                </h3>

                <div className="mb-5 h-px w-10 bg-[#C48912]" />

                <p className="text-sm leading-7 text-[#55616D]">
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