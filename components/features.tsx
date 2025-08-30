import { BarChart3, Users, Target, TrendingUp } from "lucide-react"

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
    <section className="w-full bg-white py-24 md:py-32" id="servicios">
      {/* Contenido centrado */}
      <div className="container space-y-16">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black ">
            Servicios Especializados
          </h2>
          <p className="mt-4 text-gray-700 sm:text-lg hover:text-black transition-colors duration-300">
            Descubre cómo Neura Sprint puede transformar tu estrategia de negocio con investigación de mercado de
            vanguardia.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-lg border border-gray-200 bg-black p-8  transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(1,171,124)]/20 hover:-translate-y-1 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(1,171,124)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <feature.icon className="h-8 w-8 text-[rgb(1,171,124)] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-[rgb(1,171,124)] group-">
                    {feature.name}
                  </h3>
                </div>
                <p className="mt-2 text-white group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
