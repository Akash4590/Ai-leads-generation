const trustedLogos = [
  "Google",
  "Stripe",
  "Notion",
  "Slack",
  "HubSpot",
  "Webflow",
  "Airtable",
  "Pipedrive",
];

function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 py-14">
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-10 text-center text-sm font-medium tracking-[0.25em] uppercase text-zinc-500">
          Trusted by{" "}
          <span className="text-purple-400">2,000+</span> growth teams worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {trustedLogos.map((logo) => (
            <div
              key={logo}
              className="cursor-pointer text-xl font-semibold text-zinc-600 transition-all duration-300 hover:scale-105 hover:text-white"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;