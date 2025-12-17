import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ctaImage from "@/assets/cta-woman.png";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div ref={ref} className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <h2 
            className={`text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fade-up ${isVisible ? "is-visible" : ""}`}
          >
            Descubre cómo se ve el mundo cuando tus lentes están diseñados exactamente para ti.
          </h2>
          <div 
            className={`flex flex-wrap gap-4 animate-fade-up ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              data-testid="button-cta-contact"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white bg-white/10 backdrop-blur-sm"
              data-testid="button-cta-products"
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
