import { Download, Share2 } from "lucide-react";

export default function AuditPageHeader() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl">
          Website Audit
          <span className="text-purple-400">✨</span>
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Analyze your website performance, SEO, security and more with AI
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
          <Download className="h-4 w-4" />
          Download Report
        </button>
        <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </div>
  );
}