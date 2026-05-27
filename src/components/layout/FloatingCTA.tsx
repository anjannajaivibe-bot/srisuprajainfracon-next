"use client";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const phoneNumber = "+919052996161";

const whatsappUrl =
  "https://wa.me/919052996161?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20projects";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full gold-gradient text-navy shadow-2xl transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone size={26} />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;


