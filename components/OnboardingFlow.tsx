"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Check, TrendingUp, Target, CreditCard, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function OnboardingFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    monthlyIncome: "",
    financialGoal: "",
    spendingCategory: "",
  });

  const steps: Step[] = [
    {
      id: 0,
      title: "Welcome to Moneo",
      description: "Let's set up your financial dashboard in just a few steps",
      icon: <Sparkles className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 font-geist">
              What's your name?
            </label>
            <div className="group flex flex-row ring-1 rounded-full p-2 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl bg-white/5 ring-white/15">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-30 bg-white/5"
              />
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="flex-1 placeholder:text-white/60 outline-none text-base tracking-tight bg-transparent py-3 px-4 relative z-10 text-white/90 border-0 focus-visible:ring-0 rounded-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Monthly Income",
      description: "Help us understand your financial situation",
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="income" className="block text-sm font-medium text-neutral-300 font-geist">
              What's your monthly income?
            </label>
            <div className="group flex flex-row ring-1 rounded-full p-2 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl bg-white/5 ring-white/15">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-30 bg-white/5"
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 font-geist z-10">$</span>
              <Input
                id="income"
                type="number"
                value={formData.monthlyIncome}
                onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                placeholder="0"
                className="flex-1 placeholder:text-white/60 outline-none text-base tracking-tight bg-transparent py-3 pl-8 pr-4 relative z-10 text-white/90 border-0 focus-visible:ring-0 rounded-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Financial Goals",
      description: "What do you want to achieve with Moneo?",
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-neutral-300 font-geist mb-4">
            Select your primary financial goal
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { value: "save", label: "Save for a big purchase" },
              { value: "debt", label: "Pay off debt" },
              { value: "budget", label: "Stick to a budget" },
              { value: "invest", label: "Start investing" },
            ].map((goal) => (
              <button
                key={goal.value}
                onClick={() => setFormData({ ...formData, financialGoal: goal.value })}
                className={`px-4 py-3 rounded-xl ring-1 border transition-all text-left font-geist relative overflow-hidden ${
                  formData.financialGoal === goal.value
                    ? "bg-white/10 ring-cyan-400/40 border-cyan-400/40 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    : "bg-white/5 ring-white/10 border-white/10 text-neutral-300 hover:bg-white/8 hover:ring-white/20 hover:border-white/20"
                }`}
              >
                {formData.financialGoal === goal.value && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"
                  />
                )}
                <span className="relative z-10">{goal.label}</span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Spending Insights",
      description: "Where do you spend the most?",
      icon: <CreditCard className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-neutral-300 font-geist mb-4">
            Select your top spending category
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { value: "food", label: "Food & Dining" },
              { value: "shopping", label: "Shopping & Retail" },
              { value: "transport", label: "Transportation" },
              { value: "entertainment", label: "Entertainment" },
              { value: "bills", label: "Bills & Utilities" },
            ].map((category) => (
              <button
                key={category.value}
                onClick={() => setFormData({ ...formData, spendingCategory: category.value })}
                className={`px-4 py-3 rounded-xl ring-1 border transition-all text-left font-geist relative overflow-hidden ${
                  formData.spendingCategory === category.value
                    ? "bg-white/10 ring-cyan-400/40 border-cyan-400/40 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    : "bg-white/5 ring-white/10 border-white/10 text-neutral-300 hover:bg-white/8 hover:ring-white/20 hover:border-white/20"
                }`}
              >
                {formData.spendingCategory === category.value && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and redirect to dashboard
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "";
      case 1:
        return formData.monthlyIncome !== "";
      case 2:
        return formData.financialGoal !== "";
      case 3:
        return formData.spendingCategory !== "";
      default:
        return true;
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400/60 to-cyan-500/80 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-neutral-400 font-geist">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl rounded-2xl ring-1 p-8 md:p-12 border bg-neutral-900/95 ring-white/10 border-white/10 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="space-y-8">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="text-white/90">{steps[currentStep].icon}</div>
          </div>

          {/* Title & Description */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white font-geist">
              {steps[currentStep].title}
            </h1>
            <p className="text-neutral-400 text-lg font-geist">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Content */}
          <div className="min-h-[200px] flex items-start">
            {steps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all font-geist relative overflow-hidden ${
                currentStep === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-white/5 hover:bg-white/10 text-white ring-1 ring-white/10 hover:ring-white/20"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all font-geist shadow-[0_8px_25px_rgba(0,0,0,0.4)] relative overflow-hidden group ${
                canProceed()
                  ? "bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-cyan-400/40 ring-cyan-400/0 hover:ring-cyan-400/40"
                  : "opacity-50 cursor-not-allowed bg-white/5 text-white/50 border border-white/10"
              }`}
              style={{
                boxShadow: canProceed()
                  ? "inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 -10px 25px rgba(0,0,0,0.3), 0 8px 25px rgba(0,0,0,0.35)"
                  : undefined,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-px rounded-full bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-white/[0.05] pointer-events-none"
              />
              <span className="relative z-10">
                {currentStep === steps.length - 1 ? "Complete Setup" : "Continue"}
              </span>
              {currentStep === steps.length - 1 ? (
                <Check className="relative z-10 w-4 h-4" />
              ) : (
                <ArrowRight className="relative z-10 w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

