import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waLinkFor } from "@/lib/whatsapp";
import { MobileMenu } from "@/components/MobileMenu";

const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-40 border-b border-glass-border bg-background/70 px-6 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo - Enlace al inicio */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/favicon.png"
            alt="NextWeb"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-cover shadow-[0_0_16px_oklch(0.85_0.22_165/0.4)]"
          />
          <span className="font-display text-xl font-extrabold uppercase tracking-tight">
            NextWeb
          </span>
        </Link>

        {/* Menú de navegación - Visible en desktop */}
        <div className="hidden gap-7 text-sm font-medium text-foreground/70 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Botón de WhatsApp - Visible en todas las pantallas */}
        <a
          href={waLinkFor("header")}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-section="header"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[0_0_20px_oklch(0.85_0.22_165/0.45)] transition-all hover:scale-105"
        >
          <MessageCircle size={14} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Menú hamburguesa - Visible solo en mobile */}
        <MobileMenu />
      </div>
    </nav>
  );
}
