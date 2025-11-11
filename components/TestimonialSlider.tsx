"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Moneo made budgeting feel effortless. I went from guessing my savings to watching them grow automatically.",
    name: "Sophie Tran",
    role: "Freelance Designer, Montreal",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The AI flagged duplicate subscriptions and saved our team over $600 in the first month.",
    name: "Marcus Hill",
    role: "Operations Lead, Toronto",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Clear cash-flow forecasts and weekly nudges keep me on track without thinking about it.",
    name: "Ana Morales",
    role: "Founder, Café Nube",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <figure
      className="sm:p-8 bg-gradient-to-br rounded-2xl ring-0 px-6 py-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur from-white/10 to-white/0"
      style={{
        position: "relative",
        "--border-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        "--border-radius-before": "16px",
      } as React.CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[34px] h-[34px] mb-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeWidth="2"
        style={{ width: "34px", height: "34px", color: "rgb(52, 211, 153)" }}
      >
        <path d="M7.17 6.18C5.2 7.62 4 9.76 4 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Zm10 0C15.2 7.62 14 9.76 14 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Z" />
      </svg>
      <blockquote
        id="t-quote"
        className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-light tracking-tight text-white transition-opacity duration-150"
        style={{ opacity: 1 }}
      >
        "{current.quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Image
          alt="Avatar"
          className="w-10 h-10 object-cover rounded-full ring-1 ring-neutral-800 transition-opacity duration-150"
          src={current.avatar}
          width={40}
          height={40}
          style={{ opacity: 1 }}
          id="t-avatar"
        />
        <div>
          <div
            id="t-name"
            className="text-base font-semibold tracking-tight text-white transition-opacity duration-150"
            style={{ opacity: 1 }}
          >
            {current.name}
          </div>
          <div
            id="t-role"
            className="text-sm text-neutral-400 transition-opacity duration-150"
            style={{ opacity: 1 }}
          >
            {current.role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

