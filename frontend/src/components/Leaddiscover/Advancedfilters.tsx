import { useState } from "react";
import { SlidersHorizontal, RotateCcw, Check, ChevronDown } from "lucide-react";

const chips = ["Has Website", "Verified Email", "Phone Number", "LinkedIn"];

export default function AdvancedFilters() {
  const [active, setActive] = useState<string[]>(chips);

  const toggle = (chip: string) => {
    setActive((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-2 text-sm font-medium text-white">
          <SlidersHorizontal className="h-4 w-4 text-purple-400" />
          Advanced Filters
        </span>

        {chips.map((chip) => {
          const isActive = active.includes(chip);
          return (
            <button
              key={chip}
              onClick={() => toggle(chip)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                isActive
                  ? "border-purple-500/40 bg-purple-500/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-gray-400 hover:bg-white/[0.05]"
              }`}
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded ${
                  isActive ? "bg-purple-600" : "border border-white/20"
                }`}
              >
                {isActive && <Check className="h-3 w-3 text-white" />}
              </span>
              {chip}
            </button>
          );
        })}

        <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-gray-400 transition hover:bg-white/[0.05]">
          AI Score &gt; 80
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white">
        <RotateCcw className="h-3.5 w-3.5" />
        Clear All
      </button>
    </div>
  );
}