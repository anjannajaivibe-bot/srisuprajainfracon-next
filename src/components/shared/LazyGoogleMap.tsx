type LazyGoogleMapProps = {
  embedUrl: string;
  externalUrl: string;
  title: string;
  height?: number;
  className?: string;
};

/**
 * Display the office map without requiring an extra click.
 * Native lazy loading defers the Google iframe until the footer approaches
 * the viewport, avoiding unnecessary third-party requests during page load.
 */
export default function LazyGoogleMap({
  embedUrl,
  externalUrl,
  title,
  height = 450,
  className = "",
}: LazyGoogleMapProps) {
  return (
    <div className={`w-full bg-slate-100 ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="w-full"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
        <p className="text-sm font-semibold text-[#0B1633]">{title}</p>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#C9A227] bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1633] transition hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
