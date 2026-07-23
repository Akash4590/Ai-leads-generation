import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "May 1", leads: 280 },
  { day: "May 4", leads: 350 },
  { day: "May 8", leads: 420 },
  { day: "May 11", leads: 500 },
  { day: "May 15", leads: 470 },
  { day: "May 18", leads: 642 },
  { day: "May 22", leads: 560 },
  { day: "May 25", leads: 610 },
  { day: "May 29", leads: 700 },
];

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#12121f] px-3 py-2 text-xs shadow-xl">
        <p className="font-semibold text-white">{label}, 2024</p>
        <p className="text-gray-400">
          Leads: <span className="text-purple-400">{payload[0].value}</span>
        </p>
      </div>
    );
  }

  return null;
}

export default function LeadGrowthChart() {
  return (
    <div className="col-span-1 cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10 xl:col-span-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          Lead Growth
        </h3>

        <button className="flex cursor-pointer items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition-all duration-200 hover:border-purple-500/40 hover:bg-white/5 hover:text-white">
          This Month
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Chart */}
      <div className="mt-5 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="leadGrowthLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#6B7280",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              interval={1}
            />

            <YAxis
              tick={{
                fill: "#6B7280",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 1000]}
              ticks={[0, 250, 500, 750, 1000]}
              tickFormatter={(value) =>
                value === 1000 ? "1K" : `${value}`
              }
            />

            <Tooltip
              cursor={{
                stroke: "#A855F7",
                strokeDasharray: "3 3",
              }}
              content={<CustomTooltip />}
            />

            <Line
              type="monotone"
              dataKey="leads"
              stroke="url(#leadGrowthLine)"
              strokeWidth={3}
              dot={{
                r: 3,
                fill: "#A855F7",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
                fill: "#A855F7",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}