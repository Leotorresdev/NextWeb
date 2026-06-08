import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Smartphone } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Páginas de Reservas y Agendamiento Online",
  description:
    "Sistemas de reservas online para negocios con agenda: médicos, dentistas, salones, abogados, consultores. Calendarios, disponibilidad y confirmación automática.",
  alternates: { canonical: "/servicios/paginas-de-reservas" },
};

const bullets = [
  "Calendario con disponibilidad en tiempo real",
  "Reserva online 24/7 sin llamadas",
  "Confirmación automática por email y WhatsApp",
  "Pago de seña o tarifa completa al reservar",
  "Panel para gestionar agenda y bloqueos",
  "Recordatorios automáticos para reducir no-shows",
];

const paraQuien = [
  "Consultorios médicos, dentales, estéticos",
  "Salones de belleza, barberías, spas",
  "Abogados, contadores, consultores",
  "Cualquier negocio que trabaje con cita previa",
];

const faqs = [
  {
    q: "¿Cómo funcionan las reservas?",
    a: "El cliente ve el calendario, elige día y hora disponible, completa sus datos y recibe la confirmación. Vos administrás los horarios desde un panel.",
  },
  {
    q: "¿Se puede cobrar al reservar?",
    a: "Sí. Podés configurar seña, pago completo o solo agendamiento sin pago. La integración va con Stripe, PayPal o métodos locales.",
  },
  {
    q: "¿Y si tengo varios profesionales o sucursales?",
    a: "Sí. El sistema soporta múltiples profesionales con sus propias agendas y múltiples sucursales si las necesitás.",
  },
];

export default function PaginasDeReservasPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICIO · PÁGINAS DE RESERVAS"
        title="Agenda llena, sin llamadas perdidas."
        subtitle="Sistema de reservas online 24/7. Tus clientes reservan desde el celular, vos administrás la agenda desde un panel simple."
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
                  <Smartphone size={16} className="mt-0.5 shrink-0 text-primary" />
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
            ¿Listo para automatizar tu agenda?
          </h2>
          <p className="mb-6 text-sm text-foreground/70">
            Cotización sin compromiso en menos de 1 hora hábil.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLinkFor("services")}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-section="services-reservas"
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
