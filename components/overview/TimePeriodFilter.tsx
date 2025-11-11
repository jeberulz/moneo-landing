"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type TimePeriod = "today" | "week" | "month" | "year" | "all";

interface TimePeriodFilterProps {
  currentPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

const periodLabels: Record<TimePeriod, string> = {
  today: "Today",
  week: "This Week",
  month: "This Month",
  year: "This Year",
  all: "All Time",
};

export default function TimePeriodFilter({
  currentPeriod,
  onPeriodChange,
}: TimePeriodFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const periods: TimePeriod[] = ["today", "week", "month", "year", "all"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-geist text-neutral-300 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <span>{periodLabels[currentPeriod]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 z-20 min-w-[140px] rounded-xl ring-1 ring-white/10 bg-neutral-900/95 border border-white/10 overflow-hidden">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => {
                  onPeriodChange(period);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-geist transition-colors ${
                  currentPeriod === period
                    ? "bg-emerald-500/15 text-emerald-300"
                    : "text-neutral-300 hover:bg-white/5"
                }`}
              >
                {periodLabels[period]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

