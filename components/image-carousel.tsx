// // "use client"

// // import { useState, useEffect } from "react"
// // import { ChevronLeft, ChevronRight } from "lucide-react"
// // import { Button } from "@/components/ui/button"

// // const images = [
// //   {
// //     src: "/market-research-analysis.png",
// //     alt: "Equipo analizando datos de mercado",
// //     title: "Análisis Estratégico",
// //   },
// //   {
// //     src: "/business-meeting-presentation.png",
// //     alt: "Presentación de resultados de investigación",
// //     title: "Presentación de Insights",
// //   },
// //   {
// //     src: "/consumer-research-methods.png",
// //     alt: "Investigación de consumidores",
// //     title: "Investigación de Consumidores",
// //   },
// //   {
// //     src: "/competitive-analysis-dashboard.png",
// //     alt: "Dashboard de análisis competitivo",
// //     title: "Análisis Competitivo",
// //   },
// // ]

// // export default function ImageCarousel() {
// //   const [currentIndex, setCurrentIndex] = useState(0)

// //   const nextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
// //   }

// //   const prevSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
// //   }

// //   useEffect(() => {
// //     const interval = setInterval(nextSlide, 5000)
// //     return () => clearInterval(interval)
// //   }, [])

// //   return (
// //     <section className="container py-24 md:py-32">
// //       <div className="mx-auto max-w-[58rem] text-center mb-16">
// //         <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Nuestro Trabajo en Acción</h2>
// //         <p className="mt-4 text-muted-foreground sm:text-lg">
// //           Descubre cómo ayudamos a nuestros clientes a tomar decisiones informadas
// //         </p>
// //       </div>

// //       <div className="relative mx-auto max-w-4xl">
// //         <div className="relative overflow-hidden rounded-lg">
// //           <div
// //             className="flex transition-transform duration-500 ease-in-out"
// //             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// //           >
// //             {images.map((image, index) => (
// //               <div key={index} className="w-full flex-shrink-0">
// //                 <div className="relative">
// //                   <img
// //                     src={image.src || "/placeholder.svg"}
// //                     alt={image.alt}
// //                     className="w-full h-[400px] object-cover"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// //                   <div className="absolute bottom-4 left-4">
// //                     <h3 className="text-white text-xl font-semibold">{image.title}</h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Navigation buttons */}
// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
// //           onClick={prevSlide}
// //         >
// //           <ChevronLeft className="h-4 w-4" />
// //         </Button>
// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
// //           onClick={nextSlide}
// //         >
// //           <ChevronRight className="h-4 w-4" />
// //         </Button>

// //         {/* Dots indicator */}
// //         <div className="flex justify-center mt-6 space-x-2">
// //           {images.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`w-2 h-2 rounded-full transition-colors ${
// //                 index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
// //               }`}
// //               onClick={() => setCurrentIndex(index)}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// const images = [
//   { src: "/market-research-analysis.png", alt: "Equipo analizando datos de mercado", title: "Análisis Estratégico" },
//   { src: "/business-meeting-presentation.png", alt: "Presentación de resultados de investigación", title: "Presentación de Insights" },
//   { src: "/consumer-research-methods.png", alt: "Investigación de consumidores", title: "Investigación de Consumidores" },
//   { src: "/competitive-analysis-dashboard.png", alt: "Dashboard de análisis competitivo", title: "Análisis Competitivo" },
// ]

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => setCurrentIndex((i) => (i + 1) % images.length)
//   const prevSlide = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length)

//   useEffect(() => {
//     const id = setInterval(nextSlide, 5000)
//     return () => clearInterval(id)
//   }, [])

//   return (
//     <section className="container py-24 md:py-32">
//       <div className="mx-auto max-w-[58rem] text-center mb-16">
//         <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Nuestro Trabajo en Acción</h2>
//         <p className="mt-4 text-muted-foreground sm:text-lg">
//           Descubre cómo ayudamos a nuestros clientes a tomar decisiones informadas
//         </p>
//       </div>

//       {/* Limita el ancho en tablet y da un alto fluido con aspect ratio */}
//       <div className="relative mx-auto max-w-4xl">
//         <div className="relative overflow-hidden rounded-lg md:rounded-xl">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {images.map((image, index) => (
//               <div key={index} className="w-full flex-shrink-0">
//                 {/* Wrapper con relación de aspecto adaptable */}
//                 <div
//                   className="
//                     relative 
//                     aspect-[4/3] 
//                     sm:aspect-[16/9] 
//                     md:aspect-[3/2] 
//                     lg:aspect-[16/9]
//                   "
//                 >
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     // 100vw en móvil, ~800px en md, ~1024px en lg: mejor selección de tamaño
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1024px"
//                     className="object-cover object-center"
//                     priority={index === 0}
//                   />
//                   {/* Gradiente y título */}
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white text-lg sm:text-xl font-semibold drop-shadow">
//                       {image.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Botones: separa un poco del borde en tablet y eleva z-index */}
//         <Button
//           aria-label="Anterior"
//           variant="outline"
//           size="icon"
//           className="
//             absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
//             bg-background/80 backdrop-blur-sm 
//             hover:bg-background z-20
//           "
//           onClick={prevSlide}
//         >
//           <ChevronLeft className="h-4 w-4" />
//         </Button>

//         <Button
//           aria-label="Siguiente"
//           variant="outline"
//           size="icon"
//           className="
//             absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
//             bg-background/80 backdrop-blur-sm 
//             hover:bg-background z-20
//           "
//           onClick={nextSlide}
//         >
//           <ChevronRight className="h-4 w-4" />
//         </Button>

//         {/* Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               aria-label={`Ir al slide ${index + 1}`}
//               className={`w-2 h-2 rounded-full transition-colors ${
//                 index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
