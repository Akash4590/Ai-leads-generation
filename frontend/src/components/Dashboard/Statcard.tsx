import type { ComponentType } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface StatCardProps {
  icon: ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  value: string;
  change: string;
  sparklineColor: string;
  sparklineData: { v: number }[];
}

export default function StatCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  value,
  change,
  sparklineColor,
  sparklineData,
}: StatCardProps) {
  return (
    <div className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-200 hover:scale-110 ${iconBg}`}
        >
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>

        <div>
          <p className="text-xs text-gray-400">{title}</p>
          <p className="text-xl font-bold text-white">{value}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
          {change}
        </span>

        <div className="h-8 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line
                type="monotone"
                dataKey="v"
                stroke={sparklineColor}
                strokeWidth={2}
                dot={false}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}