import {
  Zap,
  ArrowLeft,
  ChevronDown,
  Home,
  Globe,
  LayoutGrid,
  Search,
  BarChart3,
  Mail,
  HelpCircle,
} from "lucide-react";

import { notfound } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const navLinks = ["Home", "Features", "Pricing", "About", "Contact"];

const suggestions = [
  { icon: LayoutGrid, title: "Dashboard", description: "Go to your dashboard" },
  { icon: Search, title: "Lead Discovery", description: "Find new leads" },
  { icon: BarChart3, title: "Website Audit", description: "Analyze any website" },
  { icon: Mail, title: "AI Email Writer", description: "Create emails with AI" },
  { icon: HelpCircle, title: "Help Center", description: "Get support & help" },
];

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#050414] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[550px] w-[550px] rounded-full bg-indigo-600/20 blur-[170px]" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-700/25 blur-[160px]" />
        <div className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[140px]" />
        <div className="absolute left-1/4 top-1/3 h-56 w-56 rounded-full bg-pink-600/10 blur-[130px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 py-7 lg:px-12">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            <Zap className="h-5 w-5 fill-white text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            AI <span className="text-purple-400">Leads</span>
          </span>
        </div>

        <nav className="hidden items-center gap-9 text-sm font-medium text-gray-400 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="relative cursor-pointer transition-all duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(147,51,234,0.25)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
          <button className="flex cursor-pointer items-center gap-1.5 rounded-full transition-all duration-300 hover:opacity-80">
            <img
              src="https://i.pravatar.cc/40?img=13"
              alt="User"
              className="h-9 w-9 rounded-full border border-white/15 object-cover shadow-md"
            />
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-lg font-semibold tracking-wide text-purple-400">
              Oops! Page not found
            </p>

            <div className="relative mt-3">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 rounded-full bg-purple-600/25 blur-[100px]" />
              <h1 className="relative bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)] sm:text-9xl">
                404
              </h1>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lost in space?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-400">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved to another galaxy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="group flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(147,51,234,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(147,51,234,0.55)]"
              >
                <Home className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to Dashboard
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-purple-500/40 hover:bg-white/[0.08] hover:shadow-[0_8px_30px_rgba(147,51,234,0.25)]"
              >
                <Globe className="h-4 w-4" />
                Go to Homepage
              </button>
            </div>
          </div>

          <div className="relative flex h-[420px] items-center justify-center lg:h-[520px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-full bg-purple-600/25 blur-3xl" />
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-600/20 blur-[110px]" />
              <div className="absolute left-0 top-1/3 h-48 w-48 rounded-full bg-fuchsia-600/15 blur-[110px]" />
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-60" />
              <img
                src={notfound}
                alt="404 Illustration"
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_15px_40px_rgba(147,51,234,0.35)]"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <p className="text-sm font-semibold tracking-wide text-white">
            You might want to try:
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {suggestions.map(({ icon: Icon, title, description }) => (
              <button
                key={title}
                className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.07] hover:shadow-[0_12px_30px_rgba(147,51,234,0.25)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-purple-500/10 group-hover:to-blue-500/10" />
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 shadow-[0_0_0_rgba(147,51,234,0)] transition-all duration-300 group-hover:bg-purple-500/25 group-hover:shadow-[0_0_16px_rgba(147,51,234,0.5)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="relative z-10">
                  <span className="block text-sm font-semibold text-white">
                    {title}
                  </span>
                  <span className="block text-xs text-gray-400">
                    {description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex flex-col items-center justify-center gap-4 border-t border-white/5 px-6 py-8 text-xs text-gray-500 sm:flex-row sm:justify-between lg:px-12">
        <p className="tracking-wide">© 2026 AI Leads. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="cursor-pointer transition-all duration-300 hover:text-white">
            Privacy Policy
          </a>
          <span className="text-white/10">|</span>
          <a href="#" className="cursor-pointer transition-all duration-300 hover:text-white">
            Terms of Service
          </a>
          <span className="text-white/10">|</span>
          <a href="#" className="cursor-pointer transition-all duration-300 hover:text-white">
            Support
          </a>
        </div>
      </footer>
    </div>
  );
}