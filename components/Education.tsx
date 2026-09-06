"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarClock } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            My academic path
          </h2>
        </motion.div>

        {education.map((item) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel glass-panel-hover p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-border">
              <GraduationCap size={26} className="text-secondary-light" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-1.5">
                {item.degree}
              </h3>
              <p className="text-ink-muted mb-4">{item.institution}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent-light" />
                  {item.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarClock size={14} className="text-accent-light" />
                  Expected graduation, {item.expectedGraduation}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
