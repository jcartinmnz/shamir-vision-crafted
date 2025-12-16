import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import shamirLogo from "@/assets/shamir-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Tecnología", href: "#tecnologia" },
    { name: "Productos", href: "#productos" },
    { name: "Encuentra tu Óptica", href: "#opticas" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/20" 
        : "bg-black"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={shamirLogo} 
              alt="Shamir" 
              className={`w-auto transition-all duration-500 ease-out ${
                scrolled ? "h-24 lg:h-32" : "h-40 lg:h-48"
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="lg" className="gap-2">
              <Phone className="h-4 w-4" />
              Cotiza tus lentes
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="w-full gap-2 mt-4">
                <Phone className="h-4 w-4" />
                Cotiza tus lentes
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
