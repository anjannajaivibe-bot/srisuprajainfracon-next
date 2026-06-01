"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ContactForm from "@/app/contact/ContactForm";

const SESSION_KEY = "supraja_contact_popup_shown";

export default function ContactFormPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);

    if (alreadyShown) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-white">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close enquiry popup"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:bg-[#C9A227] hover:text-white"
        >
          <X size={20} />
        </button>

        <ContactForm />
      </div>
    </div>
  );
}
