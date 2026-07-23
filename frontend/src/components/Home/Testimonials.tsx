import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  avatar1,
  avatar2,
  avatar3,
} from "../../assets/assets"; // Adjust the path if needed

const testimonials = [
  {
    quote:
      "AI Leads has completely transformed our lead generation process. The AI insights are incredible and the conversion rates have never been higher.",
    name: "Cody Fisher",
    role: "Head of Sales at Bright Solutions",
    avatar: avatar1,
  },
  {
    quote:
      "We increased our qualified leads by 300% in just 2 months. The website audit and email generator are game-changers!",
    name: "Leslie Alexander",
    role: "Growth Manager at TechNova",
    avatar: avatar2,
  },
  {
    quote:
      "Finally, a platform that combines everything we need to find, audit and convert leads. Highly recommended for every sales team!",
    name: "Darrell Steward",
    role: "CEO at QuantumSoft",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            Our Customers Love Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Trusted by sales teams worldwide
          </h2>
        </div>

        {/* Testimonials */}
        <div className="relative mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-[#161b33]"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm leading-7 text-gray-300">
                  "{t.quote}"
                </p>

                {/* User */}
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full border border-white/10 object-cover"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      {t.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 lg:flex"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 p-3 transition hover:bg-purple-500/20 lg:flex"
          >
            <ChevronRight className="h-5 w-5 text-purple-400" />
          </button>
        </div>

        {/* Mobile Dots */}
        <div className="mt-8 flex items-center justify-center gap-2 lg:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-purple-500"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}