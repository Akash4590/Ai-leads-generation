import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AIModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
}

export default function AIModuleCard({
  icon: Icon,
  title,
  description,
  checked,
  onToggle,
}: AIModuleCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition ${
        checked
          ? "border-purple-500/40 bg-purple-500/5"
          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <Icon className="h-5 w-5 text-gray-300" />
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
            checked
              ? "border-purple-500 bg-purple-600"
              : "border-white/20 bg-transparent"
          }`}
        >
          {checked && <Check className="h-3.5 w-3.5 text-white" />}
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-gray-400">{description}</p>
      </div>
    </button>
  );
}