import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function NosotrosPage() {
  const services = [
    {
      title: "CAPTACIÓN ESTRATÉGICA DE DATOS",
      description:
        "Recolectamos información clave desde múltiples fuentes (Big data, encuestas, entrevistas, monitoreo digital)",
    },
    {
      title: "ANÁLISIS Y GENERACIÓN DE INSIGHTS",
      description:
        "Desbloqueamos el significado detrás de los datos, identificando patrones de comportamiento, tendencias y motivaciones.",
    },
    {
      title: "COMUNICACIÓN ESTRATÉGICA DE INSIGHTS",
      description: "Traducimos la información en visualizaciones claras y estratégicas",
    },
    {
      title: "COMUNICACIÓN ESTRATÉGICA",
      description: "Aplicamos insights en estrategias efectivas, midiendo impacto y ajustando procesos",
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                NEURA SPRINT
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-8 text-white hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                Consultora peruana de investigación de mercados
              </p>

              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-white">
                <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                  Somos un equipo de expertos en Investigación de mercados, con varios años de experiencia en el
                  mercado.
                </p>
                <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                  Contamos con un equipo especializado en la recolección, análisis e integración de información,
                  aplicando metodologías rigurosas y herramientas digitales que combinan agilidad y profundidad. Nuestro
                  enfoque permite formular y responder preguntas relevantes para entender mejor las realidades que
                  investigamos.
                </p>
                <p className="font-semibold text-white hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                  Nuestro compromiso es comprender a tu marca para diseñar y ejecutar estrategias rentables y
                  sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border border-gray-200/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(1,171,124,0.35)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="relative z-10 p-8">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <h3 className="text-xl font-bold leading-tight text-white group-hover:bg-gradient-to-r group-hover:from-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="leading-relaxed text-white group-hover:bg-gradient-to-r group-hover:from-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text transition-all duration-300">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
