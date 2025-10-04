'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, Target } from 'lucide-react'

export default function Sobre() {
  const features = [
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description: 'Atendimento personalizado com foco no bem-estar e desenvolvimento de cada paciente.'
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Formação sólida e experiência comprovada em fonoaudiologia clínica.'
    },
    {
      icon: Users,
      title: 'Acompanhamento Familiar',
      description: 'Envolvimento da família no processo terapêutico para melhores resultados.'
    },
    {
      icon: Target,
      title: 'Resultados Eficazes',
      description: 'Metodologias comprovadas e planos terapêuticos individualizados.'
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre a <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e compromisso com a excelência em fonoaudiologia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Descrição */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Formação e Experiência
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Sou fonoaudióloga formada com especialização em terapia da fala e linguagem. 
                Com mais de 5 anos de experiência, dedico-me ao cuidado integral da comunicação 
                humana, trabalhando com pacientes de todas as idades.
              </p>
              <p className="text-lg leading-relaxed">
                Minha missão é proporcionar um atendimento humanizado e eficaz, utilizando 
                as mais modernas técnicas fonoaudiológicas para ajudar cada paciente a 
                desenvolver plenamente suas habilidades de comunicação.
              </p>
              <p className="text-lg leading-relaxed">
                Acredito que a comunicação é fundamental para o desenvolvimento humano e 
                social, e por isso me dedico com paixão a cada caso, buscando sempre os 
                melhores resultados terapêuticos.
              </p>
            </div>
          </motion.div>

          {/* Cards de Valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Pacientes Atendidos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '98%', label: 'Taxa de Sucesso' },
            { number: '24/7', label: 'Suporte Disponível' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
