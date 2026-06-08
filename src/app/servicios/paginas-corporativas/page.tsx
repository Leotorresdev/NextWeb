import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Code2 } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Páginas Corporativas e Institucionales",
  description:
    "Webs formales para empresas que necesitan presencia institucional seria. Servicios detallados, equipo, proyectos, formulario de contacto y SEO corporativo.",
  alternates: { canonical: "/servicios/paginas-corporativas" },
};

const bullets = [
  "Diseño sobrio y profesional, alineado a tu marca",
  "Secciones para servicios, equipo, casos de éxito y blog",
  "Formulario de contacto con notificaciones por email",
  "Optimización SEO para aparecer en Google",
  "Multi-idioma si tu empresa opera en varios países",
  "Integración con CRM y herramientas internas",
];

const paraQuien = [
  "Empresas que necesitan presencia institucional formal",
  "Negocios B2B que generan leads calificados",
  "Despachos profesionales, constructoras, distribuidoras",
  "Marcas que quieren proyectar seriedad y confianza",
];

const faqs = [
  {
    q: "¿Cuánto tarda una web corporativa?",
    a: "Entre 2 y 4 semanas, dependiendo del número de páginas y de si necesitás integración con sistemas externos.",
  },
  {
    q: "¿Puedo agregar más páginas después?",
    a: "Sí. Te dejamos un panel de gestión de contenidos y, si necesitás algo más complejo, te cotizamos los cambios.",
  },
  {
    q: "¿Incluye SEO?",
    a: "Sí. SEO técnico on-page completo: títulos, meta, schema, sitemap, optimización de imágenes y estructura semántica.",
  },
];

export default function PaginasCorporativasPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICIO · PÁGINAS CORPORATIVAS"
        title="Tu empresa, con la presencia institucional que merece."
        subtitle="Webs formales que transmiten seriedad y confianza, con secciones para servicios, equipo, proyectos y contacto profesional."
      />

      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold">Qué incluye</h2>
            <ul className="space-y-3 text-sm text-foreground/80">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold">Para quién es</h2>
            <ul className="space-y-3 text-sm text-foreground/80">
              {paraQuien.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Code2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md open:border-primary/40"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-bold">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-foreground/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-linear-to-br from-primary/15 to-accent/10 p-8 text-center backdrop-blur-md md:p-12">
          <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
            ¿Listo para tu nueva web corporativa?
          </h2>
          <p className="mb-6 text-sm text-foreground/70">
            Cotización sin compromiso en menos de 1 hora hábil.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLinkFor("services")}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-section="services-corporativas"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3 font-bold text-primary-foreground shadow-[0_0_30px_oklch(0.85_0.22_165/0.5)] transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              Cotizar por WhatsApp
              <ArrowRight size={16} />
            </a>
            <Link
              href="/servicios"
              className="rounded-xl border border-glass-border bg-glass px-6 py-3 font-bold backdrop-blur-md transition-all hover:bg-white/5"
            >
              Ver otros servicios
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
