"use client";

import { useEffect, useMemo, useState } from "react";

type TrafficType = "human" | "known_bot" | "suspected_bot";

type ClickEvent = {
  id: number;
  created_at: string;
  session_id: string;
  visitor_id: string | null;
  event_type: string;
  page_path: string;
  page_title: string;
  target_url: string | null;
  link_text: string;
  element_type: string;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  device_type: "mobile" | "tablet" | "desktop";
  browser: string;
  ip_address: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  traffic_type: TrafficType;
  bot_name: string | null;
  user_agent: string | null;
};

const eventLabels: Record<string, string> = {
  page_view: "Page View",
  site_click: "Website Click",
  phone_click: "Phone",
  whatsapp_click: "WhatsApp",
  email_click: "Email",
  download_click: "Download",
  form_action_click: "Form Action",
};

const trafficLabels: Record<TrafficType, string> = {
  human: "Human",
  known_bot: "Known Bot",
  suspected_bot: "Suspected Bot",
};

const countBy = (
  events: ClickEvent[],
  selector: (item: ClickEvent) => string,
) =>
  Object.entries(
    events.reduce<Record<string, number>>((result, event) => {
      const key = selector(event) || "Unknown";
      result[key] = (result[key] || 0) + 1;
      return result;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);

const csvCell = (value: string | number | null) =>
  `"${String(value ?? "").replace(/"/g, '""')}"`;

const countryNames =
  typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

const countryName = (country: string | null) => {
  if (!country) return "";

  try {
    return countryNames?.of(country) || country;
  } catch {
    return country;
  }
};

const locationLabel = (event: ClickEvent) =>
  [event.city, event.region, countryName(event.country)]
    .filter(Boolean)
    .join(", ") || "Unknown";

const maskIp = (ip: string | null) => {
  if (!ip) return "Unavailable";

  if (ip.includes(":")) {
    const parts = ip.split(":").filter(Boolean);
    return `${parts.slice(0, 3).join(":")}:…`;
  }

  const parts = ip.split(".");
  return parts.length === 4 ? `${parts[0]}.${parts[1]}.xxx.xxx` : "Unavailable";
};

const shortId = (value: string | null) =>
  value ? `${value.slice(0, 8)}…` : "Unavailable";

function IdValue({
  label,
  value,
}: {
  label: "Visitor" | "Session";
  value: string | null;
}) {
  const [copied, setCopied] = useState(false);

  const copyId = async () => {
    if (!value) return;

    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-xs text-slate-500">{label}</span>
      {value ? (
        <button
          type="button"
          onClick={copyId}
          title={`${label} ID: ${value}. Click to copy.`}
          aria-label={`Copy full ${label.toLowerCase()} ID ${value}`}
          className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
        >
          {copied ? "Copied" : shortId(value)}
        </button>
      ) : (
        <span className="text-xs text-slate-400">Unavailable</span>
      )}
    </div>
  );
}

export default function ClickAnalyticsClient() {
  const [events, setEvents] = useState<ClickEvent[]>([]);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [truncated, setTruncated] = useState(false);
  const [typeFilter, setTypeFilter] = useState("All");
  const [trafficFilter, setTrafficFilter] = useState<"human" | "known_bot" | "suspected_bot" | "all">("human");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let active = true;

    const loadEvents = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`/api/click-events?days=${days}`, {
          cache: "no-store",
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Unable to load click analytics");
        }

        if (active) {
          setEvents(result.events || []);
          setTruncated(Boolean(result.truncated));
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Unable to load click analytics",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    void loadEvents();

    return () => {
      active = false;
    };
  }, [days]);

  const trafficEvents = useMemo(
    () =>
      events.filter(
        (event) =>
          trafficFilter === "all" || event.traffic_type === trafficFilter,
      ),
    [events, trafficFilter],
  );

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return trafficEvents.filter((event) => {
      const matchesType =
        typeFilter === "All" || event.event_type === typeFilter;
      const haystack = [
        event.page_path,
        event.page_title,
        event.target_url,
        event.link_text,
        event.utm_source,
        event.utm_campaign,
        event.session_id,
        event.visitor_id,
        event.ip_address,
        event.city,
        event.region,
        event.country,
        event.bot_name,
        event.user_agent,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesType && (!query || haystack.includes(query));
    });
  }, [trafficEvents, search, typeFilter]);

  const stats = useMemo(() => {
    const uniqueSessions = new Set(
      trafficEvents.map((event) => event.session_id),
    ).size;
    const uniqueVisitors = new Set(
      trafficEvents.map((event) => event.visitor_id).filter(Boolean),
    ).size;
    const clicks = trafficEvents.filter(
      (event) => event.event_type !== "page_view",
    );

    return {
      views: trafficEvents.filter((event) => event.event_type === "page_view")
        .length,
      clicks: clicks.length,
      sessions: uniqueSessions,
      visitors: uniqueVisitors,
      phone: clicks.filter((event) => event.event_type === "phone_click")
        .length,
      whatsapp: clicks.filter((event) => event.event_type === "whatsapp_click")
        .length,
    };
  }, [trafficEvents]);

  const topPages = useMemo(
    () =>
      countBy(
        trafficEvents.filter((event) => event.event_type === "page_view"),
        (event) => event.page_path,
      ).slice(0, 8),
    [trafficEvents],
  );
  const topActions = useMemo(
    () =>
      countBy(
        trafficEvents.filter((event) => event.event_type !== "page_view"),
        (event) => event.link_text || event.target_url || event.event_type,
      ).slice(0, 8),
    [trafficEvents],
  );
  const devices = useMemo(
    () => countBy(trafficEvents, (event) => event.device_type),
    [trafficEvents],
  );
  const locations = useMemo(
    () => countBy(trafficEvents, locationLabel).slice(0, 8),
    [trafficEvents],
  );

  const exportCSV = () => {
    const headers = [
      "Date",
      "Traffic Type",
      "Bot Name",
      "Event",
      "Page",
      "Button or Link",
      "Destination",
      "Device",
      "Browser",
      "IP Address",
      "City",
      "Region",
      "Country",
      "Source",
      "Medium",
      "Campaign",
      "Session",
      "Anonymous Visitor",
      "User Agent",
    ];
    const rows = filteredEvents.map((event) => [
      new Date(event.created_at).toLocaleString(),
      trafficLabels[event.traffic_type] || event.traffic_type,
      event.bot_name,
      event.event_type,
      event.page_path,
      event.link_text,
      event.target_url,
      event.device_type,
      event.browser,
      event.ip_address,
      event.city,
      event.region,
      countryName(event.country),
      event.utm_source,
      event.utm_medium,
      event.utm_campaign,
      event.session_id,
      event.visitor_id,
      event.user_agent,
    ]);
    const csv = [
      headers.map(csvCell).join(","),
      ...rows.map((row) => row.map(csvCell).join(",")),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `supraja-website-analytics-${days}-days.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A7A12]">
              Sri Supraja Infracon
            </p>
            <h1 className="mt-1 text-3xl font-bold">Website Click Analytics</h1>
            <p className="mt-2 text-slate-600">
              Human visitor behaviour is shown by default. Bot traffic remains
              available separately for SEO and GEO analysis.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/admin"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800"
            >
              Back to Leads
            </a>
            <button
              type="button"
              onClick={exportCSV}
              disabled={filteredEvents.length === 0}
              className="rounded-xl bg-[#C9A227] px-5 py-3 font-semibold text-[#0B1633] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Export CSV ({filteredEvents.length.toLocaleString()})
            </button>
          </div>
        </header>

        {truncated && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            This period contains more than 50,000 analytics events. The dashboard
            is showing the newest 50,000 records.
          </div>
        )}

        <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          <StatCard label="Page Views" value={stats.views} />
          <StatCard label="Unique Visitors" value={stats.visitors} />
          <StatCard label="Sessions" value={stats.sessions} />
          <StatCard label="Total Clicks" value={stats.clicks} />
          <StatCard label="Phone Clicks" value={stats.phone} />
          <StatCard label="WhatsApp" value={stats.whatsapp} />
        </section>

        <section className="mb-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <RankingCard title="Most Viewed Pages" rows={topPages} />
          <RankingCard title="Most Clicked Actions" rows={topActions} />
          <RankingCard title="Device Split" rows={devices} />
          <RankingCard title="Top Visitor Locations" rows={locations} />
        </section>

        <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 border-b border-slate-200 p-5 lg:grid-cols-[180px_200px_220px_1fr]">
            <select
              value={days}
              onChange={(event) => setDays(Number(event.target.value))}
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
            >
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>

            <select
              value={trafficFilter}
              onChange={(event) =>
                setTrafficFilter(
                  event.target.value as
                    | "human"
                    | "known_bot"
                    | "suspected_bot"
                    | "all",
                )
              }
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
            >
              <option value="human">Human traffic</option>
              <option value="known_bot">Known bots</option>
              <option value="suspected_bot">Suspected bots</option>
              <option value="all">All traffic</option>
            </select>

            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
            >
              <option value="All">All event types</option>
              {Object.entries(eventLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search page, action, campaign, bot, IP or location"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
            />
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-500">
              Loading click analytics...
            </div>
          ) : error ? (
            <div className="m-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
              {error}. Run the supplied Supabase SQL script before opening this
              page.
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              No matching events recorded yet.
            </div>
          ) : (
            <div className="max-h-[68vh] overflow-auto">
              <table className="w-full min-w-[1760px] text-sm">
                <thead className="sticky top-0 z-10 bg-slate-100">
                  <tr>
                    <TableHeading>Date</TableHeading>
                    <TableHeading>Traffic</TableHeading>
                    <TableHeading>Type</TableHeading>
                    <TableHeading>Page</TableHeading>
                    <TableHeading>Viewed / clicked item</TableHeading>
                    <TableHeading>Destination</TableHeading>
                    <TableHeading>Campaign</TableHeading>
                    <TableHeading>Device</TableHeading>
                    <TableHeading>Visitor Location</TableHeading>
                    <TableHeading>Visitor / Session</TableHeading>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="border-t border-slate-100">
                      <td className="whitespace-nowrap p-4 text-slate-500">
                        {new Date(event.created_at).toLocaleString()}
                      </td>
                      <td className="min-w-36 p-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {trafficLabels[event.traffic_type] || event.traffic_type}
                        </span>
                        {event.bot_name && (
                          <p className="mt-2 text-xs font-medium text-slate-500">
                            {event.bot_name}
                          </p>
                        )}
                      </td>
                      <td className="p-4">
                        <span className="rounded-full bg-[#C9A227]/15 px-3 py-1 font-semibold text-[#775D0B]">
                          {eventLabels[event.event_type] || event.event_type}
                        </span>
                      </td>
                      <td className="max-w-xs p-4">
                        <p className="truncate font-medium">{event.page_path}</p>
                        <p className="mt-1 truncate text-xs text-slate-500">
                          {event.page_title}
                        </p>
                      </td>
                      <td className="max-w-xs p-4">
                        <p className="truncate font-medium">
                          {event.event_type === "page_view"
                            ? event.page_title || event.page_path
                            : event.link_text || "(Unlabelled element)"}
                        </p>
                      </td>
                      <td className="max-w-xs p-4">
                        <p className="truncate text-slate-600">
                          {event.target_url || "-"}
                        </p>
                      </td>
                      <td className="max-w-xs p-4">
                        <p className="truncate">
                          {event.utm_campaign || event.utm_source || "Direct"}
                        </p>
                        {event.utm_medium && (
                          <p className="mt-1 text-xs text-slate-500">
                            {event.utm_medium}
                          </p>
                        )}
                      </td>
                      <td className="p-4 capitalize">
                        {event.device_type}
                        <p className="mt-1 text-xs text-slate-500">
                          {event.browser}
                        </p>
                      </td>
                      <td className="min-w-56 p-4">
                        <p>{locationLabel(event)}</p>
                        <p
                          className="mt-1 text-xs text-slate-500"
                          title="IP address is partially hidden for privacy"
                        >
                          {maskIp(event.ip_address)}
                        </p>
                      </td>
                      <td className="min-w-52 space-y-2 p-4">
                        <IdValue label="Visitor" value={event.visitor_id} />
                        <IdValue label="Session" value={event.session_id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value.toLocaleString()}</p>
    </div>
  );
}

function RankingCard({
  title,
  rows,
}: {
  title: string;
  rows: [string, number][];
}) {
  const maximum = rows[0]?.[1] || 1;

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-4 text-lg font-bold">{title}</h2>
      {rows.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-500">No data yet</p>
      ) : (
        <div className="space-y-4">
          {rows.map(([label, value]) => (
            <div key={label}>
              <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                <span className="truncate text-slate-700">{label}</span>
                <strong>{value}</strong>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#C9A227]"
                  style={{ width: `${Math.max(4, (value / maximum) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TableHeading({ children }: { children: React.ReactNode }) {
  return (
    <th className="whitespace-nowrap p-4 text-left font-semibold text-slate-700">
      {children}
    </th>
  );
}
