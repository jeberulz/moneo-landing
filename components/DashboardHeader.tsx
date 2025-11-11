"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { userConfig } from "@/lib/user-config";

export default function DashboardHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-neutral-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <Input
                className="w-full rounded-xl ring-1 pl-9 pr-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
                placeholder="Search transactions, accounts, or reports..."
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10 hover:bg-white/10 transition-colors text-neutral-300">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-neutral-900" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 rounded-xl ring-1 px-3 py-2 bg-white/5 ring-white/10 hover:bg-white/10 transition-colors"
              >
                <Image
                  className="w-8 h-8 object-cover ring-1 rounded-full ring-white/15"
                  src={userConfig.avatar}
                  alt={userConfig.name}
                  width={32}
                  height={32}
                />
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-semibold tracking-tight font-geist text-white">
                    {userConfig.name}
                  </p>
                  <p className="text-[10px] font-geist text-neutral-400">
                    {userConfig.email}
                  </p>
                </div>
                <ChevronDown className="hidden sm:block w-4 h-4 text-neutral-400" />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowUserMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 rounded-xl ring-1 bg-neutral-900 border border-white/10 ring-white/10 shadow-xl z-20">
                    <div className="p-2">
                      <div className="px-3 py-2 border-b border-white/10">
                        <p className="text-sm font-semibold tracking-tight font-geist text-white">
                          {userConfig.name}
                        </p>
                        <p className="text-xs font-geist text-neutral-400 mt-0.5">
                          {userConfig.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-geist text-neutral-300 hover:bg-white/5 transition-colors">
                          <User className="w-4 h-4" />
                          Profile Settings
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-geist text-neutral-300 hover:bg-white/5 transition-colors">
                          <Settings className="w-4 h-4" />
                          Preferences
                        </button>
                        <div className="my-1 border-t border-white/10" />
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-geist text-red-400 hover:bg-red-500/10 transition-colors">
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

