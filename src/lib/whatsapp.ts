/**
 * ========================================
 * UTILIDADES DE WHATSAPP
 * ========================================
 * Genera enlaces directos a WhatsApp para contacto directo.
 * Sin dependencias de backend - solo frontend.
 *
 * @module lib/whatsapp
 */

/**
 * Número oficial de contacto NextWeb (Venezuela).
 * Formato para wa.me: código de país (58) + número sin el 0 inicial.
 * 04247807851 → 584247807851
 */
export const WHATSAPP_NUMBER = "584247807851";

/**
 * Mensajes contextuales por sección del sitio.
 * Mantener cortos y con el contexto de origen para que el equipo
 * sepa de dónde viene cada lead.
 */
const MESSAGES = {
  default: "Hola NextWeb 👋 Quiero información sobre sus servicios de desarrollo.",
  hero: "Hola NextWeb 👋 Quiero cotizar un proyecto web.",
  services: "Hola NextWeb 👋 Me interesa uno de sus servicios. ¿Pueden darme más información?",
  portfolio: "Hola NextWeb 👋 Vi un proyecto suyo y me gustaría algo similar.",
  faq: "Hola NextWeb 👋 Tengo una duda sobre sus servicios.",
  contact: "Hola NextWeb 👋 Quiero hacerles una consulta.",
  header: "Hola NextWeb 👋 Quiero información sobre sus servicios.",
  floating: "Hola NextWeb 👋 Quiero información sobre sus servicios de desarrollo.",
} as const;

export type WhatsAppSection = keyof typeof MESSAGES;

export function waMessage(section: WhatsAppSection = "default"): string {
  return MESSAGES[section];
}

export function waLink(message: string = MESSAGES.default): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Genera el link a WhatsApp con el mensaje contextual de la sección.
 * Helper para no repetir `waLink(waMessage(section))` por todos lados.
 */
export function waLinkFor(section: WhatsAppSection = "default"): string {
  return waLink(MESSAGES[section]);
}

/**
 * Tracking de clic en WhatsApp.
 * Por ahora loguea en consola y guarda contador en localStorage.
 * Listo para conectar a GA4 / Meta Pixel sin cambiar las llamadas.
 *
 * @param section Sección del sitio desde donde se hizo clic
 */
export function trackWhatsAppClick(section: WhatsAppSection): void {
  if (typeof window === "undefined") return;
  try {
    const key = "nextweb_wa_clicks";
    const raw = window.localStorage.getItem(key);
    const data: Record<string, number> = raw ? JSON.parse(raw) : {};
    data[section] = (data[section] ?? 0) + 1;
    window.localStorage.setItem(key, JSON.stringify(data));
    console.log("[NextWeb] WhatsApp click", { section, total: data });
  } catch {
    // localStorage no disponible (modo privado, etc.) - no hacer nada
  }
}
