// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import Link from "next/link"

// export default function Hero() {
//   const scrollToSection = (sectionId: string) => {
//     const el = document.getElementById(sectionId)
//     if (el) el.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section className="bg-white">
//       <div className="container max-w-screen-2xl min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center space-y-8 px-4 text-center">
//         <div className="space-y-4 max-w-4xl">
//           <h1 className="bg-gradient-to-br from-black from-30% via-gray-800 to-gray-600 bg-clip-text text-transparent text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
//             Impulsa tu Negocio con
//             <br className="hidden sm:block" />
//             <span className="sm:hidden"> </span>
//             Neura Sprint
//           </h1>

//           <p className="mx-auto max-w-[42rem] text-base leading-relaxed text-gray-700 sm:text-lg sm:leading-7 md:text-xl md:leading-8">
//             Transformamos datos en decisiones estratégicas. Investigación de mercado avanzada, análisis de consumidores y
//             insights que potencian el crecimiento de tu empresa.
//           </p>
//         </div>

//         <div className="flex flex-col gap-4 sm:flex-row">
//           <Link
//             href="#servicios"
//             className="transition-colors hover:text-[rgb(1,171,124)]"
//             onClick={(e) => {
//               e.preventDefault()
//               scrollToSection("servicios")
//             }}
//           >
//             <Button 
//               size="lg" 
//               className="w-full sm:w-auto bg-[rgb(1,171,124)] hover:bg-[rgb(1,150,108)] text-white border-none"
//             >
//               Explorar Servicios
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-white">
      <div className="container max-w-screen-2xl min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center space-y-8 px-4 text-center">
        
        {/* Logo en lugar del h1 */}
        <div className="space-y-4 max-w-4xl flex flex-col items-center">
          <Image
            src="/LOGO_PRINCIPAL1.png"   // cambia por la ruta real de tu logo (por ejemplo en /public/logo.png)
            alt="Logo de Neura Sprint"
            width={500}       // ajusta tamaño
            height={300}      // ajusta tamaño
            priority          // carga prioritaria para mejor rendimiento
            className="mx-auto"
          />

          <p className="mx-auto max-w-[42rem] text-base leading-relaxed text-gray-700 sm:text-lg sm:leading-7 md:text-xl md:leading-8">
            Transformamos datos en decisiones estratégicas. Investigación de mercado avanzada, análisis de consumidores y
            insights que potencian el crecimiento de tu empresa.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#servicios"
            className="transition-colors hover:text-[rgb(1,171,124)]"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("servicios")
            }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-[rgb(1,171,124)] hover:bg-[rgb(1,150,108)] text-white border-none"
            >
              Explorar Servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
