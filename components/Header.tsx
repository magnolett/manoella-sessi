'use client'

import { useState, useEffect } from 'react'
import { Menu, X, CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Atendimentos', href: '#atendimentos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Como funciona', href: '#como-funciona' },
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

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-borderMuted transition-all duration-300',
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.05)]'
          : 'bg-surface/90 backdrop-blur-md'
      )}
    >
      <div className="page-container py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo-manoella.png"
              alt="Logo Manoella Sessi"
              className="h-12 w-auto mr-[14px]"
            />
            <div>
              <p className="font-serif text-sm md:text-base tracking-tight text-text">
                Manoella Gabriel Sessi
              </p>
              <p className="text-xs text-text/70">
                Fonoaudióloga · Atendimento online
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-text/80 hover:text-text transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center">
            <a href="#agendamento" className="btn btn-primary">
              <CalendarDays size={18} />
              Agendar consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text/80"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 card p-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-text/80 hover:text-text transition-colors py-2"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/10">
                <a href="#agendamento" className="btn btn-primary w-full" onClick={closeMenu}>
                  <CalendarDays size={18} />
                  Agendar consulta
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
