import { MessageCircle, Phone } from "lucide-react";

const phoneNumber = "+919052996161";

const whatsappUrl =
  "https://wa.me/919052996161?text=Hi%2C%20May%20I%20Know%20More%20Details%20about%20the%20project%3F";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-green-600 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="gold-gradient flex h-14 w-14 items-center justify-center rounded-full text-navy shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95"
        aria-label="Call Now"
      >
        <Phone size={26} />
      </a>
    </div>
  );
}