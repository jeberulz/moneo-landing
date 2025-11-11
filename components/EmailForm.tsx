"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function EmailForm() {
  return (
    <form action="#" className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] w-full max-w-2xl">
      <label htmlFor="moneo-email" className="sr-only font-geist">
        Work email
      </label>
      <div className="group flex flex-row ring-1 rounded-full p-2 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl gap-3 items-center mt-6 bg-white/5 ring-white/15">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-30 bg-white/5"
        />
        <Input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="What's your work email?"
          className="flex-1 placeholder:text-white/60 outline-none text-base tracking-tight bg-transparent py-3 px-4 relative z-10 text-white/90 border-0 focus-visible:ring-0"
          required
          id="moneo-email"
        />
        {/* Desktop: Full button with text */}
        <Link
          href="/onboarding"
          className="hidden md:inline-flex items-center justify-center gap-2 select-none ring-1 rounded-full px-6 py-3 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group relative overflow-hidden shrink-0 text-white/90 bg-white/5 hover:bg-white/10 ring-white/20 hover:ring-cyan-400/40"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 -10px 25px rgba(0,0,0,0.3), 0 8px 25px rgba(0,0,0,0.35)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-px rounded-full bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-white/[0.05] pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute left-1 right-1 top-1 h-1/2 rounded-full bg-gradient-to-b to-transparent pointer-events-none from-white/70"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full ring-2 group-hover:ring-cyan-400/40 blur-sm transition-all duration-500 ring-cyan-400/0"
          />
          <span className="relative z-10 text-sm font-medium tracking-tight font-geist">
            Get Started
          </span>
          <ArrowRight className="relative z-10 w-4 h-4" />
        </Link>
        {/* Mobile: Icon-only button */}
        <Link
          href="/onboarding"
          className="md:hidden relative inline-flex items-center justify-center select-none ring-1 rounded-full w-12 h-12 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group overflow-hidden shrink-0 text-white/90 bg-white/5 hover:bg-white/10 ring-white/20 hover:ring-cyan-400/40"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 -10px 25px rgba(0,0,0,0.3), 0 8px 25px rgba(0,0,0,0.35)",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-px rounded-full bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-white/[0.05] pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute left-1 right-1 top-1 h-1/2 rounded-full bg-gradient-to-b to-transparent pointer-events-none from-white/70"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full ring-2 group-hover:ring-cyan-400/40 blur-sm transition-all duration-500 ring-cyan-400/0"
          />
          <ArrowRight className="relative z-10 w-5 h-5" />
        </Link>
      </div>
    </form>
  );
}

