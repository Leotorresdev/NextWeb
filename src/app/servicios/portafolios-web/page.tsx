import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Layers } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Portafolios Web para Creativos y Profesionales",
  description:
    "Portafolios web diseñados para creativos, diseñadores, fotógrafos y profesionales independientes. Mostrá tu trabajo de forma visual y atractiva.",
  alternates: { canonical: "/servicios/portafolios-web" },
};

const bullets = [
  "Diseño visual impactante para mostrar tu trabajo",
  "Galería de proyectos con descripciones",
  "Sección de habilidades y servicios",
  "Información personal y profesional completa",
  "Formulario de contacto y link a redes",
  "Optimizado para aparecer en Google cuando te buscan",
];

const paraQuien = [
  "Diseñadores gráficos, ilustradores, artistas",
  "Fotógrafos y videógrafos",
  "Arquitectos, interioristas, modeladores 3D",
  "Desarrolladores, marketers, freelancers de cualquier rubro",
];

const faqs = [
  {
    q: "¿Puedo actualizar mis proyectos yo mismo?",
    a: "Sí. Te damos un panel simple para agregar proyectos, cambiar imágenes, textos y agregar nuevos trabajos a medida que los hagas.",
  },
  {
    q: "¿Cuánto tarda un portafolio web?",
    a: "Entre 5 y 10 días, dependiendo de la cantidad de proyectos y secciones que quieras incluir.",
  },
  {
    q: "¿Incluye dominio?",
    a: "Sí. Te ayudamos a elegir y configurar tu dominio personalizado (tunombre.com). El primer año está incluido en el proyecto.",
  },
];

export default function PortafoliosWebPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICIO · PORTAFOLIOS WEB"
        title="Tu trabajo, presentado como merece."
        subtitle="Portafolios web diseñados para creativos y profesionales que quieren destacar. Mostrá tus proyectos, habilidades y servicios de forma visual."
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
                  <Layers size={16} className="mt-0.5 shrink-0 text-primary" />
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
            ¿Listo para tu portafolio profesional?
          </h2>
          <p className="mb-6 text-sm text-foreground/70">
            Cotización sin compromiso en menos de 1 hora hábil.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLinkFor("services")}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-section="services-portafolios"
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
