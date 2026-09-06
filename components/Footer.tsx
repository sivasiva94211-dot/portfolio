import { Mail, Phone, Linkedin } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">{personal.name}</p>
          <p className="text-sm text-ink-muted">{personal.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Siva's LinkedIn profile in a new tab"
            className="p-2.5 rounded-full border border-border text-ink-muted hover:text-white hover:border-accent/50 transition-colors duration-200"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Siva"
            className="p-2.5 rounded-full border border-border text-ink-muted hover:text-white hover:border-accent/50 transition-colors duration-200"
          >
            <Mail size={16} />
          </a>
          <a
            href={`tel:+91${personal.phone}`}
            aria-label="Call Siva"
            className="p-2.5 rounded-full border border-border text-ink-muted hover:text-white hover:border-accent/50 transition-colors duration-200"
          >
            <Phone size={16} />
          </a>
        </div>

        <p className="text-xs text-ink-muted/70 text-center md:text-right">
          © 2026 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
