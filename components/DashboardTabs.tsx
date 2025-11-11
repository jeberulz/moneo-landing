"use client";

import { useState } from "react";
import Image from "next/image";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Wallet",
    "Transfers",
    "Reports",
    "Team",
    "Settings",
  ];

  return (
    <div className="flex items-center justify-between overflow-x-auto">
      <div className="flex gap-2 flex-nowrap pb-2 pr-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm ring-1 tracking-tight font-geist whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30"
                : "hover:bg-white/5 text-neutral-300 ring-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex gap-3 items-center shrink-0 ml-3">
        <Image
          className="w-9 h-9 object-cover ring-1 rounded-full ring-white/15"
          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f70140f-4f5d-4ce1-bec2-b36510d07e52_320w.webp"
          alt="User"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
}

