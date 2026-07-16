"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import ContactFormPopup from "@/components/forms/ContactFormPopup";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24">{children}</div>

      <Footer />

      <FloatingCTA />
      <ContactFormPopup />
    </>
  );
}