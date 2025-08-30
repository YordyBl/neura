import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href="https://wa.me/51998022260" // cambia por tu número en formato internacional sin "+"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[rgb(1,171,124)] text-white shadow-lg hover:bg-[rgb(1,150,108)] transition-colors"
      >
        <FaWhatsapp className="w-8 h-8" />
      </Link>
    </div>
  )
}
