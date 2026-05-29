import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import Link from "next/link";

const projectLinks = [
  {
    label: "Supraja IRIS Resort Plots",
    to: "/projects/supraja-iris-resort-plots",
  },
  {
    label: "Bridge County",
    to: "/projects/bridge-county",
  },
  {
    label: "Sindhu Sarovar",
    to: "/projects/sindhu-sarovar",
  },
  {
    label: "Subhash Meadows",
    to: "/projects/Subhash-meadows",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-max px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-slate-950">
              Sri Supraja Infracon
            </h3>

            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-amber-700">
              Builders & Developers
            </p>

            <p className="max-w-md leading-relaxed text-slate-600">
              Premium plotted developments designed around growth,
              infrastructure and lifestyle experiences across Hyderabad’s
              expanding investment corridors.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919052996161?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-600"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <a
                href="tel:+919052996161"
                className="rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
              >
                Call Now
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-slate-950">
              Our Projects
            </h4>

            <ul className="space-y-3">
              {projectLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="group inline-flex items-center gap-2 text-slate-600 transition hover:text-amber-700"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-slate-950">
              Contact Information
            </h4>

            <div className="space-y-5 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-amber-600"
                />

                <div>
                  <p className="mb-1 font-semibold text-slate-900">
                    Phone Number
                  </p>

                  <a
                    href="tel:+919052996161"
                    className="transition hover:text-amber-700"
                  >
                    +91 90529 96161
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-amber-600"
                />

                <div>
                  <p className="mb-1 font-semibold text-slate-900">
                    Email Address
                  </p>

                  <a
                    href="mailto:info@srisuprajainfracon.com"
                    className="transition hover:text-amber-700"
                  >
                    info@srisuprajainfracon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-amber-600"
                />

                <div>
                  <p className="mb-1 font-semibold text-slate-900">
                    Office Location
                  </p>

                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sri Supraja Infracon. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;






