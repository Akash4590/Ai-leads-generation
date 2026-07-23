import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const [page, setPage] = useState(1);
  const visible = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-1.5">
        <button
          aria-label="Previous page"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:bg-white/5"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {visible.map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition ${
              page === n
                ? "bg-purple-600 text-white"
                : "text-gray-400 hover:bg-white/5"
            }`}
          >
            {n}
          </button>
        ))}

        <span className="px-1 text-sm text-gray-500">...</span>

        <button
          onClick={() => setPage(totalPages)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-gray-400 transition hover:bg-white/5"
        >
          {totalPages}
        </button>

        <button
          aria-label="Next page"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:bg-white/5"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <button className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 hover:bg-white/5">
        50 per page
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}