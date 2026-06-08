import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Catálogos Digitales para Marketing y Redes Sociales",
  description:
    "Catálogos digitales profesionales para mostrar tus productos o servicios en redes, email y WhatsApp. Aumentá tus ventas con mejor presentación.",
  alternates: { canonical: "/servicios/catalogos-digitales" },
};

const bullets = [
  "Diseño visual atractivo y compartible",
  "Fotos de productos con optimización",
  "Descripciones persuasivas y SEO-friendly",
  "Categorías para organizar tu oferta",
  "Botón directo a WhatsApp en cada producto",
  "Fácil de actualizar y mantener",
];

const paraQuien = [
  "Negocios que venden por Instagram y WhatsApp",
  "Marcas que quieren profesionalizar su catálogo",
  "Distribuidores y mayoristas con líneas de productos",
  "Negocios que quieren captar leads desde sus redes",
];

const faqs = [
  {
    q: "¿En qué se diferencia de una tienda online?",
    a: "El catálogo es más simple: muestra productos y lleva al cliente a WhatsApp para cerrar la venta. No tiene carrito ni pagos. Es ideal si querés mantener la atención personalizada.",
  },
  {
    q: "¿Puedo compartirlo en redes?",
    a: "Sí. Cada producto tiene su link único, perfecto para Instagram, Facebook, TikTok, email o estado de WhatsApp.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Entre 5 y 10 días, dependiendo de la cantidad de productos y categorías.",
  },
];

export default function CatalogosDigitalesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICIO · CATÁLOGOS DIGITALES"
        title="Mostrá tus productos de forma que vendan solos."
        subtitle="Catálogos digitales profesionales para tus redes, email y WhatsApp. Más clics, más consultas, más ventas."
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
                  <TrendingUp size={16} className="mt-0.5 shrink-0 text-primary" />
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
            ¿Listo para un catálogo que venda?
          </h2>
          <p className="mb-6 text-sm text-foreground/70">
            Cotización sin compromiso en menos de 1 hora hábil.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLinkFor("services")}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-section="services-catalogos"
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
