import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Sun, Monitor, AlertTriangle } from "lucide-react";

const AddOns = () => {
  const addons = [
    {
      icon: Shield,
      title: "AR Premium",
      description: "Antirreflejante avanzado para conducción diurna y nocturna",
    },
    {
      icon: Sun,
      title: "Fotocromáticos",
      description: "Adaptación automática entre interiores y exteriores",
    },
    {
      icon: Monitor,
      title: "Filtro Azul",
      description: "Protección selectiva para uso digital prolongado",
    },
    {
      icon: AlertTriangle,
      title: "Alto Impacto",
      description: "Materiales resistentes y polarizados para deporte",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Completa tus lentes Shamir
          </h2>
          <p className="text-lg text-muted-foreground">
            Potencia tu experiencia visual con tratamientos especializados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {addons.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {addon.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline">
            Ver todos
          </Button>
          <Button size="lg">Hablar por WhatsApp</Button>
        </div>
      </div>
    </section>
  );
};

export default AddOns;
