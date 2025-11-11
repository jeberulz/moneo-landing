"use client";

import { Sparkles, TrendingUp, TrendingDown, Lightbulb, ArrowRight } from "lucide-react";

interface Insight {
  id: number;
  type: "savings" | "spending" | "recommendation";
  title: string;
  description: string;
  value: string;
  icon: typeof Sparkles;
  color: "emerald" | "amber" | "blue";
}

interface QuickAIInsightCardProps {
  insight: Insight;
  onViewAll: () => void;
}

const colorClasses = {
  emerald: "text-emerald-400 bg-emerald-500/15 ring-emerald-400/30",
  amber: "text-amber-400 bg-amber-500/15 ring-amber-400/30",
  blue: "text-blue-400 bg-blue-500/15 ring-blue-400/30",
};

export default function QuickAIInsightCard({
  insight,
  onViewAll,
}: QuickAIInsightCardProps) {
  const Icon = insight.icon;

  return (
    <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${colorClasses[insight.color]}`}
          >
            <Icon className="w-4 h-4" />
          </span>
          <p className="text-sm font-geist text-neutral-400">AI Insight</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-geist text-neutral-400 mb-2">
          {insight.title}
        </p>
        <p className="text-sm font-geist text-neutral-300 mb-3">
          {insight.description}
        </p>
        <p className="text-2xl font-light tracking-tight font-geist text-white">
          {insight.value}
        </p>
      </div>

      <button
        onClick={onViewAll}
        className="inline-flex items-center gap-2 text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        View all insights
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

