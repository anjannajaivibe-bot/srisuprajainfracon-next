"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  project: string | null;
  message: string | null;
  source: string | null;
  status: string;
  notes: string | null;
  follow_up_date: string | null;
  created_at: string;
};

const statuses = [
  "New",
  "Contacted",
  "Site Visit Planned",
  "Follow-up",
  "Converted",
  "Not Interested",
];

export default function AdminClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();

      if (data.success) {
        setLeads(data.leads || []);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateLead = async (
    id: string,
    updates: Partial<Pick<Lead, "status" | "notes" | "follow_up_date">>
  ) => {
    const lead = leads.find((item) => item.id === id);
    if (!lead) return;

    const updatedLead = {
      ...lead,
      ...updates,
    };

    setLeads((current) =>
      current.map((item) => (item.id === id ? updatedLead : item))
    );

    await fetch("/api/leads", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status: updatedLead.status,
        notes: updatedLead.notes,
        follow_up_date: updatedLead.follow_up_date,
      }),
    });
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const searchText = `${lead.name} ${lead.phone} ${lead.email || ""} ${
        lead.project || ""
      }`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: leads.length,
      new: leads.filter((l) => l.status === "New").length,
      contacted: leads.filter((l) => l.status === "Contacted").length,
      siteVisit: leads.filter((l) => l.status === "Site Visit Planned").length,
      converted: leads.filter((l) => l.status === "Converted").length,
    };
  }, [leads]);

  const exportCSV = () => {
    const headers = [
      "Name",
      "Phone",
      "Email",
      "Project",
      "Status",
      "Follow Up Date",
      "Notes",
      "Source",
      "Date",
    ];

    const rows = filteredLeads.map((lead) => [
      lead.name,
      lead.phone,
      lead.email || "",
      lead.project || "",
      lead.status,
      lead.follow_up_date || "",
      lead.notes || "",
      lead.source || "",
      new Date(lead.created_at).toLocaleString(),
    ]);

    const csv = [headers.join(","), ...rows.map((row) => row.join(","))].join(
      "\n"
    );

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "supraja-leads.csv";
    link.click();
  };

  const logout = async () => {
    await fetch("/api/admin-logout", {
      method: "POST",
    });

    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Supraja Infracon CRM
            </h1>
            <p className="mt-1 text-slate-600">Lead Management Dashboard</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={exportCSV}
              className="rounded-xl bg-[#C9A227] px-5 py-3 font-semibold text-[#0B1633]"
            >
              Export CSV
            </button>

            <button
              onClick={logout}
              className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-5">
          <Card title="Total Leads" value={stats.total} />
          <Card title="New" value={stats.new} />
          <Card title="Contacted" value={stats.contacted} />
          <Card title="Site Visit" value={stats.siteVisit} />
          <Card title="Converted" value={stats.converted} />
        </div>

        <div className="mb-6 grid gap-4 rounded-3xl bg-white p-5 shadow md:grid-cols-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, email or project"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
          >
            <option value="All">All Statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow">
          <div className="border-b p-5">
            <h2 className="text-xl font-bold">Lead Enquiries</h2>
          </div>

          {loading ? (
            <div className="p-10 text-center">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1150px]">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 text-left">Lead</th>
                    <th className="p-4 text-left">Project</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Follow-up</th>
                    <th className="p-4 text-left">Notes</th>
                    <th className="p-4 text-left">Actions</th>
                    <th className="p-4 text-left">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead) => {
                    const cleanPhone = lead.phone.replace(/\D/g, "");
                    const whatsappPhone = cleanPhone.startsWith("91")
                      ? cleanPhone
                      : `91${cleanPhone}`;

                    return (
                      <tr key={lead.id} className="border-t align-top">
                        <td className="p-4">
                          <p className="font-bold text-slate-900">
                            {lead.name}
                          </p>
                          <p className="text-sm text-slate-600">
                            {lead.phone}
                          </p>
                          <p className="text-sm text-slate-500">
                            {lead.email || "No email"}
                          </p>
                          {lead.message && (
                            <p className="mt-2 max-w-xs text-sm text-slate-500">
                              {lead.message}
                            </p>
                          )}
                        </td>

                        <td className="p-4">{lead.project || "General"}</td>

                        <td className="p-4">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              updateLead(lead.id, {
                                status: e.target.value,
                              })
                            }
                            className="rounded-full border border-slate-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-700 outline-none"
                          >
                            {statuses.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className="p-4">
                          <input
                            type="date"
                            value={lead.follow_up_date || ""}
                            onChange={(e) =>
                              updateLead(lead.id, {
                                follow_up_date: e.target.value || null,
                              })
                            }
                            className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-[#C9A227]"
                          />
                        </td>

                        <td className="p-4">
                          <textarea
                            value={lead.notes || ""}
                            onChange={(e) =>
                              updateLead(lead.id, {
                                notes: e.target.value,
                              })
                            }
                            placeholder="Add sales notes"
                            rows={3}
                            className="w-56 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#C9A227]"
                          />
                        </td>

                        <td className="p-4">
                          <div className="flex flex-col gap-2">
                            <a
                              href={`tel:${lead.phone}`}
                              className="rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
                            >
                              Call
                            </a>

                            <a
                              href={`https://wa.me/${whatsappPhone}`}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </td>

                        <td className="p-4 text-sm text-slate-500">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredLeads.length === 0 && (
                <div className="p-10 text-center text-slate-500">
                  No leads available.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
    </div>
  );
}