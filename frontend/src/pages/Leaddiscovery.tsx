import { useState } from "react";
import { Upload, Bookmark } from "lucide-react";
import Sidebar from "../components/Dashboard/Sidebar";
import TopNavbarProject from "../components/Dashboard/TopBar";
import LeadSearchBar from "../components/Leaddiscover/Leadsearchbar";
import AdvancedFilters from "../components/Leaddiscover/Advancedfilters";
import ResultsToolbar from "../components/Leaddiscover/Resultstoolbar";
import LeadCard, { type Lead } from "../components/Leaddiscover/LeadCard";
import Pagination from "../components/Leaddiscover/Pagination";
import LeadDetailPanel from "../components/Leaddiscover/Leaddetailpanel";

const leads: Lead[] = [
  {
    id: "growrise",
    name: "GrowRise",
    initials: "GR",
    avatarColor: "bg-purple-600",
    verified: true,
    category: "Marketing Agency",
    domain: "growrise.ai",
    aiScore: 96,
    email: "info@growrise.ai",
    phone: "+92 300 1234567",
    employees: 35,
    location: "Lahore, Pakistan",
    status: "New Lead",
    statusTime: "2 hours ago",
  },
  {
    id: "technova",
    name: "TechNova Solutions",
    initials: "TN",
    avatarColor: "bg-blue-600",
    verified: true,
    category: "Software Development",
    domain: "technova.com",
    aiScore: 92,
    email: "hello@technova.com",
    phone: "+92 321 7654321",
    employees: 28,
    location: "Karachi, Pakistan",
    status: "Saved",
    statusTime: "1 day ago",
  },
  {
    id: "quantumsoft",
    name: "QuantumSoft",
    initials: "QS",
    avatarColor: "bg-fuchsia-600",
    verified: true,
    category: "IT Services",
    domain: "quantumsoft.io",
    aiScore: 89,
    email: "contact@quantumsoft.io",
    phone: "+92 333 9876543",
    employees: 50,
    location: "Islamabad, Pakistan",
    status: "Contacted",
    statusTime: "2 days ago",
  },
  {
    id: "webdynasty",
    name: "WebDynasty",
    initials: "WD",
    avatarColor: "bg-emerald-600",
    verified: true,
    category: "Web Development",
    domain: "webdynasty.dev",
    aiScore: 85,
    email: "team@webdynasty.dev",
    phone: "+92 312 4567890",
    employees: 22,
    location: "Multan, Pakistan",
    status: "New Lead",
    statusTime: "3 hours ago",
  },
];

export default function LeadDiscovery() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead>(leads[0]);
  const [panelOpen, setPanelOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <Sidebar
        active="Lead Discovery"
        onSelect={() => {}}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1">
        <div className="min-w-0 flex-1">
          <TopNavbarProject
            onMenuClick={() => setSidebarOpen(true)}
            projectName="GrowRise"
          />

          <main className="flex flex-col gap-6 px-4 pb-10 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl">
                  Lead Discovery
                  <span className="text-purple-400">✨</span>
                </h1>
                <p className="mt-1 text-sm text-gray-400">
                  Find high-quality businesses using AI and smart filters
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
                  <Upload className="h-4 w-4" />
                  Export Leads
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
                  <Bookmark className="h-4 w-4" />
                  Save Search
                </button>
              </div>
            </div>

            <LeadSearchBar />
            <AdvancedFilters />
            <ResultsToolbar total={2534} />

            <div className="flex flex-col gap-4">
              {leads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  selected={selectedLead.id === lead.id && panelOpen}
                  onSelect={() => {
                    setSelectedLead(lead);
                    setPanelOpen(true);
                  }}
                />
              ))}
            </div>

            <Pagination totalPages={51} />
          </main>
        </div>

        {panelOpen && (
          <LeadDetailPanel
            lead={selectedLead}
            onClose={() => setPanelOpen(false)}
          />
        )}
      </div>
    </div>
  );
}