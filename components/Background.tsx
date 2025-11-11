"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => void;
      isInitialized?: boolean;
    };
  }
}

export default function Background() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.UnicornStudio) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="aura-background-component absolute top-0 w-full h-screen -z-10 saturate-200"
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
        className="absolute top-0 left-0 -z-10 w-full h-full"
      />
    </div>
  );
}
