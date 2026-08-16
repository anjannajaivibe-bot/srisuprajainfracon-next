"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";

const defaultPhoneNumber = "+919052996161";
const careersPhoneNumber = "+919640753929";

export default function FloatingCTA() {
  const pathname = usePathname() || "";
  const isCareers = pathname.startsWith("/careers");
  const phoneNumber = isCareers ? careersPhoneNumber : defaultPhoneNumber;
  const whatsappText = isCareers
    ? "Hi, I am interested in joining Sri Supraja Infracon as a channel partner. Please share the details."
    : "Hi, May I Know More Details about the project?";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-green-600 active:scale-95"
        aria-label={isCareers ? "WhatsApp channel partner team" : "Chat on WhatsApp"}
      >
        <MessageCircle size={28} />
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#1D4ED8] active:scale-95"
        aria-label={isCareers ? "Call channel partner team" : "Call Now"}
      >
        <Phone size={26} />
      </a>
    </div>
  );
}
