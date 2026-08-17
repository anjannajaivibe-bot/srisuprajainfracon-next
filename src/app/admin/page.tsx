import AdminClient from "./admin-client";

export default function AdminPage() {
  return (
    <>
      <nav className="border-b border-slate-800 bg-slate-950 px-6 py-3 text-sm text-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-3">
          <span className="mr-2 font-bold text-[#D4AF37]">Admin</span>
          <a href="/admin" className="rounded-lg bg-white/10 px-4 py-2 font-semibold">
            Leads
          </a>
          <a
            href="/admin/subscribers"
            className="rounded-lg px-4 py-2 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Subscribers
          </a>
          <a
            href="/admin/clicks"
            className="rounded-lg px-4 py-2 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Website Clicks
          </a>
        </div>
      </nav>
      <AdminClient />
    </>
  );
}
