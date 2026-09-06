"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Puzzle,
  Users,
  Clock,
  Lightbulb,
} from "lucide-react";
import { professionalSkills } from "@/data/portfolio";

const icons: Record<string, React.ElementType> = {
  "Communication Skills": MessageSquare,
  "Problem Solving": Puzzle,
  "Team Collaboration": Users,
  "Time Management": Clock,
  "Critical Thinking": Lightbulb,
};

export default function ProfessionalSkills() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Beyond code</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            How I work with others
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionalSkills.map((skill, i) => {
            const Icon = icons[skill.name] ?? Lightbulb;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-panel glass-panel-hover p-6 flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-border">
                  <Icon size={19} className="text-primary-light" />
                </div>
                <span className="font-medium text-white">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
