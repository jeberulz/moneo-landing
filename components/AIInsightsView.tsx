"use client";

import { Sparkles, TrendingUp, TrendingDown, Lightbulb, Target } from "lucide-react";
import RadarChart from "./RadarChart";

const insights = [
  {
    id: 1,
    type: "savings",
    title: "Potential savings identified",
    description: "You could save $450/month by optimizing subscription services",
    value: "$450",
    icon: TrendingDown,
    color: "emerald",
  },
  {
    id: 2,
    type: "spending",
    title: "Spending pattern detected",
    description: "Your dining expenses increased 23% this month",
    value: "+23%",
    icon: TrendingUp,
    color: "amber",
  },
  {
    id: 3,
    type: "recommendation",
    title: "Budget adjustment recommended",
    description: "Consider increasing your entertainment budget by 15%",
    value: "+15%",
    icon: Lightbulb,
    color: "blue",
  },
];

const recommendations = [
  {
    id: 1,
    title: "Optimize recurring payments",
    description: "Review and cancel unused subscriptions",
    priority: "high",
  },
  {
    id: 2,
    title: "Increase emergency fund",
    description: "You're on track to reach your goal in 3 months",
    priority: "medium",
  },
  {
    id: 3,
    title: "Investment opportunity",
    description: "Consider investing surplus funds in low-risk options",
    priority: "low",
  },
];

export default function AIInsightsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light tracking-tight font-geist text-white">
          AI Insights
        </h2>
        <p className="mt-1 text-sm font-geist text-neutral-400">
          Intelligent analysis of your financial patterns
        </p>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const colorClasses = {
            emerald: "text-emerald-400 bg-emerald-500/15 ring-emerald-400/30",
            amber: "text-amber-400 bg-amber-500/15 ring-amber-400/30",
            blue: "text-blue-400 bg-blue-500/15 ring-blue-400/30",
          };

          return (
            <div
              key={insight.id}
              className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs font-geist text-neutral-400 mb-2">
                    {insight.title}
                  </p>
                  <p className="text-sm font-geist text-neutral-300">
                    {insight.description}
                  </p>
                </div>
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${colorClasses[insight.color as keyof typeof colorClasses]}`}
                >
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-light tracking-tight font-geist text-white">
                  {insight.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                Monthly Cash Flow
              </h3>
              <p className="text-xs font-geist text-neutral-400 mt-1">
                AI-assisted overview
              </p>
            </div>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 text-2xl font-geist font-light tracking-tight text-white">
            $2,895.89
          </div>
          <div className="mt-6">
            <RadarChart />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-white/70">
            <span className="inline-flex items-center gap-2 font-geist">
              <span className="h-1.5 w-8 rounded-full bg-emerald-400" />
              Income
            </span>
            <span className="inline-flex items-center gap-2 font-geist">
              <span className="h-1.5 w-8 rounded-full bg-lime-400" />
              Expenses
            </span>
          </div>
        </div>

        {/* Recommendations */}
        <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                Recommendations
              </h3>
              <p className="text-xs font-geist text-neutral-400 mt-1">
                AI-powered suggestions
              </p>
            </div>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 ring-1 text-blue-300 ring-blue-400/30">
              <Target className="w-4 h-4" />
            </span>
          </div>
          <div className="space-y-3 mt-6">
            {recommendations.map((rec) => {
              const priorityColors = {
                high: "text-emerald-400",
                medium: "text-amber-400",
                low: "text-blue-400",
              };

              return (
                <div
                  key={rec.id}
                  className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold tracking-tight font-geist text-white">
                        {rec.title}
                      </h4>
                      <p className="mt-1 text-xs font-geist text-neutral-400">
                        {rec.description}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-geist font-medium ${priorityColors[rec.priority as keyof typeof priorityColors]}`}
                    >
                      {rec.priority}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

