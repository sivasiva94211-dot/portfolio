"use client";

import { motion } from "framer-motion";
import { languages } from "@/data/portfolio";

export default function Languages() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Languages</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Languages I speak
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="glass-panel glass-panel-hover px-5 py-3 flex items-center gap-3"
            >
              <span className="font-medium text-white">{lang.name}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="text-sm text-accent-light">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
