import { Info, Sparkles, Gauge, ShieldCheck, ShieldAlert } from "lucide-react";
import CircularProgress from "../Dashboard/CircularProgress";

const rows = [
  { icon: Sparkles, label: "SEO", value: 94, color: "bg-purple-500" },
  { icon: Gauge, label: "Performance", value: 91, color: "bg-blue-500" },
  { icon: ShieldAlert, label: "Accessibility", value: 89, color: "bg-orange-500" },
  { icon: ShieldCheck, label: "Security", value: 96, color: "bg-emerald-500" },
];

export default function OverviewCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-semibold text-white">Overview</h3>
        <Info className="h-3.5 w-3.5 cursor-pointer text-gray-500" />
      </div>
      <p className="mt-1 text-xs text-gray-400">
        Detailed breakdown of your website audit
      </p>

      <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div className="flex shrink-0 flex-col items-center">
          <CircularProgress
            value={92}
            size={140}
            strokeWidth={11}
            label="92"
            sublabel="/100"
          />
          <p className="mt-3 text-sm text-gray-400">Overall Score</p>
          <span className="mt-1 inline-block rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
            Excellent
          </span>
        </div>

        <div className="flex w-full flex-1 flex-col gap-4">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <r.icon className="h-4 w-4 shrink-0 text-gray-500" />
              <span className="w-24 shrink-0 text-sm text-gray-300">
                {r.label}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${r.color}`}
                  style={{ width: `${r.value}%` }}
                />
              </div>
              <span className="w-14 shrink-0 text-right text-xs text-gray-400">
                {r.value}/100
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}