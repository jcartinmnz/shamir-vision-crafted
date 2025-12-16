import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para ayudarte a encontrar tus lentes perfectos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a
                      href="tel:+525500000000"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +52 55 0000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/50664706734"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +506 6470 6734
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <SiInstagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/shamircentroamerica/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @shamircentroamerica
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <SiFacebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Facebook</p>
                    <a
                      href="https://www.facebook.com/ShamirCentroamerica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Shamir Centroamérica
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:contacto@tudominio.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      contacto@tudominio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground">
                      Calle Ejemplo 123, CDMX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horarios</p>
                    <p className="text-muted-foreground">
                      Lun–Vie: 10:00–19:00
                    </p>
                    <p className="text-muted-foreground">Sáb: 10:00–15:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Juan Pérez" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+52 55 0000 0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lensType">Tipo de lente de interés</Label>
                <Select>
                  <SelectTrigger id="lensType">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="progressive">Progresivos</SelectItem>
                    <SelectItem value="monofocal">Monofocales</SelectItem>
                    <SelectItem value="occupational">Ocupacionales</SelectItem>
                    <SelectItem value="driver">Conducción</SelectItem>
                    <SelectItem value="sport">Deporte</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tus necesidades visuales..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
