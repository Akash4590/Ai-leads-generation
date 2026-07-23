import {
  X,
  Star,
  ExternalLink,
  Users,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Copy,
  ArrowRight,
  Globe2,
  Send,
  FolderKanban,
  ChevronRight,
} from "lucide-react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

import CircularProgress from "../Dashboard/Circularprogress";
import type { Lead } from "./LeadCard";
const insights = [
  "Website looks professional and modern",
  "Has a clear contact page",
  "Good SEO structure",
  "Fast loading website",
  "Active on social media",
];

const quickActions = [
  {
    icon: Globe2,
    color: "bg-purple-600",
    title: "Website Audit",
    description: "Analyze website health",
  },
  {
    icon: Send,
    color: "bg-blue-600",
    title: "Generate Email",
    description: "Create AI-powered email",
  },
  {
    icon: FolderKanban,
    color: "bg-emerald-600",
    title: "Save to CRM",
    description: "Add to pipeline",
  },
];

interface LeadDetailPanelProps {
  lead: Lead;
  onClose: () => void;
}

export default function LeadDetailPanel({ lead, onClose }: LeadDetailPanelProps) {
  return (
    <aside className="flex h-full w-full max-w-sm shrink-0 flex-col gap-5 overflow-y-auto border-l border-white/10 bg-[#0a0a14] p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold text-white ${lead.avatarColor}`}
          >
            {lead.initials}
          </span>
          <div>
            <p className="flex items-center gap-1.5 text-base font-semibold text-white">
              {lead.name}
              <span className="text-emerald-400">✓</span>
            </p>
            <div className="mt-0.5 flex items-center gap-1 text-xs text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
              <span className="ml-1 text-gray-400">4.9 (128 reviews)</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} aria-label="Close panel" className="text-gray-500 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-400">{lead.category}</p>
        <a
          href="#"
          className="mt-1 inline-flex items-center gap-1 text-sm text-purple-400 hover:underline"
        >
          {lead.domain}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <Users className="h-4 w-4 text-gray-500" />
          <p className="text-sm font-semibold text-white">{lead.employees}</p>
          <p className="text-[10px] text-gray-500">Employees</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <MapPin className="h-4 w-4 text-gray-500" />
          <p className="text-sm font-semibold text-white">{lead.location}</p>
          <p className="text-[10px] text-gray-500">Location</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <Calendar className="h-4 w-4 text-gray-500" />
          <p className="text-sm font-semibold text-white">2020</p>
          <p className="text-[10px] text-gray-500">Founded</p>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <p className="text-xs font-semibold text-gray-400">
            Contact Information
          </p>
          <div className="mt-3 flex flex-col gap-2.5 text-xs text-gray-300">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gray-500" /> {lead.email}
              </span>
              <Copy className="h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-white" />
            </span>
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-gray-500" /> {lead.phone}
              </span>
              <Copy className="h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-white" />
            </span>
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaLinkedin className="h-3.5 w-3.5 text-gray-500" />
                linkedin.com/company/{lead.id}
              </span>
              <Copy className="h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-white" />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <p className="mb-2 text-[10px] font-semibold text-gray-400">AI Score</p>
          <CircularProgress
            value={lead.aiScore}
            size={70}
            strokeWidth={6}
            label={String(lead.aiScore)}
            sublabel="/100"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">AI Insights</p>
          <button className="flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300">
            View Full Report
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <ul className="mt-3 flex flex-col gap-2">
          {insights.map((insight) => (
            <li key={insight} className="flex items-center gap-2 text-xs text-gray-300">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                ✓
              </span>
              {insight}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-white">Quick Actions</p>
        <div className="mt-3 flex flex-col gap-2.5">
          {quickActions.map(({ icon: Icon, color, title, description }) => (
            <button
              key={title}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-white transition hover:brightness-110 ${color}`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span>
                  <span className="block text-sm font-medium">{title}</span>
                  <span className="block text-xs text-white/70">{description}</span>
                </span>
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-white">Notes</p>
        <textarea
          placeholder="Add a note about this company..."
          rows={3}
          className="mt-3 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-white outline-none placeholder:text-gray-500 focus:border-purple-500/50"
        />
      </div>
    </aside>
  );
}