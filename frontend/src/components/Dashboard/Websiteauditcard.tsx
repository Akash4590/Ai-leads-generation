import { Sparkles } from "lucide-react";
import CircularProgress from "./Circularprogress";

interface Metric {
  label: string;
  value: number;
  color: string;
}

const metrics: Metric[] = [
  { label: "SEO", value: 94, color: "bg-purple-500" },
  { label: "Performance", value: 91, color: "bg-blue-500" },
  { label: "Security", value: 93, color: "bg-emerald-500" },
  { label: "Accessibility", value: 90, color: "bg-cyan-500" },
];

export default function WebsiteAuditCard() {
  return (
    <div className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold text-white">
          <Sparkles className="h-4 w-4 text-purple-400" />
          Website Audit Summary
        </h3>

        <button className="cursor-pointer rounded-lg px-2 py-1 text-xs font-medium text-purple-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-purple-300">
          View All
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 flex items-center gap-6">
        {/* Circular Score */}
        <div className="flex shrink-0 flex-col items-center">
          <CircularProgress
            value={92}
            size={110}
            strokeWidth={9}
            label="92"
            sublabel="/100"
          />

          <span className="mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
            Excellent
          </span>
        </div>

        {/* Metrics */}
        <div className="flex flex-1 flex-col gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-white/5"
            >
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium text-gray-300">
                  {m.label}
                </span>

                <span className="text-gray-400">
                  {m.value}/100
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${m.color}`}
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}