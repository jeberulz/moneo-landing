"use client";

import {
  ArrowDown,
  ArrowUp,
  ShoppingBag,
  Coffee,
  Home,
  Car,
  CreditCard,
  ArrowRight,
} from "lucide-react";

interface Transaction {
  id: number;
  type: "income" | "expense";
  title: string;
  description: string;
  amount: string;
  time: string;
  category: string;
  icon: typeof ArrowDown;
}

interface RecentTransactionsSummaryProps {
  transactions: Transaction[];
  onViewAll: () => void;
}

const categoryIcons: Record<string, any> = {
  Salary: ArrowDown,
  Groceries: ShoppingBag,
  "Food & Drink": Coffee,
  Housing: Home,
  Transportation: Car,
  Entertainment: CreditCard,
};

export default function RecentTransactionsSummary({
  transactions,
  onViewAll,
}: RecentTransactionsSummaryProps) {
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const date = transaction.time.split(",")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(transaction);
    return acc;
  }, {} as Record<string, Transaction[]>);

  return (
    <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-geist text-neutral-400">Recent Transactions</p>
      </div>

      {transactions.length === 0 ? (
        <div className="py-8 text-center">
          <CreditCard className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
          <p className="text-sm font-geist text-neutral-400">No recent transactions</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
              <div key={date}>
                <p className="text-xs font-semibold tracking-tight font-geist text-neutral-500 uppercase mb-2">
                  {date}
                </p>
                <div className="space-y-2">
                  {dateTransactions.map((transaction) => {
                    const Icon = transaction.icon;
                    const isIncome = transaction.type === "income";
                    const amountColor = isIncome
                      ? "text-emerald-400"
                      : "text-white";

                    return (
                      <div
                        key={transaction.id}
                        className="flex items-center gap-3 rounded-xl p-2 bg-white/5"
                      >
                        <div
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${
                            isIncome
                              ? "bg-emerald-500/15 ring-emerald-400/30 text-emerald-400"
                              : "bg-white/5 ring-white/10 text-neutral-300"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                            {transaction.title}
                          </p>
                          <p className="text-xs font-geist text-neutral-400 truncate">
                            {transaction.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-semibold tracking-tight font-geist ${amountColor}`}>
                            {transaction.amount}
                          </p>
                          <p className="text-xs font-geist text-neutral-500">
                            {transaction.time.split(",")[1]?.trim()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onViewAll}
            className="mt-4 inline-flex items-center gap-2 text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all activity
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}

