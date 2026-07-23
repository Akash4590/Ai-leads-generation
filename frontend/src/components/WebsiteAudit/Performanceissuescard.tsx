import { Gauge, ArrowRight } from "lucide-react";

interface Issue {
  issue: string;
  detail: string;
  severity: "High" | "Medium" | "Low";
}

const issues: Issue[] = [
  { issue: "Largest Contentful Paint", detail: "2.8s", severity: "High" },
  { issue: "Render Blocking Resources", detail: "4", severity: "Medium" },
  { issue: "Unused CSS", detail: "125KB", severity: "Medium" },
  { issue: "Missing Lazy Loading", detail: "15 Images", severity: "Low" },
  { issue: "Defer Offscreen Images", detail: "8 Images", severity: "Low" },
];

const severityStyles: Record<Issue["severity"], string> = {
  High: "bg-red-500/15 text-red-400",
  Medium: "bg-yellow-500/15 text-yellow-400",
  Low: "bg-emerald-500/15 text-emerald-400",
};

export default function PerformanceIssuesCard() {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <Gauge className="h-4 w-4 text-purple-400" />
          Performance Issues
        </h3>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs font-semibold text-red-400">
          {issues.length}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Issue</span>
        <span>Severity</span>
      </div>

      <ul className="mt-2 flex flex-col divide-y divide-white/5">
        {issues.map((i) => (
          <li key={i.issue} className="flex items-center justify-between py-2.5">
            <div>
              <p className="text-sm text-white">{i.issue}</p>
              <p className="text-xs text-gray-500">{i.detail}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${severityStyles[i.severity]}`}
            >
              {i.severity}
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-4 flex cursor-pointer items-center gap-1.5 text-xs font-medium text-purple-400 transition hover:text-purple-300">
        View all issues
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}