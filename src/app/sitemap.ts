import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextweb.dev";

const serviceSlugs = [
  "landing-pages",
  "tiendas-online",
  "paginas-corporativas",
  "paginas-de-reservas",
  "catalogos-digitales",
  "portafolios-web",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portafolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = getPublishedProjects().map((p) => ({
    url: `${BASE_URL}/portafolio/${p.slug}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
