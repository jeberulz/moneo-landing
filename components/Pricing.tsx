"use client";

import { useState } from "react";
import { Check, Sparkles, Upload } from "lucide-react";
import PricingCards from "./PricingCards";

export default function Pricing() {
  const [billingMode, setBillingMode] = useState<"monthly" | "annual">(
    "monthly"
  );

  return (
    <section
      id="pricing"
      className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6"
    >
      <div
        className="sm:pt-8 sm:pl-8 sm:pr-8 sm:pb-8 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl ring-0 pt-6 pr-8 pb-6 pl-8"
        style={{
          position: "relative",
          "--border-gradient":
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
          "--border-radius-before": "24px",
        } as React.CSSProperties}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 gap-8">
          {/* Left: Feature bullets */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
                  PRICING
                </span>
                <h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
                  Simple, smart, transparent pricing
                </h2>
                <p className="mt-6 text-base sm:text-lg dark:text-neutral-400 text-neutral-600">
                  See how Moneo helps individuals and small businesses take
                  control of their budgets, save smarter, and plan ahead with
                  AI-driven insights.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
                  <Check className="w-5 h-5 text-neutral-200" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                    Auto-categorization powered by AI
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Moneo learns your habits and classifies transactions with
                    high accuracy — no more manual cleanup.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
                  <Sparkles className="w-5 h-5 text-neutral-200" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                    Smart budgets & envelopes
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Create monthly or rolling budgets with drift protection,
                    alerts, and envelope-style rules.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
                  <Upload className="w-5 h-5 text-neutral-200" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                    Bank sync & anomaly alerts
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Securely connect accounts, get real-time sync, and catch
                    unusual spend before it snowballs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Plans */}
          <div className="lg:col-span-7">
            <PricingCards
              billingMode={billingMode}
              setBillingMode={setBillingMode}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
