"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const projectLinks = [
  {
    label: "Supraja IRIS Resort Plots",
    href: "/projects/supraja-iris-resort-plots",
  },
  { label: "Bridge County", href: "/projects/bridge-county" },
  { label: "Sindhu Sarovar", href: "/projects/sindhu-sarovar" },
  { label: "Subash Meadows", href: "/projects/subash-meadows" },
];

const phoneNumber = "+919640753929";
const whatsappUrl =
  "https://wa.me/919640753929?text=Hi%20I%20would%20like%20to%20know%20more%20about%20Sri%20Supraja%20Infracon%20projects";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const pathname = usePathname() || "/";
  const isProjectsActive = pathname.startsWith("/projects");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTextClass = scrolled
    ? "text-white/85 hover:text-amber-300"
    : "text-slate-900/80 hover:text-amber-600";

  const activeClass = scrolled ? "text-amber-300" : "text-amber-700";
  const brandClass = scrolled ? "text-white" : "text-slate-950";
  const brandSubClass = scrolled ? "text-amber-300" : "text-amber-700";
  const menuIconClass = scrolled ? "text-white" : "text-slate-950";

  const getNavClass = (href: string) =>
    `text-sm font-semibold transition-colors ${
      pathname === href ? activeClass : navTextClass
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-xl backdrop-blur-md"
          : "bg-white/90 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className={`font-display text-xl font-bold ${brandClass}`}>
            Sri Supraja Infracon
          </span>

          <span
            className={`text-xs uppercase tracking-[0.2em] ${brandSubClass}`}
          >
            Builders & Developers
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={getNavClass("/")}>
            Home
          </Link>

          <Link href="/about" className={getNavClass("/about")}>
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <Link
              href="/projects"
              className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                isProjectsActive ? activeClass : navTextClass
              }`}
              aria-expanded={projectsOpen}
              aria-haspopup="true"
            >
              Projects
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  projectsOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4">
              <div
                className={`rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl transition-all duration-200 ${
                  projectsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/projects"
                  className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-900 hover:bg-amber-50 hover:text-amber-700"
                >
                  View All Projects
                </Link>

                <div className="my-2 h-px bg-slate-100" />

                {projectLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className={getNavClass("/contact")}>
            Contact
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400"
            >
              <Phone size={12} />
              Call Now
            </a>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen((current) => !current)}
          className={`md:hidden ${menuIconClass}`}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-slate-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-white/85 transition-colors hover:bg-white/10 hover:text-amber-300"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMobileProjectsOpen((current) => !current)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-white/85 transition-colors hover:bg-white/10 hover:text-amber-300"
              >
                <span>Projects</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileProjectsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden rounded-2xl bg-white/5"
                  >
                    <Link
                      href="/projects"
                      onClick={() => setMobileOpen(false)}
                      className="block px-5 py-3 text-sm font-semibold text-amber-300"
                    >
                      View All Projects
                    </Link>

                    {projectLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-5 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-amber-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-3 pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 font-bold text-slate-950"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}