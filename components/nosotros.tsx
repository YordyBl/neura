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
        <section id="nosotros" className="bg-white">

            <div className="relative isolate py-12 sm:py-16 lg:py-20">
            {/* Background gradients */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
                        <div className="absolute right-0 top-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-[rgb(1,171,124)]/10 blur-[100px]" />
                        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-[rgb(1,171,124)]/5 blur-[100px]" />
                    </div>

                <div className="relative z-10">
                    {/* Hero Section */}
                    <div className="pb-2 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black  duration-300">
                            ¿Quienes somos?
                        </h2>
                    

                        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                            <p className=" duration-300">
                            Somos un equipo de expertos en Investigación de mercados, con varios años de experiencia en el
                            mercado.
                            Nuestro compromiso es comprender a tu marca para diseñar y ejecutar estrategias rentables y
                            sostenibles.
                            </p>
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
                            className="relative overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white"
                            >
                            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(1,171,124)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <CardContent className="relative z-10 p-4 sm:p-6 lg:p-8">
                                <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                                <h3 className="text-lg sm:text-xl font-bold leading-tight text-black group- duration-300">
                                    {service.title}
                                </h3>
                                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 group-hover:text-black transition-all duration-300">
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
                        <Button 
                          size="lg" 
                          className="flex items-center bg-[rgb(1,171,124)] hover:bg-[rgb(1,150,108)] text-white border-none"
                        >
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