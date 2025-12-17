import { Facebook, Instagram, Youtube } from "lucide-react";
import shamirLogo from "@/assets/shamir-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-dark-surface-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={shamirLogo} alt="Shamir" className="h-8 mb-4 invert" />
            <p className="text-white/70 text-sm">
              Lentes oftálmicos digitales de talla Freeform. Tecnología de vanguardia para tu visión perfecta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#tecnologia" className="text-white/70 hover:text-primary transition-colors">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#tipos" className="text-white/70 hover:text-primary transition-colors">
                  Tipos de Lentes
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-white/70 hover:text-primary transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-white/70 hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>WW78+M52, C. 12, San José, San Sebastián, Costa Rica</li>
              <li>
                <a href="https://wa.me/50664706734" className="hover:text-primary transition-colors">
                  +506 6470 6734
                </a>
              </li>
              <li>
                <a href="mailto:info@shamircentroamerica.com" className="hover:text-primary transition-colors">
                  info@shamircentroamerica.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li>Lunes - Viernes: 8:00 - 17:00</li>
              <li>Sábado: 8:00 - 12:00</li>
              <li>Domingo: Cerrado</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/shamircentroamerica/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ShamirCentroamerica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-xs text-white/50 text-center">
            © {new Date().getFullYear()} Shamir. Todos los derechos reservados. Shamir®, Autograph™, Autograph Intelligence™, InTouch™, Relax™, Computer™, Workspace™, Driver Intelligence™, Attitude III™, Eye-Point Technology™, Natural Posture™, IntelliCorridor™ y As-Worn Quadro™ son marcas registradas de sus respectivos titulares. Este sitio es informativo y funciona como plataforma de captación de leads.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
