import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Lunes a Viernes",
    classes: [
      {
        time: "17:00 - 19:00",
        class: "Niños Principiantes - Todas las edades",
      },
      {
        time: "20:00 - 21:00",
        class: "Niños Intermedios",
        level: "Adolescentes y Adultos",
      },
    ],
  },

  {
    day: "Sábados",
    classes: [
      {
        time: "10:15 - 12:00",
        class: "Adultos y Adolescentes avanzados",
      },
    ],
  },
];

export function Schedule() {
  return (
    <section id="horarios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-foreground">
            Horarios de Clases
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Encontrá el horario adecuado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schedule.map((daySchedule, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  {daySchedule.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {daySchedule.classes.map((classInfo, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-b-0">
                      <div className="font-semibold text-foreground mb-1">
                        {classInfo.time}
                      </div>
                      <div className="text-foreground font-medium">
                        {classInfo.class}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {classInfo.level}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {
              "¿No encuentras un horario que te funcione? Contáctanos para opciones personalizadas."
            }
          </p>
        </div> */}
      </div>
    </section>
  );
}
