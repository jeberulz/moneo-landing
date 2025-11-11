"use client";

import { Wallet, Plus, ArrowDown, ArrowUp, Building2, CreditCard } from "lucide-react";

const accounts = [
  {
    id: 1,
    name: "Primary Account",
    type: "checking",
    balance: "$45,230.50",
    accountNumber: "**** 4521",
    bank: "Chase Bank",
    icon: Building2,
  },
  {
    id: 2,
    name: "Savings Account",
    type: "savings",
    balance: "$125,890.00",
    accountNumber: "**** 7890",
    bank: "Chase Bank",
    icon: Wallet,
  },
  {
    id: 3,
    name: "Investment Account",
    type: "investment",
    balance: "$234,567.89",
    accountNumber: "**** 3456",
    bank: "Fidelity",
    icon: CreditCard,
  },
];

const quickActions = [
  { id: 1, label: "Add Money", icon: ArrowDown, color: "emerald" },
  { id: 2, label: "Send Money", icon: ArrowUp, color: "blue" },
  { id: 3, label: "Add Account", icon: Plus, color: "neutral" },
];

export default function WalletView() {
  const totalBalance = accounts.reduce((sum, acc) => {
    const balance = parseFloat(acc.balance.replace(/[^0-9.]/g, ""));
    return sum + balance;
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Wallet
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Manage your accounts and balances
          </p>
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-geist text-neutral-400">Total Balance</p>
            <p className="mt-2 text-4xl font-light tracking-tight font-geist text-white">
              ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="mt-1 text-xs font-geist text-neutral-500">
              Across all accounts
            </p>
          </div>
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
            <Wallet className="w-8 h-8 text-emerald-300" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          const colorClasses = {
            emerald: "bg-emerald-500/15 ring-emerald-400/30 text-emerald-300",
            blue: "bg-blue-500/15 ring-blue-400/30 text-blue-300",
            neutral: "bg-white/5 ring-white/10 text-neutral-300",
          };

          return (
            <button
              key={action.id}
              className={`rounded-xl ring-1 p-4 flex flex-col items-center gap-2 hover:ring-white/20 transition-all ${colorClasses[action.color as keyof typeof colorClasses]}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-geist">{action.label}</span>
            </button>
          );
        })}
      </div>

      {/* Accounts List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
            Accounts
          </h3>
          <button className="text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-3">
          {accounts.map((account) => {
            const Icon = account.icon;
            return (
              <div
                key={account.id}
                className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 hover:ring-white/20 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="w-6 h-6 text-neutral-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-tight font-geist text-white">
                        {account.name}
                      </h4>
                      <p className="mt-1 text-xs font-geist text-neutral-400">
                        {account.bank} · {account.accountNumber}
                      </p>
                      <span className="mt-2 inline-block text-xs font-geist px-2 py-0.5 rounded-full bg-white/5 text-neutral-400">
                        {account.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-light tracking-tight font-geist text-white">
                      {account.balance}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Account Button */}
      <button className="w-full rounded-2xl ring-1 p-6 border border-dashed bg-neutral-900/95 ring-white/10 border-white/10 hover:ring-white/20 transition-all flex flex-col items-center justify-center gap-3 text-neutral-400 hover:text-neutral-300">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          <Plus className="w-6 h-6" />
        </div>
        <span className="text-sm font-geist">Add New Account</span>
      </button>
    </div>
  );
}

