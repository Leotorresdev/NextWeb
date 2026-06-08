"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const services = [
  "Landing Page",
  "Tienda Online / E-commerce",
  "Página Corporativa",
  "Página de Reservas",
  "Catálogo Digital",
  "Portafolio Web",
  "Software a medida",
  "Otro",
] as const;

type Service = (typeof services)[number];

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState<Service>("Landing Page");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cuerpo = [
      `Hola NextWeb 👋`,
      ``,
      `Mi nombre es ${nombre}.`,
      `Email: ${email}`,
      telefono ? `Teléfono: ${telefono}` : null,
      ``,
      `Servicio de interés: ${servicio}`,
      ``,
      `Mensaje:`,
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    // Abre WhatsApp con todo el mensaje pre-armado
    const waUrl = waLink(cuerpo);
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // También dispara un mailto en una pestaña nueva (no todos los clientes tienen
    // cliente de correo configurado, por eso WhatsApp es el principal)
    const mailtoUrl = `mailto:hola@nextweb.dev?subject=${encodeURIComponent(
      `Cotización: ${servicio} — ${nombre}`
    )}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoUrl;

    setEnviado(true);
    setTimeout(() => setEnviado(false), 6000);
  };

  if (enviado) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-linear-to-br from-primary/15 to-accent/10 p-10 text-center backdrop-blur-md">
        <CheckCircle2 size={48} className="mx-auto mb-4 text-primary" />
        <h3 className="mb-2 font-display text-2xl font-bold">¡Gracias por escribirnos!</h3>
        <p className="text-sm text-foreground/70">
          Se abrió WhatsApp con tu mensaje. Si no se abrió, escribinos directo desde el botón verde.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-glass-border bg-glass p-6 backdrop-blur-md md:p-8"
    >
      <div>
        <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
          Nombre <span className="text-primary">*</span>
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-xl border border-glass-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder-foreground/40 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          placeholder="Tu nombre"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-glass-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder-foreground/40 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
            Teléfono / WhatsApp
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full rounded-xl border border-glass-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder-foreground/40 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            placeholder="+58 412 123 4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className="mb-2 block text-sm font-medium">
          ¿Qué te interesa? <span className="text-primary">*</span>
        </label>
        <select
          id="servicio"
          name="servicio"
          required
          value={servicio}
          onChange={(e) => setServicio(e.target.value as Service)}
          className="w-full rounded-xl border border-glass-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
          Contanos sobre tu proyecto <span className="text-primary">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full resize-none rounded-xl border border-glass-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder-foreground/40 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          placeholder="Qué necesitás, plazos, ideas, referencias..."
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-foreground/55">
          Al enviar, se abrirá WhatsApp con tu mensaje pre-cargado.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3 font-bold text-primary-foreground shadow-[0_0_30px_oklch(0.85_0.22_165/0.5)] transition-transform hover:scale-105"
        >
          <MessageCircle size={18} />
          Enviar por WhatsApp
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
