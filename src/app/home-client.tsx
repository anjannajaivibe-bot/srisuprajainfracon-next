import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FlagshipProject from "@/components/home/FlagshipProject";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

export default function HomeClient() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <FlagshipProject />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}