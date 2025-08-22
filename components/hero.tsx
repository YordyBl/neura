"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="border-b">
      <div className="container max-w-screen-2xl min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <div className="space-y-4 max-w-4xl">
          <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-transparent text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Impulsa tu Negocio con
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Neura Sprint
          </h1>

          <p className="mx-auto max-w-[42rem] text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-7 md:text-xl md:leading-8">
            Transformamos datos en decisiones estratégicas. Investigación de mercado avanzada, análisis de consumidores y
            insights que potencian el crecimiento de tu empresa.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#servicios"
            className="transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("servicios")
            }}
          >
            <Button size="lg" className="w-full sm:w-auto">
              Explorar Servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}