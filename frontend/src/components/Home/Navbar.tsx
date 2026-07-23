import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050714]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <Zap className="h-6 w-6 fill-purple-500 text-purple-500" />
          <span className="text-lg">AI Leads</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <button className="flex items-center gap-1 transition hover:text-white">
            Resources
            <ChevronDown className="h-4 w-4" />
          </button>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">

          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer text-sm text-gray-300 transition hover:text-white"
          >
            Log in
          </button>

          <button
            onClick={() => navigate("/login")}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#050714] px-6 py-5">

          <nav className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <button className="flex items-center gap-2 text-gray-300 transition hover:text-white">
              Resources
              <ChevronDown className="h-4 w-4" />
            </button>

            <hr className="border-white/10" />

            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
              className="cursor-pointer text-left text-gray-300 transition hover:text-white"
            >
              Log in
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-medium text-white transition hover:bg-purple-500"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;