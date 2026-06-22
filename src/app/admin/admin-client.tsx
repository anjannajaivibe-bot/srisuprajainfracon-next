"use client";

import { useEffect, useMemo, useState } from "react";

type Activity = {
  id: string;
  lead_id: string;
  activity: string;
  created_at: string;
};

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
  assigned_to: string | null;
  duplicate_of: string | null;
  last_contacted_at: string | null;
  created_at: string;
  activities?: Activity[];
};

const statuses = [
  "New",
  "Contacted",
  "Site Visit Planned",
  "Follow-up",
  "Converted",
  "Not Interested",
];

const salesTeam = ["Anjanna", "Sahiti", "Praveen", "Sales Manager"];

const projects = [
  "Contact Page",
  "General Enquiry",
  "Supraja IRIS",
  "Bridge County",
  "Sindhu Sarovar",
  "Subhash Meadows",
];

const whatsappTemplates = [
  {
    label: "Intro",
    text:
      "Hello, this is from Sri Supraja Infracon. Thank you for your enquiry. May I know which project you are interested in?",
  },
  {
    label: "Site Visit",
    text:
      "Thank you for your interest. We can arrange a site visit at your convenient time. Please confirm your preferred day and time.",
  },
  {
    label: "Follow-up",
    text:
      "Hello, following up on your enquiry with Sri Supraja Infracon. Please let us know if you need project details, pricing, or site visit support.",
  },
];

