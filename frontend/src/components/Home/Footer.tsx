import {
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Zap, ArrowRight } from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: ["Features", "How It Works", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Templates", "Help Center"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact Us", "Privacy Policy"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  },
];

const socialLinks = [
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaLinkedin, label: "LinkedIn" },
  { icon: FaYoutube, label: "YouTube" },
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-semibold text-white">
              <Zap className="h-6 w-6 fill-purple-500 text-purple-500" />
              <span className="text-lg">AI Leads</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              AI-powered platform to find, audit and convert high-quality
              leads faster than ever.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white">Stay updated</h4>
            <p className="mt-4 text-sm text-gray-400">
              Get tips and updates in your inbox.
            </p>
            <form className="mt-4 flex items-center overflow-hidden rounded-lg border border-white/10">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-full items-center justify-center bg-purple-600 px-3 py-2 transition hover:bg-purple-500"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </form>
          </div>
        </div>

        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          © 2024 AI Leads. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;