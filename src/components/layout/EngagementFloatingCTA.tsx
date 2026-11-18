"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bell, Handshake } from "lucide-react";

export default function EngagementFloatingCTA() {
  const pathname = usePathname() || "";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setPastHero(true);
      return;
    }
    const check = () => setPastHero(window.scrollY > window.innerHeight * 0.9);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  return (
    <div className={"fixed bottom-5 left-4 z-[9998] flex flex-col gap-2 sm:left-5 transition-all duration-300 " + (pathname === "/" && !pastHero ? "translate-y-5 opacity-0 pointer-events-none" : "translate-y-0 opacity-100")}>
      <Link
        href="/blog#subscribe"
        className="group inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800 shadow-lg transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-800 sm:h-12 sm:px-4"
        aria-label="Subscribe to Sri Supraja Infracon updates"
      >
        <Bell size={17} className="shrink-0 text-amber-700" />
        <span className="hidden sm:inline">Get Updates</span>
      </Link>

      <Link
        href="/careers"
        className="group inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 sm:h-12 sm:px-4"
        aria-label="Join as a channel partner"
      >
        <Handshake size={17} className="shrink-0 text-amber-300" />
        <span className="hidden sm:inline">Join as Channel Partner</span>
      </Link>
    </div>
  );
}
