import { Search, BarChart3, Send, Check, Zap, Globe } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discover Leads",
    description: "Find your ideal prospects using smart filters.",
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Analyze & Audit",
    description: "AI audits websites and scores their quality.",
  },
  {
    number: 3,
    icon: Send,
    title: "Convert & Close",
    description: "Generate emails, follow up and close more deals.",
  },
];

const sidebarLinks = [
  "Dashboard",
  "Leads",
  "Website Audit",
  "AI Reports",
  "Email Generator",
  "CRM Pipeline",
  "Analytics",
  "Tasks",
  "Settings",
];

const scoreMetrics = [
  { label: "Performance", value: 92, color: "text-emerald-400" },
  { label: "Accessibility", value: 88, color: "text-emerald-400" },
  { label: "Best Practices", value: 90, color: "text-emerald-400" },
];

const issues = [
  { label: "Meta description missing", severity: "High", color: "bg-red-500" },
  { label: "Images not optimized", severity: "Medium", color: "bg-yellow-500" },
  { label: "Slow page load speed", severity: "Low", color: "bg-emerald-500" },
];

const insights = [
  "Advanced website analysis",
  "AI-powered recommendations",
  "Personalized email generation",
  "Smart lead scoring",
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Steps */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Get more leads in 3 simple steps
          </h2>

          <div className="relative mt-14 grid grid-cols-1 items-start gap-10 sm:grid-cols-3">
            <svg
              className="pointer-events-none absolute left-0 top-10 hidden w-full sm:block"
              viewBox="0 0 800 80"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M170 15 C 230 15, 280 55, 340 55"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="6 6"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M460 55 C 520 55, 570 15, 630 15"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="6 6"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0 0 L8 4 L0 8 Z" fill="#a855f7" />
                </marker>
              </defs>
            </svg>

            {steps.map(({ number, icon: Icon, title, description }) => (
              <div
                key={number}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
                  <Icon className="h-8 w-8 text-purple-400" />
                  <span className="absolute -bottom-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-semibold">
                    {number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 max-w-xs text-sm text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard + Insights */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
            <div className="flex">
              <aside className="hidden w-40 shrink-0 border-r border-white/5 bg-[#050714] p-4 sm:block">
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold">
                  <Zap className="h-4 w-4 fill-purple-500 text-purple-500" />
                  AI Leads
                </div>
                <ul className="space-y-1 text-xs text-gray-400">
                  {sidebarLinks.map((link) => (
                    <li
                      key={link}
                      className={`rounded-md px-2 py-1.5 ${
                        link === "Website Audit"
                          ? "bg-purple-600/20 text-purple-300"
                          : ""
                      }`}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="flex-1 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Website Audit</h4>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                  <span>85</span>
                  <Globe className="h-3 w-3" />
                  <span>acme.com</span>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-3">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <span className="text-xl font-bold text-emerald-400">
                      85
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Overall Score
                    </span>
                  </div>
                  {scoreMetrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-3"
                    >
                      <span className={`text-xl font-bold ${m.color}`}>
                        {m.value}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <p className="mb-2 text-xs font-semibold text-gray-300">
                    Top Issues Found
                  </p>
                  <ul className="space-y-2">
                    {issues.map((issue) => (
                      <li
                        key={issue.label}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="flex items-center gap-2 text-gray-400">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${issue.color}`}
                          />
                          {issue.label}
                        </span>
                        <span className="text-gray-500">
                          {issue.severity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-lg bg-gradient-to-br from-purple-700 to-purple-500 p-4">
                  <p className="text-sm font-semibold">
                    Grow your business faster with AI
                  </p>
                  <button className="mt-3 rounded-md bg-white/15 px-3 py-1.5 text-xs font-medium hover:bg-white/25">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              AI-Powered Insights
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              AI analyzes. You take action. Close more deals.
            </h2>
            <p className="mt-4 text-gray-400">
              Our AI looks at every detail so you can focus on building
              relationships and growing your business.
            </p>

            <ul className="mt-6 space-y-3">
              {insights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}