

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Nosotros() {
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
        <section id="nosotros" className="border-b">

            <div className="relative isolate py-12 sm:py-16 lg:py-20">
            {/* Background gradients */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                        <div className="absolute right-0 top-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-blue-500/10 blur-[100px]" />
                        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-purple-500/10 blur-[100px]" />
                    </div>

                <div className="relative z-10">
                    {/* Hero Section */}
                    <div className="pb-2 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                            ¿Quienes somos?
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 sm:mb-8 text-white hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                            Neura Sprint, Consultora peruana de investigación de mercados
                        </p>

                        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-white">
                            <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                            Somos un equipo de expertos en Investigación de mercados, con varios años de experiencia en el
                            mercado.
                            Nuestro compromiso es comprender a tu marca para diseñar y ejecutar estrategias rentables y
                            sostenibles.
                            </p>
                            {/* <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                            Contamos con un equipo especializado en la recolección, análisis e integración de información,
                            aplicando metodologías rigurosas y herramientas digitales que combinan agilidad y profundidad. Nuestro
                            enfoque permite formular y responder preguntas relevantes para entender mejor las realidades que
                            investigamos.
                            </p> */}
                            {/* <p className="font-semibold text-white hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
                            Nuestro compromiso es comprender a tu marca para diseñar y ejecutar estrategias rentables y
                            sostenibles.
                            </p> */}
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Services Cards Section */}
                    <div className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

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

                            <CardContent className="relative z-10 p-4 sm:p-6 lg:p-8">
                                <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                                <h3 className="text-lg sm:text-xl font-bold leading-tight text-white group-hover:bg-gradient-to-r group-hover:from-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text transition-all duration-300">
                                    {service.title}
                                </h3>
                                    <p className="text-sm sm:text-base leading-relaxed text-white group-hover:bg-gradient-to-r group-hover:from-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text transition-all duration-300">
                                    {service.description}
                                </p>
                                </div>
                            </CardContent>
                            </Card>
                        ))}
                        </div>
                    </div>
                    </div> 
                    <div className="flex justify-center mt-8">
                    <Link href="/filosofia">
                        <Button size="lg" className="flex items-center">
                        Ver más...
                        <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    </div>
                    
                </div>
            </div>

     
    </section>
  )
}

