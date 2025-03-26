import React from "react"
import { Button } from "@/components/ui/button"


export default function Navigation() {
  return (
    <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              <span className="text-green-600">Aupus</span> Energia
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Sobre", "Soluções", "Instrumentos", "História", "Contato"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-2">Fale Conosco</Button>
        </div>
      </nav>
  )
}