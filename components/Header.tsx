'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta fonoaudiológica.')
    window.open(`https://wa.me/5548984920928?text=${message}`, '_blank')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-xl border-b border-gray-200'
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Manoella Sessi
              </h1>
              <p className="text-sm text-gray-600">Cuidando da sua comunicação</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>
            <a
              href="tel:+5548984920928"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <Phone size={18} />
              <span>(48) 98492-0928</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </button>
                <a
                  href="tel:+5548984920928"
                  className="w-full flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 mt-2 transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>(48) 98492-0928</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
