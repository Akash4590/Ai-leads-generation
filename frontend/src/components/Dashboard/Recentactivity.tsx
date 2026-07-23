import { Globe, Mail, UserPlus, Send, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Activity {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  text: string;
  time: string;
}

const activities: Activity[] = [
  {
    icon: Globe,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    text: "Website audit completed for Nike",
    time: "2 min ago",
  },
  {
    icon: Mail,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    text: "AI email generated for Tesla",
    time: "10 min ago",
  },
  {
    icon: UserPlus,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    text: "New lead added: Shopify",
    time: "32 min ago",
  },
  {
    icon: Send,
    iconBg: "bg-red-500/15",
    iconColor: "text-red-400",
    text: "Email campaign sent to 50 leads",
    time: "1 hour ago",
  },
  {
    icon: Trophy,
    iconBg: "bg-yellow-500/15",
    iconColor: "text-yellow-400",
    text: "Deal won: Slack",
    time: "2 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          Recent Activity
        </h3>

        <button className="cursor-pointer rounded-lg px-2 py-1 text-xs font-medium text-purple-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-purple-300">
          View All
        </button>
      </div>

      {/* Activity List */}
      <ul className="mt-4 flex flex-col gap-3">
        {activities.map((a, i) => (
          <li
            key={i}
            className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-all duration-200 hover:bg-white/5"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 ${a.iconBg}`}
            >
              <a.icon className={`h-4 w-4 ${a.iconColor}`} />
            </span>

            <p className="flex-1 text-sm text-gray-300">
              {a.text}
            </p>

            <span className="shrink-0 text-xs text-gray-500">
              {a.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}