"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void;
      isInitialized?: boolean;
    };
  }
}

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadScript = () => {
      // Check if script is already in the DOM
      const existingScript = document.querySelector(
        'script[src*="unicornstudio.js"]'
      );

      if (existingScript) {
        // Script already loaded, just initialize if needed
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        return;
      }

      // Load the script
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    };

    loadScript();
  }, []);

  return (
    <div
      ref={containerRef}
      className="aura-background-component fixed inset-0 w-full h-full -z-10 saturate-200"
      data-alpha-mask="22"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 0%, black 22%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 0%, black 22%, transparent)",
      }}
    >
      <div
        data-us-project="0GgYfjJbH7HPIFyF1fSt"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
