import "./about-hero-polish.css";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="about-page-polish">{children}</div>;
}
