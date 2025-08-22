"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 720)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* <span className="font-bold">Neura Sprint</span> */}
           <img src="/LOGO_PRINCIPAL_3-Photoroom.png" alt="Neura Sprint logo" className="h-4 w-100" />
        </Link>

        <nav className={`${isMobile ? "hidden" : "flex"} flex-1 items-center space-x-6 text-sm font-medium`}>
          <Link href="#inicio" className="transition-colors hover:text-primary">
            Inicio
          </Link>
          <button onClick={() => scrollToSection("nosotros")} className="transition-colors hover:text-primary">
            Nosotros
          </button>
          <button onClick={() => scrollToSection("servicios")} className="transition-colors hover:text-primary">
            Servicios
          </button>
          <Link href="/contacto" className="transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        <div className={`${isMobile ? "hidden" : "flex"} items-center space-x-4`}>
          <Link href="/contacto">
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Contacto</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Consulta Gratis
          </Button>
        </div>

        <div className={`${isMobile ? "flex" : "hidden"} ml-auto`}>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && isMobile && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium transition-colors hover:text-primary text-left"
            >
              Nosotros
            </button>
           <button onClick={() => scrollToSection("servicios")} className="text-sm font-medium transition-colors hover:text-primary text-left">
            Servicios
          </button>
            <Link
              href="#contacto"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Consulta Gratis
              </Button>

            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
