import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Sparkles, Target, Glasses, Sun, Monitor, Car } from "lucide-react";

interface Product {
  name: string;
  slogan: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "alta-definicion",
    name: "Alta Definición",
    description: "Tecnología Freeform con precisión punto a punto",
    products: [
      {
        name: "Autograph Intelligence™",
        slogan: "IA que evoluciona con tu visión",
        description: "Lentes progresivos de última generación con Visual AI Engine™ que adaptan el diseño según tu edad visual y estilo de vida.",
        features: ["Eye-Point Technology™", "Natural Posture™", "IntelliCorridor™", "Adaptación inmediata"],
        icon: <Sparkles className="h-8 w-8 text-primary" />
      },
      {
        name: "Autograph InTouch™",
        slogan: "Conectado con tu mundo digital",
        description: "Diseño optimizado para la era digital con zonas específicas para dispositivos móviles y pantallas.",
        features: ["Zonas digitales ampliadas", "Reducción de fatiga visual", "Transiciones suaves", "Multiuso diario"],
        icon: <Monitor className="h-8 w-8 text-primary" />
      }
    ]
  },
  {
    id: "progresivos",
    name: "Progresivos",
    description: "Una sola gafa para todas las distancias",
    products: [
      {
        name: "Autograph III™",
        slogan: "Visión natural en 360°",
        description: "Progresivo premium con tecnología de doble cara Freeform para campos de visión más amplios.",
        features: ["Campo útil +40%", "Menor distorsión periférica", "As-Worn Quadro™", "Personalización total"],
        icon: <Eye className="h-8 w-8 text-primary" />
      },
      {
        name: "Genesis™",
        slogan: "El inicio de tu mejor visión",
        description: "Progresivo de alta calidad con excelente relación valor-rendimiento.",
        features: ["Adaptación rápida", "Diseño equilibrado", "Múltiples distancias", "Comodidad diaria"],
        icon: <Target className="h-8 w-8 text-primary" />
      }
    ]
  },
  {
    id: "monofocales",
    name: "Monofocales",
    description: "Precisión digital para visión sencilla",
    products: [
      {
        name: "Shamir Relax™",
        slogan: "Descansa tu vista, potencia tu día",
        description: "Monofocal con apoyo acomodativo diseñado para usuarios de 18-45 años que pasan tiempo frente a pantallas.",
        features: ["Apoyo acomodativo +0.65D", "Reduce fatiga digital", "Ideal para jóvenes", "Prevención visual"],
        icon: <Monitor className="h-8 w-8 text-primary" />
      },
      {
        name: "Single Vision Digital™",
        slogan: "Simplicidad con precisión absoluta",
        description: "Monofocal de talla digital con la máxima nitidez en toda la superficie del lente.",
        features: ["Precisión Freeform", "Bordes optimizados", "Claridad total", "Personalizado"],
        icon: <Eye className="h-8 w-8 text-primary" />
      }
    ]
  },
  {
    id: "ocupacionales",
    name: "Ocupacionales",
    description: "Soluciones específicas para tu entorno de trabajo",
    products: [
      {
        name: "Computer™",
        slogan: "Tu aliado frente a la pantalla",
        description: "Diseñado para distancias de trabajo hasta 1.5 metros, ideal para uso intensivo de computadora.",
        features: ["Rango 40cm - 1.5m", "Postura ergonómica", "Sin rotación de cuello", "Oficina optimizada"],
        icon: <Monitor className="h-8 w-8 text-primary" />
      },
      {
        name: "Workspace™",
        slogan: "Domina tu espacio de trabajo",
        description: "Mayor profundidad de campo para ambientes de oficina completos, desde el escritorio hasta los colegas.",
        features: ["Rango extendido", "Visión intermedia amplia", "Reuniones y pantalla", "Productividad total"],
        icon: <Glasses className="h-8 w-8 text-primary" />
      }
    ]
  },
  {
    id: "especializados",
    name: "Especializados",
    description: "Soluciones para actividades específicas",
    products: [
      {
        name: "Driver Intelligence™",
        slogan: "Conduce con confianza total",
        description: "Optimizado para conducción diurna y nocturna con contraste mejorado y reducción de deslumbramiento.",
        features: ["Contraste mejorado", "Reducción deslumbramiento", "Campo lejano amplio", "Versión día/noche"],
        icon: <Car className="h-8 w-8 text-primary" />
      },
      {
        name: "Attitude III™ Sport",
        slogan: "Rendimiento sin límites",
        description: "Diseñado para monturas deportivas curvas con compensación óptica avanzada.",
        features: ["Monturas curvas", "Protección UV total", "Alto impacto", "Actividades extremas"],
        icon: <Sun className="h-8 w-8 text-primary" />
      }
    ]
  }
];

const ProductCatalog = () => {
  return (
    <section id="productos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Catálogo Completo</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Descubre la Gama <span className="text-primary">Shamir</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lentes de talla digital diseñados para cada necesidad visual. Tecnología Freeform con personalización punto a punto.
          </p>
        </div>

        <Tabs defaultValue="alta-definicion" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="text-center mb-8">
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.products.map((product, index) => (
                  <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          {product.icon}
                        </div>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                          Premium
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mt-4">{product.name}</CardTitle>
                      <p className="text-primary font-medium italic">"{product.slogan}"</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full">Solicitar información</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCatalog;
