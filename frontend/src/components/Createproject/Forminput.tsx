import type { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  label: string;
  suffix?: string;
  verified?: boolean;
}

export default function FormInput({
  icon: Icon,
  label,
  suffix,
  verified,
  ...props
}: FormInputProps) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-white/[0.05]"
        />
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
            {suffix}
          </span>
        )}
        {verified && (
          <span className="pointer-events-none absolute right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            ✓
          </span>
        )}
      </div>
    </div>
  );
}