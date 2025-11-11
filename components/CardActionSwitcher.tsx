"use client";

interface CardActionSwitcherProps {
  activeSolution: "baseline" | "solutionA" | "solutionB" | "solutionC";
  onSolutionChange: (solution: "baseline" | "solutionA" | "solutionB" | "solutionC") => void;
}

const solutionLabels = {
  baseline: "Baseline",
  solutionA: "Solution A",
  solutionB: "Solution B",
  solutionC: "Solution C",
};

export default function CardActionSwitcher({
  activeSolution,
  onSolutionChange,
}: CardActionSwitcherProps) {
  const solutions: Array<"baseline" | "solutionA" | "solutionB" | "solutionC"> = [
    "baseline",
    "solutionA",
    "solutionB",
    "solutionC",
  ];

  return (
    <div className="mb-4 flex items-center justify-start">
      <div className="inline-flex rounded-lg ring-1 p-1 ring-white/10 bg-white/5">
        {solutions.map((solution) => (
          <button
            key={solution}
            type="button"
            onClick={() => onSolutionChange(solution)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              activeSolution === solution
                ? "text-white/90 bg-white/10 ring-1 ring-white/15"
                : "text-neutral-300 hover:text-white"
            }`}
            aria-pressed={activeSolution === solution}
          >
            {solutionLabels[solution]}
          </button>
        ))}
      </div>
    </div>
  );
}

