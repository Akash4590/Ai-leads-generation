import { Kanban } from "lucide-react";
import PipelineColumn from "./PipelineColumn";

const columns = [
  {
    title: "New",
    count: 320,
    barColor: "bg-blue-500",
    avatarCount: 2,
    extra: 98,
    seed: 1,
  },
  {
    title: "Qualified",
    count: 210,
    barColor: "bg-purple-500",
    avatarCount: 2,
    extra: 67,
    seed: 5,
  },
  {
    title: "Proposal",
    count: 98,
    barColor: "bg-yellow-500",
    avatarCount: 2,
    extra: 25,
    seed: 9,
  },
  {
    title: "Won",
    count: 46,
    barColor: "bg-emerald-500",
    avatarCount: 2,
    extra: 12,
    seed: 13,
  },
];

export default function CRMCard() {
  return (
    <div className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold text-white">
          <Kanban className="h-4 w-4 text-purple-400" />
          CRM Pipeline
        </h3>

        <button className="cursor-pointer rounded-lg px-2 py-1 text-xs font-medium text-purple-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-purple-300">
          View Pipeline
        </button>
      </div>

      {/* Pipeline Columns */}
      <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {columns.map((col) => (
          <div
            key={col.title}
            className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-white/5 hover:scale-[1.02]"
          >
            <PipelineColumn {...col} />
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
        <div className="cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-white/5">
          <p className="text-xs text-gray-400">
            Conversion Rate
          </p>
          <p className="mt-1 text-lg font-bold text-white">
            24.6%
          </p>
        </div>

        <div className="cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-white/5">
          <p className="text-xs text-gray-400">
            Total Value
          </p>
          <p className="mt-1 text-lg font-bold text-white">
            $78,250
          </p>
        </div>
      </div>
    </div>
  );
}