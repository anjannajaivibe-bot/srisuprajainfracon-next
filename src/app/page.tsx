import { lazy, Suspense } from "react";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FlagshipProject from "@/components/home/FlagshipProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import Footer from "@/components/layout/Footer";

const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const CTASection = lazy(() => import("@/components/home/CTASection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const ContactSection = lazy(() => import("@/components/home/ContactSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <FlagshipProject />
        <ProjectsSection />

        <Suspense fallback={null}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={null}>
          <CTASection />
        </Suspense>

        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Index;


