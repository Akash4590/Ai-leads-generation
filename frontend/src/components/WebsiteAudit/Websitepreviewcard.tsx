import { ExternalLink, Lock } from "lucide-react";

export default function WebsitePreviewCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          Website Preview
        </h3>
        <button
          aria-label="Open in new tab"
          className="cursor-pointer text-gray-400 transition hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0d0d18] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="ml-3 flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 text-xs text-gray-400">
            <Lock className="h-3 w-3" />
            growrise.ai
          </span>
        </div>

        <div className="relative flex min-h-[220px] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2a0f4a] to-[#0d0d18] px-6 py-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-600/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-32 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />

          <div className="relative z-10 mb-6 flex items-center justify-between text-xs text-white">
            <span className="font-semibold">GrowRise</span>
            <div className="hidden items-center gap-4 text-gray-300 sm:flex">
              <span>Home</span>
              <span>Services</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-black">
              Get Started
            </span>
          </div>

          <h4 className="relative z-10 max-w-xs text-xl font-bold leading-snug text-white">
            Grow Your Business With AI Solutions
          </h4>
          <p className="relative z-10 mt-2 max-w-xs text-xs text-gray-300">
            We help businesses grow with AI-powered marketing and automation.
          </p>

          <div className="relative z-10 mt-4 flex items-center gap-3">
            <span className="rounded-lg bg-purple-600 px-4 py-2 text-[11px] font-medium text-white">
              Get Started
            </span>
            <span className="text-[11px] text-gray-300">Learn More</span>
          </div>
        </div>
      </div>
    </div>
  );
}