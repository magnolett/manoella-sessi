'use client'

import { motion } from 'framer-motion'
import { Baby, User, Users, Heart } from 'lucide-react'

const areas = [
  {
    icon: Baby,
    title: 'Pediatria',
    description: 'Atendimento especializado para crianças e adolescentes',
    ageRange: '0-18 anos',
    conditions: [
      'Atraso de linguagem',
      'Transtornos do espectro autista',
      'Dificuldades escolares',
      'Gagueira infantil',
      'Problemas de articulação'
    ],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: User,
    title: 'Adultos',
    description: 'Reabilitação e tratamento para adultos',
    ageRange: '18-65 anos',
    conditions: [
      'Afasia pós-AVC',
      'Disfagia',
      'Problemas vocais',
      'Gagueira em adultos',
      'Dificuldades de comunicação'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Idosos',
    description: 'Cuidados especializados para a terceira idade',
    ageRange: '65+ anos',
    conditions: [
      'Presbiacusia',
      'Demências',
      'Disfagia senil',
      'Problemas de voz',
      'Isolamento social'
    ],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Heart,
    title: 'Família',
    description: 'Acompanhamento e orientação familiar',
    ageRange: 'Todas as idades',
    conditions: [
      'Orientação familiar',
      'Treinamento de cuidadores',
      'Adaptação do ambiente',
      'Estratégias de comunicação',
      'Suporte emocional'
    ],
    color: 'from-green-500 to-emerald-500'
  }
]

export default function AreasAtuacao() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Áreas de <span className="gradient-text">Atuação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendimento especializado para diferentes faixas etárias e necessidades específicas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:bg-gray-50 transition-all duration-300 h-full shadow-lg">
                {/* Cabeçalho */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {area.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {area.ageRange}
                    </p>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Condições */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Condições Atendidas:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {area.conditions.map((condition) => (
                      <div key={condition} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas da prática clínica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Nossa Prática Clínica
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '40%', label: 'Pacientes Pediátricos', color: 'text-pink-400' },
              { number: '35%', label: 'Pacientes Adultos', color: 'text-blue-400' },
              { number: '20%', label: 'Pacientes Idosos', color: 'text-purple-400' },
              { number: '5%', label: 'Orientação Familiar', color: 'text-green-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
