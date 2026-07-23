import {
  Zap,
  ArrowRight,
  PlayCircle,
  Check,
  ShieldCheck,
} from "lucide-react";

import {
  hero,
  avatar1,
  avatar2,
  avatar3,
} from "../../assets/assets";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-10 lg:pt-24">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
            <Zap className="h-3 w-3" />
            AI-Powered Lead Generation Platform
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Find, Audit &amp; Convert High-Quality{" "}
            <span className="text-purple-400">Leads</span> using{" "}
            <span className="text-purple-400">AI</span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-400">
            Discover verified leads, analyze websites, generate personalized
            emails, and close more deals — all in one powerful platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              <PlayCircle className="h-4 w-4" />
              Watch Demo
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              No Credit Card
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              14-Day Free Trial
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              Cancel Anytime
            </span>
          </div>

          {/* Avatars */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3].map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className="h-9 w-9 rounded-full border-2 border-[#050714] object-cover"
                />
              ))}
            </div>

            <p className="text-sm text-gray-400">
              Join 2,000+ businesses growing faster with AI Leads
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-16 -z-10 rounded-full bg-gradient-to-br from-purple-600/30 via-blue-600/15 to-transparent blur-3xl" />

          <img
            src={hero}
            alt="AI Leads Dashboard"
            className="w-full max-w-md rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 sm:max-w-none"
          />

          <div className="absolute -bottom-6 left-0 flex items-center gap-2 rounded-xl border border-white/10 bg-[#161b33] px-4 py-3 shadow-lg">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-xs text-gray-400">Website Health</p>
              <p className="text-sm font-semibold text-white">Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;