import { Check } from "lucide-react";
import techLens from "@/assets/tech-lens.jpg";

const VideoSection = () => {
  const features = [
    "Freeform de doble cara: precisión punto por punto",
    "Visual AI Engine™: personalización con inteligencia artificial",
    "Natural Posture™: postura cómoda al leer",
    "IntelliCorridor™: transiciones suaves entre distancias",
  ];

  return (
    <section id="tecnologia" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={techLens}
              alt="Tecnología Shamir Freeform"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ver sin límites con Shamir
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              La tecnología Eye-Point Technology™ simula tu visión real en cada punto de la lente, ofreciendo precisión extrema y campos visuales más amplios.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
