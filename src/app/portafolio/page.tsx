import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { getPublishedProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portafolio de proyectos",
  description:
    "Proyectos reales desarrollados por NextWeb: e-commerce, landings, páginas corporativas y software a medida. Casos de estudio con resultados.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  const projects = getPublishedProjects();

  return (
    <PageShell>
      <PageHeader
        eyebrow="PORTAFOLIO"
        title="Proyectos que están generando resultados."
        subtitle="Cada proyecto que entregamos tiene un caso de estudio detallado. Conocé el problema, la solución y el impacto en cada cliente."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="group">
              <Link
                href={`/portafolio/${p.slug}`}
                className="relative mb-5 block aspect-video w-full overflow-hidden rounded-3xl border border-glass-border bg-white/5 transition-all group-hover:border-primary/40"
              >
                {p.coverUrl ? (
                  <Image
                    src={p.coverUrl}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-foreground/40">
                    {p.title}
                  </div>
                )}
              </Link>
              <div className="mb-2 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-glass-border bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 font-display text-2xl font-bold">
                <Link href={`/portafolio/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mb-3 text-sm text-foreground/65">{p.summary}</p>
              <Link
                href={`/portafolio/${p.slug}`}
                className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
              >
                Ver caso de estudio <ArrowRight size={12} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
