import { LucideIcon } from "lucide-react";
import CircularProgress from "../CircularProgress";

interface AuditScoreCardProps {
  score: number;
  status: string;
  changeLabel?: string;
}

export function AuditScoreCard({
  score,
  status,
  changeLabel = "vs last scan",
}: AuditScoreCardProps) {
  return (
    <div className="rounded-xl border border-purple-500/30 bg-white/[0.03] p-6">
      <p className="text-sm font-semibold text-white">Overall Score</p>
      <div className="mt-4 flex items-center gap-5">
        <CircularProgress
          value={score}
          size={100}
          strokeWidth={9}
          label={String(score)}
          sublabel="/100"
        />
        <div>
          <p className="text-base font-semibold text-emerald-400">
            {status}
          </p>
          <p className="mt-1 text-xs text-gray-400">{changeLabel}</p>
        </div>
      </div>
    </div>
  );
}

interface ScoreMetricCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  score: number;
  status: string;
  barColor: string;
}

export function ScoreMetricCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  score,
  status,
  barColor,
}: ScoreMetricCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon className={`h-4.5 w-4.5 ${iconColor}`} />
        </span>
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>

      <p className="mt-4 text-3xl font-bold text-white">
        {score}
        <span className="text-base font-normal text-gray-500">/100</span>
      </p>
      <p className={`mt-1 text-sm font-medium ${barColor.replace("bg-", "text-")}`}>
        {status}
      </p>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}