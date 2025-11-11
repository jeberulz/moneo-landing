import EmailForm from "./EmailForm";
import Stats from "./Stats";
import CreditCardStack from "./CreditCardStack";

export default function Hero() {
  return (
    <main className="sm:px-8 sm:mt-24 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-10 gap-y-10 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-5">
          <h1 className="text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-white [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] font-light tracking-tight font-geist">
            Take control of your finances
          </h1>
          <p className="text-neutral-400 leading-8 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] text-lg font-geist mt-6">
            Moneo helps you track spending, set savings goals, and make smarter
            financial decisions with real-time insights and personalized
            recommendations.
          </p>
          <EmailForm />
          <Stats />
        </div>
        {/* Right: Credit Cards Stack */}
        <CreditCardStack />
      </div>
    </main>
  );
}

