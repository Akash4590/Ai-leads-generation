import { ChevronDown} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SelectHTMLAttributes } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: LucideIcon;
  label: string;
  options: string[];
}

export default function FormSelect({
  icon: Icon,
  label,
  options,
  ...props
}: FormSelectProps) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-400">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {label}
      </label>
      <div className="relative">
        <select
          {...props}
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-purple-500/50 focus:bg-white/[0.05]"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0d0d18]">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}