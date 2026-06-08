import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, getPublishedProjects } from "@/lib/data";
import { waLinkFor } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: `${project.title} — Caso de estudio`,
    description: project.summary,
    alternates: { canonical: `/portafolio/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otros = getPublishedProjects().filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <PageShell>
      <article className="px-6 pt-20 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/portafolio"
            className="mb-6 inline-flex items-center gap-1 font-mono text-xs text-foreground/50 hover:text-primary"
          >
            ← Volver al portafolio
          </Link>

          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-glass-border bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="mb-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mb-8 max-w-2xl text-pretty text-base text-foreground/70 md:text-lg">
            {project.summary}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-12 inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:border-primary/50"
            >
              Visitar sitio en vivo <ExternalLink size={14} />
            </a>
          )}

          {project.coverUrl && (
            <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-3xl border border-glass-border bg-white/5">
              <Image
                src={project.coverUrl}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                quality={90}
                priority
                className="object-contain p-6"
              />
            </div>
          )}

          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 font-display text-2xl font-bold">El proyecto</h2>
              <p className="leading-relaxed text-foreground/80">{project.content}</p>
            </div>
            <aside className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md">
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-primary">
                Cliente
              </h3>
              <p className="mb-6 text-sm font-medium">{project.client}</p>

              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-primary">
                Tipo
              </h3>
              <ul className="mb-6 space-y-1.5 text-sm text-foreground/70">
                {project.tags.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-primary" /> {t}
                  </li>
                ))}
              </ul>

              <a
                href={waLinkFor("portfolio")}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-section={`portfolio-${project.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_30px_oklch(0.85_0.22_165/0.5)] transition-transform hover:scale-105"
              >
                <MessageCircle size={16} />
                Quiero algo similar
              </a>
            </aside>
          </div>
        </div>
      </article>

      {otros.length > 0 && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-display text-2xl font-bold">Otros proyectos</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otros.map((p) => (
                <Link
                  key={p.id}
                  href={`/portafolio/${p.slug}`}
                  className="group rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all hover:border-primary/50"
                >
                  <h3 className="mb-2 font-display text-lg font-bold">
                    {p.title}
                    <ArrowRight
                      size={14}
                      className="ml-2 inline-block align-middle text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="text-sm text-foreground/65">{p.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
