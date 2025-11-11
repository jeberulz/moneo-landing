import {
  TrendingDown,
  TrendingUp,
  Clock,
  CreditCard,
} from "lucide-react";

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-geist text-neutral-400">Revenue</p>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">
            $31,240.12
          </p>
          <span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">
            +4.2%
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500 font-geist">
          vs. previous week
        </p>
      </div>

      <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-geist text-neutral-400">Operating Costs</p>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
            <TrendingDown className="w-4 h-4 text-neutral-300" />
          </span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">
            $4,860.00
          </p>
          <span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">
            -1.3%
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500 font-geist">
          vs. previous week
        </p>
      </div>

      <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-geist text-neutral-400">Burn Rate</p>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
            <Clock className="w-4 h-4 text-neutral-300" />
          </span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">
            $2,140.00
          </p>
          <span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">
            -0.9%
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500 font-geist">
          rolling 30 days
        </p>
      </div>

      <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-geist text-neutral-400">Cash Reserve</p>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
            <CreditCard className="w-4 h-4 text-neutral-300" />
          </span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">
            $3,980.55
          </p>
          <span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">
            +1.7%
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500 font-geist">
          month to date
        </p>
      </div>
    </div>
  );
}

