"use client";

interface BillingToggleProps {
  billingMode: "monthly" | "annual";
  setBillingMode: (mode: "monthly" | "annual") => void;
}

export default function BillingToggle({
  billingMode,
  setBillingMode,
}: BillingToggleProps) {
  return (
    <div className="mb-4 flex items-center justify-center md:justify-end">
      <div className="inline-flex rounded-full ring-1 p-1 ring-white/10 bg-white/5">
        <button
          type="button"
          onClick={() => setBillingMode("monthly")}
          className={`billing-tab px-4 py-1.5 text-sm rounded-full ring-1 transition-colors ${
            billingMode === "monthly"
              ? "text-white/90 bg-white/10 ring-white/15"
              : "text-neutral-300 hover:text-white"
          }`}
          aria-pressed={billingMode === "monthly"}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBillingMode("annual")}
          className={`billing-tab px-4 py-1.5 text-sm rounded-full transition-colors ${
            billingMode === "annual"
              ? "text-white/90 bg-white/10 ring-1 ring-white/15"
              : "text-neutral-300 hover:text-white"
          }`}
          aria-pressed={billingMode === "annual"}
        >
          Annual
        </button>
      </div>
      {billingMode === "annual" && (
        <span className="ml-3 hidden md:inline text-xs bg-emerald-500/10 ring-1 px-2.5 py-1 rounded-full text-emerald-300/80 ring-emerald-400/30">
          Save 20% annually
        </span>
      )}
    </div>
  );
}
