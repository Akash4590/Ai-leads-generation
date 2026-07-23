import {
  LayoutDashboard,
  Search,
  Globe,
  PenSquare,
  Mail,
  Kanban,
  BarChart3,
  FileText,
  Puzzle,
  Settings,
  Rocket,
  Zap,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavItem {
  icon: typeof LayoutDashboard;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Search,
    label: "Lead Discovery",
    path: "/leads-discovery",
  },
  {
    icon: Globe,
    label: "Website Audit",
    path: "/website-audit",
  },
  {
    icon: PenSquare,
    label: "AI Email Writer",
    path: "/ai-email-writer",
  },
  {
    icon: Mail,
    label: "Email Campaigns",
    path: "/email-campaigns",
  },
  {
    icon: Kanban,
    label: "CRM Pipeline",
    path: "/crm-pipeline",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: FileText,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: Puzzle,
    label: "Integrations",
    path: "/integrations",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

interface SidebarProps {
  active: string;
  onSelect: (label: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  active,
  onSelect,
  isOpen,
  onClose,
}: SidebarProps) {
  const navigate = useNavigate();

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden cursor-pointer"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-64 shrink-0 flex-col justify-between border-r border-white/5 bg-[#0a0a14] px-4 py-6 transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Zap className="h-6 w-6 fill-purple-500 text-purple-500" />
              <span className="text-lg">AI Leads</span>
            </div>

            <button
              onClick={onClose}
              className="cursor-pointer text-gray-400 hover:text-white lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {navItems.map(({ icon: Icon, label, path }) => (
              <button
                key={label}
                onClick={() => {
                  onSelect(label);
                  navigate(path);
                  onClose();
                }}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active === label
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="rounded-xl border border-purple-500/20 bg-gradient-to-b from-purple-600/10 to-transparent p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-2.5 py-1 text-[11px] font-medium text-purple-300">
            <Zap className="h-3 w-3" />
            Upgrade Plan
          </span>

          <p className="mt-3 text-sm font-semibold text-white">
            Unlock More Power
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Upgrade to get more leads, advanced filters, and premium features.
          </p>

          <div className="mt-3 flex items-end justify-between">
            <button className="cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-purple-500">
              Upgrade Now
            </button>

            <Rocket className="h-8 w-8 text-purple-400" />
          </div>
        </div>
      </aside>
    </>
  );
}