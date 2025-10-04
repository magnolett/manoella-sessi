'use client'

import { motion } from 'framer-motion'
import { Volume2, Brain, Ear, Mic } from 'lucide-react'

const especialidades = [
  {
    icon: Volume2,
    title: 'Terapia da Fala',
    description: 'Tratamento de gagueira, dislalia, apraxia e outros distúrbios da fala.',
    conditions: ['Gagueira', 'Dislalia', 'Apraxia', 'Disartria'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'Linguagem',
    description: 'Desenvolvimento e reabilitação da linguagem oral e escrita.',
    conditions: ['Atraso de Linguagem', 'TEA', 'Afasia', 'Dislexia'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Ear,
    title: 'Audição',
    description: 'Avaliação e reabilitação auditiva para todas as idades.',
    conditions: ['Perda Auditiva', 'Implantes', 'Aparelhos', 'Presbiacusia'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Mic,
    title: 'Voz',
    description: 'Cuidados vocais e tratamento de distúrbios da voz.',
    conditions: ['Disfonia', 'Rouquidão', 'Nódulos', 'Pólipos'],
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Áreas de atuação especializada em fonoaudiologia para cuidar de todas as necessidades de comunicação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {especialidades.map((especialidade, index) => (
            <motion.div
              key={especialidade.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:bg-gray-50 transition-all duration-300 h-full shadow-lg">
                {/* Ícone */}
                <div className={`w-16 h-16 bg-gradient-to-r ${especialidade.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <especialidade.icon className="w-8 h-8 text-white" />
                </div>

                {/* Conteúdo */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {especialidade.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {especialidade.description}
                </p>

                {/* Condições tratadas */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Condições Tratadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {especialidade.conditions.map((condition) => (
                      <span
                        key={condition}
                        className="px-3 py-1 bg-primary-50 rounded-full text-xs text-primary-700 border border-primary-200"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção de destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Atendimento Personalizado
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Cada paciente é único. Desenvolvemos planos terapêuticos individualizados 
            baseados em avaliação completa e objetivos específicos.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1ª</div>
              <div className="text-white/90">Avaliação Completa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2ª</div>
              <div className="text-white/90">Plano Individualizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3ª</div>
              <div className="text-white/90">Acompanhamento Contínuo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
