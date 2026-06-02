export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  summary: string;
  content: string;
  coverUrl: string | null;
  url?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  createdAt: string;
}
export const projects: Project[] = [
  {
    id: "sixten-1",
    slug: "sixten-venezuela",
    title: "Sixten Venezuela",
    client: "Sixten",
    summary: "Tienda online de relojería con catálogo optimizado y flujo de compra local.",
    content:
      "Desarrollo y optimización de e-commerce para relojería: catálogo filtrable, fichas de producto enfocadas en conversión, integración con pasarelas y procesos de pago locales, y experiencia móvil optimizada para aumentar la tasa de conversión.",
    coverUrl: "/case-sixtenvenezuela.svg",
    url: "https://sixtenvenezuela.com/",
    tags: ["E-commerce", "Relojes", "Tienda Online"],
    featured: true,
    published: true,
    createdAt: "2026-06-02",
  },
  {
    id: "relojes-1",
    slug: "relojes-vzla",
    title: "Relojes Vzla",
    client: "Relojes Vzla",
    summary: "E-commerce especializado en relojes con foco en experiencia de compra y conversiones.",
    content:
      "Implementación de tienda online con navegación por colecciones, fichas de producto detalladas, optimización para dispositivos móviles y funnels de pago simplificados para reducir el abandono de carrito.",
    coverUrl: "/case-relojesvzla.svg",
    url: "https://relojesvzla.com/",
    tags: ["E-commerce", "Conversion", "Relojes"],
    featured: true,
    published: true,
    createdAt: "2026-06-02",
  },
];


export function getPublishedProjects() {
  return projects
    .filter((p) => p.published)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug && p.published);
}

