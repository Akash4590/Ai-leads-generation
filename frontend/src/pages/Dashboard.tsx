import { useState } from "react";
import {
  Users,
  UserCheck,
  Mail,
  DollarSign,
  Search,
  Globe,
  PenSquare,
  Kanban,
  BarChart3,
  FileText,
  Puzzle,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Sidebar from "../components/Dashboard/Sidebar";
import TopBar from "../components/Dashboard/TopBar";
import GoalCard from "../components/Dashboard/Goalcard";
import StatCard from "../components/Dashboard/Statcard";
import LeadGrowthChart from "../components/Dashboard/Leadgrowthchart";
import AIAssistantCard from "../components/Dashboard/Aiassistantcard";
import WebsiteAuditCard from "../components/Dashboard/Websiteauditcard";
import RecentLeadsTable from "../components/Dashboard/Recentleadstable";
import CRMCard from "../components/Dashboard/Crmcard";
import RecentActivity from "../components/Dashboard/Recentactivity";
import SectionPlaceholder from "../components/Dashboard/Sectionplaceholder";

const sparkline = (base: number) =>
  Array.from({ length: 8 }).map((_, i) => ({
    v: base + Math.round(Math.sin(i) * base * 0.15) + i * (base * 0.02),
  }));

const stats = [
  {
    icon: Users,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    title: "Total Leads",
    value: "18,420",
    change: "↑ 18% from last month",
    sparklineColor: "#a855f7",
    sparklineData: sparkline(20),
  },
  {
    icon: UserCheck,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    title: "Qualified Leads",
    value: "7,421",
    change: "↑ 32% from last month",
    sparklineColor: "#3b82f6",
    sparklineData: sparkline(15),
  },
  {
    icon: Mail,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    title: "Emails Generated",
    value: "1,842",
    change: "↑ 21% from last month",
    sparklineColor: "#22c55e",
    sparklineData: sparkline(12),
  },
  {
    icon: DollarSign,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    title: "Revenue Generated",
    value: "$42,500",
    change: "↑ 14% from last month",
    sparklineColor: "#f97316",
    sparklineData: sparkline(18),
  },
];

const sectionIcons: Record<string, LucideIcon> = {
  "Lead Discovery": Search,
  "Website Audit": Globe,
  "AI Email Writer": PenSquare,
  "Email Campaigns": Mail,
  "CRM Pipeline": Kanban,
  Analytics: BarChart3,
  Reports: FileText,
  Integrations: Puzzle,
  Settings: Settings,
};

function DashboardHome() {
  return (
    <>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold text-white sm:text-2xl">
            Good Morning, Akash 
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Let's grow your business today.
          </p>
        </div>
        <GoalCard />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-4">
        <LeadGrowthChart />
        <AIAssistantCard />
        <WebsiteAuditCard />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <RecentLeadsTable />
        <CRMCard />
        <RecentActivity />
      </div>
    </>
  );
}

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <Sidebar
        active={activeSection}
        onSelect={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-w-0 flex-1">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="px-4 pb-10 sm:px-6 lg:px-8">
          {activeSection === "Dashboard" ? (
            <DashboardHome />
          ) : (
            <SectionPlaceholder
              icon={sectionIcons[activeSection] ?? Search}
              title={activeSection}
            />
          )}
        </main>
      </div>
    </div>
  );
}