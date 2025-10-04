import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
