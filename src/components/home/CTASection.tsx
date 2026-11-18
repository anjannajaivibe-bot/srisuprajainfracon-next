import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919052996161?text=Hi%2C%20May%20I%20know%20more%20details%20about%20the%20project%3F";

const CTASection = () => {
  return (
    <section className="fi-cta">
      <div className="fi-cta-inner">
        <div>
          <p className="fi-cta-label">PLAN YOUR VISIT</p>
          <h2>See the Project <em>Before You Decide</em></h2>
        </div>
        <div className="fi-cta-right">
          <p>Visit the site, review current development, compare available plots and ask our team about approvals, pricing and registration before making a decision.</p>
          <div className="fi-cta-links">
            <Link href="/projects" className="fi-cta-gold">View Projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/contact-us" className="fi-cta-text">Speak to Our Team <ArrowRight size={17} aria-hidden="true" /></Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fi-cta-text">
              <MessageCircle size={17} aria-hidden="true" /> Schedule a Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
