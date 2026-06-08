import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, ShoppingCart } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tiendas Online y E-commerce profesional",
  description:
    "Tiendas online con catálogo ilimitado, carrito de compras, métodos de pago locales e internacionales y gestión de pedidos. Vende por internet sin complicarte.",
  alternates: { canonical: "/servicios/tiendas-online" },
};

const bullets = [
  "Catálogo de productos ilimitado",
  "Carrito de compras y checkout optimizado",
  "Pagos con Pago Móvil, Zelle, Binance, Stripe, PayPal",
  "Gestión de pedidos y stock",
  "Filtros y búsqueda por categorías",
  "Diseño responsive optimizado para móvil",
];

const paraQuien = [
  "Negocios que ya venden por Instagram o WhatsApp y quieren profesionalizar",
  "Marcas con catálogo amplio de productos físicos",
  "Emprendedores que quieren lanzar su primera tienda online",
  "Tiendas físicas que necesitan un canal adicional de ventas",
];

const faqs = [
  {
    q: "¿Qué métodos de pago puedo integrar?",
    a: "Pago Móvil, transferencia bancaria, Zelle, Binance, PayPal, Stripe, Mercado Pago, Pago a Contraentrega y cualquier pasarela local de tu país.",
  },
  {
    q: "¿Cuánto tarda un e-commerce?",
    a: "Entre 2 y 3 semanas para un e-commerce estándar. Tienda más grande con muchos productos: lo cotizamos contigo según el alcance.",
  },
  {
    q: "¿Puedo gestionar los productos yo mismo?",
    a: "Sí. Te damos un panel de administración para agregar productos, fotos, precios, stock y gestionar pedidos sin tocar código.",
  },
];

export default function TiendasOnlinePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICIO · TIENDAS ONLINE"
        title="Tu tienda online profesional, lista para vender."
        subtitle="Desarrollamos e-commerce completos: catálogo, carrito, pagos, gestión de pedidos. Vende 24/7 sin dolores de cabeza."
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
                  <ShoppingCart size={16} className="mt-0.5 shrink-0 text-primary" />
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
            ¿Listo para vender online?
          </h2>
          <p className="mb-6 text-sm text-foreground/70">
            Te respondemos en menos de 1 hora hábil con una cotización sin compromiso.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLinkFor("services")}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-section="services-tiendas-online"
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
