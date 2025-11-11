"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", income: 65, expenses: 50 },
  { month: "Feb", income: 45, expenses: 55 },
  { month: "Mar", income: 60, expenses: 70 },
  { month: "Apr", income: 30, expenses: 20 },
  { month: "May", income: 40, expenses: 35 },
  { month: "Jun", income: 55, expenses: 65 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "rgba(16, 185, 129, 1)",
  },
  expenses: {
    label: "Expenses",
    color: "rgba(163, 230, 53, 1)",
  },
};

export default function RadarChart() {
  return (
    <div className="h-56 md:h-64">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <RechartsRadarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis
            dataKey="month"
            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 11 }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 80]} tick={false} axisLine={false} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="bg-[rgba(0,0,0,0.8)] border-[rgba(255,255,255,0.1)] text-white"
              />
            }
          />
          <Radar
            name="income"
            dataKey="income"
            stroke="rgba(16, 185, 129, 1)"
            fill="rgba(16, 185, 129, 0.35)"
            fillOpacity={1}
            dot={{ fill: "rgba(16, 185, 129, 1)", r: 3, stroke: "#0b1020", strokeWidth: 1 }}
          />
          <Radar
            name="expenses"
            dataKey="expenses"
            stroke="rgba(163, 230, 53, 1)"
            fill="rgba(163, 230, 53, 0.35)"
            fillOpacity={1}
            dot={{ fill: "rgba(163, 230, 53, 1)", r: 3, stroke: "#0b1020", strokeWidth: 1 }}
          />
        </RechartsRadarChart>
      </ChartContainer>
    </div>
  );
}
