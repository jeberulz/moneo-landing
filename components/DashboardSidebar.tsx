import {
  LayoutGrid,
  Bell,
  Sparkles,
  Activity,
  CreditCard,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardSidebar() {
  return (
    <aside className="lg:col-span-3">
      <div className="h-full rounded-xl border p-4 sm:p-5 ring-1 border-white/10 bg-neutral-900/90 ring-white/5">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight font-geist text-white">
            <span className="text-sm font-semibold tracking-tight font-geist text-white">
              Moneo
            </span>
          </div>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
            <CreditCard className="w-4 h-4 text-neutral-300" />
          </span>
        </div>

        <div className="mt-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <Input
              className="w-full rounded-xl ring-1 pl-9 pr-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
              placeholder="Search anything…"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">
            Navigation
          </p>
          <nav className="space-y-3">
            <a
              className="flex items-center justify-between rounded-xl bg-white/[0.06] ring-1 px-3 py-3 text-sm ring-white/10 text-white"
              href="#"
            >
              <span className="inline-flex items-center gap-3 font-geist">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/10 ring-white/10">
                  <LayoutGrid className="w-4 h-4 text-white" />
                </span>
                Overview
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </a>
            <a
              className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300"
              href="#"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                <Bell className="w-4 h-4" />
              </span>
              Notifications
            </a>
            <a
              className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300"
              href="#"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                <Sparkles className="w-4 h-4" />
              </span>
              AI Insights
            </a>
            <a
              className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300"
              href="#"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                <Activity className="w-4 h-4" />
              </span>
              Activity
            </a>
            <a
              className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300"
              href="#"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                <CreditCard className="w-4 h-4" />
              </span>
              Cards
            </a>
          </nav>
        </div>

        <div className="mt-8">
          <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">
            AI Assistant
          </p>
          <div className="rounded-xl bg-white/[0.06] ring-1 p-3 flex items-center gap-3 ring-white/10">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="text-sm">
              <p className="tracking-tight font-medium font-geist text-white">
                Smart Budget
              </p>
              <p className="text-xs font-geist text-neutral-400">
                AI-powered tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

