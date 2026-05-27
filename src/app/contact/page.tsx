"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FAQSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight">
              Let's Build Your <span className="text-gold-gradient">Future Together</span>
            </h1>
            <p className="mt-6 text-lg text-hero-foreground/75">
              Schedule a site visit, request a callback, or drop by our office — our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Call Us", value: "+91 90529 96161", href: "tel:+919052996161" },
            { icon: Mail, title: "Email Us", value: "info@suprajainfracon.com", href: "mailto:info@suprajainfracon.com" },
            { icon: MapPin, title: "Visit Us", value: "Hyderabad, Telangana, India" },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href || "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 hover-lift text-center block"
            >
              <div className="w-14 h-14 mx-auto rounded-full gold-gradient flex items-center justify-center mb-4">
                <c.icon className="text-navy" size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;



