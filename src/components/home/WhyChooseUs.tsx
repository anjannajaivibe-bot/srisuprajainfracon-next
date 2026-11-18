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
    <section className="fi-why">
      <div className="fi-why-inner">
        <header className="fi-why-header">
          <div className="fi-why-heading">
            <p className="fi-section-label"><span aria-hidden="true" />WHY CHOOSE US</p>
            <h2>What Buyers Can <span>Review Before They Decide</span></h2>
            <p>Clear approval information, real project updates, practical location details and site visits that help buyers compare projects on facts.</p>
          </div>
          <div className="fi-why-stats">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div className="fi-why-stat" key={item.value + "-" + item.label}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <p className="fi-why-stat-value">{item.value}</p>
                  <p className="fi-why-stat-label">{item.label}</p>
                  <p className="fi-why-stat-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </header>
        <div className="fi-why-reasons">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="fi-why-reason" key={item.title}>
                <div className="fi-why-reason-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
