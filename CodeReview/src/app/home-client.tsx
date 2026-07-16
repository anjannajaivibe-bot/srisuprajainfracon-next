import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ProjectTestimonials from "@/components/project/ProjectTestimonials";

export default function HomeClient() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <WhyChooseUs />
      <ProjectTestimonials />
      <FAQSection />
      <CTASection />
    </main>
  );
}