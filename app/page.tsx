import ClientOnly from '@/components/ClientOnly'
import AnimatedBackground from '@/components/AnimatedBackground'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Especialidades from '@/components/Especialidades'
import Servicos from '@/components/Servicos'
import AreasAtuacao from '@/components/AreasAtuacao'
import Footer from '@/components/Footer'
import SectionPager from '@/components/SectionPager'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Animado */}
      <ClientOnly>
        <AnimatedBackground />
      </ClientOnly>

      {/* Navegação */}
      <Header />

      {/* Seções Principais */}
      <Hero />
      <Sobre />
      <Especialidades />
      <Servicos />
      <AreasAtuacao />
      <Footer />

      {/* Navegação Lateral */}
      <ClientOnly>
        <SectionPager />
      </ClientOnly>
    </main>
  )
}
