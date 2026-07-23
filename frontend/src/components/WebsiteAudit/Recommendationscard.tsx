import {
  Sparkles,
  ChevronRight,
  Image,
  FileText,
  Heading,
  Database,
  Link2,
  Braces,
  Wand2,
} from "lucide-react";

interface Recommendation {
  icon: typeof Image;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
}

const recommendations: Recommendation[] = [
  {
    icon: Image,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    title: "Compress and optimize images",
    description: "Improve page load speed by 35%",
    priority: "High",
  },
  {
    icon: FileText,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    title: "Add meta description",
    description: "Meta description is missing on 12 pages",
    priority: "Medium",
  },
  {
    icon: Heading,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    title: "Improve heading structure",
    description: "H1-H6 hierarchy can be improved",
    priority: "Medium",
  },
  {
    icon: Database,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    title: "Enable browser caching",
    description: "Leverage browser caching for better performance",
    priority: "Low",
  },
  {
    icon: Link2,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    title: "Fix broken links",
    description: "Found 8 broken links on your website",
    priority: "Low",
  },
  {
    icon: Braces,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    title: "Add structured data (Schema)",
    description: "Improve search visibility with schema markup",
    priority: "Low",
  },
];

const priorityStyles: Record<Recommendation["priority"], string> = {
  High: "bg-red-500/15 text-red-400",
  Medium: "bg-yellow-500/15 text-yellow-400",
  Low: "bg-emerald-500/15 text-emerald-400",
};

export default function RecommendationsCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold text-white">
          <Sparkles className="h-4 w-4 text-purple-400" />
          AI Recommendations
        </h3>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-semibold text-white">
          {recommendations.length}
        </span>
      </div>
      <p className="mt-1 text-xs text-gray-400">
        Improve your website with these AI suggestions
      </p>

      <ul className="mt-4 flex flex-col gap-3">
        {recommendations.map((r) => (
          <li key={r.title}>
            <button className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left transition hover:bg-white/[0.05]">
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${r.iconBg}`}
                >
                  <r.icon className={`h-4 w-4 ${r.iconColor}`} />
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">
                    {r.title}
                  </span>
                  <span className="block text-xs text-gray-400">
                    {r.description}
                  </span>
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-medium ${priorityStyles[r.priority]}`}
                >
                  {r.priority}
                </span>
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition hover:bg-purple-500">
        Apply All Suggestions
        <Wand2 className="h-4 w-4" />
      </button>
    </div>
  );
}