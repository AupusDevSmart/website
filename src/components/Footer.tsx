import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-1 mb-4">
            <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-green-500">Aupus</span> Energia
            </span>
          </div>
          <p className="text-gray-400">Interligando você com o futuro! Energize-se!</p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#sobre" className="hover:text-green-400 transition-colors duration-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#soluções" className="hover:text-green-400 transition-colors duration-300">
                Soluções
              </a>
            </li>
            <li>
              <a href="#instrumentos" className="hover:text-green-400 transition-colors duration-300">
                Instrumentos
              </a>
            </li>
            <li>
              <a href="#história" className="hover:text-green-400 transition-colors duration-300">
                História
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-green-400 transition-colors duration-300">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Políticas</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                Cookies
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Inscreva-se para receber novidades e atualizações.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Seu email"
              className="px-4 py-2 rounded-l-md focus:outline-none flex-1 text-gray-900"
            />
            <Button className="bg-green-600 hover:bg-green-700 rounded-l-none rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m5 12 14 0" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Aupus Energia. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}