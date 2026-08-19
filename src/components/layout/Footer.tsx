"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LazyGoogleMap from "@/components/shared/LazyGoogleMap";

const buyerResources = [
  { href: "/blog/documents-required-before-buying-a-plot-in-telangana", label: "Documents Before Buying a Plot" },
  { href: "/blog/how-to-verify-land-ownership-before-buying-a-plot", label: "Verify Land Ownership" },
  { href: "/blog/plot-buying-checklist", label: "Plot Buying Checklist" },
  { href: "/blog/plot-site-visit-checklist", label: "Plot Site Visit Checklist" },
];

export default function Footer() {
  const pathname = usePathname() || "";
  const isCareers = pathname.startsWith("/careers");

  const contactPhone = isCareers ? "+919640753929" : "+919052996161";
  const contactPhoneDisplay = isCareers ? "+91 96407 53929" : "+91 90529 96161";

  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC] text-slate-800">
      <div className="container-max px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Sri Supraja Infracon</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#765D00]">Builders & Developers</p>
            <p className="mt-6 leading-7 text-slate-600">Sri Supraja Infracon develops approved open plots, residential, villa and resort-inspired projects across Hyderabad&apos;s growth corridors, including Kamkole, Sangareddy, Mominpet and Indrakaran.</p>
            <div className="mt-8 flex items-center gap-4">
              {[
                { label: "Facebook", href: "https://www.facebook.com/srisuprajainfracon", icon: "f" },
                { label: "Instagram", href: "https://www.instagram.com/suprajagroup/", icon: "◎" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/supraja-infracon-builders-and-developers-635aaa3a0/", icon: "in" },
                { label: "YouTube", href: "https://www.youtube.com/@suprajairisresort", icon: "▶" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#765D00] hover:text-[#765D00]">{social.icon}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="/" className="transition hover:text-[#765D00]">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-[#765D00]">About Us</Link></li>
              <li><Link href="/projects" className="transition hover:text-[#765D00]">Projects</Link></li>
              <li><Link href="/careers" className="transition hover:text-[#765D00]">Careers</Link></li>
              <li><Link href="/project-verification" className="transition hover:text-[#765D00]">Project Verification</Link></li>
              <li><Link href="/telangana-plot-verification" className="transition hover:text-[#765D00]">Plot Verification Guide</Link></li>
              <li><Link href="/contact-us" className="transition hover:text-[#765D00]">Contact Us</Link></li>
              <li><Link href="/blog" className="transition hover:text-[#765D00]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">Our Projects</h4>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="/projects/supraja-iris-resort-plots" className="transition hover:text-[#765D00]">Supraja IRIS</Link></li>
              <li><Link href="/projects/bridge-county" className="transition hover:text-[#765D00]">Bridge County</Link></li>
              <li><Link href="/projects/sindhu-sarovar" className="transition hover:text-[#765D00]">Sindhu Sarovar</Link></li>
              <li><Link href="/projects/subhash-meadows" className="transition hover:text-[#765D00]">Subhash Meadows</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">Contact Information</h4>
            <div className="space-y-5">
              {isCareers && (
                <div>
                  <p className="font-bold text-slate-900">Anjan Margam</p>
                  <p className="text-sm text-slate-500">HR Manager</p>
                </div>
              )}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#765D00]">📞</span>
                <a href={`tel:${contactPhone}`} className="text-slate-600 transition hover:text-[#765D00]">{contactPhoneDisplay}</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#765D00]">✉</span>
                <a href="mailto:info@srisuprajainfracon.com" className="text-slate-600 transition hover:text-[#765D00]">info@srisuprajainfracon.com</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#765D00]">📍</span>
                <p className="leading-7 text-slate-600">H.No. 4-91, Above Parampara Mithai,<br />Chandanagar, Hyderabad - 500050</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#765D00]">Buyer Resources</p>
              <h4 className="mt-1 text-lg font-semibold text-slate-900">Important guides before buying a plot</h4>
            </div>
            <nav aria-label="Buyer resources" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
              {buyerResources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="transition hover:text-[#765D00]">
                  {resource.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
          <LazyGoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3199.830322480578!2d78.32710481827314!3d17.4950506675388!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1784529285515!5m2!1sen!2sin" externalUrl="https://www.google.com/maps/search/?api=1&query=Sri%20Supraja%20Infracon%20Chandanagar" title="Sri Supraja Infracon Office Location" height={350} />
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="container-max flex flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} Sri Supraja Infracon. All Rights Reserved.</p>
          <nav aria-label="Legal and trust links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/project-verification" className="transition hover:text-[#765D00]">Project Verification</Link>
            <Link href="/editorial-policy" className="transition hover:text-[#765D00]">Editorial Policy</Link>
            <Link href="/privacy-policy" className="transition hover:text-[#765D00]">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="transition hover:text-[#765D00]">Terms & Conditions</Link>
            <Link href="/disclaimer" className="transition hover:text-[#765D00]">Disclaimer</Link>
            <Link href="/cookie-policy" className="transition hover:text-[#765D00]">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
