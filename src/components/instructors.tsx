import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

const instructors = [
  {
    name: "Kwan Yang Nim Marcelo Barreiros",
    rank: "7° Dan Cinturón Negro",
    specialty: "Director de la Escuela",
    experience: "35 años de experiencia",
    image: "/kwa-marcelo.png",
  },
];

export function Instructors() {
  return (
    <section id="instructores" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-foreground">
            Nuestro Maestro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estudiamos y entrenamos con nuestro director de la escuela para
            conservar, transmitir los valores y técnicas del taekwondo
            tradicional.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="w-full max-w-sm overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${
                      instructor.image || "/placeholder.svg"
                    }')`,
                    backgroundPosition: "center top 20%",
                  }}
                  role="img"
                  aria-label={instructor.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      {instructor.rank}
                    </span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{instructor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4 text-accent" />
                    <span className="text-sm">{instructor.specialty}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {instructor.experience}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
