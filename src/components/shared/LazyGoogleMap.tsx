"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type LazyGoogleMapProps = {
  embedUrl: string;
  externalUrl: string;
  title: string;
  height?: number;
  className?: string;
};

export default function LazyGoogleMap({
  embedUrl,
  externalUrl,
  title,
  height = 450,
  className = "",
}: LazyGoogleMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={`w-full ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12 ${className}`}
      style={{ minHeight: height }}
    >
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A227] text-[#0B1633] shadow-lg">
          <MapPin size={30} aria-hidden="true" />
        </div>

        <h3 className="text-xl font-bold text-slate-950">
          {title}
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          View the location, nearby roads and directions using Google Maps.
          The interactive map loads only when requested.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="rounded-full bg-[#0B1633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C9A227] hover:text-[#0B1633]"
          >
            Load Interactive Map
          </button>

          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-[#C9A227] hover:bg-amber-50"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}