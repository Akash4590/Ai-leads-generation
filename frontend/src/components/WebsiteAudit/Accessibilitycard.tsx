import { Accessibility, ArrowRight } from "lucide-react";

const items = [
  { label: "Color Contrast", value: 95 },
  { label: "Keyboard Navigation", value: 88 },
  { label: "ARIA Labels", value: 91 },
  { label: "Image Alt Text", value: 84 },
  { label: "Form Labels", value: 90 },
];

export default function AccessibilityCard() {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <Accessibility className="h-4 w-4 text-orange-400" />
          Accessibility
        </h3>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/15 text-xs font-semibold text-orange-400">
          {items.length}
        </span>
      </div>

      <ul className="mt-4 flex flex-col gap-3">
        {items.map((i) => (
          <li key={i.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-gray-300">{i.label}</span>
              <span className="text-gray-400">{i.value}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: `${i.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-4 flex cursor-pointer items-center gap-1.5 text-xs font-medium text-purple-400 transition hover:text-purple-300">
        View full accessibility report
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}