import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-glasses.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 lg:pt-24">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lentes Shamir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Visión en alta definición hecha a tu medida
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl">
            Lentes Shamir de talla digital con IA y Freeform para campos de visión más amplios, menos distorsión y máxima nitidez en todas las distancias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="gap-2">
              <Calendar className="h-5 w-5" />
              Agenda tu evaluación
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Descubre la gama
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Progresivos
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Monofocales
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Ocupacionales
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Conducción
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Deporte
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
