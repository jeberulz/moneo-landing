"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BillingToggle from "./BillingToggle";

interface PricingCardsProps {
  billingMode: "monthly" | "annual";
  setBillingMode: (mode: "monthly" | "annual") => void;
}

export default function PricingCards({
  billingMode,
  setBillingMode,
}: PricingCardsProps) {
  const plans = [
    {
      name: "Starter",
      monthlyPrice: "$9",
      annualPrice: "$86",
      monthlyUnit: "/ month",
      annualUnit: "/ year",
      description: "Perfect for individuals getting control of monthly spending.",
      features: [
        "AI auto-categorization (single profile)",
        "2 bank connections, daily sync",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: "$29",
      annualPrice: "$278",
      monthlyUnit: "/ month",
      annualUnit: "/ year",
      description:
        "For power users, couples, and small teams managing shared budgets.",
      features: [
        "Unlimited bank connections, hourly sync",
        "Shared budgets & roles (Viewer/Editor)",
      ],
      isPro: true,
    },
  ];

  return (
    <>
      <BillingToggle billingMode={billingMode} setBillingMode={setBillingMode} />
      <div className="grid grid-cols-1 md:grid-cols-2 [grid-auto-rows:1fr] gap-x-6 gap-y-6 items-stretch max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col sm:p-6 h-full ring-1 rounded-2xl p-5 bg-neutral-900/80 ring-white/10"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium tracking-tight text-white">
                {plan.name}
              </p>
            </div>
            <div className="mt-3">
              <div className="flex gap-2 items-baseline">
                <span className="price text-5xl font-light tracking-tight text-white">
                  {billingMode === "monthly"
                    ? plan.monthlyPrice
                    : plan.annualPrice}
                </span>
                <span className="price-unit text-sm text-neutral-400">
                  {billingMode === "monthly"
                    ? plan.monthlyUnit
                    : plan.annualUnit}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-400">{plan.description}</p>
              {billingMode === "annual" && (
                <p className="billing-note mt-1 text-xs text-neutral-500">
                  Billed yearly
                </p>
              )}
            </div>
            <div className="mt-5 space-y-3">
              <Button
                asChild
                className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 hover:brightness-110 text-white ring-emerald-400/30"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)",
                }}
              >
                <a href="#">Start free trial</a>
              </Button>
              <button className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 text-neutral-200 ring-white/10 hover:bg-white/5">
                Compare features
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold tracking-tight text-neutral-300">
                {plan.isPro ? "EVERYTHING IN STARTER, PLUS" : "INCLUDES"}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {plan.isPro
                  ? "Advanced controls & collaboration"
                  : "Everything you need to start"}
              </p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 bg-white/5 text-neutral-200 ring-white/10">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
