"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginClient() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Login failed.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Invalid username or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
          Admin Login
        </p>

        <h1 className="mb-2 font-display text-3xl font-bold text-[#0B1633]">
          Supraja Infracon CRM
        </h1>

        <p className="mb-8 text-sm text-slate-500">
          Login to manage website leads and enquiries.
        </p>

        <form onSubmit={handleLogin} className="grid gap-5">
          <div>
            <label className="mb-2 block font-semibold text-slate-900">
              Username
            </label>

            <input
              name="username"
              value={form.username}
              onChange={updateField}
              required
              placeholder="Enter username"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#C9A227]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-900">
              Password
            </label>

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={updateField}
              required
              placeholder="Enter password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#C9A227]"
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#C9A227] px-6 py-4 font-bold text-[#0B1633] transition hover:bg-[#0B1633] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}