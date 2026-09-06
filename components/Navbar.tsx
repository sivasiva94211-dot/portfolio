"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, FileDown } from "lucide-react";
import { navItems, personal } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/70 backdrop-blur-xl border-b border-border shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold text-lg tracking-tight text-white"
        >
          Siva<span className="gradient-text">.V</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative text-sm transition-colors duration-200 ${
                  active === item.href
                    ? "text-white"
                    : "text-ink-muted hover:text-white"
                }`}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-primary-light to-accent-light"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Siva's LinkedIn profile in a new tab"
            className="p-2.5 rounded-full border border-border text-ink-muted hover:text-white hover:border-accent/50 transition-colors duration-200"
          >
            <Linkedin size={17} />
          </a>
          <a href={personal.resumeUrl} download className="btn-outline !px-5 !py-2.5 text-sm">
            <FileDown size={16} />
            Resume
          </a>
        </div>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-base/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base border-b border-border/60 ${
                      active === item.href ? "text-white" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="flex items-center gap-3 pt-4">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Siva's LinkedIn profile in a new tab"
                  className="p-2.5 rounded-full border border-border text-ink-muted"
                >
                  <Linkedin size={17} />
                </a>
                <a href={personal.resumeUrl} download className="btn-outline !px-5 !py-2.5 text-sm">
                  <FileDown size={16} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
