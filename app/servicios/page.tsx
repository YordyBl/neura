// // export default function ServiciosPage() {
// //   const servicios = [
// //     {
// //       title: "PRETEST Y POSTEST",
// //       description: "Evaluar el impacto de una acción antes y después de su implementación",
// //     },
// //     {
// //       title: "PRUEBAS DE PRODUCTO",
// //       description: "Medir la aceptación y percepción de un producto antes de lanzarlo.",
// //     },
// //     {
// //       title: "PROYECTOS AD HOC",
// //       description: "Estudiar hechos a medida según necesidades específicas.",
// //     },
// //     {
// //       title: "CUSTOMER JOURNEY MAP",
// //       description: "Mapear el viaje del consumidor y sus puntos de dolor",
// //     },
// //     {
// //       title: "ESTUDIOS UX",
// //       description: "Evaluar la usabilidad y experiencia de usuario en plataformas digitales",
// //     },
// //     {
// //       title: "NPS",
// //       description: "Medir la probabilidad de recomendación de la marca o un producto en específico.",
// //     },
// //     {
// //       title: "ESTUDIO DE SATISFACCIÓN",
// //       description: "Miden el nivel de satisfacción de usuarios o clientes",
// //     },
// //     {
// //       title: "ESTUDIO DE IMAGEN & POSICIONAMIENTO",
// //       description: "Identifican cómo es percibida una marca o institución.",
// //     },
// //     {
// //       title: "ESTUDIO DE PERFIL DEL CONSUMIDOR",
// //       description: "Describe quién es el consumidor y cómo se comporta.",
// //     },
// //     {
// //       title: "OUTSOURCING DE CAMPO",
// //       description:
// //         "Soporte operativo completo para estudios cualitativos y cuantitativos: reclutamiento de perfiles, aplicación de instrumentos (encuestas, pruebas de producto, entrevistas), procesamiento estadístico, codificación y sistematización de información cualitativa, así como el desarrollo de dashboards automatizados en Power Bi.",
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen relative overflow-hidden">
// //       {/* Background layers matching main page */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
// //       <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>
// //       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
// //       <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

// //       {/* Content */}
// //       <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
// //         {/* Header */}
// //         <div className="mb-12 sm:mb-16">
// //           <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 text-center hover:bg-gradient-to-r hover:from-white hover:via-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text hover:text-transparent transition-all duration-300">
// //              SERVICIOS
// //           </h1>
// //           <div className="max-w-4xl mx-auto">
// //             <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed hover:bg-gradient-to-r hover:from-white hover:via-[rgba(1,171,124,0.35)] hover:to-transparent hover:bg-clip-text hover:text-transparent transition-all duration-300">
// //               Hoy en día las marcas necesitan una sintonía y conexión total con los consumidores, con sus estilos de
// //               vida, personalidad, necesidades y emociones de tal modo que se logre la mejor experiencia con la marca.
// //               Entender a los consumidores, sus necesidades es clave para identificar insights que apoyen el branding, la
// //               innovación y la comunicación de las marcas.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Services Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// //           {servicios.map((servicio, index) => (
// //             <div
// //               key={index}
// //               className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(1,171,124,0.35)]/20"
// //             >
// //               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //               <div className="relative z-10">
// //                 <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// //                   {servicio.title}
// //                 </h3>
// //                 <p className="text-sm sm:text-base text-white leading-relaxed group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// //                   {servicio.description}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Back to home button */}
// //         <div className="text-center mt-12 sm:mt-16">
// //           <a
// //             href="/"
// //             className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-[rgba(1,171,124,0.35)] border border-white/20 hover:border-[rgba(1,171,124,0.5)] rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(1,171,124,0.35)]/30"
// //           >
// //             ← Volver al inicio
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// export default function ServiciosPage() {
//   const servicios = [
//     {
//       title: "PRETEST Y POSTEST",
//       description: "Evaluar el impacto de una acción antes y después de su implementación",
//     },
//     {
//       title: "PRUEBAS DE PRODUCTO",
//       description: "Medir la aceptación y percepción de un producto antes de lanzarlo.",
//     },
//     {
//       title: "PROYECTOS AD HOC",
//       description: "Estudiar hechos a medida según necesidades específicas.",
//     },
//     {
//       title: "CUSTOMER JOURNEY MAP",
//       description: "Mapear el viaje del consumidor y sus puntos de dolor",
//     },
//     {
//       title: "ESTUDIOS UX",
//       description: "Evaluar la usabilidad y experiencia de usuario en plataformas digitales",
//     },
//     {
//       title: "NPS",
//       description: "Medir la probabilidad de recomendación de la marca o un producto en específico.",
//     },
//     {
//       title: "ESTUDIO DE SATISFACCIÓN",
//       description: "Miden el nivel de satisfacción de usuarios o clientes",
//     },
//     {
//       title: "ESTUDIO DE IMAGEN & POSICIONAMIENTO",
//       description: "Identifican cómo es percibida una marca o institución.",
//     },
//     {
//       title: "ESTUDIO DE PERFIL DEL CONSUMIDOR",
//       description: "Describe quién es el consumidor y cómo se comporta.",
//     },
//     {
//       title: "OUTSOURCING DE CAMPO",
//       description:
//         "Soporte operativo completo para estudios cualitativos y cuantitativos: reclutamiento de perfiles, aplicación de instrumentos (encuestas, pruebas de producto, entrevistas), procesamiento estadístico, codificación y sistematización de información cualitativa, así como el desarrollo de dashboards automatizados en Power Bi.",
//     },
//   ]

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Background layers matching main page */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
//       <div className="absolute inset-0 bg-gradient-to-tr"></div>
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  via-transparent to-transparent"></div>
//       <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
//         {/* Header */}

