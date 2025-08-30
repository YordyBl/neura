// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function CTA() {
//   return (
//     <section className="relative bg-white">
//       {/* Fondo (con leves ajustes para no competir con el texto) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 via-transparent to-gray-50/30" />
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[rgb(1,171,124)]/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[rgb(1,171,124)]/5 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10">
//         <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
//           <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black hover:text-[rgb(1,171,124)] transition-colors duration-300">
//             Metodologías
//           </h2>

//           <p className="max-w-[42rem] leading-normal text-gray-700 sm:text-xl sm:leading-8 hover:text-black transition-colors duration-300">
//             Hoy en día las marcas necesitan una sintonía y conexión total con los consumidores, con sus estilos de vida,
//             personalidad, necesidades y emociones de tal modo que se logre la mejor experiencia con la marca. Entender a
//             los consumidores, sus necesidades es clave para identificar insights que apoyen el branding, la innovación y
//             la comunicación de las marcas.
//           </p>

//           {/* Grid de métodos */}
//           <div
//             className="
//               mt-8 w-full max-w-4xl
//               flex flex-col md:flex-row justify-center items-stretch
//               md:divide-x md:divide-[rgb(1,171,124)]
//               max-[720px]:divide-y max-[720px]:divide-[rgb(1,171,124)]
//               rounded-xl overflow-hidden
//               bg-white border border-gray-200 shadow-lg
//             "
//           >
//             {/* Item */}
//             <div className="flex-1 text-center py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
//               <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[rgb(1,171,124)] text-white text-xl font-bold
//                               max-[720px]:w-10 max-[720px]:h-10 max-[720px]:text-lg">
//                 1
//               </div>
//               <Link href="/cualitativas">
//               <Button
//                 variant="link"
//                 className="text-black text-lg md:text-xl font-semibold no-underline hover:text-[rgb(1,171,124)] transition-colors duration-300
//                            max-[720px]:text-base"
//               >
//                 Cualitativas
//               </Button>
//               </Link>
              
//             </div>

//             {/* Item */}
//             <div className="flex-1 text-center py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
//               <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[rgb(1,171,124)] text-white text-xl font-bold
//                               max-[720px]:w-10 max-[720px]:h-10 max-[720px]:text-lg">
//                 2
//               </div>
//               <Link href="/cuantitativas">
//                <Button
//                 variant="link"
//                 className="text-black text-lg md:text-xl font-semibold no-underline hover:text-[rgb(1,171,124)] transition-colors duration-300
//                            max-[720px]:text-base"
//               >
//                 Cuantitativas
//               </Button>
//               </Link>
             
//             </div>

//             {/* Item */}
//             <div className="flex-1 text-center py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
//               <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[rgb(1,171,124)] text-white text-xl font-bold
//                               max-[720px]:w-10 max-[720px]:h-10 max-[720px]:text-lg">
//                 3
//               </div>
//               <Link href="/cocreacion">
              
//               <Button
//                 variant="link"
//                 className="text-black text-lg md:text-xl font-semibold no-underline hover:text-[rgb(1,171,124)] transition-colors duration-300
//                            max-[720px]:text-base"
//               >
//                 Co-crear y Diseñar
//               </Button>
//               </Link>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative bg-white">
      {/* Fondo (con leves ajustes para no competir con el texto) */}
      <div className="absolute inset-0   via-white to-gray-100" />
      <div className="absolute inset-0   via-transparent to-gray-50/30" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[rgb(1,171,124)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[rgb(1,171,124)]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black ">
            Metodologías
          </h2>

          <p className="max-w-[42rem] leading-normal text-gray-700 sm:text-xl sm:leading-8 hover:text-black transition-colors duration-300">
            Hoy en día las marcas necesitan una sintonía y conexión total con los consumidores, con sus estilos de vida,
            personalidad, necesidades y emociones de tal modo que se logre la mejor experiencia con la marca. Entender a
            los consumidores, sus necesidades es clave para identificar insights que apoyen el branding, la innovación y
            la comunicación de las marcas.
          </p>

          {/* Grid de métodos */}
          <div
            className="
              mt-8 w-full max-w-4xl
              flex flex-col md:flex-row justify-center items-stretch
              md:divide-x md:divide-[rgb(1,171,124)]
              max-[720px]:divide-y max-[720px]:divide-[rgb(1,171,124)]
              rounded-xl overflow-hidden
              bg-white border border-gray-200 shadow-lg
            "
          >
            {/* Item */}
            <div className="flex-1 text-center py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[rgb(1,171,124)] text-white text-xl font-bold
                              max-[720px]:w-10 max-[720px]:h-10 max-[720px]:text-lg">
                1
              </div>
              <Button
                className="text-black text-lg md:text-xl font-semibold no-underline hover:text-[rgb(1,171,124)] transition-colors duration-300
                           max-[720px]:text-base"
              >
                Cualitativas
              </Button>
              
            </div>

            {/* Item */}
            <div className="flex-1 text-center py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[rgb(1,171,124)] text-white text-xl font-bold
                              max-[720px]:w-10 max-[720px]:h-10 max-[720px]:text-lg">
                2
              </div>
               <Button
                className="text-black text-lg md:text-xl font-semibold no-underline hover:text-[rgb(1,171,124)] transition-colors duration-300
                           max-[720px]:text-base"
              >
                Cuantitativas
              </Button>
             
            </div>

            {/* Item */}
            <div className="flex-1 text-center py-8 px-6 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[rgb(1,171,124)] text-white text-xl font-bold
                              max-[720px]:w-10 max-[720px]:h-10 max-[720px]:text-lg">
                3
              </div>
              
              <Button
                className="text-black text-lg md:text-xl font-semibold no-underline hover:text-[rgb(1,171,124)] transition-colors duration-300
                           max-[720px]:text-base"
              >
                Co-crear y Diseñar
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
