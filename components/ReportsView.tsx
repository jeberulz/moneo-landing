"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EarningsChart from "./EarningsChart";
import RadarChart from "./RadarChart";

const reports = [
  {
    id: 1,
    name: "Monthly Financial Report",
    period: "January 2024",
    type: "monthly",
    generated: "2 days ago",
  },
  {
    id: 2,
    name: "Annual Summary",
    period: "2023",
    type: "annual",
    generated: "1 week ago",
  },
  {
    id: 3,
    name: "Expense Analysis",
    period: "Q4 2023",
    type: "quarterly",
    generated: "2 weeks ago",
  },
];

const summaryStats = [
  {
    label: "Total Income",
    value: "$125,450.00",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Total Expenses",
    value: "$89,230.00",
    change: "-3.2%",
    trend: "down",
    icon: TrendingDown,
  },
  {
    label: "Net Savings",
    value: "$36,220.00",
    change: "+28.7%",
    trend: "up",
    icon: DollarSign,
  },
];

export default function ReportsView() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Reports
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Financial reports, analytics, and insights
          </p>
        </div>
        <Button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-geist bg-emerald-600 text-white hover:bg-emerald-700">
          <FileText className="w-4 h-4" />
          Generate Report
        </Button>
      </div>

      <div className="flex flex-col gap-6 max-w-6xl">
        {/* Period Selector */}
        <div className="flex items-center gap-2">
          {["monthly", "quarterly", "annual"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-full text-sm font-geist transition-colors capitalize ${
                selectedPeriod === period
                  ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
                  : "bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryStats.map((stat) => {
            const Icon = stat.icon;
            const isPositive = stat.trend === "up";
            return (
              <div
                key={stat.label}
                className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-geist text-neutral-400">{stat.label}</p>
                    <p className="mt-2 text-2xl font-light tracking-tight font-geist text-white">
                      {stat.value}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`text-xs font-geist ${
                          isPositive ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-xs font-geist text-neutral-500">
                        vs previous period
                      </span>
                    </div>
                  </div>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 shrink-0 ${
                      isPositive
                        ? "bg-emerald-500/15 ring-emerald-400/30 text-emerald-300"
                        : "bg-red-500/15 ring-red-400/30 text-red-300"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Earnings Chart */}
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                  Net Inflow
                </h3>
                <p className="text-xs font-geist text-neutral-400 mt-1">
                  Last 7 days
                </p>
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <EarningsChart />
          </div>

          {/* Expense Distribution */}
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                  Expense Distribution
                </h3>
                <p className="text-xs font-geist text-neutral-400 mt-1">
                  By category
                </p>
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 ring-1 text-blue-300 ring-blue-400/30 shrink-0">
                <PieChart className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-6">
              <RadarChart />
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                Recent Reports
              </h3>
              <p className="text-xs font-geist text-neutral-400 mt-1">
                Generated financial reports
              </p>
            </div>
            <button className="text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors">
              View all
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10 hover:ring-white/20 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-400/30 shrink-0">
                      <FileText className="w-6 h-6 text-blue-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                        {report.name}
                      </h4>
                      <p className="text-xs font-geist text-neutral-400 mt-1 truncate">
                        {report.period} · Generated {report.generated}
                      </p>
                      <span className="mt-2 inline-block text-xs font-geist px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 capitalize">
                        {report.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 bg-white/5 ring-white/10 hover:bg-white/10 transition-colors text-xs font-geist text-neutral-300">
                      <Download className="w-3 h-3" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Options */}
        <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div className="mb-4">
            <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
              Export Options
            </h3>
            <p className="text-xs font-geist text-neutral-400 mt-1">
              Download reports in various formats
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {["PDF", "Excel", "CSV"].map((format) => (
              <button
                key={format}
                className="flex-1 rounded-xl ring-1 p-4 bg-white/5 ring-white/10 hover:ring-white/20 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold tracking-tight font-geist text-white">
                      {format} Format
                    </p>
                    <p className="text-xs font-geist text-neutral-400 mt-1">
                      Download as {format}
                    </p>
                  </div>
                  <Download className="w-5 h-5 text-neutral-400 shrink-0 ml-2" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

