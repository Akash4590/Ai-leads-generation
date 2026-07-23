import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Search,
  Send,
  TrendingUp,
  Rocket,
  ChevronDown,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api";

const stats = [
  { label: "Total Projects", value: "24", change: "+12%" },
  { label: "Total Leads", value: "2,543", change: "+18%" },
  { label: "Emails Sent", value: "1,243", change: "+24%" },
  { label: "Revenue Generated", value: "$42,500", change: "+12%" },
];

const leadsData = [1.1, 1.4, 1.3, 1.7, 1.6, 2.0, 1.9, 2.3, 2.5, 2.4, 2.8, 3.0];

const features = [
  {
    icon: Sparkles,
    iconBg: "bg-purple-600",
    title: "AI-Powered Insights",
    description: "Get AI recommendations to improve performance",
  },
  {
    icon: Search,
    iconBg: "bg-blue-600",
    title: "Find Quality Leads",
    description: "Discover verified leads that convert",
  },
  {
    icon: Send,
    iconBg: "bg-emerald-600",
    title: "Automate Outreach",
    description: "Send personalized emails at scale",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-orange-600",
    title: "Track Growth",
    description: "Monitor and grow your business faster",
  },
];

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // naye states — functionality ke liye
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const chartWidth = 460;
  const chartHeight = 140;
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

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // backend se aaya error yahan set hoga — e.g. "Invalid email or password"
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      // agar rememberMe checked hai to localStorage, warna sessionStorage
     if (rememberMe) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
} else {
  sessionStorage.setItem("token", data.token);
  sessionStorage.setItem("user", JSON.stringify(data.user));
}

      navigate("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050414] text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-700/25 blur-[160px]" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-600/25 blur-[160px]" />
        <div className="absolute right-1/3 top-0 h-72 w-72 rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-10">
        <div className="grid w-full grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-2xl lg:grid-cols-2 lg:gap-10 lg:p-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <Zap className="h-7 w-7 fill-purple-500 text-purple-500" />
              <span className="text-xl font-bold text-white">
                AI <span className="text-purple-400">Leads</span>
              </span>
            </div>

            <h1 className="mt-8 flex items-center gap-2 text-3xl font-bold text-white">
              Welcome Back <span>👋</span>
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Sign in to continue to your AI Leads account
            </p>

            <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-3 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-white/[0.05]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label="Toggle password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error message — backend se aaye error ke liye */}
              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-300">
                  <button
                    type="button"
                    onClick={() => setRememberMe((v) => !v)}
                    className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded border transition ${
                      rememberMe
                        ? "border-purple-500 bg-purple-600"
                        : "border-white/20 bg-transparent"
                    }`}
                  >
                    {rememberMe && (
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-white">
                        <path d="M4.5 8.5 1.5 5.5 2.5 4.5 4.5 6.5 9.5 1.5 10.5 2.5Z" />
                      </svg>
                    )}
                  </button>
                  Remember me
                </label>
                <a
                  href="/ForgotPassword"
                  className="cursor-pointer text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(147,51,234,0.4)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Logging in...
                  </>
                ) : (
                  <>
                    Login to Account
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="cursor-pointer font-medium text-purple-400 transition hover:text-purple-300"
              >
                Sign Up
              </Link>
            </p>

            <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <ShieldCheck className="h-3.5 w-3.5" />
              Your data is protected with enterprise-grade security
            </p>
          </div>

          {/* RIGHT COLUMN — unchanged */}
          <div className="hidden flex-col lg:flex">
            <div className="flex justify-end">
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Trusted by 10,000+ users
              </span>
            </div>

            <h2 className="mt-10 text-3xl font-bold text-purple-300">
              AI-Powered Lead Generation
            </h2>
            <p className="mt-3 max-w-md text-sm text-gray-400">
              Find high-quality leads, analyze websites, and grow your
              business with the power of AI.
            </p>

            <div className="relative mt-8 flex-1">
              <div className="pointer-events-none absolute -bottom-10 left-1/4 h-24 w-3/4 rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/50 to-fuchsia-500/40 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a18]/80 p-5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="hidden w-10 shrink-0 flex-col items-center gap-3 sm:flex">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600">
                      <Zap className="h-4 w-4 text-white" />
                    </span>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          i === 0
                            ? "bg-purple-600/30 text-purple-300"
                            : "text-gray-600"
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full bg-current" />
                      </span>
                    ))}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">
                        Dashboard Overview
                      </p>
                      <span className="flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1 text-[11px] text-gray-400">
                        This Month
                        <ChevronDown className="h-3 w-3" />
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                        >
                          <p className="text-[10px] text-gray-500">
                            {s.label}
                          </p>
                          <p className="mt-1 text-lg font-bold text-white">
                            {s.value}
                          </p>
                          <p className="mt-0.5 text-[10px] text-emerald-400">
                            ↑ {s.change} from last month
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]">
                      <div className="flex flex-col items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] p-4">
                        <p className="self-start text-xs text-gray-400">
                          Website Health
                        </p>
                        <div className="relative mt-2 flex h-24 w-24 items-center justify-center">
                          <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              stroke="rgba(255,255,255,0.08)"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              stroke="#a855f7"
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={2 * Math.PI * 42}
                              strokeDashoffset={2 * Math.PI * 42 * (1 - 0.92)}
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center">
                            <span className="text-xl font-bold text-white">
                              92
                            </span>
                            <span className="text-[10px] text-gray-400">
                              /100
                            </span>
                          </div>
                        </div>
                        <span className="mt-2 text-xs font-medium text-emerald-400">
                          Excellent
                        </span>
                      </div>

                      <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                        <p className="text-xs text-gray-400">Leads Growth</p>
                        <svg
                          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                          className="mt-2 h-28 w-full"
                          preserveAspectRatio="none"
                        >
                          <polyline
                            points={points}
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="2.5"
                          />
                        </svg>
                        <div className="mt-1 flex justify-between text-[10px] text-gray-500">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -bottom-6 -right-6 flex h-28 w-28 rotate-45 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-700 shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                  <Rocket className="h-12 w-12 -rotate-45 text-white" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map(({ icon: Icon, iconBg, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}