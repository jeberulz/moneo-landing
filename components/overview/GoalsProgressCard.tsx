"use client";

import { Target, ArrowRight, TrendingUp } from "lucide-react";

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
}

interface GoalsProgressCardProps {
  goals: Goal[];
  onViewAll: () => void;
}

export default function GoalsProgressCard({
  goals,
  onViewAll,
}: GoalsProgressCardProps) {
  return (
    <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-purple-500/15 ring-purple-400/30">
            <Target className="w-4 h-4 text-purple-300" />
          </span>
          <p className="text-sm font-geist text-neutral-400">Financial Goals</p>
        </div>
      </div>

      {goals.length === 0 ? (
        <div className="py-8 text-center">
          <Target className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
          <p className="text-sm font-geist text-neutral-400">No active goals</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {goals.map((goal) => {
              const percentage = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);
              const remaining = goal.targetAmount - goal.currentAmount;

              return (
                <div key={goal.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                        {goal.name}
                      </p>
                      {goal.deadline && (
                        <p className="text-xs font-geist text-neutral-400 mt-0.5">
                          {goal.deadline}
                        </p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-xs font-geist text-neutral-300">
                        {percentage.toFixed(0)}%
                      </p>
                    </div>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/5 overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full bg-emerald-400 transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <p className="font-geist text-neutral-400">
                      ${goal.currentAmount.toLocaleString()} saved
                    </p>
                    <p className="font-geist text-neutral-500">
                      ${remaining.toLocaleString()} to go
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onViewAll}
            className="mt-4 inline-flex items-center gap-2 text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all goals
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}

