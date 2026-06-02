import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { waLink } from "@/lib/whatsapp";
import {
  ArrowRight,
  Code2,
  Smartphone,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Star,
  Clock,
  Globe,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";


const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    desc: "paginas de una sola vista diseñadas para convertir visitantes en clientes potenciales.",
    bullets: ["Captar clientes", "Promocionar ofertas", "Campañas de marketing", "llevar al cliente al whatsapp"],
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    desc: "E-commerce profesional con pasarela de pagos, webs para vender productos por internet.",
    bullets: ["Métodos de pago", "Catálogo ilimitado", "Gestion de pedidos", "Carrito de compras"],
  },
  {
    icon: Code2,
    title: "Paginas Corporativas",
    desc: "Webs mas fromales para empresas que necesitan presencia institucional, que deseen proyectar mayor seriedad",
    bullets: ["Servicios detallados", "Equipo de trabajo", "Proyectos realizados", "formulario de contacto"],
  },
  {
    icon: Smartphone,
    title: "Pagina de Reservas",
    desc: "Perfecta para negocios que trabajen con agendas o atencion programada",
    bullets: ["Servicios", "Horarios", "Reservas", "Calendarios"],
  },
  {
    icon: TrendingUp,
    title: "Marketing (Catalagos digitales)",
    desc: "Muestra tus productos o servicios de forma atractiva para captar clientes a través de redes sociales, email o whatsapp",
    bullets: ["Fotos", "Descripciones", "Categorías", "Compartir en redes"],
  },
  {
    icon: Layers,
    title: "Portafolio Webs",
    desc: "Ideal para creativos, diseñadores, fotógrafos o cualquier profesional que quiera mostrar su trabajo de forma visual y atractiva",
    bullets: ["Informacion Personal", "Proyectos", "Habilidades", "Contacto"],
  }
];

/**
 * Estadísticas de la empresa
 */
const stats = [
  { v: "+50", l: "Proyectos entregados" },
  { v: "98%", l: "Clientes satisfechos" },
  { v: "7 días", l: "Entrega mínima" },
  { v: "24/7", l: "Soporte por WhatsApp" },
];

/**
 * Pasos del proceso de trabajo
 */
const processSteps = [
  {
    icon: MessageCircle,
    title: "Hablamos",
    desc: "Cuéntanos tu idea por WhatsApp. Cotización gratis en 24h.",
  },
  {
    icon: Layers,
    title: "Diseñamos",
    desc: "Propuesta visual y prototipo aprobado antes de programar.",
  },
  {
    icon: Zap,
    title: "Desarrollamos",
    desc: "Sprints semanales con demos en vivo. Sin sorpresas.",
  },
  {
    icon: Rocket,
    title: "Lanzamos",
    desc: "Deploy, capacitación y soporte post-lanzamiento incluido.",
  },
];

/**
 * Testimonios de clientes
 */
const testimonials = [
  {
    name: "María González",
    text: "NextWeb transformó nuestra tienda online. En 3 meses duplicamos las ventas. Equipo súper profesional.",
  },
  {
    name: "Carlos Méndez",
    text: "Por fin un equipo que cumple plazos. La plataforma quedó impecable y el soporte es 10/10.",
  },
  {
    name: "Laura Rivas",
    text: "Nuestra app móvil superó las 10,000 descargas el primer mes. Recomendados 100%.",
  },
];

/**
 * Preguntas frecuentes (FAQ)
 */
const faqs = [
  {
    q: "¿Cuánto tarda mi proyecto?",
    a: "Una landing page entre 5 y 10 días. Un e-commerce entre 2 y 3 semanas. Software custom según alcance, lo cotizamos contigo.",
  },
  {
    q: "¿Qué incluye el precio?",
    a: "Diseño, desarrollo, deploy, dominio configurado, capacitación y soporte. Sin costos ocultos.",
  },
  {
    q: "¿De donde trabajan?",
    a: "Trabajamos 100% remoto desde Venezuela con clientes de EE.UU. y Europa. Reuniones por Zoom o google meet, y comunicación diaria por WhatsApp.",
  },
  
];

/**
 * ========================================
 * COMPONENTE PRINCIPAL
 * ========================================
 * Página de inicio - Hero con todos los servicios
 */
