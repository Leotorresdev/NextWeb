"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { waLinkFor } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/whatsapp";

const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa - solo mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-glass-border bg-glass text-foreground/80 backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Panel lateral */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-80 max-w-[90vw] flex-col gap-6 border-l border-glass-border bg-slate-950/95 p-6 shadow-[-10px_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-glass-border pb-4">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight">
            NextWeb
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar menú"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-white/10 hover:text-primary"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg border border-transparent bg-white/5 px-4 py-3 text-sm font-medium text-foreground/90 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary active:scale-[0.98]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLinkFor("header")}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-section="mobile-menu"
          onClick={() => {
            trackWhatsAppClick("header");
            close();
          }}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_30px_oklch(0.85_0.22_165/0.5)]"
        >
          <MessageCircle size={16} />
          Cotizar por WhatsApp
        </a>
      </aside>
    </>
  );
}
