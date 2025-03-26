"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Globe, Mail, MapPin, Phone } from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const solutions = [
    {
      id: "projetos",
      title: "Projetos e Obras",
      image: "/projetos.png",
      description:
        "Atuamos desde estudos elétricos e análises de viabilidade até projetos de usinas fotovoltaicas, subestações de até 138 kV e sistemas de automação.",
      subtext: "Executamos obras completas com excelência, unindo tecnologia e eficiência.",
      items: [
        "Estudos de viabilidade técnica para novos projetos",
        "Projetos de subestações 13,8kV até 138kV",
        "Projetos de usina solar fotovoltaica",
        "Execução de obra de subestações de pequeno, médio e grande porte",
      ],
    },
    {
      id: "manutencao",
      title: "Manutenção",
      image: "/manutencao.png",
      description:
        "Realizamos serviços especializados de manutenção preventiva e corretiva em equipamentos de alta e média tensão, garantindo maior confiabilidade e vida útil.",
      subtext:
        "Nossa equipe técnica é altamente qualificada e utiliza equipamentos de última geração para diagnósticos precisos.",
      items: [
        "Manutenção em subestações de energia",
        "Termografia e análise preditiva",
        "Manutenção em sistemas fotovoltaicos",
        "Ensaios e comissionamento de equipamentos elétricos",
        "Manutenção em redes de distribuição",
      ],
    },
    {
      id: "gestao",
      title: "Gestão de Energia",
      image: "/gestao.png",
      description:
        "Oferecemos soluções completas para gestão energética, ajudando sua empresa a reduzir custos e otimizar o consumo de energia com foco em sustentabilidade.",
      subtext: "Nossos sistemas de monitoramento em tempo real permitem decisões rápidas e eficientes.",
      items: [
        "Análise de contas e faturas de energia",
        "Migração para o mercado livre de energia",
        "Eficiência energética e redução de consumo",
        "Monitoramento em tempo real de parâmetros elétricos",
        "Descarbonização e soluções sustentáveis",
      ],
    },
  ]

  const instruments = [
    "TTR, MEGOMETRO 20 kV",
    "RESISTIVÍMETRO",
    "ANALISADOR ENERGIA",
    "MALA TESTE",
    "SENSORES DE TENSÃO",
    "VARAS DE MANOBRA",
    "ATERRAMENTOS",
    "MULT TESTE 1500Vcc",
  ]

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0A1633] opacity-[0.03] z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          </div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Soluções em Energia
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                Interligando você com o <span className="text-green-600">futuro</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Soluções de energia inovadoras e sustentáveis para transformar o seu negócio e impulsionar o seu
                crescimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-8 py-6 text-lg">
                  Conheça nossas soluções
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 rounded-md px-8 py-6 text-lg"
                >
                  Fale com um especialista
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div>
                  <div className="text-green-600 font-bold">+500</div>
                  <div className="text-gray-600 text-sm">Clientes satisfeitos</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/public/fazenda.png"
                  height={600}
                  width={800}
                  alt="Energia Sustentável"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-white text-xl font-bold">Energia Sustentável</div>
                  <div className="text-green-300 text-sm">Soluções que respeitam o meio ambiente</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-green-600 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3000+", label: "MW em projetos" },
              { value: "500+", label: "Clientes atendidos" },
              { value: "50+", label: "Profissionais" },
              { value: "4", label: "Anos de excelência" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Quem Somos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              Sobre a <span className="text-green-600">Aupus Energia</span>
            </h2>
            <div className="h-1 w-20 bg-green-600 mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                Fundada em 2019, a <span className="font-semibold text-green-600">Aupus Energia</span> é referência
                nacional no setor elétrico, oferecendo soluções de alto padrão na construção de empreendimentos de
                energia, manutenção de sistemas elétricos e gestão energética.
              </p>
              <p className="text-lg leading-relaxed">
                Composta por profissionais experientes desde 2016, destacamo-nos pela expertise em projetos, obras,
                operação e manutenção, abrangendo geração de energia renovável, transmissão e distribuição até 500 kV.
              </p>
              <p className="text-lg leading-relaxed">
                Desenvolvemos a <span className="font-semibold text-green-600">Aupus Smart</span>, uma plataforma
                inovadora que permite o acompanhamento em tempo real de projetos e gestão energética, garantindo
                eficiência e transparência.
              </p>
              <div className="pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 flex items-center gap-2">
                  Saiba mais sobre nós
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/historia.png"
                  alt="Usina Solar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold">Certificada</div>
                    <div className="text-gray-600 text-sm">ISO 9001</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Nossa Essência
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              Princípios que nos <span className="text-green-600">guiam</span>
            </h2>
            <div className="h-1 w-20 bg-green-600 mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                icon: "target",
                text: "Inovar com excelência nos negócios em energia, colocando o cliente no centro de nossas decisões.",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Visão",
                icon: "eye",
                text: "Ser referência em soluções em energia inovadoras e sustentáveis, promovendo valor para clientes e meio ambiente.",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Valores",
                icon: "heart",
                text: "Excelência, inovação e compromisso com resultados e satisfação dos clientes.",
                color: "from-purple-400 to-purple-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                  <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>
                  <CardHeader className="pt-8">
                    <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      {item.icon === "target" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-green-600"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      ) : item.icon === "eye" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-blue-600"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-purple-600"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções Section */}
      <section id="soluções" className="py-24 bg-gradient-to-br from-[#0A1633] to-green-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              O que oferecemos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
              Soluções <span className="text-green-400">Customizadas</span>
            </h2>
            <div className="h-1 w-20 bg-green-400 mt-6 rounded-full"></div>
          </div>

          <Tabs defaultValue="projetos" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-transparent gap-4">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="text-lg py-3 px-6 rounded-md bg-white/10 hover:bg-white/20 text-white data-[state=active]:bg-green-500 data-[state=active]:text-white transition-all duration-300"
                >
                  {solution.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl h-full">
                    <div className="relative h-full w-full overflow-hidden">
                      <img src={solution.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                      <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                        <div className="h-1 w-16 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Card de conteúdo */}
                  <Card className="bg-white/10 backdrop-blur-sm border-0 text-white shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/15 h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="space-y-4 mb-6">
                        <p className="text-lg leading-relaxed">{solution.description}</p>
                        <p className="text-white/90">{solution.subtext}</p>
                      </div>
                      <ul className="space-y-4 my-8 flex-grow">
                        {solution.items.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors duration-300">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            </span>
                            <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-6 py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2">
                          Saiba mais
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Instrumentos */}
      {/* <section id="instrumentos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Tecnologia Avançada
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              Nossos <span className="text-green-600">Instrumentos</span>
            </h2>
            <div className="h-1 w-20 bg-green-600 mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instruments.map((instrumento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#0A1633] to-[#0A2033] text-white text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                  <div className="h-1 w-full bg-gradient-to-r from-green-400 to-green-600"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg md:text-xl text-green-400">{instrumento}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-16 h-16 mx-auto bg-green-600/20 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-400"
                      >
                        <path d="m22 12-4 4-4-4" />
                        <path d="M14 12H2" />
                        <path d="M18 8v8" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* História */}
      <section id="história" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Nossa Jornada
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              Nossa <span className="text-green-600">História</span>
            </h2>
            <div className="h-1 w-20 bg-green-600 mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/diego.png"
                  height={600}
                  width={800}
                  alt="Diego Santana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-600"
                    >
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                      <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M12 18v-6" />
                      <path d="M9 15h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold">Fundação</div>
                    <div className="text-gray-600 text-sm">2019</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-green-600">Diego Santana</h3>
              <p className="text-gray-700 leading-relaxed">
                Diego Santana é engenheiro elétrico e mestre pela UFU, com MBAs em Gestão de Projetos (USP) e Negócios
                do Setor Elétrico (FGV).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gerenciou projetos de grande porte no Sistema Interligado Nacional (SIN), em tensões de 230 a 500 kV,
                totalizando mais de 3000 MW.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Focado em <span className="font-semibold text-green-600">excelência e inovação</span>, busca entregar
                soluções sustentáveis e eficientes aos <span className="font-semibold text-green-600">clientes</span>.
              </p>
              <div className="pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 flex items-center gap-2">
                  Conheça nossa trajetória
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-gradient-to-br from-[#0A1633] to-green-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Fale Conosco
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
              Entre em <span className="text-green-400">Contato</span>
            </h2>
            <div className="h-1 w-20 bg-green-400 mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white shadow-lg overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Aupus Energia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {[
                    { icon: <Mail className="h-6 w-6 text-green-400" />, text: "smart@aupusenergia.com.br" },
                    { icon: <Phone className="h-6 w-6 text-green-400" />, text: "(62) 9 9654 - 7888" },
                    {
                      icon: <Globe className="h-6 w-6 text-green-400" />,
                      text: "www.aupusenergia.com.br",
                      href: "http://www.aupusenergia.com.br",
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-green-400" />,
                      text: "Av. Dep. Jamel Cecílio, c/ rua 56, nº 2929, Jardim Goiás, Goiânia - GO, 74810-240, Sala 1013",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="pt-2">
                        {item.href ? (
                          <a href={item.href} className="text-green-400 hover:underline">
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                            {item.text}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg border-0 overflow-hidden h-full">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="text-2xl font-semibold">Envie uma mensagem</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Sua mensagem"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3">
                      Enviar mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

