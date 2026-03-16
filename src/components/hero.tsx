import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/danes-01.png')",
          backgroundPosition: "center top 10%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="text-accent font-bold text-lg mb-4 tracking-wider animate-fade-in">
            DISCIPLINA • RESPETO • SUPERACIÓN
          </div>
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-balance text-foreground animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            SIN RYONG KWAN🐉
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-2 text-foreground/90 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Taekwondo en Villa Soldati
          </p>
          <p
            className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Descubre el arte marcial del taekwondo. Fortalece tu cuerpo,
            disciplina tu mente y alcanza tu máximo potencial con nosotros.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <a
                href="https://www.instagram.com/sinryongkwan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clase de Prueba
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-transparent transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            >
              <a href="#horarios">Ver Horarios</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/20 blur-3xl rounded-full animate-pulse-slow" />
    </section>
  );
}
