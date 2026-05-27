export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-8 h-8 w-64 animate-pulse rounded-full bg-slate-200" />
        <div className="mb-4 h-14 w-full max-w-3xl animate-pulse rounded-2xl bg-slate-200" />
        <div className="mb-10 h-6 w-full max-w-2xl animate-pulse rounded-full bg-slate-200" />

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-64 animate-pulse rounded-3xl bg-white shadow-sm"
            />
          ))}
        </div>
      </div>
    </main>
  );
}