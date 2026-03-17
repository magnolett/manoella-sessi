import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manoella Sessi - Fonoaudiologia',
  description: 'Especializada em terapia da fala, linguagem e audição. Cuidando da sua comunicação com dedicação e profissionalismo.',
  keywords: 'fonoaudiologia, terapia da fala, linguagem, audição, fonoaudióloga, comunicação, Manoella Sessi',
  authors: [{ name: 'Manoella Sessi' }],
  openGraph: {
    title: 'Manoella Sessi - Fonoaudiologia',
    description: 'Especializada em terapia da fala, linguagem e audição. Cuidando da sua comunicação com dedicação e profissionalismo.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
