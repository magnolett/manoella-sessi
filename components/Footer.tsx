'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta fonoaudiológica.')
    window.open(`https://wa.me/5548984920928?text=${message}`, '_blank')
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Manoella Sessi
                </h3>
                <p className="text-gray-300">Cuidando da sua comunicação</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Especializada em terapia da fala, linguagem e audição. Oferecemos 
              atendimento humanizado e eficaz para todas as idades, com foco no 
              desenvolvimento pleno das habilidades de comunicação.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Especialidades', href: '#especialidades' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Áreas de Atuação', href: '#areas' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href="tel:+5548984920928"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  (48) 98492-0928
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary-400" />
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  WhatsApp
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">
                  contato@fonoaudiologia.com
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">
                  [Cidade a definir]
                </span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="mt-6">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>Agendar Consulta</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Manoella Sessi. Todos os direitos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
