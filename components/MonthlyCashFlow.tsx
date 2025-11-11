import RadarChart from "./RadarChart";

export default function MonthlyCashFlow() {
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
        {/* Left: Visual Panel */}
        <div className="lg:col-span-6">
          <div className="relative">
            <section className="bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl shadow-black/20 from-slate-200/10 to-slate-800/0 border-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[18px] tracking-tight font-semibold font-geist text-white">
                    Monthly Cash Flow
                  </h2>
                  <p className="text-xs font-geist text-white/60">
                    AI-assisted overview
                  </p>
                </div>
              </div>
              <div className="mt-3 text-2xl font-geist font-light tracking-tight text-white">
                $2,895.89
              </div>
              <div className="mt-6">
                <RadarChart />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                <span className="inline-flex items-center gap-2 font-geist">
                  <span className="h-1.5 w-8 rounded-full bg-emerald-400" />
                  Income
                  <span className="font-geist text-white/40">6:47 AM</span>
                </span>
                <span className="inline-flex items-center gap-2 font-geist">
                  <span className="h-1.5 w-8 rounded-full bg-lime-400" />
                  Expenses
                  <span className="font-geist text-white/40">6:51 PM</span>
                </span>
              </div>
            </section>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist ring-emerald-500/40 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
            AI BUDGET ASSISTANT
          </span>
          <h2 className="sm:text-5xl lg:text-6xl text-4xl font-light tracking-tight font-geist mt-6 text-white">
            Plan, track, and optimize your
            <span className="block font-geist font-light tracking-tight">
              budget with AI
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 font-geist text-white/70">
            Get real-time insights, smart savings suggestions, and forecasts
            that help you stay on target—without spreadsheets. Connect your
            accounts and let the assistant do the heavy lifting.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl sm:text-5xl font-geist font-light tracking-tight text-emerald-400">
                2M+
              </div>
              <div className="text-base mt-2 font-geist text-white/80">
                Budgets created
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-geist font-light tracking-tight text-emerald-400">
                500+
              </div>
              <div className="text-base mt-2 font-geist text-white/80">
                Bank integrations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

