import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";


export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-glass-border py-6 md:py-8">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        {/* Columna 1: Logo y descripción */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-glass-border bg-background shadow-sm">
              <Image src="/favicon.png" alt="Icono NextWeb" fill className="object-cover" />
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
              <Link href="/" className="hover:text-primary">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-primary">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/portafolio" className="hover:text-primary">
                Portafolio
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-primary">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Servicios destacados */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Servicios
          </h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link href="/servicios/landing-pages" className="hover:text-primary">
                Landing Pages
              </Link>
            </li>
            <li>
              <Link href="/servicios/tiendas-online" className="hover:text-primary">
                Tiendas Online
              </Link>
            </li>
            <li>
              <Link href="/servicios/paginas-corporativas" className="hover:text-primary">
                Páginas Corporativas
              </Link>
            </li>
            <li>
              <Link href="/servicios/paginas-de-reservas" className="hover:text-primary">
                Sistemas de Reservas
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
            <a
              href="https://www.tiktok.com/@nextweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-colors hover:text-primary"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-glass-border px-6 pt-6 text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} NextWeb. Todos los derechos reservados.
      </div>
    </footer>
  );
}
