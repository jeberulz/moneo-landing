"use client";

import { Clock, Calendar, ArrowRight } from "lucide-react";

interface Payment {
  id: number;
  recipient: string;
  amount: string;
  date: string;
  status: "pending" | "scheduled";
  account?: string;
}

interface UpcomingPaymentsListProps {
  payments: Payment[];
  onViewAll: () => void;
}

export default function UpcomingPaymentsList({
  payments,
  onViewAll,
}: UpcomingPaymentsListProps) {
  return (
    <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-amber-500/15 ring-amber-400/30">
            <Clock className="w-4 h-4 text-amber-300" />
          </span>
          <p className="text-sm font-geist text-neutral-400">Upcoming Payments</p>
        </div>
      </div>

      {payments.length === 0 ? (
        <div className="py-8 text-center">
          <Calendar className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
          <p className="text-sm font-geist text-neutral-400">No upcoming payments</p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="rounded-xl ring-1 p-3 bg-white/5 ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                      {payment.recipient}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs font-geist text-neutral-400">
                        {payment.date}
                      </p>
                      {payment.account && (
                        <>
                          <span className="text-xs font-geist text-neutral-600">•</span>
                          <p className="text-xs font-geist text-neutral-400">
                            {payment.account}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-base font-semibold tracking-tight font-geist text-white">
                      {payment.amount}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span className="text-xs font-geist text-neutral-500 capitalize">
                        {payment.status}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onViewAll}
            className="mt-4 inline-flex items-center gap-2 text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}

