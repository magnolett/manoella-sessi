'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'inicio', label: 'Início', icon: '🏠' },
  { id: 'sobre', label: 'Sobre', icon: '👩‍⚕️' },
  { id: 'especialidades', label: 'Especialidades', icon: '🎯' },
  { id: 'servicos', label: 'Serviços', icon: '🛠️' },
  { id: 'areas', label: 'Áreas', icon: '👥' },
  { id: 'contato', label: 'Contato', icon: '📞' },
]

export default function SectionPager() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }

      // Mostrar/ocultar pager baseado na posição
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
        <div className="space-y-2">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 group relative',
                activeSection === section.id
                  ? 'bg-primary-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{section.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {section.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
