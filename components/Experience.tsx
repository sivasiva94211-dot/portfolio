"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Where I&rsquo;ve been building
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-[19px]" />

          <ul className="space-y-10">
            {experience.map((item, i) => (
              <motion.li
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border md:h-10 md:w-10">
                  <Briefcase size={16} className="text-accent-light" />
                </span>

                <div className="glass-panel p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted mb-4">
                    <span className="text-secondary-light font-medium">
                      {item.company}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.responsibilities.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm text-ink-muted leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-light" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
