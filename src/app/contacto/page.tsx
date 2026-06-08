import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { waLinkFor } from "@/lib/whatsapp";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos para cotizar tu proyecto web. Respondemos por WhatsApp en menos de 1 hora hábil. Formulario alternativo para los que prefieren email.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="CONTACTO"
        title="Hablemos de tu proyecto."
        subtitle="Respondemos en menos de 1 hora hábil. Sin compromiso, sin spam. Elegí el canal que prefieras."
      />

      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <a
            href={waLinkFor("contact")}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-section="contact-whatsapp-card"
            className="group flex items-center gap-4 rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all hover:border-primary/50"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="font-display text-base font-bold">WhatsApp</h3>
              <p className="text-sm text-foreground/65">Respuesta en menos de 1 hora hábil</p>
            </div>
          </a>
          <a
            href="mailto:hola@nextweb.dev"
            className="group flex items-center gap-4 rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all hover:border-primary/50"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="font-display text-base font-bold">Email</h3>
              <p className="text-sm text-foreground/65">hola@nextweb.dev</p>
            </div>
          </a>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-display text-2xl font-bold">
            O completá el formulario
          </h2>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
