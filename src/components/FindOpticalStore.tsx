import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Search, Navigation } from "lucide-react";

interface OpticalStore {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  distance?: string;
  featured?: boolean;
}

const stores: OpticalStore[] = [
  {
    id: 1,
    name: "Óptica Visual Centro",
    address: "Av. Insurgentes Sur 1234, Col. Del Valle",
    city: "Ciudad de México",
    phone: "+52 55 1234 5678",
    hours: "Lun-Vie 10:00-19:00, Sáb 10:00-15:00",
    distance: "0.5 km",
    featured: true
  },
  {
    id: 2,
    name: "Óptica Clarity",
    address: "Blvd. Manuel Ávila Camacho 567",
    city: "Ciudad de México",
    phone: "+52 55 2345 6789",
    hours: "Lun-Vie 9:00-20:00, Sáb 10:00-18:00",
    distance: "1.2 km"
  },
  {
    id: 3,
    name: "Centro Visual Premium",
    address: "Paseo de la Reforma 890",
    city: "Ciudad de México",
    phone: "+52 55 3456 7890",
    hours: "Lun-Vie 10:00-19:00, Sáb 10:00-14:00",
    distance: "2.1 km"
  },
  {
    id: 4,
    name: "Óptica Profesional",
    address: "Av. Universidad 456, Col. Narvarte",
    city: "Ciudad de México",
    phone: "+52 55 4567 8901",
    hours: "Lun-Sáb 10:00-19:00",
    distance: "3.5 km",
    featured: true
  },
  {
    id: 5,
    name: "Vista Total",
    address: "Periférico Sur 789",
    city: "Ciudad de México",
    phone: "+52 55 5678 9012",
    hours: "Lun-Vie 9:00-18:00, Sáb 10:00-15:00",
    distance: "4.8 km"
  },
  {
    id: 6,
    name: "Óptica Elite",
    address: "Av. Santa Fe 1010, Col. Santa Fe",
    city: "Ciudad de México",
    phone: "+52 55 6789 0123",
    hours: "Lun-Dom 10:00-21:00",
    distance: "6.2 km"
  }
];

const FindOpticalStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStores, setFilteredStores] = useState(stores);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredStores(stores);
    } else {
      const filtered = stores.filter(
        store =>
          store.name.toLowerCase().includes(query.toLowerCase()) ||
          store.address.toLowerCase().includes(query.toLowerCase()) ||
          store.city.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStores(filtered);
    }
  };

  return (
    <section id="opticas" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Distribuidores Autorizados</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Encuentra tu <span className="text-primary">Óptica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Localiza el distribuidor Shamir más cercano a ti y agenda tu evaluación visual personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative h-[500px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border">
            {/* Placeholder map with red pins */}
            <div className="absolute inset-0 bg-secondary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240861.32643259046!2d-99.26044755!3d19.390994849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1702500000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ópticas Shamir"
              />
            </div>
            
            {/* Red pin markers overlay */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">{stores.length} ópticas encontradas</span>
              </div>
            </div>
          </div>

          {/* Store List */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre, dirección o ciudad..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl"
              />
            </div>

            {/* Store Cards */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredStores.map((store) => (
                <Card 
                  key={store.id} 
                  className={`border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${store.featured ? 'ring-2 ring-primary/20' : ''}`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Red Pin Icon */}
                      <div className="flex-shrink-0 relative">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        {store.featured && (
                          <Badge className="absolute -top-2 -right-2 bg-primary text-white text-[10px] px-1.5">
                            ★
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground truncate">{store.name}</h3>
                          {store.distance && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Navigation className="h-3 w-3" />
                              {store.distance}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">{store.address}</p>
                        
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {store.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {store.hours}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-1" />
                        Llamar
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Navigation className="h-4 w-4 mr-1" />
                        Cómo llegar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredStores.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No se encontraron ópticas con esa búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindOpticalStore;
