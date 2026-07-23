import { FileBarChart, CalendarClock, GitCompareArrows } from "lucide-react";

const actions = [
  {
    icon: FileBarChart,
    title: "Generate AI Report",
    description: "Get complete audit report",
  },
  {
    icon: CalendarClock,
    title: "Schedule Regular Scan",
    description: "Automate website monitoring",
  },
  {
    icon: GitCompareArrows,
    title: "Compare with Previous",
    description: "See improvement over time",
  },
];

export default function QuickActionsCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-sm font-semibold text-white">Quick Actions</h3>

      <div className="mt-4 flex flex-col gap-2.5">
        {actions.map(({ icon: Icon, title, description }) => (
          <button
            key={title}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-left transition hover:bg-white/[0.06]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
              <Icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-medium text-white">
                {title}
              </span>
              <span className="block text-xs text-gray-400">
                {description}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}