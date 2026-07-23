import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Zap,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${API_BASE_URL}/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ password, confirmPassword }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Password reset successfully! Redirecting to your dashboard...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset failed");
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

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 items-center px-6 py-10">
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl">
          <div className="flex items-center gap-2">
            <Zap className="h-7 w-7 fill-purple-500 text-purple-500" />
            <span className="text-xl font-bold text-white">
              AI <span className="text-purple-400">Leads</span>
            </span>
          </div>

          <h1 className="mt-8 text-3xl font-bold text-white">
            Set a new <span className="text-purple-400">password</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Choose a strong password you haven&apos;t used before.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                {error}
              </div>
            )}

            {message && (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                {message}
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder="Create a strong password"
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

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-3 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-white/[0.05]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label="Toggle confirm password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <p className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
              This reset link expires in 15 minutes.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(147,51,234,0.4)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Reset Password"
              )}
            </button>
          </form>

          <Link
            to="/login"
            className="mt-8 flex cursor-pointer items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}