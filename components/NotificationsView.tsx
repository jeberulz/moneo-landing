"use client";

import { Bell, CheckCircle2, AlertCircle, Info, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Payment received",
    message: "You received $2,450.00 from Acme Corp",
    time: "2 minutes ago",
    icon: CheckCircle2,
  },
  {
    id: 2,
    type: "warning",
    title: "Budget alert",
    message: "You're approaching your monthly spending limit",
    time: "1 hour ago",
    icon: AlertCircle,
  },
  {
    id: 3,
    type: "info",
    title: "New feature available",
    message: "AI Insights dashboard is now available",
    time: "3 hours ago",
    icon: Info,
  },
  {
    id: 4,
    type: "success",
    title: "Card activated",
    message: "Your new virtual card has been activated",
    time: "5 hours ago",
    icon: CheckCircle2,
  },
  {
    id: 5,
    type: "info",
    title: "Monthly report ready",
    message: "Your financial report for January is ready",
    time: "1 day ago",
    icon: Info,
  },
];

export default function NotificationsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Notifications
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Stay updated with your financial activity
          </p>
        </div>
        <button className="text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          const iconColors = {
            success: "text-emerald-400",
            warning: "text-amber-400",
            info: "text-blue-400",
          };

          return (
            <div
              key={notification.id}
              className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 hover:ring-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10 ${
                    iconColors[notification.type as keyof typeof iconColors]
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight font-geist text-white">
                        {notification.title}
                      </h3>
                      <p className="mt-1 text-sm font-geist text-neutral-300">
                        {notification.message}
                      </p>
                      <p className="mt-2 text-xs font-geist text-neutral-500">
                        {notification.time}
                      </p>
                    </div>
                    <button className="ml-4 text-neutral-500 hover:text-neutral-300 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <div className="rounded-2xl ring-1 p-12 border bg-neutral-900/95 ring-white/10 border-white/10 text-center">
          <Bell className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
          <p className="text-sm font-geist text-neutral-400">
            No notifications yet
          </p>
        </div>
      )}
    </div>
  );
}

