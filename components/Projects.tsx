"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Something I&rsquo;ve built
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover p-8 md:p-10 relative overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
                }}
              />

              <div className="relative grid md:grid-cols-[auto_1fr] gap-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
                  <ShoppingCart size={24} className="text-accent-light" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-secondary-light mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-ink-muted leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <p className="text-ink-muted/80 text-sm leading-relaxed mb-6">
                    {project.context}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-ink"
                      >
                        <Check size={14} className="text-accent-light shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
