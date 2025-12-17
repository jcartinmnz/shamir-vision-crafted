import { Maximize2, Sparkles, User, Monitor } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const Benefits = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const benefits = [
    {
      icon: Maximize2,
      title: "+Campo útil",
      description: "Hasta +40% más amplitud visual vs. convencionales",
    },
    {
      icon: Sparkles,
      title: "Menos distorsión",
      description: "Transiciones suaves y visión estable",
    },
    {
      icon: User,
      title: "Personalización total",
      description: "Diseño según tu receta, montura y hábitos",
    },
    {
      icon: Monitor,
      title: "Confort digital",
      description: "Zonas optimizadas para pantallas",
    },
  ];

  return (
    <section id="beneficios" className="relative z-0 overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      <motion.div
        className="relative py-16 lg:py-24 bg-background"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <BlurFade delay={0.5} inView duration={0.6}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Beneficios de las lentes Shamir
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <BlurFade key={index} delay={0.7 + index * 0.15} inView duration={0.5}>
                  <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 h-full">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
