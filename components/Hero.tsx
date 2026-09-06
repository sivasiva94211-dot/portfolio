"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, FileDown } from "lucide-react";
import { personal } from "@/data/portfolio";

const codeSymbols = ["</>", "{ }", "( )", "=>", "#!/", "[ ]"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_75%)]" />

      {/* Floating gradient orbs */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-[110px] animate-float" />
      <div className="absolute top-1/3 -right-16 h-96 w-96 rounded-full bg-secondary/20 blur-[130px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[110px] animate-float" />

      {/* Floating code symbols */}
      <div aria-hidden="true" className="hidden md:block">
        {codeSymbols.map((symbol, i) => (
          <span
            key={symbol}
            className="absolute font-mono text-ink-faint/30 select-none animate-float-slow"
            style={{
              top: `${15 + i * 13}%`,
              left: i % 2 === 0 ? `${6 + i * 3}%` : undefined,
              right: i % 2 !== 0 ? `${6 + i * 2}%` : undefined,
              fontSize: `${18 + (i % 3) * 8}px`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
          >
            {personal.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text"
          >
            {personal.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed"
          >
            {personal.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {personal.altTitles.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-ink-muted bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-6 flex items-center gap-4"
          >
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-white transition-colors"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <span className="h-1 w-1 rounded-full bg-ink-faint" />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
