"use client";

import { CreditCard, Plus, MoreVertical, Lock, Eye, Sparkles, AlertCircle, DollarSign, Zap } from "lucide-react";

const cards = [
  {
    id: 1,
    number: "5312 9087 4421 1160",
    name: "John Doe",
    expiry: "09/30",
    type: "primary",
    balance: "$12,450.00",
    status: "active",
    limit: "$15,000.00",
    spending: "$2,550.00",
    category: "General",
    autoCategorize: true,
    alerts: true,
  },
  {
    id: 2,
    number: "4521 9083 7610 XXXX",
    name: "John Doe",
    expiry: "09/27",
    type: "virtual",
    balance: "$2,340.00",
    status: "active",
    limit: "$5,000.00",
    spending: "$2,660.00",
    category: "Subscriptions",
    autoCategorize: true,
    alerts: true,
  },
  {
    id: 3,
    number: "6019 7321 8550 XXXX",
    name: "John Doe",
    expiry: "11/26",
    type: "virtual",
    balance: "$890.50",
    status: "locked",
    limit: "$3,000.00",
    spending: "$0.00",
    category: "Travel",
    autoCategorize: true,
    alerts: false,
  },
];

export default function CardsView() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Smart Cards
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            AI-powered cards with smart limits and auto-categorization
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl ring-1 bg-emerald-500/15 text-emerald-300 ring-emerald-400/30 hover:bg-emerald-500/20 transition-colors font-geist text-sm">
          <Plus className="w-4 h-4" />
          Create Smart Card
        </button>
      </div>

      <div className="flex flex-col gap-6 max-w-6xl">
        {/* Smart Features Banner */}
        <div className="rounded-2xl ring-1 p-5 border bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 ring-white/10 border-white/10">
          <div className="flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold tracking-tight font-geist text-white">
                AI-Powered Features
              </h3>
              <p className="text-xs font-geist text-neutral-400 mt-1">
                Auto-categorize purchases, set spending limits, and get instant alerts
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-geist px-2 py-1 rounded-full bg-white/5 text-neutral-300">
                <Zap className="w-3 h-3" />
                Auto-categorize
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-geist px-2 py-1 rounded-full bg-white/5 text-neutral-300">
                <AlertCircle className="w-3 h-3" />
                Smart Alerts
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 relative overflow-hidden ${
              card.type === "primary"
                ? "lg:col-span-2 lg:row-span-1"
                : ""
            }`}
          >
            {/* Card Background */}
            <div
              className={`absolute inset-0 ${
                card.type === "primary"
                  ? "bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent"
                  : "bg-gradient-to-br from-neutral-800/50 to-neutral-900/50"
              }`}
            />
            <div className="relative">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-white" />
                  {card.type === "virtual" && (
                    <span className="text-xs font-geist text-neutral-400">
                      Virtual
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {card.status === "locked" && (
                    <Lock className="w-4 h-4 text-neutral-500" />
                  )}
                  <button className="text-neutral-400 hover:text-neutral-300 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <p className="text-xl font-light tracking-wider font-geist text-white mb-2">
                  {card.number}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-geist text-neutral-400 uppercase mb-1">
                      Card Holder
                    </p>
                    <p className="text-sm font-geist text-white">
                      {card.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-geist text-neutral-400 uppercase mb-1">
                      Expires
                    </p>
                    <p className="text-sm font-geist text-white">
                      {card.expiry}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Balance & Limits */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-geist text-neutral-400">Balance</p>
                    <p className="text-xl font-light tracking-tight font-geist text-white mt-1">
                      {card.balance}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-geist text-neutral-400">Limit</p>
                    <p className="text-sm font-light tracking-tight font-geist text-white mt-1">
                      {card.limit}
                    </p>
                  </div>
                </div>
                
                {/* Spending Progress */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-geist text-neutral-400">Spending</span>
                    <span className="text-xs font-geist text-neutral-400">
                      {card.spending} / {card.limit}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all"
                      style={{
                        width: `${(parseFloat(card.spending.replace(/[^0-9.]/g, "")) / parseFloat(card.limit.replace(/[^0-9.]/g, ""))) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Smart Features */}
                <div className="flex items-center gap-2 pt-2">
                  {card.autoCategorize && (
                    <span className="inline-flex items-center gap-1 text-xs font-geist px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300">
                      <Sparkles className="w-3 h-3" />
                      Auto-categorize
                    </span>
                  )}
                  {card.alerts && (
                    <span className="inline-flex items-center gap-1 text-xs font-geist px-2 py-1 rounded-full bg-blue-500/15 text-blue-300">
                      <AlertCircle className="w-3 h-3" />
                      Alerts
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-geist px-2 py-1 rounded-full bg-white/5 text-neutral-400">
                    {card.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg ring-1 bg-white/5 ring-white/10 hover:bg-white/10 transition-colors text-xs font-geist text-neutral-300">
                    <Eye className="w-3 h-3" />
                    View Details
                  </button>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg ring-1 bg-white/5 ring-white/10 hover:bg-white/10 transition-colors text-xs font-geist text-neutral-300">
                    <DollarSign className="w-3 h-3" />
                    Set Limit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 border-dashed hover:ring-white/20 transition-all flex flex-col items-center justify-center min-h-[200px] text-neutral-400 hover:text-neutral-300">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10 mb-4">
            <Plus className="w-6 h-6" />
          </div>
          <p className="text-sm font-geist">Add New Card</p>
        </button>
      </div>

        {/* Card Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <p className="text-xs font-geist text-neutral-400 mb-2">
              Total Cards
            </p>
            <p className="text-2xl font-light tracking-tight font-geist text-white">
              {cards.length}
            </p>
          </div>
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <p className="text-xs font-geist text-neutral-400 mb-2">
              Total Balance
            </p>
            <p className="text-2xl font-light tracking-tight font-geist text-white">
              $15,680.50
            </p>
          </div>
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <p className="text-xs font-geist text-neutral-400 mb-2">
              Active Cards
            </p>
            <p className="text-2xl font-light tracking-tight font-geist text-white">
              {cards.filter((c) => c.status === "active").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

