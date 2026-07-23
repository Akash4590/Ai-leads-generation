import StatusBadge from "./StatusBadge";

interface Lead {
  company: string;
  logoColor: string;
  initial: string;
  score: number;
  status: "Hot" | "Warm" | "New";
  added: string;
}

const leads: Lead[] = [
  {
    company: "Nike",
    logoColor: "bg-emerald-500",
    initial: "N",
    score: 96,
    status: "Hot",
    added: "2 min ago",
  },
  {
    company: "Tesla",
    logoColor: "bg-red-500",
    initial: "T",
    score: 91,
    status: "Warm",
    added: "15 min ago",
  },
  {
    company: "Shopify",
    logoColor: "bg-green-500",
    initial: "S",
    score: 89,
    status: "New",
    added: "32 min ago",
  },
  {
    company: "Airbnb",
    logoColor: "bg-pink-500",
    initial: "A",
    score: 87,
    status: "Warm",
    added: "1 hour ago",
  },
  {
    company: "Slack",
    logoColor: "bg-purple-500",
    initial: "S",
    score: 85,
    status: "New",
    added: "2 hours ago",
  },
];

export default function RecentLeadsTable() {
  return (
    <div className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          Recent Leads
        </h3>

        <button className="cursor-pointer rounded-lg px-2 py-1 text-xs font-medium text-purple-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-purple-300">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px]">
          <thead>
            <tr className="text-left text-xs text-gray-500">
              <th className="pb-2 font-medium">Company</th>
              <th className="pb-2 font-medium">Score</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Added</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.company}
                className="cursor-pointer border-b border-white/5 text-sm transition-all duration-200 hover:bg-white/[0.05]"
              >
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white transition-transform duration-200 hover:scale-105 ${lead.logoColor}`}
                    >
                      {lead.initial}
                    </span>

                    <span className="font-medium text-white">
                      {lead.company}
                    </span>
                  </div>
                </td>

                <td className="py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-semibold text-emerald-400 transition-all duration-200 hover:bg-emerald-500/25">
                    {lead.score}
                  </span>
                </td>

                <td className="py-3">
                  <StatusBadge status={lead.status} />
                </td>

                <td className="py-3 text-xs text-gray-400">
                  {lead.added}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}