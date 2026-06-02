import type { Metadata } from 'next'
import MaintenancePage from '@/components/MaintenancePage'

export const metadata: Metadata = {
  title: 'Em manutenção | Manoella Sessi',
  description:
    'Site temporariamente indisponível. Retornaremos em breve.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Home() {
  return <MaintenancePage />
}
