import {
  Sparkles,
  X,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const suggestions = [
  {
    title: "Audit 12 websites",
    description: "8 pending audits",
  },
  {
    title: "Follow up 7 leads",
    description: "High priority leads",
  },
  {
    title: "Send 3 proposals",
    description: "Improve conversion",
  },
];

export default function AIAssistantCard() {
  return (
    <div className="flex cursor-pointer flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold text-white">
          <Sparkles className="h-4 w-4 text-purple-400" />
          AI Assistant
        </h3>
      </div>

      {/* Suggestions */}
      <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-purple-500/20">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-300">
            Today's Suggestions
          </p>

          <button
            aria-label="Dismiss"
            className="cursor-pointer rounded-md p-1 text-gray-500 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-3 flex flex-col gap-3">
          {suggestions.map((s) => (
            <li
              key={s.title}
              className="flex cursor-pointer items-start justify-between gap-2 rounded-lg p-2 transition-all duration-200 hover:bg-white/5"
            >
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <div>
                  <p className="text-sm font-medium text-white">
                    {s.title}
                  </p>

                  <p className="text-xs text-gray-400">
                    {s.description}
                  </p>
                </div>
              </div>

              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 group-hover:translate-x-1" />
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
        Generate Plan
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
}