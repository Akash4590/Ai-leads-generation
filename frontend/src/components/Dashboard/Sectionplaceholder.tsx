import type { LucideIcon } from "lucide-react";

interface SectionPlaceholderProps {
  icon: LucideIcon;
  title: string;
}

export default function SectionPlaceholder({
  icon: Icon,
  title,
}: SectionPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-gray-400">
        This section is under construction. Content for {title} will appear
        here.
      </p>
    </div>
  );
}