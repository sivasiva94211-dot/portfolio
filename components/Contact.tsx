"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { contactMethods } from "@/data/portfolio";

const icons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  linkedin: Linkedin,
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3 justify-center flex">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Let&rsquo;s work together
          </h2>
          <p className="text-ink-muted max-w-md mx-auto">
            Open to internship and fresher opportunities in full stack
            development. Reach out any way that works for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactMethods.map((method, i) => {
            const Icon = icons[method.type];
            const isLink = Boolean(method.href);
            const external = method.type === "linkedin";

            const content = (
              <>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-border">
                  <Icon size={18} className="text-primary-light" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-ink-muted mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-white font-medium truncate">
                    {method.value}
                  </p>
                </div>
                {isLink && (
                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-ink-muted"
                  />
                )}
              </>
            );

            const className =
              "glass-panel glass-panel-hover p-5 flex items-center gap-4";

            return (
              <motion.div
                key={method.type}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {isLink ? (
                  <a
                    href={method.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
