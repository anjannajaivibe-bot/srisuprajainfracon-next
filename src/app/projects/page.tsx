"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FlagshipProject from "@/components/home/FlagshipProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">Our Projects</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight">
              Premium <span className="text-gold-gradient">Plotted Communities</span>
            </h1>
            <p className="mt-6 text-lg text-hero-foreground/75">
              Explore our DTCP & RERA approved flagship developments across Hyderabad's high-growth corridors.
            </p>
          </motion.div>
        </div>
      </section>
      <FlagshipProject />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;



