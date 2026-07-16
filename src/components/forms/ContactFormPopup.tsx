"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const ContactForm = dynamic(
  () => import("@/app/contact-us/ContactForm"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[360px] items-center justify-center p-8">
        <span className="text-sm font-semibold text-slate-600">
          Loading enquiry form...
        </span>
      </div>
    ),
  },
);

const SESSION_KEY = "supraja_contact_popup_shown";
const POPUP_DELAY_MS = 20_000;
const REQUIRED_SCROLL_PERCENT = 35;

export default function ContactFormPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      return;
    }

    let delayCompleted = false;
    let popupOpened = false;

    const getScrollPercentage = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;

      if (scrollableHeight <= 0) {
        return 100;
      }

      return (window.scrollY / scrollableHeight) * 100;
    };

    const openPopupWhenEligible = () => {
      if (popupOpened || !delayCompleted) {
        return;
      }

      const scrollPercentage = getScrollPercentage();

      if (scrollPercentage < REQUIRED_SCROLL_PERCENT) {
        return;
      }

      popupOpened = true;
      sessionStorage.setItem(SESSION_KEY, "true");
      setOpen(true);

      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      openPopupWhenEligible();
    };

    const timer = window.setTimeout(() => {
      delayCompleted = true;
      openPopupWhenEligible();
    }, POPUP_DELAY_MS);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closePopup = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Request site visit or project details"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-white shadow-2xl">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close enquiry popup"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:bg-[#C9A227] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <ContactForm />
      </div>
    </div>
  );
}