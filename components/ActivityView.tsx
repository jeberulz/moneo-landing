"use client";

import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  ShoppingBag,
  Coffee,
  Home,
  Car,
  Calendar,
  Activity,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "income",
    title: "Salary payment",
    description: "Monthly salary from Acme Corp",
    amount: "+$5,200.00",
    date: "Today, 9:00 AM",
    icon: ArrowDown,
    category: "Salary",
    color: "emerald",
  },
  {
    id: 2,
    type: "expense",
    title: "Grocery shopping",
    description: "Whole Foods Market",
    amount: "-$127.45",
    date: "Today, 2:30 PM",
    icon: ShoppingBag,
    category: "Groceries",
    color: "blue",
  },
  {
    id: 3,
    type: "expense",
    title: "Coffee shop",
    description: "Starbucks",
    amount: "-$5.75",
    date: "Today, 8:15 AM",
    icon: Coffee,
    category: "Food & Drink",
    color: "amber",
  },
  {
    id: 4,
    type: "expense",
    title: "Rent payment",
    description: "Monthly apartment rent",
    amount: "-$2,400.00",
    date: "Yesterday, 10:00 AM",
    icon: Home,
    category: "Housing",
    color: "purple",
  },
  {
    id: 5,
    type: "expense",
    title: "Gas station",
    description: "Shell Station",
    amount: "-$45.20",
    date: "Yesterday, 5:45 PM",
    icon: Car,
    category: "Transportation",
    color: "orange",
  },
  {
    id: 6,
    type: "expense",
    title: "Netflix subscription",
    description: "Monthly subscription",
    amount: "-$15.99",
    date: "2 days ago, 12:00 PM",
    icon: CreditCard,
    category: "Entertainment",
    color: "red",
  },
];

const categoryIcons: Record<string, any> = {
  Salary: ArrowDown,
  Groceries: ShoppingBag,
  "Food & Drink": Coffee,
  Housing: Home,
  Transportation: Car,
  Entertainment: CreditCard,
};

export default function ActivityView() {
  const groupedActivities = activities.reduce((acc, activity) => {
    const date = activity.date.split(",")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(activity);
    return acc;
  }, {} as Record<string, typeof activities>);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Activity
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Recent transactions and financial activity
          </p>
        </div>
        <button className="text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors">
          View all
        </button>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl">
        {Object.entries(groupedActivities).map(([date, dateActivities]) => (
          <div key={date}>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-4 h-4 text-neutral-500" />
              <h3 className="text-sm font-semibold tracking-tight font-geist text-neutral-400 uppercase">
                {date}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {dateActivities.map((activity) => {
                const Icon = activity.icon;
                const isIncome = activity.type === "income";
                const amountColor = isIncome
                  ? "text-emerald-400"
                  : "text-white";

                return (
                  <div
                    key={activity.id}
                    className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 hover:ring-white/20 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10 shrink-0 ${
                          isIncome
                            ? "text-emerald-400"
                            : "text-neutral-300"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                              {activity.title}
                            </h3>
                            <p className="mt-1 text-sm font-geist text-neutral-400 truncate">
                              {activity.description}
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                              <span className="text-xs font-geist text-neutral-500">
                                {activity.category}
                              </span>
                              <span className="text-xs font-geist text-neutral-600">
                                •
                              </span>
                              <span className="text-xs font-geist text-neutral-500">
                                {activity.date.split(",")[1]?.trim()}
                              </span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p
                              className={`text-lg font-semibold tracking-tight font-geist ${amountColor}`}
                            >
                              {activity.amount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {activities.length === 0 && (
        <div className="rounded-2xl ring-1 p-12 border bg-neutral-900/95 ring-white/10 border-white/10 text-center">
          <Activity className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
          <p className="text-sm font-geist text-neutral-400">
            No activity yet
          </p>
        </div>
      )}
    </div>
  );
}

