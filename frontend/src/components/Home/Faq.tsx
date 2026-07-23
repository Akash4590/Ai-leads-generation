import { useState } from "react";
import {
  Sparkles,
  Grid2x2,
  ShieldCheck,
  DollarSign,
  Puzzle,
  Minus,
  Plus,
  Search,
  BarChart3,
  Mail,
  CheckCircle2,
  MessageCircle,
  Headphones,
  ArrowRight,
  ChevronRight,
  Rocket,
} from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "General",
    description: "Common questions",
    color: "text-purple-400 bg-purple-500/10",
  },
  {
    icon: Grid2x2,
    title: "Features",
    description: "Platform capabilities",
    color: "text-blue-400 bg-blue-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    description: "Data protection",
    color: "text-emerald-400 bg-emerald-500/10",
  },
  {
    icon: DollarSign,
    title: "Pricing & Plans",
    description: "Billing & subscriptions",
    color: "text-yellow-400 bg-yellow-500/10",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description: "Third-party apps",
    color: "text-blue-400 bg-blue-500/10",
  },
];

const highlights = [
  { icon: Search, title: "Find Leads", description: "Discover verified prospects" },
  { icon: BarChart3, title: "AI Audit", description: "Analyze websites instantly" },
  { icon: Mail, title: "Personalize", description: "Generate emails that convert" },
  { icon: CheckCircle2, title: "Close Deals", description: "Nurture & close more deals" },
];

const leftQuestions = [
  {
    q: "How accurate is the website audit?",
    a: "Our AI audit engine scores websites with over 95% accuracy by analyzing SEO, performance, accessibility, and best practices in real time.",
  },
  {
    q: "Can I export my leads?",
    a: "Yes, you can export your leads anytime in CSV or Excel format, or sync them directly with your favorite CRM.",
  },
  {
    q: "Does AI Leads offer a free trial?",
    a: "Yes, every plan comes with a 14-day free trial. No credit card is required to get started.",
  },
  {
    q: "What kind of leads can I find?",
    a: "You can discover verified B2B leads across industries, filtered by location, company size, and job title.",
  },
  {
    q: "How does the AI email generator work?",
    a: "Simply select a lead and our AI drafts a personalized, high-converting cold email based on their website and profile data.",
  },
];

const rightQuestions = [
  {
    q: "Is my data safe with AI Leads?",
    a: "Yes, all data is encrypted in transit and at rest, and we follow strict industry-standard security practices.",
  },
  {
    q: "What security measures do you follow?",
    a: "We use SOC 2 compliant infrastructure, regular audits, and role-based access controls to keep your data protected.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription anytime from your account settings with no cancellation fees.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and PayPal for subscription payments.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day money-back guarantee if you're not satisfied with the platform.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time directly from your dashboard.",
  },
  {
    q: "Do you integrate with CRM tools?",
    a: "Yes, AI Leads integrates natively with popular CRM tools like HubSpot, Pipedrive, and Salesforce.",
  },
  {
    q: "Which tools and platforms does AI Leads integrate with?",
    a: "We support integrations with Slack, Gmail, Zapier, HubSpot, Pipedrive, and many more via our API.",
  },
];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleLeft = (i: number) =>
    setOpenLeft((prev) => (prev === i ? null : i));
  const toggleRight = (i: number) =>
    setOpenRight((prev) => (prev === i ? null : i));

  return (
    <section className="bg-[#0a0a14] py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently Asked <span className="text-purple-400">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400">
            Everything you need to know about AI Leads and how it can
            transform your lead generation process.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map(({ icon: Icon, title, description, color }, i) => (
            <button
              key={title}
              onClick={() => setActiveCategory(i)}
              className={`flex flex-col items-center rounded-xl border p-5 text-center transition cursor-pointer ${
                activeCategory === i
                  ? "border-purple-500 bg-purple-500/5"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${color}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-1 text-xs text-gray-400">{description}</p>
              {activeCategory === i && (
                <span className="mt-3 h-1 w-8 rounded-full bg-purple-500" />
              )}
            </button>
          ))}
        </div>

        {/* Accordion columns */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div
              className={`rounded-xl border p-6 transition ${
                openLeft === -1
                  ? "border-purple-500 bg-purple-500/5"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <button
                onClick={() => toggleLeft(-1)}
                className="flex w-full items-start justify-between text-left cursor-pointer"
              >
                <h3 className="text-base font-semibold text-white">
                  What is AI Leads and how does it work?
                </h3>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition">
                  {openLeft === -1 ? (
                    <Minus className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>

              {openLeft === -1 && (
                <div className="mt-3">
                  <p className="text-sm text-gray-400">
                    AI Leads is an AI-powered platform that helps you find,
                    audit, and convert high-quality leads. It analyzes
                    websites, generates insights, creates personalized
                    emails, and helps you close more deals — all in one
                    place.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {highlights.map(({ icon: Icon, title, description }) => (
                      <div key={title} className="text-center">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-2 text-xs font-semibold text-white">
                          {title}
                        </p>
                        <p className="mt-1 text-[11px] text-gray-400">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {leftQuestions.map(({ q, a }, i) => (
              <div
                key={q}
                className={`rounded-xl border p-5 transition ${
                  openLeft === i
                    ? "border-purple-500 bg-purple-500/5"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <button
                  onClick={() => toggleLeft(i)}
                  className="flex w-full items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">{q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition">
                    {openLeft === i ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                {openLeft === i && (
                  <p className="mt-3 text-sm text-gray-400">{a}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {rightQuestions.map(({ q, a }, i) => (
              <div
                key={q}
                className={`rounded-xl border p-5 transition ${
                  openRight === i
                    ? "border-purple-500 bg-purple-500/5"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <button
                  onClick={() => toggleRight(i)}
                  className="flex w-full items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-sm font-medium text-white">{q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition">
                    {openRight === i ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                {openRight === i && (
                  <p className="mt-3 text-sm text-gray-400">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="shrink-0">
              <h3 className="text-xl font-bold text-white">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Our support team is here to help you 24/7.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:mr-24">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-500"
              >
                <Mail className="h-4 w-4" />
                <span className="flex flex-col text-left">
                  Email Us
                  <span className="text-xs font-normal text-purple-100">
                    support@aileads.com
                  </span>
                </span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="flex flex-col text-left">
                  Live Chat
                  <span className="text-xs font-normal text-gray-400">
                    Available 24/7
                  </span>
                </span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-6 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-purple-500/30 blur-3xl lg:block" />
          <Headphones className="pointer-events-none absolute right-6 top-1/2 hidden h-20 w-20 -translate-y-1/2 text-purple-400 lg:block" />
        </div>

        {/* CTA banner */}
        <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-blue-600">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-medium text-purple-300">
                Ready to grow?
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">
                Ready to find and convert more leads?
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Start your 14-day free trial today. No credit card required.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-500"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;