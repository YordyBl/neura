import { BarChart3, Users, Target, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
const features = [
  {
    name: "Análisis de Mercado",
    description: "Estudios profundos del mercado para identificar oportunidades y tendencias emergentes.",
    icon: BarChart3,
  },
  {
    name: "Investigación de Consumidores",
    description: "Comprende a tu audiencia con análisis detallados de comportamiento y preferencias.",
    icon: Users,
  },
  {
    name: "Estrategia Competitiva",
    description: "Análisis de la competencia para posicionar tu marca de manera efectiva en el mercado.",
    icon: Target,
  },
  {
    name: "Proyecciones de Crecimiento",
    description: "Modelos predictivos y análisis de tendencias para planificar el futuro de tu negocio.",
    icon: TrendingUp,
  },
]

export default function Features() {
  return (
    <section id="servicios" className="border-b">
      <div  className="servicios container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Servicios Especializados</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubre cómo Neura Sprint puede transformar tu estrategia de negocio con investigación de mercado de
          vanguardia.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[58rem] text-center">
     <Link href="/servicios" className="w-full sm:w-auto">
      <Button size="lg" className="w-full sm:w-auto">
        Ver más...
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
      </div>

      </div>
     
    </section>
  )
}
