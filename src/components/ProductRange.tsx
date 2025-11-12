import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProductRange = () => {
  const products = [
    {
      title: "Autograph™",
      subtitle: "Intelligence / InTouch",
      description:
        "Progresivos premium con IA que se adaptan a tu edad visual y estilo de vida. La tecnología más avanzada.",
      features: ["Personalización con IA", "Natural Posture™", "IntelliCorridor™"],
    },
    {
      title: "Monofocal & Relax™",
      subtitle: "Visión sencilla potenciada",
      description:
        "Visión nítida en una distancia con apoyo acomodativo para reducir fatiga digital. Ideal 18-45 años.",
      features: ["Precisión digital", "Alivio visual", "Uso todo el día"],
    },
    {
      title: "Computer™ / Workspace™",
      subtitle: "Ergonomía y confort",
      description:
        "Lentes ocupacionales para oficina. Computer™ hasta 1.5m, Workspace™ con intermedio extendido.",
      features: ["Postura natural", "Campo amplio cercano", "Cero fatiga"],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Descubre la gama Shamir
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones para cada estilo de vida y necesidad visual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-all border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button variant="default" className="w-full gap-2">
                    Saber más
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    Cotizar ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
