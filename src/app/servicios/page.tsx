import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, ShoppingCart, Code2, Smartphone, TrendingUp, Layers } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Servicios de desarrollo web y software",
  description:
    "Todos los servicios de NextWeb: landing pages, tiendas online, páginas corporativas, sistemas de reservas, catálogos digitales y portafolios web.",
  alternates: { canonical: "/servicios" },
};

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    slug: "landing-pages",
    desc: "Páginas de aterrizaje que convierten visitas en clientes. Ideales para campañas y promociones.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    slug: "tiendas-online",
    desc: "E-commerce profesional con pagos, catálogo y gestión de pedidos. Vende 24/7.",
  },
  {
    icon: Code2,
    title: "Páginas Corporativas",
    slug: "paginas-corporativas",
    desc: "Webs institucionales para empresas que proyectan seriedad y generan leads B2B.",
  },
  {
    icon: Smartphone,
    title: "Página de Reservas",
    slug: "paginas-de-reservas",
    desc: "Sistemas de reservas online para negocios con agenda: médicos, salones, abogados.",
  },
  {
    icon: TrendingUp,
    title: "Catálogos Digitales",
    slug: "catalogos-digitales",
    desc: "Muestra tus productos en redes, email y WhatsApp con catálogos que venden.",
  },
  {
    icon: Layers,
    title: "Portafolios Web",
    slug: "portafolios-web",
    desc: "Portafolios visuales para creativos, diseñadores, fotógrafos y profesionales.",
  },
];

export default function ServiciosPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="NUESTROS SERVICIOS"
        title="Todo lo que tu negocio necesita en un solo lugar."
        subtitle="Desde tu primera landing hasta una plataforma a medida. Elegí el servicio que mejor se adapta a tu proyecto."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group rounded-2xl border border-glass-border bg-glass p-7 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.85_0.22_165/0.2)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-primary">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold">
                  {s.title}
                  <ArrowRight
                    size={16}
                    className="ml-2 inline-block align-middle text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65">{s.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
