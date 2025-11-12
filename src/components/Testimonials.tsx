import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael P.",
      role: "Usuario progresivo",
      text: "Campo de visión amplio y nítido en todas las distancias. La adaptación fue inmediata, sin mareos ni molestias.",
      rating: 5,
    },
    {
      name: "Conductor GT",
      role: "Driver Intelligence™",
      text: "Anticipación más rápida en carretera y menos deslumbramiento nocturno. Un cambio notable en seguridad.",
      rating: 5,
    },
    {
      name: "Usuario oficina",
      role: "Workspace™",
      text: "Menos fatiga y postura más natural frente al PC. Trabajo todo el día sin cansancio visual.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen de Shamir
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
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
