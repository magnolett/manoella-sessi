'use client'

import { motion } from 'framer-motion'
import { MessageCircle, UserCheck, Users, Home, FileText, Clock } from 'lucide-react'

const servicos = [
  {
    icon: UserCheck,
    title: 'Avaliação Fonoaudiológica',
    description: 'Avaliação completa da comunicação, diagnóstico e planejamento terapêutico personalizado.',
    features: [
      'Avaliação da fala e linguagem',
      'Testes de audição',
      'Avaliação da voz',
      'Relatório detalhado'
    ],
    duration: '60-90 min',
    price: 'A consultar'
  },
  {
    icon: MessageCircle,
    title: 'Terapia Individual',
    description: 'Atendimento personalizado com plano terapêutico individualizado e acompanhamento familiar.',
    features: [
      'Sessões personalizadas',
      'Plano terapêutico específico',
      'Acompanhamento familiar',
      'Relatórios de evolução'
    ],
    duration: '45-60 min',
    price: 'A consultar'
  },
  {
    icon: Users,
    title: 'Terapia em Grupo',
    description: 'Grupos terapêuticos para estimulação de linguagem e interação social.',
    features: [
      'Grupos por faixa etária',
      'Estimulação de linguagem',
      'Interação social',
      'Atividades lúdicas'
    ],
    duration: '60 min',
    price: 'A consultar'
  },
  {
    icon: Home,
    title: 'Atendimento Domiciliar',
    description: 'Terapia no conforto do lar, proporcionando conveniência e ambiente familiar.',
    features: [
      'Atendimento em casa',
      'Ambiente familiar',
      'Maior conforto',
      'Flexibilidade de horários'
    ],
    duration: '45-60 min',
    price: 'A consultar'
  }
]

export default function Servicos() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços fonoaudiológicos oferecidos.')
    window.open(`https://wa.me/5548984920928?text=${message}`, '_blank')
  }

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços fonoaudiológicos para atender todas as necessidades de comunicação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:bg-gray-100 transition-all duration-300 h-full shadow-lg">
                {/* Cabeçalho do serviço */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <servico.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-500 text-sm mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {servico.duration}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {servico.price}
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {servico.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servico.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Inclui:
                  </h4>
                  <ul className="space-y-2">
                    {servico.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para agendar uma avaliação e descobrir como podemos 
              ajudar você ou seu familiar a desenvolver plenamente suas habilidades de comunicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>Agendar pelo WhatsApp</span>
              </button>
              
              <a
                href="tel:+5548984920928"
                className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
