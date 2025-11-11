import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AIFlowDiagram from "./AIFlowDiagram";

export default function AIBudgetAssistant() {
  return (
    <section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
      <div
        className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-y-12 gap-y-12 items-center"
        style={{
          position: "relative",
          "--border-gradient":
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
          "--border-radius-before": "24px",
        } as React.CSSProperties}
      >
        {/* Left: Content */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 rounded-full ring-emerald-500/30 ring-1 pt-1.5 pr-4 pb-1.5 pl-4">
            SMART AI FEATURE
          </span>
          <h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
            Meet Your AI Budget Assistant
          </h2>
          <p className="mt-6 text-lg leading-8 font-geist text-neutral-300">
            Plan smarter with predictive AI that tracks your spending, forecasts
            savings, and helps you make better financial decisions effortlessly.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
              <Check className="shrink-0 text-emerald-400 w-5 h-5" />
              Predict Monthly Expenses
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
              <Check className="shrink-0 text-emerald-400 w-5 h-5" />
              Optimize Saving Strategies
            </li>
          </ul>
          <div className="mt-8">
            <Button
              asChild
              className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3.5 text-sm sm:text-base font-medium tracking-tight ring-1 font-geist text-white ring-emerald-400/30"
              style={{
                background:
                  "linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)",
              }}
            >
              <a href="#">Try It Now</a>
            </Button>
          </div>
        </div>

        {/* Right: Chart Card */}
        <div className="lg:col-span-6">
          <div className="overflow-visible max-h-fit border rounded-2xl pt-4 pr-4 pb-8 pl-4 relative bg-black/40 border-white/10">
            <h3 className="text-lg font-semibold tracking-tight mb-2 font-geist">
              AI Insights Dashboard
            </h3>
            <p className="text-sm mb-4 font-geist text-gray-300">
              Visualize your expenses, track habits, and uncover patterns that
              help improve your financial health.
            </p>
            <AIFlowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

