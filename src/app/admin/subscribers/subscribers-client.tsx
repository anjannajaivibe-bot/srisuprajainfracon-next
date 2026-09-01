"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  History,
  ImagePlus,
  Mail,
  RefreshCw,
  Send,
  Upload,
  Users,
  X,
} from "lucide-react";

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

type UpdateHistory = {
  id: string;
  subject: string;
  message: string;
  imageUrl: string;
  buttonLabel: string;
  buttonUrl: string;
  recipientCount: number;
  sentCount: number;
  failedCount: number;
  createdAt: string;
  createdBy: string;
};

type Composer = {
  subject: string;
  message: string;
  imageUrl: string;
  buttonLabel: string;
  buttonUrl: string;
};

const EMPTY_COMPOSER: Composer = {
  subject: "",
  message: "",
  imageUrl: "",
  buttonLabel: "",
  buttonUrl: "",
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
  if (status === "active") return "border-emerald-200 bg-emerald-50 text-emerald-700";
  return "border-slate-200 bg-slate-100 text-slate-600";
}

export default function SubscribersClient() {
  const [tab, setTab] = useState<"subscribers" | "send">("subscribers");
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [history, setHistory] = useState<UpdateHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [composer, setComposer] = useState<Composer>(EMPTY_COMPOSER);
  const [uploading, setUploading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadSubscribers = async () => {
    try {
      setError("");
      const response = await fetch("/api/admin/newsletter-subscribers", { cache: "no-store" });
      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      if (response.status === 403) {
        window.location.href = "/admin";
        return;
      }
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Unable to load subscribers.");
      setSubscribers(data.subscribers || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load subscribers.");
    } finally {
      setLoading(false);
    }
  };

  const loadHistory = async () => {
    try {
      const response = await fetch("/api/admin/subscriber-updates", { cache: "no-store" });
      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      const data = await response.json();
      if (response.ok && data.success) setHistory(data.history || []);
    } catch {
      // History is supporting information. Keep the composer available if it cannot load.
    } finally {
      setHistoryLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
    loadHistory();
  }, []);

  const filteredSubscribers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return subscribers.filter((subscriber) => {
      const matchesSearch =
        !query ||
        `${subscriber.name} ${subscriber.email} ${subscriber.source}`.toLowerCase().includes(query);
      const matchesStatus = statusFilter === "All" || subscriber.status === statusFilter;
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
      last7Days: subscribers.filter((item) => new Date(item.subscribed_at) >= sevenDaysAgo).length,
    };
  }, [subscribers]);

  const updateComposer = (key: keyof Composer, value: string) => {
    setComposer((current) => ({ ...current, [key]: value }));
    setSendResult(null);
  };

  const composerValid = useMemo(() => {
    const hasButtonPair =
      (!composer.buttonLabel && !composer.buttonUrl) ||
      (Boolean(composer.buttonLabel.trim()) && Boolean(composer.buttonUrl.trim()));
    return composer.subject.trim().length >= 4 && composer.message.trim().length >= 10 && hasButtonPair;
  }, [composer]);

  const exportCSV = () => {
    const headers = ["Name", "Email", "Status", "Source", "Subscribed At", "Unsubscribed At"];
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
    const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `supraja-newsletter-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const uploadImage = async (file: File) => {
    setUploading(true);
    setSendResult(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/admin/subscriber-updates/media", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Unable to upload image.");
      updateComposer("imageUrl", data.url);
    } catch (err) {
      setSendResult({ type: "error", text: err instanceof Error ? err.message : "Unable to upload image." });
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const sendUpdate = async () => {
    setSending(true);
    setSendResult(null);
    try {
      const response = await fetch("/api/admin/subscriber-updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(composer),
      });
      const data = await response.json();
      if (!response.ok || (!data.success && !data.partial)) {
        throw new Error(data.message || "Unable to send update.");
      }
      setSendResult({
        type: data.partial ? "error" : "success",
        text: data.message || `Update sent to ${data.sentCount || 0} subscribers.`,
      });
      setConfirmOpen(false);
      if (!data.partial) setComposer(EMPTY_COMPOSER);
      await loadHistory();
    } catch (err) {
      setConfirmOpen(false);
      setSendResult({ type: "error", text: err instanceof Error ? err.message : "Unable to send update." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A6600]">Sri Supraja Infracon CRM</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-950">Subscriber Communications</h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Manage subscribers and send project updates, social posts, announcements and campaigns from one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/admin" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">Lead Dashboard</a>
            <a href="/admin/clicks" className="rounded-xl border border-[#C9A227]/60 bg-white px-5 py-3 text-sm font-semibold text-[#0B1633] hover:bg-amber-50">Website Clicks</a>
          </div>
        </div>

        <div className="mb-6 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm" role="tablist" aria-label="Subscriber tools">
          <button
            type="button"
            onClick={() => setTab("subscribers")}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${tab === "subscribers" ? "bg-[#0B1633] text-white" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <Users size={17} /> Subscribers
          </button>
          <button
            type="button"
            onClick={() => setTab("send")}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${tab === "send" ? "bg-[#0B1633] text-white" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <Send size={17} /> Send Update
          </button>
        </div>

        {tab === "subscribers" ? (
          <SubscribersTab
            subscribers={subscribers}
            filteredSubscribers={filteredSubscribers}
            stats={stats}
            loading={loading}
            error={error}
            search={search}
            statusFilter={statusFilter}
            setSearch={setSearch}
            setStatusFilter={setStatusFilter}
            reload={loadSubscribers}
            exportCSV={exportCSV}
          />
        ) : (
          <SendUpdateTab
            composer={composer}
            updateComposer={updateComposer}
            activeCount={stats.active}
            uploading={uploading}
            fileInputRef={fileInputRef}
            uploadImage={uploadImage}
            composerValid={composerValid}
            sendResult={sendResult}
            history={history}
            historyLoading={historyLoading}
            onReview={() => setConfirmOpen(true)}
          />
        )}
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/65 p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-send-title">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A6600]">Final confirmation</p>
                <h2 id="confirm-send-title" className="mt-1 text-2xl font-bold text-slate-950">Send to {stats.active} active subscriber{stats.active === 1 ? "" : "s"}?</h2>
              </div>
              <button type="button" onClick={() => setConfirmOpen(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Close confirmation"><X size={20} /></button>
            </div>
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-950">{composer.subject}</p>
              <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm text-slate-600">{composer.message}</p>
              {composer.imageUrl && <p className="mt-3 text-xs font-semibold text-emerald-700">Image attached</p>}
              {composer.buttonUrl && <p className="mt-1 text-xs font-semibold text-blue-700">CTA: {composer.buttonLabel}</p>}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">This sends immediately. Only subscribers currently marked active will receive it.</p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => setConfirmOpen(false)} disabled={sending} className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">Cancel</button>
              <button type="button" onClick={sendUpdate} disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-bold text-[#0B1633] disabled:opacity-60">
                <Send size={16} /> {sending ? "Sending..." : "Send Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SubscribersTab({
  subscribers,
  filteredSubscribers,
  stats,
  loading,
  error,
  search,
  statusFilter,
  setSearch,
  setStatusFilter,
  reload,
  exportCSV,
}: {
  subscribers: Subscriber[];
  filteredSubscribers: Subscriber[];
  stats: { total: number; active: number; unsubscribed: number; last7Days: number };
  loading: boolean;
  error: string;
  search: string;
  statusFilter: string;
  setSearch: (value: string) => void;
  setStatusFilter: (value: string) => void;
  reload: () => void;
  exportCSV: () => void;
}) {
  return (
    <>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Subscribers" value={stats.total} />
        <StatCard label="Active" value={stats.active} />
        <StatCard label="Unsubscribed" value={stats.unsubscribed} />
        <StatCard label="New in 7 Days" value={stats.last7Days} />
      </div>
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px_auto_auto]">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, email or source" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#9A7612] focus:ring-2 focus:ring-amber-100" />
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#9A7612]">
          <option value="All">All Statuses</option>
          <option value="active">Active</option>
          <option value="unsubscribed">Unsubscribed</option>
        </select>
        <button type="button" onClick={reload} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"><RefreshCw size={16} /> Refresh</button>
        <button type="button" onClick={exportCSV} disabled={filteredSubscribers.length === 0} className="rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-bold text-[#0B1633] disabled:cursor-not-allowed disabled:opacity-50">Export CSV</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="text-lg font-bold text-slate-950">Subscriber Database</h2>
          <span className="text-sm text-slate-500">{filteredSubscribers.length} of {subscribers.length}</span>
        </div>
        {loading ? (
          <div className="p-10 text-center text-slate-500">Loading subscribers...</div>
        ) : error ? (
          <div className="p-8 text-center text-red-700">{error}</div>
        ) : filteredSubscribers.length === 0 ? (
          <div className="p-10 text-center text-slate-500">No subscribers found.</div>
        ) : (
          <div className="max-h-[68vh] overflow-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700">
                <tr><th className="px-5 py-3 text-left">Subscriber</th><th className="px-5 py-3 text-left">Status</th><th className="px-5 py-3 text-left">Source</th><th className="px-5 py-3 text-left">Subscribed</th><th className="px-5 py-3 text-left">Unsubscribed</th></tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-t border-slate-100 align-top hover:bg-slate-50/70">
                    <td className="px-5 py-4"><p className="font-semibold text-slate-950">{subscriber.name || "Name not provided"}</p><a href={`mailto:${subscriber.email}`} className="mt-1 block text-sm text-blue-700 hover:underline">{subscriber.email}</a></td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold capitalize ${statusClass(subscriber.status)}`}>{subscriber.status}</span></td>
                    <td className="px-5 py-4 capitalize text-slate-700">{subscriber.source || "blog"}</td>
                    <td className="px-5 py-4 text-slate-600">{formatDate(subscriber.subscribed_at)}</td>
                    <td className="px-5 py-4 text-slate-600">{formatDate(subscriber.unsubscribed_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function SendUpdateTab({
  composer,
  updateComposer,
  activeCount,
  uploading,
  fileInputRef,
  uploadImage,
  composerValid,
  sendResult,
  history,
  historyLoading,
  onReview,
}: {
  composer: Composer;
  updateComposer: (key: keyof Composer, value: string) => void;
  activeCount: number;
  uploading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  uploadImage: (file: File) => void;
  composerValid: boolean;
  sendResult: { type: "success" | "error"; text: string } | null;
  history: UpdateHistory[];
  historyLoading: boolean;
  onReview: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A6600]">Campaign Composer</p><h2 className="mt-1 text-2xl font-bold text-slate-950">Create subscriber update</h2></div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700"><Users size={15} /> {activeCount} active recipient{activeCount === 1 ? "" : "s"}</div>
          </div>

          {sendResult && (
            <div className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm ${sendResult.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}>
              {sendResult.type === "success" ? <CheckCircle2 size={19} className="mt-0.5 shrink-0" /> : <AlertCircle size={19} className="mt-0.5 shrink-0" />}
              <p>{sendResult.text}</p>
            </div>
          )}

          <div className="mt-6 space-y-5">
            <Field label="Email subject" hint={`${composer.subject.length}/140`}>
              <input value={composer.subject} maxLength={140} onChange={(e) => updateComposer("subject", e.target.value)} placeholder="Example: Lemon Tree Resort progress update" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#9A7612] focus:ring-2 focus:ring-amber-100" />
            </Field>
            <Field label="Message" hint={`${composer.message.length}/5000`}>
              <textarea value={composer.message} maxLength={5000} rows={8} onChange={(e) => updateComposer("message", e.target.value)} placeholder="Write the update exactly as subscribers should receive it. Keep it clear, useful and concise." className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 outline-none focus:border-[#9A7612] focus:ring-2 focus:ring-amber-100" />
            </Field>

            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div><p className="flex items-center gap-2 text-sm font-bold text-slate-900"><ImagePlus size={17} /> Optional image</p><p className="mt-1 text-xs text-slate-500">JPG, PNG, WebP or AVIF. Maximum 5 MB.</p></div>
                <div>
                  <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) uploadImage(file); }} />
                  <button type="button" onClick={() => fileInputRef.current?.click()} disabled={uploading} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 disabled:opacity-60"><Upload size={16} /> {uploading ? "Uploading..." : "Upload image"}</button>
                </div>
              </div>
              {composer.imageUrl && (
                <div className="mt-4 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-700" /><p className="min-w-0 flex-1 truncate text-xs font-semibold text-emerald-800">Image ready</p><button type="button" onClick={() => updateComposer("imageUrl", "")} className="rounded-md p-1 text-emerald-800 hover:bg-emerald-100" aria-label="Remove image"><X size={17} /></button>
                </div>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Button label" hint="Optional"><input value={composer.buttonLabel} maxLength={40} onChange={(e) => updateComposer("buttonLabel", e.target.value)} placeholder="View Update" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#9A7612]" /></Field>
              <Field label="Button link" hint="Optional"><input value={composer.buttonUrl} onChange={(e) => updateComposer("buttonUrl", e.target.value)} placeholder="https://..." className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#9A7612]" /></Field>
            </div>
            {(composer.buttonLabel && !composer.buttonUrl) || (!composer.buttonLabel && composer.buttonUrl) ? <p className="text-xs font-semibold text-red-700">Add both the button label and button link, or leave both empty.</p> : null}

            <div className="flex flex-col gap-3 rounded-xl bg-[#0B1633] p-4 text-white sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-sm font-bold">Ready to send?</p><p className="mt-1 text-xs text-slate-300">Review the preview first. Sending is immediate.</p></div>
              <button type="button" onClick={onReview} disabled={!composerValid || activeCount === 0 || uploading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-bold text-[#0B1633] disabled:cursor-not-allowed disabled:opacity-50"><Eye size={16} /> Review & Send</button>
            </div>
          </div>
        </section>

        <section className="xl:sticky xl:top-5 xl:self-start">
          <div className="mb-3 flex items-center justify-between"><h2 className="flex items-center gap-2 text-sm font-bold text-slate-800"><Mail size={17} /> Email Preview</h2><span className="text-xs text-slate-500">Desktop preview</span></div>
          <EmailPreview composer={composer} />
        </section>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4"><History size={18} className="text-[#8A6600]" /><div><h2 className="text-lg font-bold text-slate-950">Send History</h2><p className="text-xs text-slate-500">Recent manual subscriber updates</p></div></div>
        {historyLoading ? <div className="p-8 text-center text-sm text-slate-500">Loading send history...</div> : history.length === 0 ? <div className="p-8 text-center text-sm text-slate-500">No manual updates have been sent yet.</div> : (
          <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-sm"><thead className="bg-slate-50 text-slate-600"><tr><th className="px-5 py-3 text-left">Update</th><th className="px-5 py-3 text-left">Sent</th><th className="px-5 py-3 text-left">Recipients</th><th className="px-5 py-3 text-left">Delivery</th><th className="px-5 py-3 text-left">Sent by</th></tr></thead><tbody>{history.map((item) => <tr key={item.id} className="border-t border-slate-100 align-top"><td className="px-5 py-4"><p className="font-semibold text-slate-950">{item.subject}</p><p className="mt-1 max-w-xl truncate text-xs text-slate-500">{item.message}</p></td><td className="px-5 py-4 text-slate-600">{formatDate(item.createdAt)}</td><td className="px-5 py-4 text-slate-700">{item.recipientCount}</td><td className="px-5 py-4"><span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${item.failedCount === 0 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"}`}>{item.sentCount} sent{item.failedCount > 0 ? `, ${item.failedCount} failed` : ""}</span></td><td className="px-5 py-4 text-slate-600">{item.createdBy}</td></tr>)}</tbody></table></div>
        )}
      </section>
    </div>
  );
}

function EmailPreview({ composer }: { composer: Composer }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-sm sm:p-5">
      <div className="mx-auto max-w-[640px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-[#0B1633] px-6 py-5"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#E0B84B]">Sri Supraja Infracon</p><p className="mt-1 text-xs text-slate-300">Subscriber Update</p></div>
        {composer.imageUrl ? <img src={composer.imageUrl} alt="Update preview" className="max-h-[320px] w-full object-cover" /> : <div className="flex h-28 items-center justify-center border-b border-slate-100 bg-slate-50 text-xs text-slate-400"><ImagePlus size={18} className="mr-2" /> Optional image appears here</div>}
        <div className="px-6 py-6"><p className="text-sm text-slate-500">Hello Subscriber,</p><h3 className="mt-3 text-2xl font-bold leading-tight text-[#0B1633]">{composer.subject || "Your email subject will appear here"}</h3><p className={`mt-4 whitespace-pre-line text-sm leading-6 ${composer.message ? "text-slate-700" : "text-slate-400"}`}>{composer.message || "Write your message to see a live preview of the subscriber email."}</p>{composer.buttonLabel && composer.buttonUrl && <span className="mt-6 inline-block rounded-lg bg-[#C9A227] px-5 py-3 text-sm font-bold text-[#0B1633]">{composer.buttonLabel}</span>}</div>
        <div className="border-t border-slate-100 px-6 py-4 text-[11px] text-slate-500">You received this because you subscribed to Sri Supraja Infracon updates. <span className="font-semibold text-[#7B640F]">Unsubscribe</span></div>
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 flex items-center justify-between gap-3 text-sm font-semibold text-slate-800"><span>{label}</span>{hint && <span className="text-xs font-normal text-slate-500">{hint}</span>}</span>{children}</label>;
}

function StatCard({ label, value }: { label: string; value: number }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p><p className="mt-2 text-3xl font-bold text-[#0B1633]">{value}</p></div>;
}
