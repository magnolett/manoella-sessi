'use client'

import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const whatsappNumber = '5548984920928'
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta fonoaudiológica online.'
  )
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <footer id="contato" className="anchor bg-background border-t border-borderMuted">
      <div className="page-container py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Lado esquerdo: logo + texto */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-manoella.png"
              alt="Logo Manoella Sessi"
              className="h-12 w-auto"
            />
            <div>
              <p className="text-sm text-text/80">© 2025 Manoella Gabriel Sessi</p>
              <p className="text-xs text-text/60">Fonoaudióloga</p>
            </div>
          </div>

          {/* Lado direito: links simples */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-text/70">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-text transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <span className="h-3 w-px bg-borderMuted/70" />
            <a
              href="#"
              className="hover:text-text transition-colors"
            >
              Instagram
            </a>
            <span className="h-3 w-px bg-borderMuted/70" />
            <a
              href="mailto:manoellagsessi@live.com"
              className="inline-flex items-center gap-1 hover:text-text transition-colors"
            >
              <Mail size={16} />
              <span>E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
