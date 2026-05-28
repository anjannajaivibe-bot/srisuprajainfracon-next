"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FlagshipProject from "@/components/home/FlagshipProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

export default function ProjectsClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />
        <div className="absolute inset-0 bg-navy/85" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-light">
              Our Projects
            </p>

            <h1 className="text-4xl font-display font-bold leading-tight text-hero-foreground sm:text-5xl lg:text-6xl">
              Open Plot Projects Near Hyderabad Growth Corridors
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-hero-foreground/75">
              Explore Sri Supraja Infracon plotted communities including
              Supraja IRIS, Bridge County, Sindhu Sarovar and Subash Meadows
              across Kamkole, Mominpet, Sangareddy and Indrakaran.
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
}