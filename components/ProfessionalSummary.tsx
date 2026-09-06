"use client";

import { motion } from "framer-motion";
import { professionalSummary } from "@/data/portfolio";

export default function ProfessionalSummary() {
  return (
    <section id="summary" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label text-center"
        >
          Professional Summary
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 glass-panel relative overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
          <div className="relative">
            <p className="text-lg sm:text-xl text-ink leading-relaxed">
              {professionalSummary.summary}
            </p>
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="text-base text-ink-muted leading-relaxed">
              {professionalSummary.direction}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
