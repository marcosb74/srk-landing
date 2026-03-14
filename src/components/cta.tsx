import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowRight, Instagram } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <Card className="border-4 border-primary mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              Comenza tu cambio hoy
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              {
                "Unite a Sin Ryong Kwan y descubri como el taekwondo puede transformar tu vida. Tu primera clase es completamente gratis."
              }
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7"
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=1234567890&text=Hola%21+Me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+Sin+Ryong+Kwan&type=phone_number&app_absent=0",
                  "_blank"
                );
              }}
            >
              Contactános 📞
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Teléfono
              </h3>
              <p className="text-muted-foreground">11 6726-5483</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Instagram
              </h3>
              <p className="text-muted-foreground">
                <a
                  href="https://www.instagram.com/sinryongkwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @sinryongkwan
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Ubicación
              </h3>
              <p className="text-muted-foreground">
                Av. Gral. Francisco Fernández de la Cruz 3342, Villa Soldati
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Sin Ryong Kwan. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
}
