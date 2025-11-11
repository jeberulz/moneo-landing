"use client";

import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import EarningsChart from "./EarningsChart";
import KPICards from "./KPICards";
import NotificationsView from "./NotificationsView";
import AIInsightsView from "./AIInsightsView";
import ActivityView from "./ActivityView";
import CardsView from "./CardsView";
import WalletView from "./WalletView";
import TransfersView from "./TransfersView";
import ReportsView from "./ReportsView";
import TeamView from "./TeamView";
import SettingsView from "./SettingsView";
import { CreditCard, ArrowDown, ArrowUp, Calendar, Grid } from "lucide-react";

function OverviewContent() {
  return (
    <>
      {/* Earnings + Card */}
      <div className="grid grid-cols-1 gap-6 items-stretch lg:[grid-template-columns:minmax(0,_420px)_minmax(0,_1fr)]">
        {/* Chart */}
        <div className="flex flex-col w-full h-full max-w-lg rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-geist font-light tracking-tight text-white">
                  $742,560
                </p>
                <span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">
                  +2.1%
                </span>
              </div>
              <p className="mt-1 text-xs font-geist text-neutral-400">
                Net inflow · last 7 days
              </p>
            </div>
          </div>
          <EarningsChart />
        </div>

        {/* Card */}
        <div className="h-full flex flex-col w-full rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div
            className="rounded-2xl p-5 ring-1 ring-white/10"
            style={{
              background:
                "radial-gradient(120% 120% at 20% 0%, rgba(240,240,240,0.12) 0%, rgba(163,163,163,0.06) 35%, rgba(20,20,20,0.45) 70%), linear-gradient(135deg, rgba(115,115,115,0.15), rgba(163,163,163,0.08))",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                <CreditCard className="w-4 h-4" />
              </span>
              <Grid className="w-5 h-5 text-neutral-300/80" />
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-white/90">
                <CreditCard className="w-5 h-5 text-neutral-200" />
                <p className="text-lg sm:text-xl font-semibold tracking-tight font-geist text-white">
                  5312 9087 4421 1160
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="text-[11px] font-geist text-neutral-400">
                    Valid Thru
                  </p>
                  <p className="text-sm tracking-tight font-geist">09/30</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-geist text-neutral-400">
                    CVC
                  </p>
                  <p className="text-sm tracking-tight font-geist">• • • •</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-3">
            <div className="flex flex-col items-center gap-2">
              <span className="h-12 w-12 inline-flex items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
                <ArrowDown className="w-5 h-5 text-emerald-300" />
              </span>
              <span className="text-xs font-geist text-neutral-400">Pay</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="h-12 w-12 inline-flex items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10">
                <ArrowUp className="w-5 h-5 text-neutral-300" />
              </span>
              <span className="text-xs font-geist text-neutral-400">
                Request
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="h-12 w-12 inline-flex items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10">
                <Calendar className="w-5 h-5 text-neutral-300" />
              </span>
              <span className="text-xs font-geist text-neutral-400">
                Invoice
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="h-12 w-12 inline-flex items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10">
                <Grid className="w-5 h-5 text-neutral-300" />
              </span>
              <span className="text-xs font-geist text-neutral-400">
                Tools
              </span>
            </div>
          </div>
        </div>
      </div>
      <KPICards />
    </>
  );
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeNav) {
      case "Overview":
        return <OverviewContent />;
      case "Wallet":
        return <WalletView />;
      case "Transfers":
        return <TransfersView />;
      case "Reports":
        return <ReportsView />;
      case "Team":
        return <TeamView />;
      case "Settings":
        return <SettingsView />;
      case "Notifications":
        return <NotificationsView />;
      case "AI Insights":
        return <AIInsightsView />;
      case "Activity":
        return <ActivityView />;
      case "Cards":
        return <CardsView />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar 
        activeNav={activeNav} 
        onNavChange={setActiveNav}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6 space-y-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
