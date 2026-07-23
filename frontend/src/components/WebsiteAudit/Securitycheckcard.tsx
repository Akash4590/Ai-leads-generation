import { ShieldCheck, Check, AlertTriangle, ArrowRight } from "lucide-react";

interface SecurityItem {
  label: string;
  status: "ok" | "warning";
}

const items: SecurityItem[] = [
  { label: "SSL Certificate", status: "ok" },
  { label: "HTTPS", status: "ok" },
  { label: "Security Headers", status: "warning" },
  { label: "XSS Protection", status: "ok" },
  { label: "Content Security Policy", status: "warning" },
  { label: "Cookies Secure", status: "ok" },
];

export default function SecurityCheckCard() {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Security Check
        </h3>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-semibold text-emerald-400">
          {items.length}
        </span>
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((i) => (
          <li key={i.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{i.label}</span>
            {i.status === "ok" ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <Check className="h-3.5 w-3.5" />
              </span>
            ) : (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-400">
                <AlertTriangle className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ul>

      <button className="mt-4 flex cursor-pointer items-center gap-1.5 text-xs font-medium text-purple-400 transition hover:text-purple-300">
        View full security report
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}