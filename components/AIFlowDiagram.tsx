import Image from "next/image";

export default function AIFlowDiagram() {
  return (
    <div className="relative rounded-xl border ring-1 overflow-hidden p-4 sm:p-6 bg-neutral-900/60 border-white/10 ring-white/5">
      {/* Connectors */}
      <div className="sm:left-36 sm:right-36 z-0 flex flex-col gap-2 pointer-events-none absolute top-0 right-28 bottom-0 left-28 items-stretch justify-center">
        <div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/80">
          <div
            className="absolute inset-0 bg-gradient-to-r h-full animate-pulse from-emerald-400 to-lime-400"
            style={{
              animation: "flowLeft 2s ease-in-out infinite",
              transform: "translateX(-100%)",
            }}
          />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/60">
          <div
            className="absolute inset-0 bg-gradient-to-r h-full from-emerald-400 to-lime-400"
            style={{
              animation: "flowLeft 2s ease-in-out infinite 0.3s",
              transform: "translateX(-100%)",
            }}
          />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/40">
          <div
            className="absolute inset-0 bg-gradient-to-r h-full from-emerald-400 to-lime-400"
            style={{
              animation: "flowLeft 2s ease-in-out infinite 0.6s",
              transform: "translateX(-100%)",
            }}
          />
        </div>
      </div>

      {/* Nodes */}
      <div className="z-10 flex relative items-center justify-between">
        {/* Left: AI Core */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border ring-1 backdrop-blur-sm overflow-hidden border-white/10 bg-neutral-900/70 ring-white/10">
            <div className="absolute -left-4 top-2 w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/70 to-lime-500/40 blur-2xl" />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr to-emerald-500/30 blur-xl from-lime-400/70" />
            <div className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-gradient-to-tr to-transparent blur-lg from-emerald-300/60" />
            <Image
              className="absolute inset-0 bg-cover ring-1 rounded-xl ring-white/5"
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7cb11911-53c5-45cc-a756-9dbe2010e635_320w.jpg"
              alt="AI Core"
              fill
            />
          </div>
          <span className="text-xs font-geist text-neutral-300">AI Core</span>
        </div>

        {/* Right: User Data */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border ring-1 backdrop-blur-sm overflow-hidden border-white/10 bg-neutral-900/70 ring-white/10">
            <div className="absolute right-4 top-4 w-8 h-6 bg-gradient-to-br to-lime-500 from-emerald-400" style={{ clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)" }} />
            <div className="absolute left-4 bottom-5 w-12 h-7 bg-gradient-to-br from-lime-500 to-emerald-500" style={{ clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)" }} />
            <Image
              className="absolute inset-0 bg-cover ring-1 rounded-xl ring-white/5"
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9f2ed82e-900a-4e17-843f-6340215c86a0_320w.jpg"
              alt="User Data"
              fill
            />
          </div>
          <span className="text-xs font-geist text-neutral-300">User Data</span>
        </div>
      </div>
    </div>
  );
}

