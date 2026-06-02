import type { ReactNode } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* Fondo decorativo con animación Aurora */}
      <AuroraBackground />

      {/* Encabezado de navegación */}
      <SiteHeader />

      {/* Contenido principal - z-10 para estar sobre el fondo */}
      <main className="relative z-10">{children}</main>

      {/* Pie de página */}
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="px-6 pb-12 pt-24 md:pt-32">
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow: Texto pequeño decorativo encima del título */}
        {eyebrow && (
          <span className="mb-4 block font-mono text-xs tracking-widest text-primary">
            {eyebrow}
          </span>
        )}

        {/* Título principal */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          {title}
        </h1>

        {/* Subtítulo opcional */}
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-foreground/60 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}