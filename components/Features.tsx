import Dashboard from "./Dashboard";

export default function Features() {
  return (
    <section
      id="features"
      className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] max-w-7xl mt-32 mr-auto ml-auto px-4"
    >
      <div className="relative">
        <div
          className="sm:p-6 border rounded-2xl ring-1 pt-4 pr-4 pb-4 pl-4 backdrop-blur-md bg-neutral-950/80 border-white/10 ring-white/5"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent, black 0%, black 0%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 0%, black 0%, transparent)",
          }}
        >
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

