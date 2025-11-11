"use client";

import { Wallet, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

interface Account {
  id: number;
  name: string;
  balance: number;
  change?: number;
  changeType?: "increase" | "decrease";
}

interface AccountBalanceSummaryProps {
  accounts: Account[];
  onViewWallet: () => void;
}

export default function AccountBalanceSummary({
  accounts,
  onViewWallet,
}: AccountBalanceSummaryProps) {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-emerald-500/15 ring-emerald-400/30">
            <Wallet className="w-4 h-4 text-emerald-300" />
          </span>
          <p className="text-sm font-geist text-neutral-400">Account Balance</p>
        </div>
      </div>

      {accounts.length === 0 ? (
        <div className="py-8 text-center">
          <Wallet className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
          <p className="text-sm font-geist text-neutral-400">No accounts</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-xs font-geist text-neutral-400 mb-1">Total Balance</p>
            <p className="text-2xl font-light tracking-tight font-geist text-white">
              ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="space-y-3">
            {accounts.map((account) => {
              const ChangeIcon = account.changeType === "increase" ? TrendingUp : TrendingDown;
              const changeColor =
                account.changeType === "increase" ? "text-emerald-400" : "text-neutral-400";

              return (
                <div
                  key={account.id}
                  className="flex items-center justify-between rounded-xl p-3 bg-white/5"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold tracking-tight font-geist text-white truncate">
                      {account.name}
                    </p>
                    {account.change !== undefined && (
                      <div className="flex items-center gap-1 mt-1">
                        <ChangeIcon className={`w-3 h-3 ${changeColor}`} />
                        <p className={`text-xs font-geist ${changeColor}`}>
                          {account.changeType === "increase" ? "+" : ""}
                          ${Math.abs(account.change).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-base font-semibold tracking-tight font-geist text-white">
                      ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onViewWallet}
            className="mt-4 inline-flex items-center gap-2 text-sm font-geist text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View wallet
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}

