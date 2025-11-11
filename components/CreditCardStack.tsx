export default function CreditCardStack() {
  return (
    <div className="lg:col-span-7 grid [grid-template-areas:'stack'] place-items-center [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] opacity-100">
      {/* Card 1 - Emerald Gradient */}
      <div className="relative w-[28rem] h-52 rounded-3xl transition-all duration-700 [grid-area:stack] hover:-translate-y-10 select-none backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.45) 0%, rgba(5,150,105,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 rounded-3xl ring-1 pointer-events-none ring-white/30" />
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 90% at 30% 20%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)",
          }}
        />
        <div className="relative h-full flex flex-col justify-between p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-tight font-geist text-white/95">
                Moneo Card
              </span>
            </div>
            <svg width="38" height="24" viewBox="0 0 28 18" className="opacity-80">
              <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.5)" />
              <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
          <div>
            <div className="text-2xl mb-5 font-geist font-light tracking-tight text-white">
              4521 •••• •••• 8934
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-geist text-white/60">
                  Card Holder
                </div>
                <div className="text-base font-medium font-geist text-white/95">
                  Alex Rivera
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wider font-geist text-white/60">
                  Expires
                </div>
                <div className="text-base font-medium font-geist text-white/95">
                  12/28
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Cyan Gradient */}
      <div className="relative w-[28rem] h-52 rounded-3xl transition-all duration-700 [grid-area:stack] translate-x-20 translate-y-12 hover:-translate-y-1 select-none backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.45) 0%, rgba(6,182,212,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 rounded-3xl ring-1 pointer-events-none ring-white/30" />
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(85% 95% at 50% 30%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 60%, transparent 85%)",
          }}
        />
        <div className="relative h-full flex flex-col justify-between p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-tight font-geist text-white/95">
                Moneo Pro
              </span>
            </div>
            <svg width="38" height="24" viewBox="0 0 28 18" className="opacity-80">
              <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.5)" />
              <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
          <div>
            <div className="text-2xl mb-5 font-geist font-light tracking-tight text-white">
              5249 •••• •••• 2761
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-geist text-white/60">
                  Card Holder
                </div>
                <div className="text-base font-medium font-geist text-white/95">
                  Jordan Lee
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wider font-geist text-white/60">
                  Expires
                </div>
                <div className="text-base font-medium font-geist text-white/95">
                  08/29
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Lime Gradient */}
      <div className="relative w-[28rem] h-52 rounded-3xl transition-all duration-700 [grid-area:stack] translate-x-40 translate-y-24 hover:translate-y-12 select-none backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(163,230,53,0.45) 0%, rgba(132,204,22,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 rounded-3xl ring-1 pointer-events-none ring-white/30" />
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(90% 100% at 70% 25%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 55%, transparent 80%)",
          }}
        />
        <div className="relative h-full flex flex-col justify-between p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-tight font-geist text-white/95">
                Moneo Plus
              </span>
            </div>
            <svg width="38" height="24" viewBox="0 0 28 18" className="opacity-80">
              <circle cx="10" cy="9" r="7" fill="rgba(255,255,255,0.5)" />
              <circle cx="18" cy="9" r="7" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
          <div>
            <div className="text-2xl mb-5 font-geist font-light tracking-tight text-white">
              6019 •••• •••• 4582
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-geist text-white/60">
                  Card Holder
                </div>
                <div className="text-base font-medium font-geist text-white/95">
                  Taylor Chen
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wider font-geist text-white/60">
                  Expires
                </div>
                <div className="text-base font-medium font-geist text-white/95">
                  03/27
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

