export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 h-8 w-44 animate-pulse rounded-full bg-amber-100" />
            <div className="mb-4 h-16 w-full animate-pulse rounded-2xl bg-slate-200" />
            <div className="mb-8 h-6 w-5/6 animate-pulse rounded-full bg-slate-200" />
            <div className="h-12 w-48 animate-pulse rounded-full bg-slate-300" />
          </div>

          <div className="h-[420px] animate-pulse rounded-[32px] bg-slate-200" />
        </div>
      </div>
    </main>
  );
}


