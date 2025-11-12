import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Settings, MapPin } from "lucide-react";

const JourneyTiles = () => {
  const tiles = [
    {
      icon: Calendar,
      title: "Agenda examen visual",
      description: "Evaluación completa de tu salud visual",
      action: "Agendar ahora",
      variant: "default" as const,
    },
    {
      icon: Settings,
      title: "Configura tu lente",
      description: "Personaliza según tu actividad y necesidades",
      action: "Comenzar",
      variant: "outline" as const,
    },
    {
      icon: MapPin,
      title: "Encuentra tu óptica",
      description: "Red de ópticas certificadas Shamir",
      action: "Ver mapa",
      variant: "outline" as const,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Tu camino empieza aquí
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {tile.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {tile.description}
                  </p>
                  <Button variant={tile.variant} className="w-full">
                    {tile.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyTiles;
