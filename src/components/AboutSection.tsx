import { ArrowRight, Download } from "lucide-react";
import { waLinkFor } from "@/lib/whatsapp";

export function AboutSection({
  name,
  role,
  description,
  cvHref = "/cv-erickson.pdf",
}: {
  name: string;
  role?: string;
  description: string;
  cvHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md">
      <div>
        <div className="font-display text-lg font-bold">{name}</div>
        {role && <div className="mt-1 text-sm text-foreground/60">{role}</div>}
      </div>

      <p className="mt-4 text-sm text-foreground/70">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={cvHref}
          download
          className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-4 py-2 text-sm font-medium transition-all hover:bg-white/5"
        >
          <Download size={16} /> Descargar CV
        </a>

        <a
          href={waLinkFor("about")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105"
        >
          Contactar
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default AboutSection;
