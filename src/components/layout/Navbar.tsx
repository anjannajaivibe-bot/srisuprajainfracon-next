"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

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

  {
    label: "Bridge County",
    href: "/projects/bridge-county",
  },

  {
    label: "Sindhu Sarovar",
    href: "/projects/sindhu-sarovar",
  },

  {
    label: "Subash Meadows",
    href: "/projects/subash-meadows",
  },
];

const phoneNumber = "+919640753929";

const whatsappUrl =
  "https://wa.me/919640753929?text=Hi%20I%20would%20like%20to%20know%20more%20about%20Sri%20Supraja%20Infracon%20projects";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileProjectsOpen, setMobileProjectsOpen] =
    useState(false);

  const [projectsOpen, setProjectsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizePath = (path: string) => {
    if (!path) return "/";

    return path.endsWith("/") && path !== "/"
      ? path.slice(0, -1)
      : path;
  };

  const currentPath = normalizePath(pathname || "/");

  const isProjectsActive =
    currentPath === "/projects" ||
    currentPath.startsWith("/projects/");

  const navTextClass = scrolled
    ? "text-white/85 hover:text-[#D4AF37]"
    : "text-[#374151] hover:text-[#C9A227]";

  const activeClass = scrolled
    ? "text-[#D4AF37]"
    : "text-[#B88917]";

  const brandClass = scrolled
    ? "text-white"
    : "text-[#111827]";

  const brandSubClass = scrolled
    ? "text-[#D4AF37]"
    : "text-[#B88917]";

  const menuIconClass = scrolled
    ? "text-white"
    : "text-[#111827]";

  const getNavClass = (href: string) => {
    const normalizedHref = normalizePath(href);

    return `text-sm font-semibold transition-colors ${
      currentPath === normalizedHref
        ? activeClass
        : navTextClass
    }`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#081225]/95 shadow-2xl backdrop-blur-md"
          : "bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <span
            className={`font-display text-xl font-bold ${brandClass}`}
          >
            Sri Supraja Infracon
          </span>

          <span
            className={`text-[11px] uppercase tracking-[0.25em] ${brandSubClass}`}
          >
            Builders & Developers
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={getNavClass("/")}>
            Home
          </Link>

          <Link
            href="/about"
            className={getNavClass("/about")}
          >
            About
          </Link>

          {/* PROJECTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <Link
              href="/projects"
              className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                isProjectsActive
                  ? activeClass
                  : navTextClass
              }`}
            >
              Projects

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  projectsOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* DROPDOWN */}
            <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4">
              <div
                className={`rounded-[28px] border border-[#EFE7D3] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-200 ${
                  projectsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href="/projects"
                  className="block rounded-2xl px-5 py-4 text-sm font-bold text-[#111827] transition hover:bg-[#FFF4C7] hover:text-[#B88917]"
                >
                  View All Projects
                </Link>

                <div className="my-2 h-px bg-[#EFE7D3]" />

                {projectLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-5 py-4 text-sm font-semibold text-[#374151] transition hover:bg-[#FFF4C7] hover:text-[#B88917]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={getNavClass("/contact")}
          >
            Contact
          </Link>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16A34A]"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 rounded-full bg-[#F4A300] px-5 py-2.5 text-sm font-bold text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5A000]"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`md:hidden ${menuIconClass}`}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#081225]/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-white/90 transition hover:bg-white/10 hover:text-[#D4AF37]"
                >
                  {link.label}
                </Link>
              ))}

              {/* MOBILE PROJECTS */}
              <button
                type="button"
                onClick={() =>
                  setMobileProjectsOpen((prev) => !prev)
                }
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-white/90 transition hover:bg-white/10 hover:text-[#D4AF37]"
              >
                <span>Projects</span>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileProjectsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden rounded-2xl bg-white/5"
                  >
                    <Link
                      href="/projects"
                      onClick={() => setMobileOpen(false)}
                      className="block px-5 py-3 text-sm font-bold text-[#D4AF37]"
                    >
                      View All Projects
                    </Link>

                    {projectLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-5 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-[#D4AF37]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* MOBILE CTA */}
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-5 py-3 font-semibold text-white"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#F4A300] px-5 py-3 font-bold text-[#111827]"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}