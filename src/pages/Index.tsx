import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import VideoSection from "@/components/VideoSection";
import Stats from "@/components/Stats";
import ExperienceDifference from "@/components/ExperienceDifference";
import LensSelector from "@/components/LensSelector";
import Testimonials from "@/components/Testimonials";
import AddOns from "@/components/AddOns";
import JourneyTiles from "@/components/JourneyTiles";
import ProductRange from "@/components/ProductRange";
import SpecializedSections from "@/components/SpecializedSections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <VideoSection />
      <Stats />
      <ExperienceDifference />
      <LensSelector />
      <Testimonials />
      <AddOns />
      <JourneyTiles />
      <ProductRange />
      <SpecializedSections />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
