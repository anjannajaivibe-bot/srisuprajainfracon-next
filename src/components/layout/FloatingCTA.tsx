"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";

const defaultPhoneNumber = "+919052996161";
const careersPhoneNumber = "+919640753929";
const defaultWhatsappUrl =
  "https://wa.me/919052996161?text=Hi%2C%20May%20I%20know%20more%20details%20about%20the%20project%3F";
const careersWhatsappUrl =
  "https://wa.me/919640753929?text=Hi%2C%20I%20am%20interested%20in%20joining%20Sri%20Supraja%20Infracon%20as%20a%20channel%20partner.%20Please%20share%20the%20details.";

export default function FloatingCTA() {
  const pathname = usePathname() || "";
  const isCareers = pathname.startsWith("/careers");
  const phoneNumber = isCareers ? careersPhoneNumber : defaultPhoneNumber;
  const whatsappUrl = isCareers ? careersWhatsappUrl : defaultWhatsappUrl;

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
