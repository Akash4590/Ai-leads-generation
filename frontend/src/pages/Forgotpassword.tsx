import { useState } from "react";
import {
  Zap,
  Mail,
  ShieldCheck,
  Send,
  ArrowLeft,
  Lock,
  CheckCircle2,
  Send as PaperPlane,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setMessage(data.message || "Reset link sent! Check your email.");
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl">
            <div className="flex items-center gap-2">
              <Zap className="h-7 w-7 fill-purple-500 text-purple-500" />
              <span className="text-xl font-bold text-white">
                AI <span className="text-purple-400">Leads</span>
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-bold text-white">
              Forgot your <span className="text-purple-400">password?</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              No worries! Enter your email address and we&apos;ll send you a
              link to reset your password.
            </p>

            <form className="mt-8 flex flex-col gap-3" onSubmit={handleSubmit}>
              <label className="text-sm font-medium text-white">
                Work Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-white/[0.05]"
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Success message */}
              {message && (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-400">
                  {message}
                </div>
              )}

              <p className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
                We&apos;ll never share your email with anyone else.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(147,51,234,0.4)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
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
                    Sending...
                  </>
                ) : (
                  <>
                    Send Reset Link
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            <a
              href="/login"
              className="mt-8 flex cursor-pointer items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative hidden h-[720px] lg:block">
            <div className="absolute right-16 top-8 z-20 w-64 rounded-xl border border-white/10 bg-[#0d0d1c]/90 p-4 shadow-xl backdrop-blur-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600">
                <Mail className="h-4 w-4 text-white" />
              </span>
              <p className="mt-2 text-sm font-semibold text-white">
                Reset Link
              </p>
              <p className="mt-1 text-xs text-gray-400">
                We&apos;ll send a secure reset link to your email address.
              </p>
            </div>

            <div className="absolute left-24 bottom-40 z-20 w-56 rounded-xl border border-white/10 bg-[#0d0d1c]/90 p-4 shadow-xl backdrop-blur-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                <ShieldCheck className="h-4 w-4 text-white" />
              </span>
              <p className="mt-2 text-sm font-semibold text-white">
                Secure &amp; Safe
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Your account is protected with enterprise-grade security.
              </p>
            </div>

            <div className="absolute right-4 bottom-52 z-20 w-56 rounded-xl border border-white/10 bg-[#0d0d1c]/90 p-4 shadow-xl backdrop-blur-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </span>
              <p className="mt-2 text-sm font-semibold text-white">
                Quick &amp; Easy
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Reset your password in just a few clicks and get back to
                growing.
              </p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-72 w-72 items-center justify-center">
                <div className="absolute h-full w-full rounded-full border border-purple-500/20" />
                <div className="absolute h-56 w-56 rounded-full border border-blue-500/20" />

                <PaperPlane className="absolute -right-6 -top-6 h-8 w-8 rotate-45 text-purple-400" />

                <div className="relative flex h-40 w-52 items-end justify-center">
                  <div
                    className="absolute bottom-0 h-0 w-0 border-l-[104px] border-r-[104px] border-t-[80px] border-l-transparent border-r-transparent border-t-purple-700"
                    style={{ filter: "drop-shadow(0 0 30px rgba(147,51,234,0.5))" }}
                  />
                  <div className="absolute bottom-6 z-10 flex h-24 w-32 -translate-y-2 items-start justify-center rounded-md bg-gradient-to-b from-purple-200 to-purple-400 shadow-xl">
                    <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-md bg-purple-700">
                      <Lock className="h-5 w-5 text-purple-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
          </div>
        </div>
      </div>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 px-6 py-6 text-xs text-gray-500 sm:flex-row lg:px-10">
        <p className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5" />
          Your security is our priority.
        </p>
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