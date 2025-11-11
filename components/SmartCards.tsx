export default function SmartCards() {
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
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
            SMART CARDS
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-geist font-light tracking-tight text-white">
            Spend smarter with
            <span className="block font-light tracking-tight font-geist">
              AI-powered cards
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 font-geist text-neutral-300">
            Create virtual cards with smart limits, real-time alerts, and
            auto-categorization. Keep control of subscriptions and day-to-day
            spending without the spreadsheets.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="shrink-0 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Auto-categorize every purchase
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="shrink-0 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Set limits, freeze, and get instant alerts
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center sm:px-8 sm:text-base text-sm font-medium tracking-tight font-geist ring-1 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 text-white ring-emerald-400/30"
              style={{
                background:
                  "linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)",
              }}
            >
              Create a Smart Card
            </a>
          </div>
        </div>

        {/* Right: Chart Card */}
        <div className="lg:col-span-6">
          <div className="w-full max-w-3xl relative grid lg:[grid-template-areas:'stack'] lg:place-items-center lg:aspect-[4/3] sm:aspect-auto">
            {/* Back glass (violet tint) */}
            <div className="w-full max-w-[340px] mx-auto mb-6 lg:mb-0 lg:absolute lg:left-6 lg:top-6 lg:w-[320px] lg:-translate-x-16 lg:-translate-y-16 rounded-3xl ring-1 shadow-2xl backdrop-blur-xl lg:[grid-area:stack] ring-white/15 text-white bg-white/10">
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(80% 90% at 70% 40%, rgba(255,255,255,.30) 0%, rgba(255,255,255,.10) 45%, rgba(0,0,0,.20) 65%, rgba(0,0,0,0) 78%)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-3xl mix-blend-soft-light"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(184,141,255,.30), rgba(157,133,255,.20))",
                  }}
                />
              </div>
              <div className="relative p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium font-geist bg-white/90 text-neutral-900">
                      B
                    </span>
                    <span className="text-sm font-medium tracking-tight font-geist text-white/90">
                      Budgetly.
                    </span>
                  </div>
                  <svg width="28" height="18" viewBox="0 0 28 18" className="opacity-70">
                    <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.35)" />
                    <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.2)" />
                  </svg>
                </div>
                <div className="mt-6">
                  <div className="text-xl sm:text-2xl font-geist font-light tracking-tight text-white/95">
                    4521 9083 7610{" "}
                    <span className="font-geist font-light tracking-tight text-white/70">
                      XXXX
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-geist text-white/60">
                      CARD HOLDER
                    </div>
                    <div className="text-sm tracking-tight font-geist text-white/90">
                      Eva Kim
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-geist text-white/60">
                      VALID THRU
                    </div>
                    <div className="text-sm tracking-tight font-geist text-white/90">
                      09/27
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle glass (lime tint) */}
            <div className="w-full max-w-[340px] mx-auto mb-6 lg:mb-0 lg:absolute lg:left-16 lg:top-20 lg:w-[380px] lg:-translate-y-2 lg:z-20 rounded-3xl ring-1 shadow-2xl backdrop-blur-xl lg:[grid-area:stack] ring-white/15 text-white bg-white/10">
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(85% 95% at 50% 48%, rgba(0,0,0,.45) 0%, rgba(0,0,0,.18) 35%, rgba(0,0,0,.08) 55%, rgba(0,0,0,0) 75%)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-3xl mix-blend-soft-light"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(231,255,140,.35), rgba(183,255,158,.25))",
                  }}
                />
              </div>
              <div className="relative p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 28 18"
                      className="opacity-80 w-[30px] h-[20px]"
                      strokeWidth="2"
                      style={{ width: "30px", height: "20px", color: "rgb(255, 255, 255)" }}
                    >
                      <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.45)" />
                      <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.25)" />
                    </svg>
                    <span className="text-sm font-medium tracking-tight font-geist text-white/95">
                      Budgetly.
                    </span>
                  </div>
                  <svg
                    width="30"
                    height="20"
                    viewBox="0 0 28 18"
                    className="opacity-80 w-[30px] h-[20px]"
                    strokeWidth="2"
                    style={{ width: "30px", height: "20px", color: "rgb(255, 255, 255)" }}
                  >
                    <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.45)" />
                    <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.25)" />
                  </svg>
                </div>
                <div className="mt-7">
                  <div className="text-2xl sm:text-3xl font-geist font-light tracking-tight text-white">
                    5249 3820 1145{" "}
                    <span className="font-geist font-light tracking-tight text-white/70">
                      XXXX
                    </span>
                  </div>
                </div>
                <div className="mt-7 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-geist text-white/70">
                      CARD HOLDER
                    </div>
                    <div className="text-base tracking-tight font-geist text-white/95">
                      Daniel Park
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-geist text-white/70">
                      VALID THRU
                    </div>
                    <div className="text-base tracking-tight font-geist text-white/95">
                      03/29
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft glow (hidden on mobile) */}
            <div
              className="hidden lg:block lg:absolute lg:left-16 lg:top-20 lg:w-[380px] lg:h-[230px] lg:z-10 pointer-events-none rounded-3xl lg:[grid-area:stack]"
              style={{
                filter: "blur(18px)",
                background:
                  "radial-gradient(50% 60% at 55% 50%, rgba(255,255,255,.35) 0%, rgba(255,255,255,.12) 40%, rgba(255,255,255,0) 70%)",
              }}
            />

            {/* Bottom glass (dark tint) */}
            <div className="w-full max-w-[340px] mx-auto lg:absolute lg:right-6 lg:bottom-2 lg:w-[330px] lg:-translate-x-6 lg:translate-y-12 rounded-3xl ring-1 shadow-2xl backdrop-blur-lg lg:[grid-area:stack] ring-white/10 text-white/85 bg-white/5">
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(90% 100% at 60% 45%, rgba(255,255,255,.10) 0%, rgba(255,255,255,.04) 40%, rgba(0,0,0,.25) 62%, rgba(0,0,0,0) 80%)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-3xl mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,.65), rgba(31,41,55,.55))",
                  }}
                />
              </div>
              <div className="relative p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium font-geist bg-white/80 text-neutral-900">
                      B
                    </span>
                    <span className="text-sm font-medium tracking-tight font-geist text-white/90">
                      Budgetly.
                    </span>
                  </div>
                  <svg width="28" height="18" viewBox="0 0 28 18" className="opacity-50">
                    <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.25)" />
                    <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.15)" />
                  </svg>
                </div>
                <div className="mt-6">
                  <div className="text-xl sm:text-2xl font-geist font-light tracking-tight text-white/85">
                    6019 7321 8550{" "}
                    <span className="font-geist font-light tracking-tight text-white/50">
                      XXXX
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-geist text-white/55">
                      CARD HOLDER
                    </div>
                    <div className="text-sm tracking-tight font-geist text-white/85">
                      Lena Tran
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-geist text-white/55">
                      VALID THRU
                    </div>
                    <div className="text-sm tracking-tight font-geist text-white/85">
                      11/26
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

