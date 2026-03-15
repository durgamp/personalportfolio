"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Decision Log", id: "decision-log" },
  { label: "Photography", id: "photography" },
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const linkClass = `transition-colors font-medium text-sm hover:opacity-80 ${
    scrolled ? "text-gray-900 dark:text-white" : "text-white"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold font-poppins"
              style={{ backgroundColor: "#3F51B5" }}
            >
              DMP
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={linkClass}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                  : "hover:bg-white/10 text-white"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-gray-900 dark:text-white font-medium py-2 hover:text-indigo-500 transition-colors"
              style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
