import { Maximize2, Sparkles, User, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const benefits = [
    {
      icon: Maximize2,
      title: "+Campo útil",
      description: "Hasta +40% más amplitud visual vs. convencionales",
    },
    {
      icon: Sparkles,
      title: "Menos distorsión",
      description: "Transiciones suaves y visión estable",
    },
    {
      icon: User,
      title: "Personalización total",
      description: "Diseño según tu receta, montura y hábitos",
    },
    {
      icon: Monitor,
      title: "Confort digital",
      description: "Zonas optimizadas para pantallas",
    },
  ];

  return (
    <section id="beneficios" className="relative z-0 py-16 lg:py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Beneficios de las lentes Shamir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-up ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
