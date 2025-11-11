"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  ArrowDown,
  ArrowUp,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const transferHistory = [
  {
    id: 1,
    type: "sent",
    recipient: "Sarah Johnson",
    amount: "$1,500.00",
    date: "Today, 2:30 PM",
    status: "completed",
    account: "Primary Account",
  },
  {
    id: 2,
    type: "received",
    sender: "Acme Corp",
    amount: "$5,200.00",
    date: "Today, 9:00 AM",
    status: "completed",
    account: "Primary Account",
  },
  {
    id: 3,
    type: "sent",
    recipient: "John Doe",
    amount: "$250.00",
    date: "Yesterday, 4:15 PM",
    status: "completed",
    account: "Savings Account",
  },
  {
    id: 4,
    type: "scheduled",
    recipient: "Electric Company",
    amount: "$120.00",
    date: "Scheduled for Jan 15",
    status: "pending",
    account: "Primary Account",
  },
];

export default function TransfersView() {
  const [transferType, setTransferType] = useState<"send" | "request">("send");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight font-geist text-white">
            Transfers
          </h2>
          <p className="mt-1 text-sm font-geist text-neutral-400">
            Send and receive money, schedule transfers
          </p>
        </div>
      </div>

      {/* Main Content - Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Transfer Form */}
        <div className="flex-1 lg:max-w-md">
          <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={() => setTransferType("send")}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-geist transition-colors ${
                  transferType === "send"
                    ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
                    : "bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <ArrowUp className="w-4 h-4" />
                  Send Money
                </span>
              </button>
              <button
                onClick={() => setTransferType("request")}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-geist transition-colors ${
                  transferType === "request"
                    ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
                    : "bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <ArrowDown className="w-4 h-4" />
                  Request Money
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-geist text-neutral-400 mb-2 block">
                  {transferType === "send" ? "Recipient" : "Request from"}
                </label>
                <Input
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder={transferType === "send" ? "Email or phone number" : "Email or phone number"}
                  className="w-full rounded-xl ring-1 px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
                />
              </div>

              <div>
                <label className="text-xs font-geist text-neutral-400 mb-2 block">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-geist text-neutral-400">
                    $
                  </span>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-xl ring-1 pl-8 pr-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-geist text-neutral-400 mb-2 block">
                  From Account
                </label>
                <select className="w-full rounded-xl ring-1 px-4 py-3 text-sm font-geist focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white border-0">
                  <option>Primary Account</option>
                  <option>Savings Account</option>
                  <option>Investment Account</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button
                  className="flex-1 rounded-xl px-4 py-3 text-sm font-geist bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  {transferType === "send" ? "Send Money" : "Request Money"}
                </Button>
                <Button
                  className="rounded-xl px-4 py-3 text-sm font-geist bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10"
                >
                  <Calendar className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Scheduled & Recent Transfers */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Scheduled Transfers */}
          <div className="rounded-2xl ring-1 p-6 border bg-neutral-900/95 ring-white/10 border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                  Scheduled Transfers
                </h3>
                <p className="text-xs font-geist text-neutral-400 mt-1">
                  Upcoming automatic transfers
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {transferHistory
                .filter((t) => t.type === "scheduled")
                .map((transfer) => (
                  <div
                    key={transfer.id}
                    className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 ring-1 ring-amber-400/30 shrink-0">
                          <Clock className="w-5 h-5 text-amber-300" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                            {transfer.recipient}
                          </p>
                          <p className="text-xs font-geist text-neutral-400 mt-1 truncate">
                            {transfer.date} · {transfer.account}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg font-semibold tracking-tight font-geist text-white">
                          {transfer.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Transfer History */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold tracking-tight font-geist text-white">
                Recent Transfers
              </h3>
              <button className="text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {transferHistory
                .filter((t) => t.type !== "scheduled")
                .map((transfer) => {
                  const isSent = transfer.type === "sent";
                  const StatusIcon = transfer.status === "completed" ? CheckCircle2 : XCircle;

                  return (
                    <div
                      key={transfer.id}
                      className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10 hover:ring-white/20 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 min-w-0 flex-1">
                          <div
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 shrink-0 ${
                              isSent
                                ? "bg-red-500/15 ring-red-400/30 text-red-300"
                                : "bg-emerald-500/15 ring-emerald-400/30 text-emerald-300"
                            }`}
                          >
                            {isSent ? (
                              <ArrowUp className="w-5 h-5" />
                            ) : (
                              <ArrowDown className="w-5 h-5" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                              {isSent ? transfer.recipient : transfer.sender}
                            </h4>
                            <p className="mt-1 text-xs font-geist text-neutral-400 truncate">
                              {transfer.date} · {transfer.account}
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                              <StatusIcon
                                className={`w-4 h-4 shrink-0 ${
                                  transfer.status === "completed"
                                    ? "text-emerald-400"
                                    : "text-amber-400"
                                }`}
                              />
                              <span className="text-xs font-geist text-neutral-500 capitalize">
                                {transfer.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p
                            className={`text-lg font-semibold tracking-tight font-geist ${
                              isSent ? "text-white" : "text-emerald-400"
                            }`}
                          >
                            {isSent ? "-" : "+"}
                            {transfer.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

