import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ProjectTestimonials from "@/components/project/ProjectTestimonials";
import LemonTreeProgress from "@/components/project/LemonTreeProgress";

export default function HomeClient() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <LemonTreeProgress compact />
      <WhyChooseUs />
      <ProjectTestimonials />
      <FAQSection />
      <CTASection />
    </main>
  );
}
