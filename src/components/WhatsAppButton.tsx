/**
 * ========================================
 * BOTÓN FLOTANTE DE WHATSAPP
 * ========================================
 * Botón fijo en la esquina inferior derecha para contacto rápido por WhatsApp.
 * Siempre visible mientras el usuario navega el sitio.
 *
 * @component
 * @description Botón flotante de contacto por WhatsApp
 *
 * @example
 * <WhatsAppFloating />
 */
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloating() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-bold text-black shadow-[0_0_30px_rgba(37,211,102,0.55)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(37,211,102,0.8)]"
    >
      {/* Indicador de actividad (efecto de sonido) */}
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-black/70" />
      </span>
      <MessageCircle size={22} strokeWidth={2.5} />
      <span className="hidden sm:inline">Chatea ahora</span>
    </a>
  );
}