import { FileText, Timer, MonitorSmartphone, Clock } from "lucide-react";

const info = [
  { icon: FileText, label: "Crawled Pages", value: "124" },
  { icon: Timer, label: "Scan Duration", value: "2m 34s" },
  { icon: MonitorSmartphone, label: "Pagespeed Device", value: "Desktop" },
  { icon: Clock, label: "Last Scan", value: "2 hours ago" },
];

export default function ScanInformationCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-sm font-semibold text-white">Scan Information</h3>

      <ul className="mt-4 flex flex-col gap-3">
        {info.map((i) => (
          <li key={i.label} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs text-gray-400">
              <i.icon className="h-3.5 w-3.5" />
              {i.label}
            </span>
            <span className="text-xs font-medium text-white">{i.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}