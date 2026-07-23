import { BarChart3, Check, AlertTriangle, X, ArrowRight } from "lucide-react";

interface SEOItem {
  label: string;
  status: "ok" | "warning" | "error";
}

const items: SEOItem[] = [
  { label: "Meta Title", status: "ok" },
  { label: "Meta Description", status: "ok" },
  { label: "H1 Tag", status: "ok" },
  { label: "H2-H6 Structure", status: "warning" },
  { label: "Image Alt Text", status: "ok" },
  { label: "Internal Linking", status: "warning" },
  { label: "Schema Markup", status: "error" },
];

const statusIcon = {
  ok: <Check className="h-3.5 w-3.5 text-emerald-400" />,
  warning: <AlertTriangle className="h-3.5 w-3.5 text-yellow-400" />,
  error: <X className="h-3.5 w-3.5 text-red-400" />,
};

const statusBg: Record<SEOItem["status"], string> = {
  ok: "bg-emerald-500/15",
  warning: "bg-yellow-500/15",
  error: "bg-red-500/15",
};

export default function SEOAnalysisCard() {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <BarChart3 className="h-4 w-4 text-blue-400" />
          SEO Analysis
        </h3>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-semibold text-blue-400">
          {items.length}
        </span>
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((i) => (
          <li key={i.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{i.label}</span>
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${statusBg[i.status]}`}
            >
              {statusIcon[i.status]}
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-4 flex cursor-pointer items-center gap-1.5 text-xs font-medium text-purple-400 transition hover:text-purple-300">
        View full SEO report
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}