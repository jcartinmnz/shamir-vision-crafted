import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Eye, Sparkles, Glasses, Layers, Brain } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  slogan: string;
  icon: React.ReactNode;
  badge?: string;
}

const products: Product[] = [
  {
    id: "alta-definicion",
    title: "Lentes de Alta Definición",
    subtitle: "Tecnología Digital Free-Form",
    description: "Experimenta la claridad visual más avanzada con nuestra tecnología de tallado digital punto a punto.",
    benefits: [
      "Corrección personalizada",
      "Mayor nitidez y contraste",
      "Campos visuales amplios",
      "Tecnología Free-Form"
    ],
    slogan: "Visión en Alta Definición Real",
    icon: <Eye className="h-10 w-10 text-primary" />
  },
  {
    id: "vision-sencilla",
    title: "Lentes de Visión Sencilla",
    subtitle: "Claridad perfecta para una sola distancia",
    description: "Solución óptima para quienes necesitan corrección a una distancia específica, ya sea lejos o cerca.",
    benefits: [
      "Visión nítida sin distorsiones",
      "Adaptación inmediata",
      "Materiales ligeros",
      "Diseños digitales"
    ],
    slogan: "Claridad Simple, Calidad Superior",
    icon: <Glasses className="h-10 w-10 text-primary" />
  },
  {
    id: "monofocales",
    title: "Lentes Monofocales Digitales",
    subtitle: "Shamir SV III As-Worn™",
    description: "Monofocales de última generación con tecnología que considera cómo realmente usas tus lentes.",
    benefits: [
      "Eye-Point Technology III",
      "As-Worn Quadro™",
      "Visión periférica clara",
      "Diseño estético"
    ],
    slogan: "Tu Visión, Tu Medida Exacta",
    icon: <Sparkles className="h-10 w-10 text-primary" />
  },
  {
    id: "bifocales",
    title: "Lentes Bifocales Digitales",
    subtitle: "Shamir Duo™ - Sin línea visible",
    description: "La evolución del bifocal tradicional. Dos zonas de visión perfectamente integradas sin línea divisoria.",
    benefits: [
      "Sin línea visible",
      "Transición suave",
      "Calidad óptica digital",
      "Compatible con tratamientos"
    ],
    slogan: "Dos Visiones, Una Experiencia Perfecta",
    icon: <Layers className="h-10 w-10 text-primary" />
  },
  {
    id: "progresivos",
    title: "Lentes Progresivos Inteligentes",
    subtitle: "Autograph Intelligence™ 2.0 con IA",
    description: "La máxima expresión en lentes multifocales. Inteligencia artificial que optimiza cada zona de visión.",
    benefits: [
      "Visión continua",
      "Tecnología IA",
      "Adaptación rápida",
      "Diseños especializados"
    ],
    slogan: "Todas las Distancias, Una Sola Mirada",
    icon: <Brain className="h-10 w-10 text-primary" />,
    badge: "CON INTELIGENCIA ARTIFICIAL"
  }
];

const comparisonData = [
  {
    feature: "Distancias de visión",
    monofocal: "1 distancia",
    bifocal: "2 distancias",
    progresivo: "Todas las distancias"
  },
  {
    feature: "Líneas visibles",
    monofocal: "Ninguna",
    bifocal: "Sin línea (Duo™)",
    progresivo: "Ninguna"
  },
  {
    feature: "Adaptación",
    monofocal: "Inmediata",
    bifocal: "1-3 días",
    progresivo: "3-7 días"
  },
  {
    feature: "Estética",
    monofocal: "Excelente",
    bifocal: "Muy buena",
    progresivo: "Excelente"
  },
  {
    feature: "Ideal para",
    monofocal: "Miopía, hipermetropía, astigmatismo",
    bifocal: "Presbicia con uso mixto",
    progresivo: "Presbicia, uso diario completo"
  }
];

const ProductCatalog = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                <div className="relative z-10 p-4 bg-white/80 dark:bg-black/50 rounded-2xl backdrop-blur-sm">
                  {product.icon}
                </div>
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white text-xs">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.subtitle}
                </p>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-primary font-semibold italic mb-4 text-sm">
                  "{product.slogan}"
                </p>
                
                <Button className="w-full" variant="outline">
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              Compara Nuestros Lentes
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Encuentra el tipo de lente ideal según tus necesidades visuales
            </p>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Característica</th>
                  <th className="text-center p-4 font-semibold text-foreground bg-muted/30">Monofocales</th>
                  <th className="text-center p-4 font-semibold text-foreground">Bifocales</th>
                  <th className="text-center p-4 font-semibold text-primary bg-primary/5">Progresivos</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="text-center p-4 text-muted-foreground bg-muted/30">{row.monofocal}</td>
                    <td className="text-center p-4 text-muted-foreground">{row.bifocal}</td>
                    <td className="text-center p-4 text-foreground font-medium bg-primary/5">{row.progresivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-2">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === row.feature ? null : row.feature)}
                  className="w-full p-4 text-left font-medium text-foreground bg-muted/30 flex justify-between items-center"
                >
                  {row.feature}
                  <span className="text-primary">
                    {expandedAccordion === row.feature ? "−" : "+"}
                  </span>
                </button>
                {expandedAccordion === row.feature && (
                  <div className="p-4 space-y-3 bg-background">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Monofocales:</span>
                      <span className="text-sm text-foreground">{row.monofocal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Bifocales:</span>
                      <span className="text-sm text-foreground">{row.bifocal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-primary font-medium">Progresivos:</span>
                      <span className="text-sm text-primary font-medium">{row.progresivo}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
