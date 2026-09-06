"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Palette,
  Coffee,
  Cpu,
  Braces,
  Atom,
  Database,
  Github,
  LucideIcon,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Python: Code2,
  HTML: FileCode,
  CSS: Palette,
  Java: Coffee,
  "C++": Cpu,
  JavaScript: Braces,
  React: Atom,
  GitHub: Github,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="section-label">Skills</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Technical Toolkit
          </h2>
          <p className="mt-4 text-ink-muted">
            The languages, tools, and technologies I work with.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.name] ?? Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ scale: 1.04 }}
                className="group relative glass-panel p-6 flex flex-col items-center gap-3 text-center cursor-default transition-colors duration-300 hover:border-accent/50"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
                <div className="relative h-12 w-12 rounded-xl bg-white/[0.03] border border-border flex items-center justify-center text-ink-muted group-hover:text-accent-light group-hover:-translate-y-0.5 transition-all duration-300">
                  <Icon size={22} />
                </div>
                <span className="relative text-sm font-medium text-ink">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
