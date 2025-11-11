"use client";

import {
  LayoutGrid,
  Bell,
  Sparkles,
  Activity,
  CreditCard,
  Search,
  Wallet,
  ArrowLeftRight,
  FileText,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface DashboardSidebarProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function DashboardSidebar({
  activeNav,
  onNavChange,
  isCollapsed,
  onToggleCollapse,
}: DashboardSidebarProps) {
  const mainNavItems = [
    { id: "Overview", icon: LayoutGrid },
    { id: "Wallet", icon: Wallet },
    { id: "Transfers", icon: ArrowLeftRight },
    { id: "Reports", icon: FileText },
    { id: "Team", icon: Users },
    { id: "Settings", icon: Settings },
  ];

  const secondaryNavItems = [
    { id: "Notifications", icon: Bell },
    { id: "AI Insights", icon: Sparkles },
    { id: "Activity", icon: Activity },
    { id: "Cards", icon: CreditCard },
  ];

  return (
    <aside className={`sticky top-0 h-screen shrink-0 overflow-y-auto border-r border-white/10 bg-neutral-900/95 ring-1 ring-white/5 transition-all duration-300 ease-in-out ${
      isCollapsed ? "w-20" : "w-80"
    }`}>
      <div className="h-full p-4 sm:p-5">
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          <div className={`inline-flex items-center gap-2 text-sm font-semibold tracking-tight font-geist text-white transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          }`}>
            <span className="text-sm font-semibold tracking-tight font-geist text-white whitespace-nowrap">
              Moneo
            </span>
          </div>
          <div className={`flex items-center ${isCollapsed ? "gap-0" : "gap-2"}`}>
            {!isCollapsed && (
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
                <CreditCard className="w-4 h-4 text-neutral-300" />
              </span>
            )}
            <button
              onClick={onToggleCollapse}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10 hover:bg-white/10 transition-colors"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4 text-neutral-300" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-neutral-300" />
              )}
            </button>
          </div>
        </div>

        <div className={`mt-5 transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <Input
              className="w-full rounded-xl ring-1 pl-9 pr-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
              placeholder="Search anything…"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className={`text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 h-0 overflow-hidden mb-0" : "opacity-100"
          }`}>
            Navigation
          </p>
          <nav className="space-y-3">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavChange(item.id)}
                  className={`w-full flex items-center ${
                    isCollapsed ? "justify-center px-0" : isActive ? "justify-between px-3" : "gap-3 px-3"
                  } rounded-xl py-3 text-sm transition-colors font-geist ${
                    isCollapsed ? "" : "ring-1 ring-white/10"
                  } ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "hover:bg-white/5 text-neutral-300"
                  }`}
                  title={isCollapsed ? item.id : undefined}
                >
                  {isCollapsed ? (
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 ${
                        isActive ? "bg-white/10" : "bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-300"}`} />
                    </span>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-3">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 shrink-0 ${
                            isActive ? "bg-white/10" : "bg-white/5"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-300"}`} />
                        </span>
                        <span className="whitespace-nowrap">
                          {item.id}
                        </span>
                      </span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-8">
          <p className={`text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 h-0 overflow-hidden mb-0" : "opacity-100"
          }`}>
            More
          </p>
          <nav className="space-y-3">
            {secondaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavChange(item.id)}
                  className={`w-full flex items-center ${
                    isCollapsed ? "justify-center px-0" : isActive ? "justify-between px-3" : "gap-3 px-3"
                  } rounded-xl py-3 text-sm transition-colors font-geist ${
                    isCollapsed ? "" : "ring-1 ring-white/10"
                  } ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "hover:bg-white/5 text-neutral-300"
                  }`}
                  title={isCollapsed ? item.id : undefined}
                >
                  {isCollapsed ? (
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 ${
                        isActive ? "bg-white/10" : "bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-300"}`} />
                    </span>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-3">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 shrink-0 ${
                            isActive ? "bg-white/10" : "bg-white/5"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-300"}`} />
                        </span>
                        <span className="whitespace-nowrap">
                          {item.id}
                        </span>
                      </span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className={`mt-8 transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}>
          <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">
            AI Assistant
          </p>
          <div className="rounded-xl bg-white/[0.06] ring-1 p-3 flex items-center gap-3 ring-white/10">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30 shrink-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className={`text-sm transition-opacity duration-300 ${
              isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}>
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
