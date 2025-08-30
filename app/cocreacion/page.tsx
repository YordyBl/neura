

import Link from "next/link"

export default function CocrearPage() {
  const servicios = [
    { title: "DESIGN THINKING" },
    { title: "BUSSINES MODEL CANVAS"},
    { title: "LEAN UX" },
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
                METODOLOGÍAS CUANTITATIVAS
              </h2>
            </header>

            {/* Intro */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
              <div className="flex-1">
                <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                 Las ideas surgen antes que las necesidades se formulen claramente, y pueden tomar forma cuando se combinan la creatividad del consumidor con el conocimiento técnico de especialistas. A través de talleres colaborativos y metodologías como el design thinking, facilitamos procesos para explorar nuevas posibilidades y traducirlas en acciones concretas y relevantes
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
