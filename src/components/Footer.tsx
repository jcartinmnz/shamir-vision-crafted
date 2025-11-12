import { Facebook, Instagram, Youtube } from "lucide-react";
import shamirLogo from "@/assets/shamir-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={shamirLogo} alt="Shamir" className="h-8 mb-4 invert" />
            <p className="text-dark-foreground/70 text-sm">
              Lentes oftálmicos digitales de talla Freeform. Tecnología de vanguardia para tu visión perfecta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#tecnologia" className="text-dark-foreground/70 hover:text-primary transition-colors">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#tipos" className="text-dark-foreground/70 hover:text-primary transition-colors">
                  Tipos de Lentes
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-dark-foreground/70 hover:text-primary transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-dark-foreground/70 hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-dark-foreground/70 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-dark-foreground/70">
              <li>Calle Ejemplo 123, CDMX</li>
              <li>
                <a href="tel:+525500000000" className="hover:text-primary transition-colors">
                  +52 55 0000 0000
                </a>
              </li>
              <li>
                <a href="mailto:contacto@tudominio.com" className="hover:text-primary transition-colors">
                  contacto@tudominio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm text-dark-foreground/70 mb-6">
              <li>Lunes - Viernes: 10:00 - 19:00</li>
              <li>Sábado: 10:00 - 15:00</li>
              <li>Domingo: Cerrado</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-foreground/10 hover:bg-primary transition-colors p-2 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-foreground/10 hover:bg-primary transition-colors p-2 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-foreground/10 hover:bg-primary transition-colors p-2 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="border-t border-dark-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-xs text-dark-foreground/50 text-center">
            © {new Date().getFullYear()} Shamir. Todos los derechos reservados. Shamir®, Autograph™, Autograph Intelligence™, InTouch™, Relax™, Computer™, Workspace™, Driver Intelligence™, Attitude III™, Eye-Point Technology™, Natural Posture™, IntelliCorridor™ y As-Worn Quadro™ son marcas registradas de sus respectivos titulares. Este sitio es informativo y funciona como plataforma de captación de leads.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
