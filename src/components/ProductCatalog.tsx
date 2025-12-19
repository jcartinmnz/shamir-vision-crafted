import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlurFade } from "@/components/ui/blur-fade";

import teenageGirlImage from "../../attached_assets/u5629859764_A_lifestyle_photo_of_a_teenage_girl_wearing_trend__1765981589191.png";
import outdoorManImage from "../../attached_assets/u5629859764_A_dynamic_outdoor_shot_of_a_middle-aged_man_weari__1765981589193.png";
import woman40sImage from "../../attached_assets/u5629859764_A_high-detail_photo_of_a_woman_in_her_40s_wearing__1765981589194.png";
import streetManImage from "../../attached_assets/u5629859764_A_street-style_shot_of_a_man_with_rectangular_eye__1765981589194.png";
import youngWomanImage from "../../attached_assets/u5629859764_A_candid_photo_of_a_young_woman_wearing_thin-rimm__1765981589195.png";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  slogan: string;
  image: string;
  badge?: string;
  detailedInfo: {
    intro: string;
    features: { title: string; description: string }[];
    idealFor: string;
  };
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
    image: teenageGirlImage,
    detailedInfo: {
      intro: "Los lentes de Alta Definición (High Definition) se fabrican con tecnología digital Free-Form, lo que permite una precisión superior en la superficie del lente. Este método consigue una visión más clara y nítida para el usuario en comparación con los lentes convencionales.",
      features: [
        {
          title: "Corrección personalizada",
          description: "Cada lente se talla según la prescripción exacta y parámetros del usuario, ofreciendo una corrección de alta definición adaptada a sus ojos. El resultado es un campo visual optimizado, con mayor amplitud y nitidez incluso hacia los bordes del lente."
        },
        {
          title: "Mayor nitidez y contraste",
          description: "Al reducir aberraciones e imperfecciones ópticas, las lentes HD de Shamir proporcionan imágenes más definidas. Los usuarios notan colores más vívidos, mejor contraste y una visión más cómoda en distintas condiciones de luz."
        },
        {
          title: "Tecnología de vanguardia",
          description: "Shamir fue de los pioneros en adoptar el tallado digital Free-Form. Sus lentes HD integran softwares avanzados de diseño y simulación que calculan miles de puntos en la lente para lograr la máxima calidad óptica."
        }
      ],
      idealFor: "Usuarios que buscan la máxima calidad visual, especialmente beneficioso para casos de astigmatismo o presbicia."
    }
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
    image: outdoorManImage,
    detailedInfo: {
      intro: "Los lentes de visión sencilla (monofocales estándar) están diseñados con una única graduación en toda la superficie, corrigiendo la visión a una sola distancia. Son la opción más común para usuarios jóvenes con miopía, hipermetropía o astigmatismo.",
      features: [
        {
          title: "Visión nítida y estable",
          description: "Las lentes monofocales Shamir brindan calidad óptica inmejorable, con una visión muy nítida y clara en el área de enfoque deseada. Al eliminar distorsiones, el usuario obtiene una experiencia visual relajada y precisa."
        },
        {
          title: "Confort y fácil adaptación",
          description: "Al tener una sola potencia, la adaptación es inmediata. Los usuarios se sienten cómodos desde el primer momento, sin necesidad de \"aprender\" a usar el lente."
        },
        {
          title: "Opciones personalizadas",
          description: "Shamir dispone de diseños digitales como Smart SV™ que llevan el monofocal al siguiente nivel. Son lentes asféricas y personalizadas que corrigen al 100% el error refractivo del paciente y optimizan el grosor."
        }
      ],
      idealFor: "Usuarios jóvenes con miopía, hipermetropía o astigmatismo, y para gafas de lectura."
    }
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
    image: woman40sImage,
    detailedInfo: {
      intro: "Los lentes monofocales digitales de Shamir llevan la visión sencilla un paso más allá mediante la personalización extrema de la lente. Se fabrican incorporando parámetros de la montura y la posición de uso del lente.",
      features: [
        {
          title: "Eye-Point Technology III",
          description: "Shamir simula la visión del usuario en el mundo real para ampliar la zona de visión nítida en la lente. Incluso mirando a través de zonas periféricas, la imagen se mantiene enfocada y clara."
        },
        {
          title: "As-Worn Quadro™",
          description: "Ajusta la potencia del lente considerando cómo las gafas se asientan en el rostro del usuario. Esto asegura que la agudeza visual experimentada coincida con la obtenida en el examen de la vista."
        },
        {
          title: "Innovación líder y confort",
          description: "Shamir SV III As-Worn se destaca como un diseño monofocal innovador, ofreciendo la mayor nitidez y confort que un lente monofocal puede brindar."
        }
      ],
      idealFor: "Usuarios que exigen alto rendimiento visual en cualquier armazón que elijan."
    }
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
    image: streetManImage,
    detailedInfo: {
      intro: "Los lentes bifocales proporcionan dos correcciones en una misma lente: una zona superior para visión de lejos y un segmento inferior para visión de cerca. Shamir Duo™ es un bifocal digital sin línea visible.",
      features: [
        {
          title: "Sin línea divisoria",
          description: "A diferencia del bifocal convencional, Shamir Duo™ elimina la línea que separa las zonas de lejos y cerca, haciendo que el lente se vea de una sola pieza. Esto brinda una apariencia mucho más juvenil y moderna."
        },
        {
          title: "Transición suave sin saltos",
          description: "Al no haber corte abrupto entre las graduaciones, se logra una transición visual natural al mover la vista de lejos a cerca. Shamir Duo elimina el molesto \"brinco\" de imagen."
        },
        {
          title: "Calidad óptica digital",
          description: "Siendo un bifocal Free-Form, toda la superficie interna del lente está optimizada digitalmente. Acepta todo tipo de tratamientos: antirreflejantes, fotocromáticos y polarizados."
        }
      ],
      idealFor: "Usuarios tradicionales de bifocal que buscan una opción más avanzada, o quienes no se adaptan bien a los progresivos."
    }
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
    image: youngWomanImage,
    badge: "CON INTELIGENCIA ARTIFICIAL",
    detailedInfo: {
      intro: "Los lentes progresivos son la solución más avanzada para corregir la presbicia, ofreciendo todas las distancias focales en un solo lente de forma continua. Shamir es mundialmente reconocido por sus lentes progresivos de alta tecnología.",
      features: [
        {
          title: "Visión continua y sin líneas",
          description: "Los progresivos Shamir lucen como lentes monofocales y brindan una visión fluida. Adiós a cambiar de gafas para distintas tareas; con un solo par el usuario enfoca a cualquier distancia."
        },
        {
          title: "Adaptación rápida y cómoda",
          description: "Las últimas innovaciones de Shamir permiten que la adaptación del usuario sea más sencilla que nunca. Sus lentes progresivas ofrecen campos de visión amplios y estabilizados."
        },
        {
          title: "Precisión con Inteligencia Artificial",
          description: "Shamir Autograph Intelligence™ 2.0 es una lente progresiva revolucionaria creada mediante análisis de Big Data e inteligencia artificial, capaz de identificar las necesidades visuales de cada paciente."
        }
      ],
      idealFor: "Usuarios con presbicia que buscan una solución completa para todas las distancias en un solo lente."
    }
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="productos" className="py-20 lg:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 animate-fade-up ${isVisible ? "is-visible" : ""}`}>
          <Badge variant="outline" className="mb-4">Catálogo Completo</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Descubre la Gama <span className="text-primary">Shamir</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lentes de talla digital diseñados para cada necesidad visual. Tecnología Freeform con personalización punto a punto.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col h-full w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] animate-fade-up ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <BlurFade delay={0.1 + index * 0.15} inView>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </BlurFade>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white text-xs">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.subtitle}
                </p>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4 flex-grow">
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
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => setSelectedProduct(product)}
                  data-testid={`button-more-info-${product.id}`}
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <DialogTitle className="text-2xl mb-1">{selectedProduct.title}</DialogTitle>
                      <DialogDescription className="text-primary font-medium">
                        {selectedProduct.subtitle}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="mt-4 space-y-6">
                  <p className="text-foreground/90 leading-relaxed">
                    {selectedProduct.detailedInfo.intro}
                  </p>
                  
                  <div className="space-y-4">
                    {selectedProduct.detailedInfo.features.map((feature, idx) => (
                      <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">Ideal para: </span>
                      <span className="text-foreground">{selectedProduct.detailedInfo.idealFor}</span>
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      setSelectedProduct(null);
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    data-testid="button-dialog-contact"
                  >
                    Solicitar información
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

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
