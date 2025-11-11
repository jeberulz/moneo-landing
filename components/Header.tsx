"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky supports-[backdrop-filter]:bg-neutral-950/60 border-neutral-800 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] z-50 border-b top-0 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="h-16 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2">
              <span className="sm:text-lg text-base font-semibold tracking-tight font-geist">
                Moneo
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm text-neutral-400 hover:text-white transition-colors font-geist"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-neutral-400 font-geist"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm dark:text-neutral-400 dark:hover:text-white transition-colors font-geist"
              >
                Pricing
              </Link>
              <Button
                asChild
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition font-geist bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href="#">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </nav>

            <button
              id="mobile-nav-toggle"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 w-10 h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-lg">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-semibold tracking-tight font-geist">
                Moneo
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-lg border border-neutral-800 w-10 h-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <Link
                href="#features"
                className="text-base text-neutral-400 hover:text-white transition-colors font-geist"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-base text-neutral-400 hover:text-white transition-colors font-geist"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-base text-neutral-400 hover:text-white transition-colors font-geist"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Button
                asChild
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition font-geist bg-emerald-600 text-white hover:bg-emerald-700 mt-4"
              >
                <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

