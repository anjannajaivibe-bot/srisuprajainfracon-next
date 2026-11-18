import Image from "next/image";
import Link from "next/link";

const IMAGE = "/projects/supraja-iris/gallery/supraja-iris-gallery-1.webp";

export default function LemonTreeProgress({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="fi-progress">
        <div className="fi-progress-inner">
          <figure className="fi-progress-media">
            <Image
              src={IMAGE}
              alt="Lemon Tree Resort construction progress at Supraja IRIS in October 2026"
              fill
              sizes="(max-width: 991px) 100vw, 57vw"
              className="object-cover"
            />
            <figcaption>Lemon Tree Resort · October 2026</figcaption>
          </figure>
          <div className="fi-progress-copy">
            <p className="fi-progress-kicker">Latest Construction Update · October 2026</p>
            <h2>Lemon Tree Resort Construction Progress</h2>
            <p>
              Approximately 60% construction completed at the Lemon Tree Resort component within Supraja IRIS, based on the latest project update.
            </p>
            <div className="fi-progress-metric" aria-label="Approximately 60 percent construction completed">
              <strong>≈60%</strong>
              <span>Construction completed</span>
            </div>
            <div>
              <Link href="/projects/supraja-iris-resort-plots#construction-progress" className="fi-progress-link">
                View Latest Project Progress <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="construction-progress" className="bg-slate-50 px-4 py-20 sm:px-6 lg:py-24">
      <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="relative aspect-[16/9]">
            <Image
              src={IMAGE}
              alt="Latest Lemon Tree Resort construction progress at Supraja IRIS, October 2026"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-slate-100 bg-white px-5 py-4 text-sm">
            <span className="font-bold text-slate-900">Lemon Tree Resort</span>
            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">Approx. 60% Completed</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Latest Construction Progress</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Visible on-site progress at Lemon Tree Resort</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Approximately 60% construction completed at the Lemon Tree Resort component within Supraja IRIS, according to the latest project update. The photograph documents visible site progress in October 2026.
          </p>

          <dl className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-amber-500 pl-4">
              <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Status</dt>
              <dd className="mt-1 font-bold text-slate-950">Under Construction</dd>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Latest Update</dt>
              <dd className="mt-1 font-bold text-slate-950">October 2026</dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            The image is an actual site photograph and is shown as a construction progress update. Completion timelines and future facilities remain subject to project execution.
          </p>
        </div>
      </div>
    </section>
  );
}
