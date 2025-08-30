// import Image from "next/image"
// import Link from "next/link"

// export default function Filosofia() {
//   return (
//     <div className="min-h-screen relative bg-white">
//       {/* Background gradients - same as main page */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
//         <div className="absolute right-0 top-0 h-[500px] w-[500px] " />
//         <div className="absolute bottom-0 left-0 h-[500px] w-[500px] " />
//       </div>

//       <div className="relative z-10">
//         {/* Navigation back button */}
//         <div className="px-4 sm:px-6 lg:px-8 pt-8">
//           <div className="max-w-6xl mx-auto">
//             <Link
//               href="/"
//               className="inline-flex items-center text-white hover:text-[rgb(1,171,124)] transition-colors duration-300"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Volver al inicio
//             </Link>
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//               {/* Text content */}
//               <div className="space-y-6 sm:space-y-8">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white hover:bg-gradient-to-r">
//                   Nuestra Filosofía
//                 </h1>

//                 <div className="space-y-6 text-base sm:text-lg leading-relaxed text-white">
//                   <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
//                     Acompañamos a las marcas y organizaciones en sus procesos de toma de decisiones estratégicas,
//                     transformando los insights en accionables que impactan en sus objetivos.
//                   </p>

//                   <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
//                     Nuestra misión es tender puentes entre los datos y la comprensión profunda del mercado. Trabajamos
//                     desde una mirada integral, donde se entrelazan dinámicas humanas, patrones culturales y
//                     comportamiento colectivo.
//                   </p>

//                   <p className="hover:bg-gradient-to-r hover:from-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text transition-all duration-300">
//                     Entendemos que detrás de cada decisión existen factores racionales y emocionales. Nuestra
//                     metodología permite revelar estos patrones ocultos y convertirlos en oportunidades concretas para
//                     rediseñar estrategias, innovar servicios y conectar genuinamente con las audiencias.
//                   </p>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="relative">
//                 <div className="relative w-full h-[350px] sm:h-[350px] lg:h-[350px] shadow-2xl">
//                   <Image
//                     src="/filosofia.jpg"
//                     alt="Nuestra filosofía - Metodología de investigación"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from "next/image"
import Link from "next/link"

export default function Filosofia() {
  return (
    <section className="bg-white">
      <div className="relative isolate py-12 sm:py-16 lg:py-20 min-h-screen">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
          <div className="absolute right-0 top-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-[rgb(1,171,124)]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-[rgb(1,171,124)]/5 blur-[100px]" />
        </div>

        <div className="relative z-10">
          {/* Botón volver */}
          <div className="px-4 sm:px-6 lg:px-8 pt-8">
            <div className="max-w-6xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center text-gray-700 hover:text-[rgb(1,171,124)] transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al inicio
              </Link>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Texto */}
                <div className="space-y-6 sm:space-y-8">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                    Nuestra Filosofía
                  </h1>

                  <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                    <p>
                      Acompañamos a las marcas y organizaciones en sus procesos de toma de decisiones estratégicas,
                      transformando los insights en accionables que impactan en sus objetivos.
                    </p>

                    <p>
                      Nuestra misión es tender puentes entre los datos y la comprensión profunda del mercado. Trabajamos
                      desde una mirada integral, donde se entrelazan dinámicas humanas, patrones culturales y
                      comportamiento colectivo.
                    </p>

                    <p>
                      Entendemos que detrás de cada decisión existen factores racionales y emocionales. Nuestra
                      metodología permite revelar estos patrones ocultos y convertirlos en oportunidades concretas para
                      rediseñar estrategias, innovar servicios y conectar genuinamente con las audiencias.
                    </p>
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative">
                  <div className="relative w-full h-[350px] sm:h-[350px] lg:h-[350px] shadow-2xl rounded-lg overflow-hidden">
                    <Image
                      src="/filosofia.jpg"
                      alt="Nuestra filosofía - Metodología de investigación"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}
