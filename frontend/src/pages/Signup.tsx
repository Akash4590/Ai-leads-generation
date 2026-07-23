import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import {
  Zap,
  User,
  Mail,
  Building2,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Search,
  Bell,
  Moon,
  ChevronDown,
  Plus,
  LayoutDashboard,
  UserSearch,
  Globe,
  PenSquare,
  Mail as MailIcon,
  Kanban,
  BarChart3,
  FileText,
  Puzzle,
  Settings,
  Rocket,
  MailCheck,
  ArrowUpRight,
  Users,
  Loader2,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: UserSearch, label: "Lead Discovery" },
  { icon: Globe, label: "Website Audit" },
  { icon: PenSquare, label: "AI Email Writer" },
  { icon: MailIcon, label: "Email Campaigns" },
  { icon: Kanban, label: "CRM Pipeline" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Reports" },
  { icon: Puzzle, label: "Integrations" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { icon: Users, iconBg: "bg-purple-600", label: "Total Projects", value: "24", change: "↑ 12% from last month" },
  { icon: UserSearch, iconBg: "bg-blue-600", label: "Total Leads", value: "2,543", change: "↑ 18% from last month" },
  { icon: MailIcon, iconBg: "bg-emerald-600", label: "Emails Sent", value: "1,243", change: "↑ 24% from last month" },
  { icon: ArrowUpRight, iconBg: "bg-orange-600", label: "Revenue Generated", value: "$42,500", change: "↑ 32% from last month" },
];

const projects = [
  { initials: "GR", color: "bg-purple-600", name: "GrowRise", leads: "348 leads" },
  { initials: "TN", color: "bg-blue-600", name: "TechNova Solutions", leads: "287 leads" },
  { initials: "QS", color: "bg-fuchsia-600", name: "QuantumSoft", leads: "196 leads" },
  { initials: "WD", color: "bg-emerald-600", name: "WebDynasty", leads: "174 leads" },
];

const leadsData = [1.1, 1.4, 1.3, 1.7, 1.6, 2.0, 1.9, 2.3, 2.1, 2.5, 2.4, 2.8, 2.9];

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const chartWidth = 500;
  const chartHeight = 130;
  const max = Math.max(...leadsData);
  const points = leadsData
    .map((v, i) => {
      const x = (i / (leadsData.length - 1)) * chartWidth;
      const y = chartHeight - (v / max) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreed) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          fullName,
          email,
          companyName,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    setError("");
    setGoogleLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Google sign-in failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#050414] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-700/25 blur-[160px]" />
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/25 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-10 lg:px-10">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT COLUMN */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-2xl">
            <div className="flex items-center gap-2">
              <Zap className="h-7 w-7 fill-purple-500 text-purple-500" />
              <span className="text-xl font-bold text-white">
                AI <span className="text-purple-400">Leads</span>
              </span>
            </div>

            <h1 className="mt-8 text-2xl font-bold text-white">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Build your AI-powered sales workflow in minutes.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                  {error}
                </div>
              )}

              <div className="relative">
                <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-4 transition focus-within:border-purple-500/50">
                  <span className="text-xs font-medium text-white">Full Name</span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-4 transition focus-within:border-purple-500/50">
                  <span className="text-xs font-medium text-white">Work Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-4 transition focus-within:border-purple-500/50">
                  <span className="text-xs font-medium text-white">Company Name</span>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter your company name"
                    className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-11 transition focus-within:border-purple-500/50">
                  <span className="text-xs font-medium text-white">Password</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    placeholder="Create a strong password"
                    className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <div className="flex flex-col gap-0.5 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-11 transition focus-within:border-purple-500/50">
                  <span className="text-xs font-medium text-white">Confirm Password</span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={8}
                    placeholder="Confirm your password"
                    className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label="Toggle confirm password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <label className="flex cursor-pointer items-start gap-2.5 text-sm text-gray-300">
                <button
                  type="button"
                  onClick={() => setAgreed((v) => !v)}
                  className={`mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded border transition ${
                    agreed ? "border-purple-500 bg-purple-600" : "border-white/20 bg-transparent"
                  }`}
                >
                  {agreed && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-white">
                      <path d="M4.5 8.5 1.5 5.5 2.5 4.5 4.5 6.5 9.5 1.5 10.5 2.5Z" />
                    </svg>
                  )}
                </button>
                <span>
                  I agree to the{" "}
                  <a href="#" className="cursor-pointer text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="cursor-pointer text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(147,51,234,0.4)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-gray-500">OR</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google Sign-In: custom-styled button with the real Google button
                overlaid invisibly on top, so the click triggers the real flow */}
            <div className="relative">
              <button
                type="button"
                disabled={googleLoading}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {googleLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.87c2.27-2.09 3.58-5.17 3.58-8.8Z" />
                      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1C3.24 21.3 7.28 24 12 24Z" />
                      <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.61H1.27A11.98 11.98 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.1Z" />
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.28 0 3.24 2.7 1.27 6.61l4 3.1c.95-2.85 3.6-4.96 6.73-4.96Z" />
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>

              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => setError("Google sign-in failed")}
                  width="400"
                />
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="cursor-pointer font-medium text-purple-400 hover:text-purple-300">
                Login
              </a>
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-4 left-0 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d1c]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="relative flex h-11 w-11 items-center justify-center">
                <svg viewBox="0 0 40 40" className="h-11 w-11 -rotate-90">
                  <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 16}
                    strokeDashoffset={2 * Math.PI * 16 * (1 - 0.92)}
                  />
                </svg>
                <Users className="absolute h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Lead Quality</p>
                <p className="text-lg font-bold text-white">92%</p>
                <p className="text-[11px] text-blue-400">Qualified</p>
              </div>
            </div>

            <div className="absolute -top-6 right-0 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d1c]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                <User className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-xs text-gray-400">New Lead</p>
                <p className="text-lg font-bold text-white">+284</p>
                <p className="text-[11px] text-emerald-400">Today</p>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a18]/90 shadow-2xl backdrop-blur-xl">
              <div className="flex">
                <aside className="hidden w-40 shrink-0 border-r border-white/5 p-4 sm:block">
                  <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-white">
                    <Zap className="h-4 w-4 fill-purple-500 text-purple-500" />
                    AI Leads
                  </div>
                  <ul className="space-y-1">
                    {navItems.map(({ icon: Icon, label, active }) => (
                      <li
                        key={label}
                        className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${
                          active ? "bg-purple-600 text-white" : "text-gray-400"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-lg border border-purple-500/20 bg-purple-600/10 p-3">
                    <p className="text-[10px] font-medium text-purple-300">Upgrade Plan</p>
                    <p className="mt-1 text-xs font-semibold text-white">Unlock More Power</p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      Upgrade to get more leads, advanced filters, and premium features.
                    </p>
                    <div className="mt-2 flex items-end justify-between">
                      <button className="cursor-pointer rounded-md bg-purple-600 px-3 py-1.5 text-[10px] font-medium text-white">
                        Upgrade Now
                      </button>
                      <Rocket className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                </aside>

                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                      <Search className="h-3.5 w-3.5 text-gray-500" />
                      <span className="text-xs text-gray-500">Search anything...</span>
                    </div>
                    <button className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-2 text-xs font-medium text-white">
                      <Plus className="h-3.5 w-3.5" />
                      New Project
                    </button>
                    <button className="relative cursor-pointer text-gray-400">
                      <Bell className="h-4 w-4" />
                      <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white">
                        7
                      </span>
                    </button>
                    <Moon className="h-4 w-4 cursor-pointer text-gray-400" />
                    <div className="flex cursor-pointer items-center gap-1.5">
                      <img
                        src="https://i.pravatar.cc/40?img=13"
                        alt="Akash"
                        className="h-7 w-7 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[11px] font-medium text-white">Akash</p>
                        <p className="text-[9px] text-gray-500">Pro Plan</p>
                      </div>
                      <ChevronDown className="h-3 w-3 text-gray-500" />
                    </div>
                  </div>

                  <p className="mt-5 text-base font-bold text-white">Dashboard Overview</p>
                  <p className="text-xs text-gray-400">
                    Welcome back! Here&apos;s what&apos;s happening with your projects.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {stats.map((s) => (
                      <div key={s.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-md ${s.iconBg}`}>
                          <s.icon className="h-3.5 w-3.5 text-white" />
                        </span>
                        <p className="mt-2 text-[10px] text-gray-500">{s.label}</p>
                        <p className="text-lg font-bold text-white">{s.value}</p>
                        <p className="mt-0.5 text-[10px] text-emerald-400">{s.change}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_220px]">
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">Leads Growth</p>
                        <span className="flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-[10px] text-gray-400">
                          This Month
                          <ChevronDown className="h-3 w-3" />
                        </span>
                      </div>
                      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="mt-3 h-28 w-full" preserveAspectRatio="none">
                        <polyline points={points} fill="none" stroke="#a855f7" strokeWidth="2.5" />
                      </svg>
                      <div className="mt-1 flex justify-between text-[9px] text-gray-500">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                      <p className="text-sm font-semibold text-white">Top Performing Projects</p>
                      <ul className="mt-3 flex flex-col gap-3">
                        {projects.map((p) => (
                          <li key={p.name} className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2">
                              <span className={`flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold text-white ${p.color}`}>
                                {p.initials}
                              </span>
                              <span className="text-gray-300">{p.name}</span>
                            </span>
                            <span className="text-gray-500">{p.leads}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-4 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d1c]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="relative flex h-14 w-14 items-center justify-center">
                <svg viewBox="0 0 44 44" className="h-14 w-14 -rotate-90">
                  <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    stroke="#22c55e"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 18}
                    strokeDashoffset={2 * Math.PI * 18 * (1 - 0.94)}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-sm font-bold text-white">94</span>
                  <span className="text-[8px] text-gray-400">/100</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400">Website Score</p>
                <p className="text-sm font-bold text-emerald-400">Excellent</p>
              </div>
            </div>

            <div className="absolute -bottom-10 right-2 z-20 w-56 rounded-xl border border-white/10 bg-[#0d0d1c]/90 p-4 shadow-xl backdrop-blur-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600">
                <MailCheck className="h-4 w-4 text-white" />
              </span>
              <p className="mt-2 text-sm font-semibold text-white">AI Email Ready</p>
              <p className="text-xs text-gray-400">Personalized email ready to send</p>
              <button className="mt-2 flex cursor-pointer items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-medium text-white">
                Generate
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/5 px-6 py-6 text-xs text-gray-500 sm:flex-row lg:px-10">
        <p>© 2026 AI Leads. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="cursor-pointer hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="cursor-pointer hover:text-white">Terms of Service</a>
          <span>|</span>
          <a href="#" className="cursor-pointer hover:text-white">Support</a>
        </div>
      </footer>
    </div>
  );
}