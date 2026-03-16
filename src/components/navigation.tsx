import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sin Ryong Kwan Logo"
              width={50}
              height={50}
              className="transition-transform duration-300 hover:scale-110"
              loading="eager"
            />
            <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              <span className="text-primary">SIN RYONG</span> KWAN
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Inicio
            </a>
            <a
              href="#programas"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Programas
            </a>
            <a
              href="#instructores"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Instructores
            </a>
            <a
              href="#horarios"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Horarios
            </a>
            <a
              href="#galeria"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Galería
            </a>
            <a
              href="#novedades"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Novedades
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="#unete">Únete Ahora</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 flex flex-col gap-4">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#programas"
              className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Programas
            </a>
            <a
              href="#instructores"
              className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Instructores
            </a>
            <a
              href="#horarios"
              className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Horarios
            </a>
            <a
              href="#galeria"
              className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Galería
            </a>
            <a
              href="#novedades"
              className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Novedades
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full transition-all duration-300 hover:scale-105">
              <a href="#unete" onClick={() => setIsOpen(false)}>Únete Ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
