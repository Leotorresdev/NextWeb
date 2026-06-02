import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-glass-border py-3 md:py-4">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4">
        {/* Columna 1: Logo y descripción */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-glass-border bg-background shadow-sm">
              <Image src="/favicon.ico" alt="Icono NextWeb" fill className="object-cover" />
            </div>
            <span className="font-display font-bold tracking-widest">NEXTWEB</span>
          </div>
          <p className="text-sm text-foreground/55">
            Ingeniería de software a medida para empresas exigentes.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link href="/#servicios" className="hover:text-primary">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/#contacto" className="hover:text-primary">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes sociales */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Síguenos
          </h4>
          <div className="flex gap-4 text-foreground/40">
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <FaLinkedin size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-primary">
              <FaGithub size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}