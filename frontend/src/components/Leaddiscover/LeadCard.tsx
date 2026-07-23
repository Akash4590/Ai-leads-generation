import { Mail, Phone, Users, MapPin, Bookmark, ArrowRight, BadgeCheck } from "lucide-react";
import CircularProgress from "../Dashboard/Circularprogress";

export interface Lead {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  verified: boolean;
  category: string;
  domain: string;
  aiScore: number;
  email: string;
  phone: string;
  employees: number;
  location: string;
  status: "New Lead" | "Saved" | "Contacted";
  statusTime: string;
}

const statusStyles: Record<Lead["status"], string> = {
  "New Lead": "bg-emerald-500/15 text-emerald-400",
  Saved: "bg-blue-500/15 text-blue-400",
  Contacted: "bg-orange-500/15 text-orange-400",
};

interface LeadCardProps {
  lead: Lead;
  selected?: boolean;
  onSelect?: () => void;
}

export default function LeadCard({ lead, selected, onSelect }: LeadCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-xl border p-5 transition ${
        selected
          ? "border-purple-500/50 bg-purple-500/5"
          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
      }`}
    >
      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[auto_auto_1fr_auto_auto] lg:gap-6">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${lead.avatarColor}`}
          >
            {lead.initials}
          </span>
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
              {lead.name}
              {lead.verified && (
                <BadgeCheck className="h-4 w-4 text-blue-400" />
              )}
            </p>
            <p className="text-xs text-gray-400">{lead.category}</p>
            <a href="#" className="text-xs text-purple-400 hover:underline">
              {lead.domain}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <CircularProgress
            value={lead.aiScore}
            size={64}
            strokeWidth={5}
            label={String(lead.aiScore)}
            sublabel="/100"
          />
          <span className="mt-1 text-[10px] text-gray-500">AI Score</span>
        </div>

        <div className="flex flex-col gap-1.5 text-xs text-gray-400">
          <span className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> {lead.email}
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> {lead.phone}
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" /> {lead.employees} Employees
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> {lead.location}
          </span>
        </div>

        <div className="flex flex-col items-start gap-2 lg:items-end">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[lead.status]}`}
            >
              {lead.status}
            </span>
            <button aria-label="Save lead" className="text-gray-500 hover:text-white">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
          <span className="text-[11px] text-gray-500">{lead.statusTime}</span>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-purple-500">
          View Details
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}