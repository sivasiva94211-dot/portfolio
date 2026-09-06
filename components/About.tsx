"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Layers, Sparkles } from "lucide-react";
import { aboutHighlights, personal } from "@/data/portfolio";

const icons = [GraduationCap, Code2, Layers, Sparkles];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Who I am
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed text-lg">
            I&apos;m {personal.name}, a BCA student at M.G.R College, Hosur,
            building a foundation in Python and full stack web development.
            I care about writing clean, working code and I&apos;m always
            learning — whether that&apos;s a new language, a framework, or a
            better way to structure a project.
          </p>
          <p className="mt-4 text-ink-muted leading-relaxed text-lg">
            I&apos;m currently focused on connecting front-end interfaces
            with databases and server logic, with the goal of growing into a
            capable full stack developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {aboutHighlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel glass-panel-hover p-5"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-accent-light">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-white text-sm">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
