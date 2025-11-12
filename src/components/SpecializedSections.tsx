import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Sun, Monitor } from "lucide-react";
import nightDriving from "@/assets/night-driving.jpg";
import sportOutdoor from "@/assets/sport-outdoor.jpg";
import officeWork from "@/assets/office-work.jpg";

const SpecializedSections = () => {
  return (
    <>
      {/* Conducción */}
      <section id="conduccion" className="py-16 lg:py-24 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-8 w-8 text-primary" />
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Driver Intelligence™
                </h2>
              </div>
              <p className="text-xl text-dark-foreground/80 mb-6">
                Lentes especializados para conducción diurna y nocturna
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-dark-foreground/90">
                    <strong>Contraste mejorado:</strong> Mejor percepción de distancias y objetos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-dark-foreground/90">
                    <strong>Menos deslumbramiento:</strong> Visión cómoda de noche
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-dark-foreground/90">
                    <strong>Campo lejano amplio:</strong> Anticipación rápida en carretera
                  </p>
                </li>
              </ul>
              <Button size="lg" variant="default">
                Prueba Driver Intelligence™
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={nightDriving}
                alt="Conducción nocturna con Shamir"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deporte & Aire Libre */}
      <section id="deporte" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sportOutdoor}
                alt="Deporte con lentes Shamir"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="h-8 w-8 text-primary" />
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                  Attitude III™ Sport & Fashion
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                Rendimiento superior en monturas curvas y de sol
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground">
                    <strong>Monturas envolventes:</strong> Diseño optimizado para curvaturas deportivas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground">
                    <strong>Lentes solares graduados:</strong> Protección UV y visión precisa
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground">
                    <strong>Alta resistencia:</strong> Materiales de impacto para actividades extremas
                  </p>
                </li>
              </ul>
              <Button size="lg" variant="default">
                Configurar lentes solares graduados
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Oficina & Vida Digital */}
      <section id="oficina" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="h-8 w-8 text-primary" />
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                  Computer™ / Workspace™
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                Ergonomía y confort para oficina y trabajo digital
              </p>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">Rangos de visión:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Computer™:</span>
                      <span className="font-semibold text-foreground">40cm - 1.5m</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Workspace™:</span>
                      <span className="font-semibold text-foreground">40cm - 4m</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-card p-6 rounded-xl border border-border mb-8">
                <h3 className="font-bold text-foreground mb-3">Relax™ para 18-45 años:</h3>
                <p className="text-muted-foreground">
                  Apoyo acomodativo integrado que reduce la fatiga visual en uso digital prolongado. Ideal para nativos digitales.
                </p>
              </div>

              <Button size="lg" variant="default">
                Trabaja cómodo todo el día
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={officeWork}
                alt="Oficina con lentes Shamir"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecializedSections;
