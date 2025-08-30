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
    <header className="sticky top-0 z-50 w-full border-gray-700 bg-black">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img
            src="/LOGO_PRINCIPAL_3-Photoroom.png"
            alt="Neura Sprint logo"
            className="h-6 w-auto"
          />
        </Link>

        <nav
          className={`${
            isMobile ? "hidden" : "flex"
          } flex-1 items-center space-x-6 text-sm font-medium`}
        >
          <Link
            href="#inicio"
            className="text-white transition-colors hover:text-[#01AB7C]"
          >
            Inicio
          </Link>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-white transition-colors hover:text-[#01AB7C]"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-white transition-colors hover:text-[#01AB7C]"
          >
            Servicios
          </button>
        </nav>

        <div
          className={`${
            isMobile ? "hidden" : "flex"
          } items-center space-x-4`}
        >
            <Link href="https://wa.me/51998022260" 
                  target="_blank"
                    rel="noopener noreferrer">
                      <Button
            size="sm"
            className="bg-[#01AB7C] text-white hover:bg-[#019768]"
          >
            Comenzar Proyecto
          </Button>
            </Link>

        </div>

        <div className={`${isMobile ? "flex" : "hidden"} ml-auto`}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-gray-800"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && isMobile && (
        <div className="border-t border-gray-700 bg-black">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              href="#inicio"
              className="text-sm font-medium text-white transition-colors hover:text-[#01AB7C]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-white transition-colors hover:text-[#01AB7C] text-left"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-white transition-colors hover:text-[#01AB7C] text-left"
            >
              Servicios
            </button>
            
            <div className="flex flex-col space-y-2 pt-2">
            <Link href="https://wa.me/51998022260" 
                  target="_blank"
                    rel="noopener noreferrer">
                      <Button
            size="sm"
            className="bg-[#01AB7C] text-white hover:bg-[#019768]"
          >
            Comenzar Proyecto
          </Button>
            </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
