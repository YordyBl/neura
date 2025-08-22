// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// export default function Clientes() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   const clientes = [
//     {
//       id: 1,
//       nombre: "NGR",
//       logo: "/ngr_logo.png",
//     },
//     {
//       id: 2,
//       nombre: "BEMBOS",
//       logo: "/Bembos_logo15.png",
//     },
//     {
//       id: 3,
//       nombre: "POPEYES",
//       logo: "/popeye_logo.png",
//     },
//     {
//       id: 4,
//       nombre: "PAPA JHONS",
//       logo: "/papas_jhons_logo.png",
//     },
//     {
//       id: 5,
//       nombre: "CHINA WOK",
//       logo: "/china_wok_logo.png",
//     },
//     {
//       id: 6,
//       nombre: "DON BELISARIO",
//       logo: "/don_belisario.png",
//     },
//     {
//       id: 7,
//       nombre: "DUNKIN DONOUTS",
//       logo: "/donas_logo.png",
//     },
//     {
//       id: 8,
//       nombre: "TASA",
//       logo: "/tasa_logo.png",
//     },
//         {
//       id: 9,
//       nombre: "Caritas del Perú",
//       logo: "/caritas_peru.png",
//     },

//         {
//       id: 10,
//       nombre: "Fh Perú",
//       logo: "/fh_peru.png",
//     },
//      {
//       id: 10,
//       nombre: "HXN",
//       logo: "/hxn_logo.png",
//     },
//     {
//       id: 10,
//       nombre: "Asociación de Artesanos Tombagan",
//       logo: "/artesanos_logo.png",
//     },
//   ]

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % clientes.length)
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying, clientes.length])

//   const goToPrevious = () => {
//     setIsAutoPlaying(false)
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + clientes.length) % clientes.length)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const goToNext = () => {
//     setIsAutoPlaying(false)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % clientes.length)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   return (
//     <section id="clientes" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent hover:from-white hover:via-gray-100 hover:to-white transition-all duration-300">
//             Nuestros Clientes
//           </h2>
//           <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
//             Empresas líderes que confían en nuestros servicios de investigación de mercado
//           </p>
//         </div>

//         {/* Clients Carousel */}
//         <div className="relative">
//           <button
//             onClick={goToPrevious}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[rgba(1,171,124,0.35)] backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
//             aria-label="Cliente anterior"
//           >
//             <ChevronLeft className="w-6 h-6 text-white group-hover:text-white" />
//           </button>

//           <button
//             onClick={goToNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[rgba(1,171,124,0.35)] backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
//             aria-label="Cliente siguiente"
//           >
//             <ChevronRight className="w-6 h-6 text-white group-hover:text-white" />
//           </button>

//           <div className="overflow-hidden mx-12">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//             >
//               {[...clientes, ...clientes.slice(0, 3)].map((cliente, index) => (
//                 <div key={`${cliente.id}-${index}`} className="flex-shrink-0 w-1/3 px-3">
//                   <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 hover:scale-105 group">
//                     <div className="text-center">
//                       <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-white hover:bg-clip-text hover:text-transparent transition-all duration-300">
//                         {cliente.nombre}
//                       </h3>
//                       <div className="flex justify-center items-center h-20 md:h-24">
//                         <img
//                           src={cliente.logo || "/placeholder.svg"}
//                           alt={`Logo de ${cliente.nombre}`}
//                           className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-center mt-8 space-x-2">
//             {clientes.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setCurrentIndex(index)
//                   setIsAutoPlaying(false)
//                   setTimeout(() => setIsAutoPlaying(true), 5000)
//                 }}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[rgb(1,171,124)]" : "bg-white/30 hover:bg-white/50"
//                 }`}
//                 aria-label={`Ir al cliente ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
        
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
        
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Clientes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [cardsPerView, setCardsPerView] = useState(3)

    const clientes = [
    {
      id: 1,
      nombre: "NGR",
      logo: "/ngr_logo.png",
    },
    {
      id: 2,
      nombre: "BEMBOS",
      logo: "/Bembos_logo15.png",
    },
    {
      id: 3,
      nombre: "POPEYES",
      logo: "/popeye_logo.png",
    },
    {
      id: 4,
      nombre: "PAPA JHONS",
      logo: "/papas_jhons_logo.png",
    },
    {
      id: 5,
      nombre: "CHINA WOK",
      logo: "/china_wok_logo.png",
    },
    {
      id: 6,
      nombre: "DON BELISARIO",
      logo: "/don_belisario.png",
    },
    {
      id: 7,
      nombre: "DUNKIN DONOUTS",
      logo: "/donas_logo.png",
    },
    {
      id: 8,
      nombre: "TASA",
      logo: "/tasa_logo.png",
    },
        {
      id: 9,
      nombre: "Caritas del Perú",
      logo: "/caritas_peru.png",
    },

        {
      id: 10,
      nombre: "Fh Perú",
      logo: "/fh_peru.png",
    },
     {
      id: 10,
      nombre: "HXN",
      logo: "/hxn_logo.png",
    },
    {
      id: 10,
      nombre: "Asociación de Artesanos Tombagan",
      logo: "/artesanos_logo.png",
    },
  ]


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(3) // Desktop: 3 cards
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientes.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, clientes.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientes.length) % clientes.length)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientes.length)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section id="clientes" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent hover:from-white hover:via-gray-100 hover:to-white transition-all duration-300">
            Nuestros Clientes
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
            Empresas líderes que confían en nuestros servicios de investigación de mercado
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[rgba(1,171,124,0.35)] backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Cliente anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[rgba(1,171,124,0.35)] backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Cliente siguiente"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-white" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {[...clientes, ...clientes.slice(0, cardsPerView)].map((cliente, index) => (
                <div key={`${cliente.id}-${index}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 hover:scale-105 group">
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-white hover:bg-clip-text hover:text-transparent transition-all duration-300">
                        {cliente.nombre}
                      </h3>
                      <div className="flex justify-center items-center h-24 md:h-28 w-full">
                        <img
                          src={cliente.logo || "/placeholder.svg"}
                          alt={`Logo de ${cliente.nombre}`}
                          className="h-full w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {clientes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 5000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[rgb(1,171,124)]" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir al cliente ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