export default function HomePage() {
  return (
    <PageShell>
      {/* =====================
          SECCIÓN HERO
          =====================
          Título principal y llamada a la acción
      */}
      <section className="px-6 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl text-center">
          {/* Badge de marca */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-primary">
              AGENCIA DE DESARROLLO PREMIUM
            </span>
          </div>

          {/* Título principal */}
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tighter text-balance md:text-7xl lg:text-8xl">
            Páginas web y software
            <br />
            <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              que generan clientes.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base text-foreground/70 md:text-lg">
            Diseñamos y desarrollamos sitios web modernos, tiendas online y software a
            medida para empresas que quieren crecer en serio. Cotización gratis en 24
            horas.
          </p>

          {/* Botones de CTA (Call to Action) */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-7 py-4 font-bold text-primary-foreground shadow-[0_0_40px_oklch(0.85_0.22_165/0.5)] transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              Cotizar por WhatsApp
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-glass-border bg-glass px-7 py-4 font-bold backdrop-blur-md transition-all hover:bg-white/5"
            >
              Ver servicios
            </a>
          </div>

          {/* Badges de confianza */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-foreground/50">
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-primary" /> Contrato
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-primary" /> Entregas en sprints
            </span>
            <span className="flex items-center gap-2">
              <Star size={14} className="text-primary" /> +50 clientes felices
            </span>
          </div>
        </div>
      </section>

      <section className="relative border-y border-glass-border bg-white/2 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="mb-1 font-display text-4xl font-extrabold text-primary md:text-5xl">
                {s.v}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 block font-mono text-xs text-primary">SERVICIOS</span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Todo lo que tu negocio necesita
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-4 text-foreground/60">
              Desde tu primera landing page hasta plataformas empresariales completas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-glass-border bg-glass p-7 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.85_0.22_165/0.2)]"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-primary">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
                  <ul className="space-y-1.5 font-mono text-xs text-foreground/50">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================
          SECCIÓN PROCESO
          =====================
          Cómo trabajamos - pasos del proceso
      */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 block font-mono text-xs text-primary">CÓMO TRABAJAMOS</span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Simple. Rápido. Transparente.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="relative rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md"
                >
                  <span className="absolute right-4 top-4 font-mono text-xs text-foreground/30">
                    0{i + 1}
                  </span>
                  <Icon size={22} className="mb-4 text-primary" />
                  <h3 className="mb-2 font-display text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-foreground/60">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================
          SECCIÓN PORTFOLIO
          =====================
          Proyectos realizados
      */}
      <section id="portfolio" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="mb-4 block font-mono text-xs text-primary">PORTFOLIO</span>
              <h2 className="font-display text-4xl font-extrabold tracking-tight">
                Proyectos que ya están generando resultados.
              </h2>
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="group">
              <a href="https://sixtenvenezuela.com/" target="_blank" rel="noopener noreferrer">
                <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-3xl border border-glass-border bg-white/5 transition-all group-hover:border-primary/40 flex items-center justify-center">
                  <Image
                    src="/sixtenvenezuela.png"
                    alt="Sixten Venezuela"
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </a>
              <span className="font-mono text-[10px] tracking-widest text-primary">E-COMMERCE</span>
              <h3 className="mb-2 mt-2 font-display text-2xl font-bold">
                <a href="https://sixtenvenezuela.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sixten Venezuela</a>
              </h3>
              <p className="text-sm text-foreground/60">
                Tienda online especializada en relojería, con catálogo optimizado, filtros avanzados y flujo de compra integrado con pasarelas locales.
              </p>
            </div>

            <div className="group">
              <a href="https://relojesvzla.com/" target="_blank" rel="noopener noreferrer">
                <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-3xl border border-glass-border bg-white/5 transition-all group-hover:border-primary/40 flex items-center justify-center">
                  <Image
                    src="/relojesvenezuela.png"
                    alt="Relojes Vzla"
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </a>
              <span className="font-mono text-[10px] tracking-widest text-primary">E-COMMERCE</span>
              <h3 className="mb-2 mt-2 font-display text-2xl font-bold">
                <a href="https://relojesvzla.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Relojes Vzla</a>
              </h3>
              <p className="text-sm text-foreground/60">
                E-commerce de relojes con enfoque en conversión: categorías curadas, experiencia móvil optimizada y procesos de pago simplificados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          SECCIÓN TESTIMONIOS
          =====================
          Opiniones de clientes
      */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 block font-mono text-xs text-primary">TESTIMONIOS</span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-glass-border bg-glass p-7 backdrop-blur-md"
              >
                <div className="mb-4 flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-display font-bold">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          SECCIÓN FAQ
          =====================
          Preguntas frecuentes
      */}
      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <span className="mb-4 block font-mono text-xs text-primary">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Lo que sueles preguntarnos
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md open:border-primary/40"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-bold">
                  {f.q}
                  <Sparkles
                    size={16}
                    className="text-primary transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm text-foreground/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          SECCIÓN CTA FINAL
          =====================
          Llamada a la acción final
      */}
      <section id="contacto" className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-primary/30 bg-linear-to-br from-primary/15 via-accent/10 to-secondary/15 p-10 text-center backdrop-blur-md md:p-20">
          {/* Efectos decorativos de fondo */}
          <div className="absolute -bottom-20 -right-20 size-80 rounded-full bg-primary/30 blur-[100px]" />
          <div className="absolute -top-20 -left-20 size-80 rounded-full bg-secondary/30 blur-[100px]" />

          <div className="relative">
            <h2 className="mb-6 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              ¿Listo para hacer crecer
              <br />
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                tu negocio online?
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-pretty text-base text-foreground/70 md:text-lg">
              Te respondemos en menos de 1 hora hábil. Sin compromiso, sin spam.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-8 py-4 font-bold text-primary-foreground shadow-[0_0_40px_oklch(0.85_0.22_165/0.5)] transition-transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Escribinos por WhatsApp ahora
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}


