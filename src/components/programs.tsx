import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Zap, Trophy, Target } from "lucide-react"

const programs = [
  {
    icon: Users,
    title: "Niños (5-12 años)",
    description: "Desarrollo físico y mental a través del taekwondo. Mejora la concentración, disciplina y confianza.",
    features: ["Clases 3x semana", "Cinturones progresivos", "Torneos escolares"],
  },
  {
    icon: Zap,
    title: "Adolescentes",
    description: "Técnicas avanzadas y preparación para competiciones. Énfasis en respeto y liderazgo.",
    features: ["Entrenamiento intensivo", "Competencias regionales", "Defensa personal"],
  },
  {
    icon: Trophy,
    title: "Adultos",
    description: "Fitness, defensa personal y crecimiento personal. Adaptado a todos los niveles.",
    features: ["Horarios flexibles", "Acondicionamiento físico", "Técnicas tradicionales"],
  },
  {
    icon: Target,
    title: "Competición",
    description: "Entrenamiento de élite para atletas competitivos. Preparación para torneos nacionales.",
    features: ["Entrenamiento personalizado", "Estrategia de combate", "Apoyo nutricional"],
  },
]

export function Programs() {
  return (
    <section id="programas" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-foreground">Nuestros Programas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos programas adaptados para todas las edades y niveles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <program.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl transition-colors duration-300 group-hover:text-primary">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm transition-transform duration-300 hover:translate-x-1"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

