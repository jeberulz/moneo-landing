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
import TimePeriodFilter, { TimePeriod } from "./overview/TimePeriodFilter";
import QuickAIInsightCard from "./overview/QuickAIInsightCard";
import UpcomingPaymentsList from "./overview/UpcomingPaymentsList";
import RecentTransactionsSummary from "./overview/RecentTransactionsSummary";
import BudgetProgressCard from "./overview/BudgetProgressCard";
import GoalsProgressCard from "./overview/GoalsProgressCard";
import AccountBalanceSummary from "./overview/AccountBalanceSummary";
import { CreditCard, ArrowDown, ArrowUp, Calendar, Grid, TrendingDown, ShoppingBag, Coffee, Home, Car } from "lucide-react";

function OverviewContent({ onNavChange }: { onNavChange: (nav: string) => void }) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("week");

  // Mock data for AI Insight
  const topInsight = {
    id: 1,
    type: "savings" as const,
    title: "Potential savings identified",
    description: "You could save $450/month by optimizing subscription services",
    value: "$450",
    icon: TrendingDown,
    color: "emerald" as const,
  };

  // Mock data for Upcoming Payments
  const upcomingPayments = [
    {
      id: 1,
      recipient: "Electric Company",
      amount: "$120.00",
      date: "Jan 15",
      status: "scheduled" as const,
      account: "Primary Account",
    },
    {
      id: 2,
      recipient: "Internet Provider",
      amount: "$89.99",
      date: "Jan 18",
      status: "scheduled" as const,
      account: "Primary Account",
    },
    {
      id: 3,
      recipient: "Rent Payment",
      amount: "$2,400.00",
      date: "Jan 20",
      status: "pending" as const,
      account: "Primary Account",
    },
  ];

  // Mock data for Recent Transactions
  const recentTransactions = [
    {
      id: 1,
      type: "income" as const,
      title: "Salary payment",
      description: "Monthly salary from Acme Corp",
      amount: "+$5,200.00",
      time: "Today, 9:00 AM",
      category: "Salary",
      icon: ArrowDown,
    },
    {
      id: 2,
      type: "expense" as const,
      title: "Grocery shopping",
      description: "Whole Foods Market",
      amount: "-$127.45",
      time: "Today, 2:30 PM",
      category: "Groceries",
      icon: ShoppingBag,
    },
    {
      id: 3,
      type: "expense" as const,
      title: "Coffee shop",
      description: "Starbucks",
      amount: "-$5.75",
      time: "Today, 8:15 AM",
      category: "Food & Drink",
      icon: Coffee,
    },
    {
      id: 4,
      type: "expense" as const,
      title: "Rent payment",
      description: "Monthly apartment rent",
      amount: "-$2,400.00",
      time: "Yesterday, 10:00 AM",
      category: "Housing",
      icon: Home,
    },
    {
      id: 5,
      type: "expense" as const,
      title: "Gas station",
      description: "Shell Station",
      amount: "-$45.20",
      time: "Yesterday, 5:45 PM",
      category: "Transportation",
      icon: Car,
    },
  ];

  // Mock data for Budget Progress
  const budgetCategories = [
    {
      id: 1,
      name: "Groceries",
      spent: 320,
      budget: 500,
      status: "on-track" as const,
    },
    {
      id: 2,
      name: "Dining",
      spent: 450,
      budget: 400,
      status: "over" as const,
    },
    {
      id: 3,
      name: "Entertainment",
      spent: 180,
      budget: 300,
      status: "on-track" as const,
    },
    {
      id: 4,
      name: "Transportation",
      spent: 220,
      budget: 250,
      status: "warning" as const,
    },
  ];

  // Mock data for Goals
  const goals = [
    {
      id: 1,
      name: "Emergency Fund",
      targetAmount: 10000,
      currentAmount: 7500,
      deadline: "Target: Mar 2025",
    },
    {
      id: 2,
      name: "Vacation Fund",
      targetAmount: 5000,
      currentAmount: 3200,
      deadline: "Target: Jun 2025",
    },
  ];

  // Mock data for Accounts
  const accounts = [
    {
      id: 1,
      name: "Primary Account",
      balance: 45230.50,
      change: 1200,
      changeType: "increase" as const,
    },
    {
      id: 2,
      name: "Savings Account",
      balance: 125890.00,
      change: 5000,
      changeType: "increase" as const,
    },
    {
      id: 3,
      name: "Investment Account",
      balance: 234567.89,
      change: -2500,
      changeType: "decrease" as const,
    },
  ];

  return (
    <>
      {/* Zone 1: Hero Metrics */}
      <div className="flex items-center justify-between mb-4">
        <div />
        <TimePeriodFilter currentPeriod={timePeriod} onPeriodChange={setTimePeriod} />
      </div>

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

      {/* Zone 2: Quick Actions & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickAIInsightCard
          insight={topInsight}
          onViewAll={() => onNavChange("AI Insights")}
        />
        <UpcomingPaymentsList
          payments={upcomingPayments}
          onViewAll={() => onNavChange("Transfers")}
        />
      </div>

      {/* Zone 3: Activity & Budget */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTransactionsSummary
          transactions={recentTransactions}
          onViewAll={() => onNavChange("Activity")}
        />
        <BudgetProgressCard
          categories={budgetCategories}
          onManage={() => onNavChange("Reports")}
        />
      </div>

      {/* Zone 4: Goals & Accounts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GoalsProgressCard
          goals={goals}
          onViewAll={() => onNavChange("Reports")}
        />
        <AccountBalanceSummary
          accounts={accounts}
          onViewWallet={() => onNavChange("Wallet")}
        />
      </div>
    </>
  );
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeNav) {
      case "Overview":
        return <OverviewContent onNavChange={setActiveNav} />;
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
        return <OverviewContent onNavChange={setActiveNav} />;
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