//        {/* Back to home button */}
//         <div className="text-start mt-12 sm:mt-16">
//           <a
//             href="/"
//             className="inline-flex items-start px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-[rgba(1,171,124,0.35)] border border-white/20 hover:border-[rgba(1,171,124,0.5)] rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(1,171,124,0.35)]/30"
//           >
//             ← Volver al inicio
//           </a>
//         </div>

//       <section className="mb-12 sm:mb-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <header className="mb-8 sm:mb-12 text-start">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight">
//               Servicios
//             </h2>
//           </header>

//           <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//             <div className="flex-1">
//               <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
//                 Hoy en día las marcas necesitan una sintonía y conexión total con los consumidores, con sus estilos de
//                 vida, personalidad, necesidades y emociones, de tal modo que se logre la mejor experiencia con la
//                 marca. Entender a los consumidores y sus necesidades es clave para identificar <span className="font-semibold text-white">insights</span> que apoyen el
//                 branding, la innovación y la comunicación de las marcas.
//               </p>
//             </div>

//             <div className="flex-1 flex justify-center lg:justify-end">
//               <img
//                 src="/mercados.avif"
//                 alt="Ilustración sobre investigación de mercado"
//                 className="w-full max-w-md h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {servicios.map((servicio, index) => (
//             <div
//               key={index}
//               className={`group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(1,171,124,0.35)]/20 ${
//                 index === servicios.length - 1 ? "lg:col-span-3" : ""
//               }`}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="relative z-10">
//                 <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                   {servicio.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-white leading-relaxed group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[rgba(1,171,124,0.35)] group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                   {servicio.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

       
//       </div>
//     </div>
//   )
// }


import Link from "next/link"

export default function ServiciosPage() {
  const servicios = [
    { title: "PRETEST Y POSTEST", description: "Evaluar el impacto de una acción antes y después de su implementación" },
    { title: "PRUEBAS DE PRODUCTO", description: "Medir la aceptación y percepción de un producto antes de lanzarlo." },
    { title: "PROYECTOS AD HOC", description: "Estudiar hechos a medida según necesidades específicas." },
    { title: "CUSTOMER JOURNEY MAP", description: "Mapear el viaje del consumidor y sus puntos de dolor" },
    { title: "ESTUDIOS UX", description: "Evaluar la usabilidad y experiencia de usuario en plataformas digitales" },
    { title: "NPS", description: "Medir la probabilidad de recomendación de la marca o un producto en específico." },
    { title: "ESTUDIO DE SATISFACCIÓN", description: "Miden el nivel de satisfacción de usuarios o clientes" },
    { title: "ESTUDIO DE IMAGEN & POSICIONAMIENTO", description: "Identifican cómo es percibida una marca o institución." },
    { title: "ESTUDIO DE PERFIL DEL CONSUMIDOR", description: "Describe quién es el consumidor y cómo se comporta." },
    { 
      title: "OUTSOURCING DE CAMPO", 
      description: "Soporte operativo completo para estudios cualitativos y cuantitativos: reclutamiento de perfiles, aplicación de instrumentos (encuestas, pruebas de producto, entrevistas), procesamiento estadístico, codificación y sistematización de información cualitativa, así como el desarrollo de dashboards automatizados en Power Bi."
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back link (like Filosofía page) */}
        <div className="px-4 sm:px-6 lg:px-8 pt-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-[rgb(1,171,124)] transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </div>

        {/* Main section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 sm:mb-16 text-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight">
                Servicios
              </h2>
            </header>

            {/* Intro */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
              <div className="flex-1">
                <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                  Hoy en día las marcas necesitan una sintonía y conexión total con los consumidores, con sus estilos de
                  vida, personalidad, necesidades y emociones, de tal modo que se logre la mejor experiencia con la
                  marca. Entender a los consumidores y sus necesidades es clave para identificar <span className="font-semibold text-white">insights</span> que apoyen el
                  branding, la innovación y la comunicación de las marcas.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/mercados.avif"
                  alt="Ilustración sobre investigación de mercado"
                  className="w-full max-w-md h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className={`group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(1,171,124,0.35)]/20 ${
                    index === servicios.length - 1 ? "lg:col-span-3" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                      {servicio.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {servicio.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
