"use client";

import { useMemo, useState } from "react";

const SQFT_PER_SQYD = 9;
const SQYD_PER_ACRE = 4840;

function formatNumber(value: number, decimals = 2) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: decimals,
  }).format(value);
}

export default function PlotBuyerTools() {
  const [sqYards, setSqYards] = useState("200");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const area = useMemo(() => {
    const value = Number(sqYards);
    if (!Number.isFinite(value) || value < 0) return null;
    return {
      sqYards: value,
      sqFeet: value * SQFT_PER_SQYD,
      acres: value / SQYD_PER_ACRE,
    };
  }, [sqYards]);

  const checklist = [
    "Exact project name and phase identified",
    "RERA registration checked where applicable",
    "Layout approval reference matched to the same phase",
    "Survey numbers compared across available records",
    "Title chain reviewed by an independent legal professional",
    "Encumbrance information reviewed",
    "Approved layout compared with the plot offered",
    "Road width, access and plot dimensions verified on site",
    "Payment schedule and registration costs understood",
    "Sale documentation reviewed before final payment",
  ];

  const completed = checklist.filter((item) => checked[item]).length;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border border-[#E3D8BF] bg-white p-6 shadow-sm md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A26]">
          Area Converter
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#17211B]">
          Convert plot area instantly
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Enter the plot area in square yards to compare it with square feet and acres.
        </p>

        <label htmlFor="plot-area" className="mt-6 block text-sm font-semibold text-slate-800">
          Plot area in square yards
        </label>
        <input
          id="plot-area"
          type="number"
          min="0"
          step="0.01"
          value={sqYards}
          onChange={(event) => setSqYards(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-lg font-semibold outline-none focus:border-[#9A7726] focus:ring-2 focus:ring-[#E8D7A5]"
        />

        {area ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Result label="Sq. yards" value={formatNumber(area.sqYards)} />
            <Result label="Sq. feet" value={formatNumber(area.sqFeet)} />
            <Result label="Acres" value={formatNumber(area.acres, 4)} />
          </div>
        ) : (
          <p className="mt-4 text-sm text-red-600">Enter a valid plot area.</p>
        )}

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Conversion reference: 1 square yard = 9 square feet; 1 acre = 4,840 square yards.
        </p>
      </section>

      <section className="rounded-3xl border border-[#E3D8BF] bg-[#FBFAF7] p-6 shadow-sm md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A26]">
              Buyer Checklist
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#17211B]">
              Due-diligence checklist
            </h2>
          </div>
          <span className="rounded-full bg-[#10251D] px-3 py-1 text-xs font-bold text-white">
            {completed}/{checklist.length}
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {checklist.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
            >
              <input
                type="checkbox"
                checked={Boolean(checked[item])}
                onChange={(event) =>
                  setChecked((current) => ({ ...current, [item]: event.target.checked }))
                }
                className="mt-1 h-4 w-4 accent-[#10251D]"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          This checklist is an organisational aid, not a legal opinion. Property-specific due diligence should be completed independently before purchase.
        </p>
      </section>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#F4EFE3] p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-[#10251D]">{value}</p>
    </div>
  );
}
