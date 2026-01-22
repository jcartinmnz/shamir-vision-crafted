import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Arturo Davilla (Via Instagram)",
      lensType: "Autograph Intelligence™",
      text: "Campo de visión amplio y nítido en todas las distancias. La adaptación fue inmediata, sin mareos ni molestias.",
    },
    {
      name: "Ligia Rodriguez (via Facebook)",
      lensType: "Driver Intelligence™",
      text: "Anticipación más rápida en carretera y menos deslumbramiento nocturno. Un cambio notable en seguridad.",
    },
    {
      name: "Alejandra Retana (Via Facebook)",
      lensType: "Workspace™",
      text: "Menos fatiga y postura más natural frente al PC. Trabajo todo el día sin cansancio visual.",
    },
  ];

  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-dark-surface">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <h2 className="text-3xl lg:text-5xl font-bold text-dark-surface-foreground mb-4">
            Lo que dicen de Shamir
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all bg-white/5 border-white/10 animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <p className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm font-medium text-primary">
                    {testimonial.lensType}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
