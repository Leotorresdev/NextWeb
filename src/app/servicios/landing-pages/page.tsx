import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Globe } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Landing Pages que convierten",
  description:
    "Diseño y desarrollo de landing pages optimizadas para conversión. Captá clientes, promociones y campañas de marketing con páginas que llevan al usuario a WhatsApp.",
  alternates: { canonical: "/servicios/landing-pages" },
};

const bullets = [
  "Diseño enfocado en conversión",
  "Carga ultra rápida (menos de 1 segundo)",
  "Optimización SEO on-page",
  "Integración con WhatsApp y formularios",
  "Pixel de Meta y Analytics listo",
  "Versión mobile-first",
];

const paraQuien = [
  "Emprendedores que lanzan un producto o servicio nuevo",
  "Negocios que quieren captar leads desde una campaña de Meta o Google Ads",
  "Profesionales que necesitan una página de aterrizaje para una promoción",
  "Negocios que quieren reemplazar su antiguo link de bio de Instagram",
];

const faqs = [
  {
    q: "¿Cuánto tarda una landing page?",
    a: "Entre 5 y 10 días hábiles, incluyendo revisión y capacitación para que la puedas editar vos mismo.",
  },
  {
    q: "¿Puedo editarla yo después?",
    a: "Sí. Te entregamos la landing en un panel simple donde podés cambiar textos, imágenes y precios sin tocar código.",
  },
  {
    q: "¿Qué incluye el precio?",
    a: "Diseño, desarrollo, deploy, dominio, configuración de Analytics, capacitación y 30 días de soporte post-entrega.",
  },
];

export default function LandingPagesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICIO · LANDING PAGES"
        title="Páginas de aterrizaje que convierten visitas en clientes."
        subtitle="Diseñamos landings pensadas para una sola acción: que el visitante te escriba por WhatsApp, llene un formulario o agende una llamada."
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
                  <Globe size={16} className="mt-0.5 shrink-0 text-primary" />
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
            ¿Listo para tu próxima landing?
          </h2>
          <p className="mb-6 text-sm text-foreground/70">
            Te respondemos en menos de 1 hora hábil con una cotización sin compromiso.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLinkFor("services")}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-section="services-landing-pages"
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