export default function AdminClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");
  const [assigneeFilter, setAssigneeFilter] = useState("All");
  const [openTimeline, setOpenTimeline] = useState<string | null>(null);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setLeads(data.leads || []);
      }
    } catch (error) {
      console.error("Unable to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();

    const interval = window.setInterval(fetchLeads, 30000);

    return () => window.clearInterval(interval);
  }, []);

  const updateLead = async (
    id: string,
    updates: Partial<
      Pick<
        Lead,
        | "status"
        | "notes"
        | "follow_up_date"
        | "assigned_to"
        | "last_contacted_at"
      >
    >
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
        assigned_to: updatedLead.assigned_to,
        last_contacted_at: updatedLead.last_contacted_at,
      }),
    });

    fetchLeads();
  };

  const markContacted = async (id: string, method: "Call" | "WhatsApp") => {
    const lead = leads.find((item) => item.id === id);
    if (!lead) return;

    const updatedLead = {
      ...lead,
      last_contacted_at: new Date().toISOString(),
      status: lead.status === "New" ? "Contacted" : lead.status,
    };

    setLeads((current) =>
      current.map((item) => (item.id === id ? updatedLead : item))
    );

    await fetch("/api/leads", {
      method: "PATCH",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status: updatedLead.status,
        notes: updatedLead.notes,
        follow_up_date: updatedLead.follow_up_date,
        assigned_to: updatedLead.assigned_to,
        last_contacted_at: updatedLead.last_contacted_at,
        contact_method: method,
      }),
    });
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const searchText = `${lead.name} ${lead.phone} ${lead.email || ""} ${
        lead.project || ""
      } ${lead.assigned_to || ""}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;

      const matchesProject =
        projectFilter === "All" || lead.project === projectFilter;

      const matchesAssignee =
        assigneeFilter === "All" || lead.assigned_to === assigneeFilter;

      return matchesSearch && matchesStatus && matchesProject && matchesAssignee;
    });
  }, [leads, search, statusFilter, projectFilter, assigneeFilter]);

  const stats = useMemo(() => {
    const today = new Date();
    const todayKey = today.toISOString().slice(0, 10);

    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);

    const monthAgo = new Date();
    monthAgo.setDate(today.getDate() - 30);

    return {
      total: leads.length,
      today: leads.filter((lead) => lead.created_at.slice(0, 10) === todayKey)
        .length,
      week: leads.filter((lead) => new Date(lead.created_at) >= weekAgo).length,
      month: leads.filter((lead) => new Date(lead.created_at) >= monthAgo)
        .length,
      dueToday: leads.filter((lead) => lead.follow_up_date === todayKey).length,
      overdue: leads.filter(
        (lead) =>
          lead.follow_up_date &&
          lead.follow_up_date < todayKey &&
          lead.status !== "Converted" &&
          lead.status !== "Not Interested"
      ).length,
      converted: leads.filter((lead) => lead.status === "Converted").length,
      duplicate: leads.filter((lead) => lead.duplicate_of).length,
    };
  }, [leads]);

  const salesPerformance = useMemo(() => {
    return salesTeam.map((person) => {
      const assignedLeads = leads.filter((lead) => lead.assigned_to === person);

      return {
        name: person,
        total: assignedLeads.length,
        contacted: assignedLeads.filter((lead) => lead.status === "Contacted")
          .length,
        siteVisit: assignedLeads.filter(
          (lead) => lead.status === "Site Visit Planned"
        ).length,
        converted: assignedLeads.filter((lead) => lead.status === "Converted")
          .length,
      };
    });
  }, [leads]);

  const exportCSV = () => {
    const headers = [
      "Name",
      "Phone",
      "Email",
      "Project",
      "Assigned To",
      "Status",
      "Follow Up Date",
      "Last Contacted",
      "Duplicate",
      "Notes",
      "Source",
      "Date",
    ];

    const rows = filteredLeads.map((lead) => [
      lead.name,
      lead.phone,
      lead.email || "",
      lead.project || "",
      lead.assigned_to || "",
      lead.status,
      lead.follow_up_date || "",
      lead.last_contacted_at
        ? new Date(lead.last_contacted_at).toLocaleString()
        : "",
      lead.duplicate_of ? "Yes" : "No",
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

  const buildWhatsappUrl = (phone: string, text: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    const whatsappPhone = cleanPhone.startsWith("91")
      ? cleanPhone
      : `91${cleanPhone}`;

    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`;
  };

  const getStatusClassName = (status: string) => {
    if (status === "New") {
      return "border-blue-200 bg-blue-50 text-blue-700";
    }

    if (status === "Contacted") {
      return "border-orange-200 bg-orange-50 text-orange-700";
    }

    if (status === "Site Visit Planned") {
      return "border-purple-200 bg-purple-50 text-purple-700";
    }

    if (status === "Follow-up") {
      return "border-amber-200 bg-amber-50 text-amber-700";
    }

    if (status === "Converted") {
      return "border-green-200 bg-green-50 text-green-700";
    }

    if (status === "Not Interested") {
      return "border-red-200 bg-red-50 text-red-700";
    }

    return "border-slate-200 bg-slate-50 text-slate-700";
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6">
      <div className="w-full px-6 py-8">
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

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <Card title="Total" value={stats.total} />
          <Card title="Today" value={stats.today} />
          <Card title="7 Days" value={stats.week} />
          <Card title="30 Days" value={stats.month} />
          <Card title="Due Today" value={stats.dueToday} />
          <Card title="Overdue" value={stats.overdue} />
          <Card title="Converted" value={stats.converted} />
          <Card title="Duplicates" value={stats.duplicate} />
        </div>

        <div className="mb-8 grid gap-4 rounded-3xl bg-white p-5 shadow lg:grid-cols-4">
          {salesPerformance.map((person) => (
            <div key={person.name} className="rounded-2xl border p-4">
              <p className="font-bold text-slate-900">{person.name}</p>
              <p className="mt-2 text-sm text-slate-600">
                Leads: {person.total}
              </p>
              <p className="text-sm text-slate-600">
                Contacted: {person.contacted}
              </p>
              <p className="text-sm text-slate-600">
                Site Visits: {person.siteVisit}
              </p>
              <p className="text-sm text-slate-600">
                Converted: {person.converted}
              </p>
            </div>
          ))}
        </div>

        {(stats.dueToday > 0 || stats.overdue > 0) && (
          <div className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
            <strong>Follow-up Alert:</strong> {stats.dueToday} due today and{" "}
            {stats.overdue} overdue.
          </div>
        )}

        <div className="mb-6 grid gap-4 rounded-3xl bg-white p-5 shadow md:grid-cols-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, email, project or assignee"
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

          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
          >
            <option value="All">All Projects</option>
            {projects.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>

          <select
            value={assigneeFilter}
            onChange={(e) => setAssigneeFilter(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#C9A227]"
          >
            <option value="All">All Assignees</option>
            {salesTeam.map((person) => (
              <option key={person} value={person}>
                {person}
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
            <div className="max-h-[72vh] w-full overflow-auto">
              <table className="w-full min-w-[1800px]">
                <thead className="sticky top-0 z-20 bg-slate-100">
                  <tr>
                    <th className="p-4 text-left">Lead</th>
                    <th className="p-4 text-left">Project</th>
                    <th className="p-4 text-left">Assigned To</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Last Contact</th>
                    <th className="p-4 text-left">Follow-up</th>
                    <th className="p-4 text-left">Notes</th>
                    <th className="p-4 text-left">WhatsApp Templates</th>
                    <th className="sticky right-0 z-30 bg-slate-100 p-4 text-left">
                      Actions
                    </th>
                    <th className="p-4 text-left">Timeline</th>
                    <th className="p-4 text-left">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-t align-top">
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{lead.name}</p>
                        <p className="text-sm text-slate-600">{lead.phone}</p>
                        <p className="text-sm text-slate-500">
                          {lead.email || "No email"}
                        </p>

                        {lead.duplicate_of && (
                          <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                            Duplicate Lead
                          </span>
                        )}

                        {lead.message && (
                          <p className="mt-2 max-w-xs text-sm text-slate-500">
                            {lead.message}
                          </p>
                        )}
                      </td>

                      <td className="p-4">{lead.project || "General"}</td>

                      <td className="p-4">
                        <select
                          value={lead.assigned_to || ""}
                          onChange={(e) =>
                            updateLead(lead.id, {
                              assigned_to: e.target.value || null,
                            })
                          }
                          className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#C9A227]"
                        >
                          <option value="">Unassigned</option>
                          {salesTeam.map((person) => (
                            <option key={person} value={person}>
                              {person}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateLead(lead.id, {
                              status: e.target.value,
                            })
                          }
                          className={`rounded-full border px-3 py-2 text-sm font-semibold outline-none ${getStatusClassName(
                            lead.status
                          )}`}
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="p-4 text-sm text-slate-600">
                        {lead.last_contacted_at
                          ? new Date(lead.last_contacted_at).toLocaleString()
                          : "-"}
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
                          {whatsappTemplates.map((template) => (
                            <a
                              key={template.label}
                              href={buildWhatsappUrl(lead.phone, template.text)}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() =>
                                markContacted(lead.id, "WhatsApp")
                              }
                              className="rounded-full bg-green-600 px-4 py-2 text-center text-xs font-semibold text-white"
                            >
                              {template.label}
                            </a>
                          ))}
                        </div>
                      </td>

                      <td className="sticky right-0 z-20 bg-white p-4">
                        <div className="flex flex-col gap-2">
                          <a
                            href={`tel:${lead.phone}`}
                            onClick={() => markContacted(lead.id, "Call")}
                            className="rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
                          >
                            Call
                          </a>

                          <a
                            href={buildWhatsappUrl(
                              lead.phone,
                              "Hello, this is from Sri Supraja Infracon. Thank you for your enquiry."
                            )}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() =>
                              markContacted(lead.id, "WhatsApp")
                            }
                            className="rounded-full bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() =>
                            setOpenTimeline(
                              openTimeline === lead.id ? null : lead.id
                            )
                          }
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                        >
                          View
                        </button>

                        {openTimeline === lead.id && (
                          <div className="mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow">
                            {(lead.activities || []).length === 0 ? (
                              <p className="text-sm text-slate-500">
                                No activity yet.
                              </p>
                            ) : (
                              <div className="space-y-3">
                                {(lead.activities || []).map((activity) => (
                                  <div key={activity.id}>
                                    <p className="text-sm font-medium text-slate-800">
                                      {activity.activity}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                      {new Date(
                                        activity.created_at
                                      ).toLocaleString()}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </td>

                      <td className="p-4 text-sm text-slate-500">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
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
