import { Check } from "lucide-react";
import lensHand from "@/assets/lens-hand.jpg";

const ExperienceDifference = () => {
  const features = [
    {
      title: "Eye-Point Technology™",
      description: "Simula la visión real en cada punto de la lente",
    },
    {
      title: "Freeform de doble cara",
      description: "Precisión punto por punto en ambas superficies",
    },
    {
      title: "As-Worn Quadro™",
      description: "Iguala la visión medida a la percibida",
    },
    {
      title: "Natural Posture™",
      description: "Postura ergonómica y cómoda al leer",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={lensHand}
          alt="Precisión Shamir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12">
            Experimenta la diferencia Shamir
          </h2>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDifference;
