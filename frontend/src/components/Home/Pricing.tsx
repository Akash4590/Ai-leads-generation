import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals",
    features: ["1,000 Credits / month", "Basic AI Features", "Email Support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "Perfect for small teams",
    features: [
      "5,000 Credits / month",
      "All AI Features",
      "Priority Support",
      "CRM Access",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$149",
    description: "Perfect for growing teams",
    features: [
      "15,000 Credits / month",
      "All AI Features",
      "Priority Support",
      "CRM Access",
      "Team Members",
    ],
    popular: false,
  },
  {
    name: "Agency",
    price: "$299",
    description: "Perfect for agencies",
    features: [
      "Unlimited Credits",
      "All AI Features",
      "Priority Support",
      "CRM Access",
      "Team Members",
      "White-label (Coming Soon)",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-purple-400">
          Pricing
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Simple, transparent pricing
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-5">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 ${
                plan.popular
                  ? "border-purple-500 bg-purple-500/5"
                  : "border-white/10 bg-[#111827]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-4 text-3xl font-bold text-white">
                {plan.price}
                <span className="text-base font-normal text-gray-400">
                  /month
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-gray-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-purple-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-medium transition ${
                  plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-500"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}

          <div className="flex flex-col rounded-xl border border-white/10 bg-[#111827] p-6">
            <h3 className="text-lg font-semibold text-white">
              Not sure yet?
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Start with our 14-day free trial.
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                Full access to all features
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                No credit card required
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-purple-400" />
                Cancel anytime
              </li>
            </ul>

            <a
              href="#"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-4 flex h-16 items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/5 text-xs text-gray-500">
              Rocket Illustration Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;