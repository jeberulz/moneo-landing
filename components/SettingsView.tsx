"use client";

import { useState } from "react";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Moon,
  Globe,
  Key,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const settingsSections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "preferences", label: "Preferences", icon: Moon },
  { id: "privacy", label: "Privacy", icon: Globe },
];

export default function SettingsView() {
  const [activeSection, setActiveSection] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    budgetAlerts: true,
  });

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white mb-4">
                Profile Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-geist text-neutral-400 mb-2 block">
                    Full Name
                  </label>
                  <Input
                    defaultValue="John Doe"
                    className="w-full rounded-xl ring-1 px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
                  />
                </div>
                <div>
                  <label className="text-xs font-geist text-neutral-400 mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full rounded-xl ring-1 px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
                  />
                </div>
                <div>
                  <label className="text-xs font-geist text-neutral-400 mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full rounded-xl ring-1 px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
                  />
                </div>
                <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-emerald-600 text-white hover:bg-emerald-700">
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white mb-4">
                Notification Preferences
              </h3>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-xl ring-1 p-4 bg-white/5 ring-white/10"
                  >
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        {key === "email"
                          ? "Receive notifications via email"
                          : key === "push"
                          ? "Receive push notifications"
                          : key === "sms"
                          ? "Receive SMS notifications"
                          : "Get alerts when budget limits are reached"}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setNotifications({ ...notifications, [key]: !value })
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? "bg-emerald-600" : "bg-neutral-700"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white mb-4">
                Security Settings
              </h3>
              <div className="space-y-4">
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10">
                      Enable
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Change Password
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Update your account password
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10">
                      Change
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Active Sessions
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Manage devices signed into your account
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "billing":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white mb-4">
                Billing & Subscription
              </h3>
              <div className="space-y-4">
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Current Plan
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Pro Plan · $29/month
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-emerald-600 text-white hover:bg-emerald-700">
                      Manage Plan
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Payment Method
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        •••• •••• •••• 4521
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Billing History
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        View and download invoices
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "preferences":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white mb-4">
                Preferences
              </h3>
              <div className="space-y-4">
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Currency
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        USD ($)
                      </p>
                    </div>
                    <select className="rounded-xl ring-1 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                    </select>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Date Format
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        MM/DD/YYYY
                      </p>
                    </div>
                    <select className="rounded-xl ring-1 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Theme
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Dark
                      </p>
                    </div>
                    <select className="rounded-xl ring-1 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0">
                      <option>Dark</option>
                      <option>Light</option>
                      <option>System</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white mb-4">
                Privacy Settings
              </h3>
              <div className="space-y-4">
                <div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Data Export
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Download all your data
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10">
                      Export
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl ring-1 p-4 bg-red-500/10 ring-red-400/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-tight font-geist text-white">
                        Delete Account
                      </p>
                      <p className="text-xs font-geist text-neutral-400 mt-1">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <Button className="rounded-xl px-4 py-2 text-sm font-geist bg-red-600 text-white hover:bg-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Settings
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl ring-1 p-4 border bg-neutral-900/95 ring-white/10 border-white/10">
            <nav className="space-y-2">
              {settingsSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist ${
                      isActive
                        ? "bg-white/[0.06] text-white ring-white/10"
                        : "hover:bg-white/5 text-neutral-300 ring-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

