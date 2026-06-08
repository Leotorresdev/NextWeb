import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppFloating } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/**
 * Metadatos del sitio
 * @description SEO básico para todas las páginas
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nextweb.dev"),
  description:
    "Diseñamos páginas web modernas, e-commerce y software profesional que convierten visitas en clientes. Cotización personalizada según tu proyecto.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "e-commerce",
    "tienda online",
    "landing page",
    "páginas web Venezuela",
    "agencia web",
  ],
  authors: [{ name: "NextWeb" }],
  creator: "NextWeb",
  publisher: "NextWeb",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "NextWeb",
    title: "NextWeb — Páginas web y software a medida",
    description:
      "Páginas web modernas, e-commerce y software a medida. Cotización por WhatsApp en 24h.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "NextWeb — Páginas web y software a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextWeb — Software & Web a medida",
    description:
      "Lleva tu negocio al siguiente nivel. Cotización por WhatsApp en minutos.",
    images: ["/favicon.png"],
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
      lang="es"
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} h-full antialiased`}
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
