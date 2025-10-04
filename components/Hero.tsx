'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Star, Users } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta fonoaudiológica.')
    window.open(`https://wa.me/5548984920928?text=${message}`, '_blank')
  }

  const stats = [
    { icon: Users, value: '500+', label: 'Pacientes Atendidos' },
    { icon: Star, value: '5+', label: 'Anos de Experiência' },
    { icon: Calendar, value: '100%', label: 'Satisfação' },
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Transforme sua{' '}
              <span className="gradient-text">comunicação</span>{' '}
              com excelência fonoaudiológica
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especializada em terapia da fala, linguagem e audição. Cuidando da sua comunicação 
              com dedicação e profissionalismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <MessageCircle size={20} />
                <span>Agendar Consulta</span>
              </button>
              
              <a
                href="#servicos"
                className="flex items-center justify-center space-x-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                <span>Conhecer Serviços</span>
              </a>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Espaço para Foto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Foto da Fonoaudióloga */}
              <Image
                src="/foto-fonoaudiologa.jpg"
                alt="Manoella Sessi - Fonoaudióloga"
                width={500}
                height={600}
                className="w-full max-w-lg h-[600px] rounded-2xl object-cover border border-gray-200 shadow-2xl"
                priority
              />
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary-300 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary-200 rounded-full animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
