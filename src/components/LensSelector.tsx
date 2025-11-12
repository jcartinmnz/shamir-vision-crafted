import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Monitor, Car, Sun, ArrowRight } from "lucide-react";
import officeWork from "@/assets/office-work.jpg";

const LensSelector = () => {
  const lensTypes = [
    {
      icon: Eye,
      title: "Progresivos Autograph™",
      description:
        "Una sola gafa para lejos, intermedio y cerca. Incluye Autograph Intelligence™ con IA adaptativa.",
      link: "#progresivos",
    },
    {
      icon: Monitor,
      title: "Monofocales Digitales",
      description:
        "Precisión completa en una sola distancia. Shamir Relax™ alivia la fatiga digital.",
      link: "#monofocales",
    },
    {
      icon: Monitor,
      title: "Ocupacionales",
      description:
        "Computer™ (hasta ~1.5m) y Workspace™ para oficina y entornos cercanos extendidos.",
      link: "#ocupacionales",
    },
    {
      icon: Sun,
      title: "Especializados",
      description:
        "Driver Intelligence™ para conducción día/noche. Attitude III™ Sport para monturas curvas y sol.",
      link: "#especializados",
    },
  ];

  return (
    <section id="tipos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              ¿Qué lentes Shamir son las más adecuadas para mí?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Elige según tu necesidad visual y estilo de vida
            </p>

            <div className="space-y-4">
              {lensTypes.map((lens, index) => {
                const Icon = lens.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {lens.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {lens.description}
                          </p>
                          <a
                            href={lens.link}
                            className="text-primary hover:text-primary-hover font-medium inline-flex items-center gap-2"
                          >
                            Más información
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button variant="outline" size="lg" className="mt-8">
              Comparar opciones
            </Button>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={officeWork}
              alt="Usuario con lentes Shamir"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensSelector;
