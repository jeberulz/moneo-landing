import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIBudgetAssistant from "@/components/AIBudgetAssistant";
import MonthlyCashFlow from "@/components/MonthlyCashFlow";
import SmartCards from "@/components/SmartCards";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Features />
      <AIBudgetAssistant />
      <MonthlyCashFlow />
      <SmartCards />
      <Testimonials />
      <Pricing />
      <Footer />
      <Script id="on-scroll-animations" strategy="lazyOnload">
        {`
          (function () {
            const style = document.createElement("style");
            style.textContent = ".animate-on-scroll{animation-play-state:paused!important}.animate-on-scroll.animate{animation-play-state:running!important}";
            document.head.appendChild(style);
            const once = true;
            if (!window.__inViewIO) {
              window.__inViewIO = new IntersectionObserver((entries)=>{
                entries.forEach((e)=>{ if(e.isIntersecting){ e.target.classList.add("animate"); if(once) window.__inViewIO.unobserve(e.target); }});
              }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
            }
            window.initInViewAnimations = (sel=".animate-on-scroll") => {
              document.querySelectorAll(sel).forEach(el => window.__inViewIO.observe(el));
            };
            if (document.readyState === 'loading') {
              document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
            } else {
              initInViewAnimations();
            }
          })();
        `}
      </Script>
    </>
  );
}
