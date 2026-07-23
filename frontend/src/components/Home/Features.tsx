import {
  Search,
  Globe,
  Mail,
  Kanban,
  BarChart3,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Search,
    color: "text-purple-400 bg-purple-500/10",
    title: "Lead Discovery",
    description:
      "Find high-quality leads using advanced filters, maps, and AI recommendations.",
  },
  {
    icon: Globe,
    color: "text-purple-400 bg-purple-500/10",
    title: "Website Audit",
    description:
      "AI analyzes websites and provides detailed SEO, performance & UX insights.",
  },
  {
    icon: Mail,
    color: "text-purple-400 bg-purple-500/10",
    title: "AI Email Generator",
    description:
      "Generate personalized, high-converting cold emails in seconds using AI.",
  },
  {
    icon: Kanban,
    color: "text-purple-400 bg-purple-500/10",
    title: "CRM Pipeline",
    description:
      "Manage leads efficiently with a drag-and-drop pipeline and smart stages.",
  },
  {
    icon: BarChart3,
    color: "text-purple-400 bg-purple-500/10",
    title: "Analytics Dashboard",
    description:
      "Track performance, conversion rates, and revenue with beautiful analytics.",
  },
  {
    icon: CheckSquare,
    color: "text-purple-400 bg-purple-500/10",
    title: "Tasks & Reminders",
    description:
      "Never miss a follow-up with smart tasks and automated reminders.",
  },
];

function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-purple-400">
          Features
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Everything you need to grow your business
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, color, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-[#111827] p-6"
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${color}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-400">{description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition hover:text-purple-300"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;