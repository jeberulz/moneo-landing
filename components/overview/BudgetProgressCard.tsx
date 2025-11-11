"use client";

import { Target, ArrowRight, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

interface BudgetCategory {
  id: number;
  name: string;
  spent: number;
  budget: number;
  status: "on-track" | "warning" | "over";
}

interface BudgetProgressCardProps {
  categories: BudgetCategory[];
  onManage: () => void;
}

const statusConfig = {
  "on-track": {
    color: "emerald",
    icon: CheckCircle2,
    label: "On track",
  },
  warning: {
    color: "amber",
    icon: AlertCircle,
    label: "Warning",
  },
  over: {
    color: "red",
    icon: XCircle,
    label: "Over budget",
  },
};

export default function BudgetProgressCard({
  categories,
  onManage,
}: BudgetProgressCardProps) {
  const calculateHealthScore = () => {
    if (categories.length === 0) return 100;
    const onTrackCount = categories.filter((c) => c.status === "on-track").length;
    return Math.round((onTrackCount / categories.length) * 100);
  };

  const healthScore = calculateHealthScore();
  const healthColor =
    healthScore >= 80 ? "emerald" : healthScore >= 60 ? "amber" : "red";

  return (
    <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-blue-500/15 ring-blue-400/30">
            <Target className="w-4 h-4 text-blue-300" />
          </span>
          <p className="text-sm font-geist text-neutral-400">Budget Progress</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-geist font-medium px-2 py-1 rounded-full ${
              healthColor === "emerald"
                ? "bg-emerald-500/15 text-emerald-400"
                : healthColor === "amber"
                ? "bg-amber-500/15 text-amber-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {healthScore}% on track
          </span>
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="py-8 text-center">
          <Target className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
          <p className="text-sm font-geist text-neutral-400">No budgets set</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {categories.map((category) => {
              const percentage = Math.min((category.spent / category.budget) * 100, 100);
              const config = statusConfig[category.status];
              const StatusIcon = config.icon;

              return (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        {category.name}
                      </p>
                      <StatusIcon
                        className={`w-4 h-4 ${
                          config.color === "emerald"
                            ? "text-emerald-400"
                            : config.color === "amber"
                            ? "text-amber-400"
                            : "text-red-400"
                        }`}
                      />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-geist text-neutral-300">
                        ${category.spent.toLocaleString()} / ${category.budget.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        config.color === "emerald"
                          ? "bg-emerald-400"
                          : config.color === "amber"
                          ? "bg-amber-400"
                          : "bg-red-400"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onManage}
            className="mt-4 inline-flex items-center gap-2 text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Manage budgets
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}

