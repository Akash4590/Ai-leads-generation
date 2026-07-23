import { LayoutGrid, List, ChevronDown } from "lucide-react";

interface ResultsToolbarProps {
  total: number;
}

export default function ResultsToolbar({ total }: ResultsToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-purple-400">
        {total.toLocaleString()} leads found
      </p>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white">
          Sort by: <span className="font-medium text-white">AI Score</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-1 rounded-lg border border-white/10 p-1">
          <button
            aria-label="Grid view"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-600 text-white"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            aria-label="List view"
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-white/5"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}