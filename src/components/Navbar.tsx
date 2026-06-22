"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, Radio, Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { name: "Platform", href: "#ecosystem" },
    { name: "Products", href: "#products" },
    { name: "Technology", href: "#technology" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out py-4 ${
        scrolled
          ? "bg-forest-dark/75 backdrop-blur-md border-border-subtle shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/Company_Logo.png"
                alt="AxiomGreen Solutions Pvt Ltd"
                className="h-15 w-auto object-contain brightness-100 dark:brightness-110 relative -top-0.5"
              />
            </Link>
          </div>

          {/* Center Navigation links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-text-muted hover:text-emerald font-display tracking-wider transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right badges, Theme Switcher & Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Telemetry Node Badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-[10px] font-mono text-emerald">
              <Radio className="h-3 w-3 animate-pulse" />
              <span>LIVE CORE FEED</span>
            </div>

            {/* Patent Badge */}
            <div className="hidden xl:block text-[10px] font-mono text-text-muted bg-forest-medium/40 dark:bg-white/5 border border-border-subtle px-2.5 py-1 rounded">
              IP: PATENT APPLICATIONS FILED
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-transparent hover:bg-forest-medium/40 border border-border-subtle text-text-main hover:text-emerald transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="#contact"
              className="text-xs font-mono tracking-wider font-semibold bg-emerald hover:bg-emerald/80 text-forest-dark px-4 py-2 rounded transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald/50"
            >
              DEPLOY INFRASTRUCTURE
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-transparent hover:bg-forest-medium/40 border border-border-subtle text-text-main hover:text-emerald"
              aria-label="Toggle Theme Mobile"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-muted hover:text-emerald p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-forest-dark/95 backdrop-blur-lg border-b border-border-subtle px-4 pt-4 pb-6 space-y-3 absolute top-full left-0 w-full animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-text-main hover:text-emerald font-display py-2 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>STATUS:</span>
              <span className="text-emerald flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-ping" />
                ACTIVE NETWORK
              </span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-mono font-semibold bg-emerald text-forest-dark py-2.5 rounded border border-emerald/30"
            >
              DEPLOY INFRASTRUCTURE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
