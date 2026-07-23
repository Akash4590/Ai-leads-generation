import { Globe, Waves, RotateCw, CheckCircle2 } from "lucide-react";

export default function AuditSearchCard() {
  return (
    <div className="rounded-xl border border-purple-500/30 bg-white/[0.03] p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex-1">
          <label className="mb-2 block text-xs font-medium text-gray-400">
            Website URL
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Globe className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                defaultValue="https://growrise.ai"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50"
              />
            </div>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition hover:bg-purple-500">
              <Waves className="h-4 w-4" />
              Scan Website
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <p className="text-xs text-gray-400">Last scanned</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-white">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              2 hours ago
            </p>
          </div>
          <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
            <RotateCw className="h-4 w-4" />
            Re-scan
          </button>
        </div>
      </div>
    </div>
  );
}