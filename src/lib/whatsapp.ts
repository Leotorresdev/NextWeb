/**
 * ========================================
 * UTILIDADES DE WHATSAPP
 * ========================================
 * Genera enlaces directos a WhatsApp para contacto directo.
 * Sin dependencias de backend - solo frontend.
 *
 * @module lib/whatsapp
 */

export const WHATSAPP_NUMBER = "5215500000000";

export const WHATSAPP_DEFAULT_MSG =
  "Hola NextWeb 👋 Quiero información sobre sus servicios de desarrollo.";

export function waLink(message = WHATSAPP_DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}