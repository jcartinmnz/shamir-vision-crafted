import Header from "@/components/Header";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import Benefits from "@/components/Benefits";
import VideoSection from "@/components/VideoSection";
import Stats from "@/components/Stats";
import ProductCatalog from "@/components/ProductCatalog";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import FindOpticalStore from "@/components/FindOpticalStore";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <NeuralNetworkHero 
        title={<>Visión en alta<br />definición a tu medida</>}
        description="Lentes Shamir de talla digital con IA y Freeform para campos de visión más amplios, menos distorsión y máxima nitidez en todas las distancias."
        badgeLabel="Shamir"
        badgeText="Visión Perfecta · Toque Personal"
        ctaButtons={[
          { text: "Agenda tu evaluación", href: "#contacto", primary: true },
          { text: "Descubre la gama", href: "#productos" }
        ]}
        microDetails={["Tecnología Freeform", "Visual AI Engine™", "Personalización Total"]}
      />
      <Benefits />
      <VideoSection />
      <Stats />
      <ProductCatalog />
      <Testimonials />
      <CTASection />
      <FindOpticalStore />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
