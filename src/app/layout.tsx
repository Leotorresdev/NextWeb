import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloating } from "@/components/WhatsAppButton";

/**
 * Metadatos del sitio
 * @description SEO básico para todas las páginas
 */
export const metadata: Metadata = {
  title: {
    default: "NextWeb — Páginas web y software a medida para tu negocio",
    template: "%s | NextWeb",
  },
  description:
    "Diseñamos páginas web modernas, e-commerce y software profesional que convierten visitas en clientes. Cotización personalizada según tu proyecto.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "e-commerce",
    "tienda online",
    "landing page",
  ],
  authors: [{ name: "NextWeb" }],
  creator: "NextWeb",
  publisher: "NextWeb",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // openGraph removed by request
  twitter: {
    card: "summary_large_image",
    title: "NextWeb — Software & Web a medida",
    description:
      "Lleva tu negocio al siguiente nivel. Cotización por WhatsApp en minutos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Layout raíz de la aplicación
 * @description Se renderiza una vez y envuelve todas las páginas
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {/* Contenido principal */}
        {children}

        {/* Botón flotante de WhatsApp - Visible en todo el sitio */}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
