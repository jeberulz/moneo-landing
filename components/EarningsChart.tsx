"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Mon", value: 8 },
  { day: "Tue", value: 19 },
  { day: "Wed", value: 14 },
  { day: "Thu", value: 27 },
  { day: "Fri", value: 35 },
  { day: "Sat", value: 22 },
  { day: "Sun", value: 18 },
];

const chartConfig = {
  value: {
    label: "Net inflow",
    color: "#10b981",
  },
};

export default function EarningsChart() {
  return (
    <div className="mt-6 grow">
      <div className="relative h-48 sm:h-56 md:h-64">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}k`}
              width={40}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-[rgba(17,24,39,0.95)] border-white/10 text-white"
                  formatter={(value) => [`$${value}k`, "Net inflow"]}
                />
              }
            />
            <Bar
              dataKey="value"
              fill="url(#gradient)"
              radius={[8, 8, 0, 0]}
              barSize={60}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.45)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
