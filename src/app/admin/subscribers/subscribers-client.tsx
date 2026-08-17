"use client";

import { useEffect, useMemo, useState } from "react";

type Subscriber = {
  id: string;
  name: string;
  email: string;
  status: "active" | "unsubscribed";
  source: string;
  subscribed_at: string;
  unsubscribed_at: string | null;
  created_at: string;
  updated_at: string;
};

function csvEscape(value: string) {
  const normalized = value.replace(/\r?\n/g, " ");
  return `"${normalized.replace(/"/g, '""')}"`;
}

function formatDate(value: string | null) {
  if (!value) return "-";
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function statusClass(status: Subscriber["status"]) {
  if (status === "active") return "border-green-200 bg-green-50 text-green-700";
  return "border-slate-200 bg-slate-100 text-slate-600";
}

export default function SubscribersClient() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const loadSubscribers = async () => {
    try {
      setError("");
      const response = await fetch("/api/admin/newsletter-subscribers", {
        cache: "no-store",
      });

      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      if (response.status === 403) {
        window.location.href = "/admin";
        return;
      }

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to load subscribers.");
      }

      setSubscribers(data.subscribers || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load subscribers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const filteredSubscribers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return subscribers.filter((subscriber) => {
      const matchesSearch =
        !query ||
        `${subscriber.name} ${subscriber.email} ${subscriber.source}`
          .toLowerCase()
          .includes(query);
      const matchesStatus =
        statusFilter === "All" || subscriber.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [subscribers, search, statusFilter]);

  const stats = useMemo(() => {
    const now = new Date();
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(now.getDate() - 7);

    return {
      total: subscribers.length,
      active: subscribers.filter((item) => item.status === "active").length,
      unsubscribed: subscribers.filter((item) => item.status === "unsubscribed").length,
      last7Days: subscribers.filter(
        (item) => new Date(item.subscribed_at) >= sevenDaysAgo,
      ).length,
    };
  }, [subscribers]);

  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Status",
      "Source",
      "Subscribed At",
      "Unsubscribed At",
    ];

    const rows = filteredSubscribers.map((subscriber) => [
      subscriber.name,
      subscriber.email,
      subscriber.status,
      subscriber.source,
      formatDate(subscriber.subscribed_at),
      formatDate(subscriber.unsubscribed_at),
    ]);

    const csv = [
      headers.map(csvEscape).join(","),
      ...rows.map((row) => row.map((value) => csvEscape(String(value))).join(",")),
    ].join("\n");

    const blob = new Blob(["\ufeff", csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `supraja-newsletter-subscribers-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A77B00]">
              Sri Supraja Infracon CRM
            </p>
            <h1 className="mt-1 text-3xl font-bold text-slate-950">
              Newsletter Subscribers
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              People who subscribed to Sri Supraja Insights and project updates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/admin"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
            >
              Lead Dashboard
            </a>
            <a
              href="/admin/clicks"
              className="rounded-xl border border-[#C9A227]/50 bg-white px-5 py-3 text-sm font-semibold text-[#0B1633]"
            >
              Website Clicks
            </a>
            <button
              type="button"
              onClick={exportCSV}
              disabled={filteredSubscribers.length === 0}
              className="rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-semibold text-[#0B1633] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Export CSV
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Subscribers" value={stats.total} />
          <StatCard label="Active" value={stats.active} />
          <StatCard label="Unsubscribed" value={stats.unsubscribed} />
          <StatCard label="New in 7 Days" value={stats.last7Days} />
        </div>

        <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_240px_auto]">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, email or source"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227]"
          />
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#C9A227]"
          >
            <option value="All">All Statuses</option>
            <option value="active">Active</option>
            <option value="unsubscribed">Unsubscribed</option>
          </select>
          <button
            type="button"
            onClick={loadSubscribers}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Refresh
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h2 className="text-lg font-bold text-slate-950">Subscriber Database</h2>
            <span className="text-sm text-slate-500">
              {filteredSubscribers.length} record{filteredSubscribers.length === 1 ? "" : "s"}
            </span>
          </div>

          {loading ? (
            <div className="p-10 text-center text-slate-500">Loading subscribers...</div>
          ) : error ? (
            <div className="p-8 text-center text-red-600">{error}</div>
          ) : filteredSubscribers.length === 0 ? (
            <div className="p-10 text-center text-slate-500">No subscribers found.</div>
          ) : (
            <div className="max-h-[68vh] overflow-auto">
              <table className="w-full min-w-[900px] text-sm">
                <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-5 py-3 text-left">Subscriber</th>
                    <th className="px-5 py-3 text-left">Status</th>
                    <th className="px-5 py-3 text-left">Source</th>
                    <th className="px-5 py-3 text-left">Subscribed</th>
                    <th className="px-5 py-3 text-left">Unsubscribed</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="border-t border-slate-100 align-top">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-slate-950">
                          {subscriber.name || "Name not provided"}
                        </p>
                        <a
                          href={`mailto:${subscriber.email}`}
                          className="mt-1 block text-sm text-blue-700 hover:underline"
                        >
                          {subscriber.email}
                        </a>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold capitalize ${statusClass(
                            subscriber.status,
                          )}`}
                        >
                          {subscriber.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 capitalize text-slate-700">
                        {subscriber.source || "blog"}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {formatDate(subscriber.subscribed_at)}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {formatDate(subscriber.unsubscribed_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold text-[#0B1633]">{value}</p>
    </div>
  );
}
