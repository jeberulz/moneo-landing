"use client";

import { useState } from "react";
import {
  Users,
  Plus,
  Mail,
  Shield,
  UserPlus,
  MoreVertical,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Owner",
    permissions: ["Full Access"],
    avatar: "SJ",
    status: "active",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@example.com",
    role: "Admin",
    permissions: ["View", "Edit", "Transfer"],
    avatar: "MC",
    status: "active",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily@example.com",
    role: "Member",
    permissions: ["View", "Edit"],
    avatar: "ER",
    status: "active",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@example.com",
    role: "Viewer",
    permissions: ["View"],
    avatar: "DK",
    status: "pending",
  },
];

const sharedBudgets = [
  {
    id: 1,
    name: "Household Budget",
    members: 4,
    total: "$5,200.00",
    period: "Monthly",
  },
  {
    id: 2,
    name: "Vacation Fund",
    members: 3,
    total: "$2,450.00",
    period: "One-time",
  },
  {
    id: 3,
    name: "Business Expenses",
    members: 2,
    total: "$12,800.00",
    period: "Monthly",
  },
];

const permissionLevels = [
  { id: "viewer", label: "Viewer", description: "Can view budgets and reports" },
  { id: "member", label: "Member", description: "Can view and edit budgets" },
  { id: "admin", label: "Admin", description: "Can manage budgets and members" },
  { id: "owner", label: "Owner", description: "Full access to all features" },
];

export default function TeamView() {
  const [showInviteModal, setShowInviteModal] = useState(false);

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "owner":
        return "bg-purple-500/15 ring-purple-400/30 text-purple-300";
      case "admin":
        return "bg-blue-500/15 ring-blue-400/30 text-blue-300";
      case "member":
        return "bg-emerald-500/15 ring-emerald-400/30 text-emerald-300";
      default:
        return "bg-neutral-500/15 ring-neutral-400/30 text-neutral-300";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Team
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Manage team members and shared budgets
          </p>
        </div>
        <Button
          onClick={() => setShowInviteModal(true)}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-geist bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <UserPlus className="w-4 h-4" />
          Invite Member
        </Button>
      </div>

      <div className="flex flex-col gap-6 max-w-6xl">
        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <p className="text-sm font-geist text-neutral-400 mb-2">Team Members</p>
            <p className="text-3xl font-light tracking-tight font-geist text-white">
              {teamMembers.length}
            </p>
          </div>
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <p className="text-sm font-geist text-neutral-400 mb-2">Shared Budgets</p>
            <p className="text-3xl font-light tracking-tight font-geist text-white">
              {sharedBudgets.length}
            </p>
          </div>
          <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
            <p className="text-sm font-geist text-neutral-400 mb-2">Active Members</p>
            <p className="text-3xl font-light tracking-tight font-geist text-white">
              {teamMembers.filter((m) => m.status === "active").length}
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                Team Members
              </h3>
              <p className="text-xs font-geist text-neutral-400 mt-1">
                Manage permissions and access
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10 hover:ring-white/20 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="relative shrink-0">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 ring-1 ring-white/10">
                        <span className="text-sm font-semibold font-geist text-white">
                          {member.avatar}
                        </span>
                      </div>
                      {member.role === "Owner" && (
                        <div className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 ring-2 ring-neutral-900">
                          <Crown className="w-3 h-3 text-purple-300" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                          {member.name}
                        </h4>
                        {member.status === "pending" && (
                          <span className="text-xs font-geist px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 shrink-0">
                            Pending
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-geist text-neutral-400 mt-1 flex items-center gap-1 truncate">
                        <Mail className="w-3 h-3 shrink-0" />
                        {member.email}
                      </p>
                      <div className="mt-2 flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-xs font-geist px-2 py-0.5 rounded-full ring-1 shrink-0 ${getRoleColor(member.role)}`}
                        >
                          {member.role}
                        </span>
                        <span className="text-xs font-geist text-neutral-500 truncate">
                          {member.permissions.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-neutral-400 hover:text-neutral-300 transition-colors shrink-0">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Shared Budgets */}
      <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
              Shared Budgets
            </h3>
            <p className="text-xs font-geist text-neutral-400 mt-1">
              Budgets shared with your team
            </p>
          </div>
          <button className="text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors">
            Create Budget
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sharedBudgets.map((budget) => (
            <div
              key={budget.id}
              className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10 hover:ring-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30">
                  <Users className="w-5 h-5 text-emerald-300" />
                </div>
                <span className="text-xs font-geist text-neutral-400">
                  {budget.period}
                </span>
              </div>
              <h4 className="text-sm font-semibold tracking-tight font-geist text-white mb-1">
                {budget.name}
              </h4>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-xs font-geist text-neutral-400">Total</p>
                  <p className="text-lg font-light tracking-tight font-geist text-white">
                    {budget.total}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-geist text-neutral-400">Members</p>
                  <p className="text-lg font-light tracking-tight font-geist text-white">
                    {budget.members}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permission Levels */}
      <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
        <div className="mb-4">
          <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
            Permission Levels
          </h3>
          <p className="text-xs font-geist text-neutral-400 mt-1">
            Understand what each role can do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {permissionLevels.map((level) => (
            <div
              key={level.id}
              className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-neutral-400" />
                <h4 className="text-sm font-semibold tracking-tight font-geist text-white capitalize">
                  {level.label}
                </h4>
              </div>
              <p className="text-xs font-geist text-neutral-400">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

