import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC] text-slate-800">
      {/* Main Footer */}
      <div className="container-max px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Sri Supraja Infracon
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#C9A227]">
              Builders & Developers
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              Sri Supraja Infracon develops DTCP & RERA approved open plots,
              villa plots and premium plotted developments near Hyderabad growth
              corridors including Kamkole, Sangareddy, Mominpet and Indrakaran.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#C9A227]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#C9A227]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="transition hover:text-[#C9A227]"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="transition hover:text-[#C9A227]"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-[#C9A227]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Our Projects
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <Link
                  href="/projects/supraja-iris-resort-plots"
                  className="transition hover:text-[#C9A227]"
                >
                  Supraja IRIS
                </Link>
              </li>

              <li>
                <Link
                  href="/projects/bridge-county"
                  className="transition hover:text-[#C9A227]"
                >
                  Bridge County
                </Link>
              </li>

              <li>
                <Link
                  href="/projects/sindhu-sarovar"
                  className="transition hover:text-[#C9A227]"
                >
                  Sindhu Sarovar
                </Link>
              </li>

              <li>
                <Link
                  href="/projects/subhash-meadows"
                  className="transition hover:text-[#C9A227]"
                >
                  Subhash Meadows
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Contact Information
            </h4>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A227]">📞</span>

                <a
                  href="tel:+919052996161"
                  className="text-slate-600 transition hover:text-[#C9A227]"
                >
                  +91 90529 96161
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A227]">✉</span>

                <a
                  href="mailto:support@srisuprajainfracon.com"
                  className="text-slate-600 transition hover:text-[#C9A227]"
                >
                  support@srisuprajainfracon.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A227]">📍</span>

                <p className="leading-7 text-slate-600">
                  H.No. 4-91, Above Parampara Mithai,
                  <br />
                  Chandanagar, Hyderabad – 500050
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Map */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511.8898517700488!2d78.3263364719618!3d17.494642678754836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9291f73c9b8d%3A0x500bd3bbe095ab6d!2sSri%20Supraja%20Infracon%20-%20Premium%20Plots%20%26%20Resorts!5e1!3m2!1sen!2sin!4v1780045764967!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Supraja Infracon Office Location"
            className="w-full"
          />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container-max flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Sri Supraja Infracon. All Rights
            Reserved.
          </p>

          <p>
            DTCP & RERA Approved Open Plots Near Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
