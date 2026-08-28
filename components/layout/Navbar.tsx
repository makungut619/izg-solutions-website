"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BulldogLogo from "@/components/ui/BulldogLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/digital-cards", label: "Digital Cards" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-100">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="-my-4 md:-my-6">
            <span className="block md:hidden">
              <BulldogLogo size={60} />
            </span>
            <span className="hidden md:block">
              <BulldogLogo size={93} />
            </span>
          </div>
          <span className="text-xl font-bold text-surface-900 tracking-tight">
            IZG Solutions
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-surface-600 hover:text-primary-600 transition-colors"
                onClick={() =>
                  window.izg?.track("nav_click", {
                    item: link.label.toLowerCase().replace(/\s+/g, "_"),
                  })
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              onClick={() =>
                window.izg?.track("cta_click", {
                  button: "get_started",
                  page: window.location.pathname,
                })
              }
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-surface-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-surface-100 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-700 hover:text-primary-600 transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      window.izg?.track("nav_click", {
                        item: link.label.toLowerCase().replace(/\s+/g, "_"),
                      });
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-block font-medium bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  onClick={() => {
                    setMobileOpen(false);
                    window.izg?.track("cta_click", {
                      button: "get_started",
                      page: window.location.pathname,
                    });
                  }}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
