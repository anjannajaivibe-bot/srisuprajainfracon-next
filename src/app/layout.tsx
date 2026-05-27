import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Supraja Infracon",
  description: "DTCP and RERA approved open plots near Hyderabad.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
