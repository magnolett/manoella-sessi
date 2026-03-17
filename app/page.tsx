import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowUpRight, CalendarDays, CheckCircle2, Globe, MessageCircle } from 'lucide-react'

export default function Home() {
  const whatsappNumber = '5548984920928'
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta fonoaudiológica online.'
  )
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Spacer do header fixo */}
      <div className="h-[96px]" />

      {/* 2. Hero */}
      <section id="inicio" className="anchor section hero bg-background">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Coluna esquerda (texto) */}
            <div className="hero-text flex flex-col gap-6 lg:col-span-7">
              <p className="section-kicker hero-subtitle">ATENDIMENTO FONOAUDIOLÓGICO ONLINE</p>
              <h1 className="font-serif text-4xl md:text-[40px] leading-tight text-text max-w-[520px]">
                Cuidado fonoaudiológico online para linguagem, voz e comunicação
              </h1>
              <div className="h-px w-16 bg-sage/70 rounded-full" />
              <p className="text-base md:text-lg text-text/80 leading-relaxed max-w-xl">
                Atendimento especializado para adultos, com foco em reabilitação neurológica,
                saúde vocal e desenvolvimento da comunicação, de forma individualizada,
                acolhedora e baseada em evidências.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#agendamento" className="btn btn-primary">
                  <CalendarDays size={18} />
                  Agendar consulta online
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                  <ArrowUpRight size={16} className="opacity-60" />
                </a>
              </div>

              <p className="text-xs md:text-sm text-text/70">
                Atendimento online individualizado para adultos.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs md:text-sm text-text/70">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  </div>
                  <span>Formação UFSC</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  </div>
                  <span>Experiência hospitalar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  </div>
                  <span>Atendimento online</span>
                </div>
              </div>
            </div>

            {/* Coluna direita (bloco visual para futura foto) */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="hero-image relative flex h-64 w-full max-w-[420px] items-center justify-center rounded-3xl border border-borderMuted bg-white/70 shadow-[0_18px_45px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Glow suave verde sálvia */}
                <div className="pointer-events-none absolute -left-12 -bottom-12 h-72 w-72 rounded-[999px] bg-sage/25 blur-[28px]" />
                {/* Forma orgânica em verde sálvia muito claro */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-[999px] bg-[#E8EFE6] blur-[2px]" />
                <div className="absolute inset-[18px] rounded-3xl border border-dashed border-accent/30" />
                <div className="relative text-center">
                  <p className="font-serif text-4xl tracking-[0.32em] text-text">MS</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-text/50">
                    ESPAÇO RESERVADO PARA FOTO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frase de posicionamento */}
      <section className="bg-background py-8 md:py-10">
        <div className="page-container">
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-text/80">
            Atendimento fonoaudiológico online voltado para adultos que buscam cuidado com linguagem, voz e comunicação,
            com acolhimento, seriedade e acompanhamento individualizado.
          </p>
        </div>
      </section>

      {/* 3. Para quem é o atendimento */}
      <section id="atendimentos" className="anchor section bg-sageLight">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="section-title text-text">
                Um atendimento pensado para adultos que buscam cuidado especializado com a comunicação.
              </h3>
              <div className="section-divider" />
              <p className="text-text/80 leading-relaxed">
                O acompanhamento fonoaudiológico pode ser indicado para adultos que apresentam
                dificuldades de linguagem, alterações vocais ou que desejam desenvolver uma
                comunicação mais segura, funcional e confiante.
              </p>
            </div>
            <div className="card p-8">
              <ul className="space-y-4 text-text/80">
                {[
                  'Alterações de linguagem associadas a afasia, Alzheimer, demências e traumatismo cranioencefálico',
                  'Dificuldades de comunicação relacionadas a condições neurológicas',
                  'Queixas vocais, cansaço ao falar e necessidade de orientação vocal',
                  'Acompanhamento para profissionais da voz',
                  'Aprimoramento da comunicação e da oratória',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Áreas de atendimento */}
      <section className="anchor section bg-background" aria-labelledby="areas-title">
        <div className="page-container">
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="section-kicker">ATUAÇÃO CLÍNICA</p>
              <h3 id="areas-title" className="section-title text-text">Áreas de atendimento</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Reabilitação de linguagem',
                  text: 'Acompanhamento de pessoas com afasia, Alzheimer, demências e sequelas neurológicas que impactam a comunicação.',
                },
                {
                  title: 'Voz',
                  text: 'Orientação e acompanhamento para profissionais da voz, além de cuidados com saúde vocal e aprimoramento da comunicação.',
                },
                {
                  title: 'Comunicação e oratória',
                  text: 'Desenvolvimento da expressão verbal, segurança ao falar e clareza na comunicação.',
                },
              ].map((card) => (
                <div key={card.title} className="card p-8">
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-text leading-snug">{card.title}</h4>
                    <p className="text-sm text-text/75 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Como a terapia pode ajudar */}
      <section className="anchor section bg-roseLight" aria-labelledby="ajudar-title">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 id="ajudar-title" className="section-title text-text">Como a terapia pode ajudar</h3>
              <div className="section-divider" />
              <p className="text-text/80 leading-relaxed">
                A fonoaudiologia atua no cuidado da comunicação humana em suas diferentes dimensões,
                buscando promover mais autonomia, funcionalidade e bem-estar.
              </p>
            </div>
            <div className="card p-8">
              <div className="grid gap-3">
                {[
                  'Favorecer a comunicação no cotidiano',
                  'Estimular habilidades de linguagem oral e compreensão',
                  'Auxiliar no manejo de alterações comunicativas associadas a quadros neurológicos',
                  'Orientar e reabilitar o uso da voz',
                  'Reduzir desconfortos e esforço vocal',
                  'Desenvolver mais clareza, segurança e confiança ao falar',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-7 w-7 rounded-full bg-sage/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={22} className="text-sage" />
                    </div>
                    <p className="text-sm text-text/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sobre mim */}
      <section id="sobre" className="anchor section bg-background">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="section-kicker">SOBRE MIM</p>
              <h2 className="section-title text-text">Sobre mim</h2>
              <div className="section-divider" />
            </div>
            <div className="lg:col-span-7">
              <div className="card p-8 md:p-10 space-y-5">
                <p className="text-text/80 leading-relaxed">
                  Sou fonoaudióloga formada pela Universidade Federal de Santa Catarina (UFSC), com formação voltada ao
                  cuidado clínico e à reabilitação de linguagem e voz em adultos. Possuo também formação complementar na
                  área de neurociências, que contribui para uma compreensão mais aprofundada das relações entre cérebro,
                  linguagem e comunicação.
                </p>
                <p className="text-text/80 leading-relaxed">
                  Durante minha graduação, realizei estágios em importantes serviços de saúde, incluindo o Hospital
                  Governador Celso Ramos, o Centro Catarinense de Reabilitação, o Hospital Infantil Joana de Gusmão e o
                  Hospital Universitário Professor Polydoro Ernani de São Thiago.
                </p>
                <p className="text-text/80 leading-relaxed">
                  Também atuei na Clínica Escola de Fonoaudiologia da UFSC e em unidades básicas de saúde de
                  Florianópolis.
                </p>
                <p className="text-text/80 leading-relaxed">
                  Minha prática clínica é voltada ao atendimento de adultos com dificuldades de linguagem associadas a
                  condições neurológicas, como afasia, demências, traumatismo cranioencefálico e doença de Alzheimer,
                  entre outras. Além disso, realizo acompanhamento voltado ao cuidado da voz e ao aprimoramento da
                  comunicação.
                </p>
                <p className="text-text/80 leading-relaxed">
                  Busco oferecer um atendimento acolhedor, individualizado e baseado em evidências, respeitando a
                  história, o ritmo e as necessidades de cada pessoa.
                </p>

                <div className="pt-6 mt-2 border-t border-[rgba(214,180,175,0.8)]">
                  <p className="font-serif text-base tracking-tight text-text mt-3">
                    Manoella Gabriel Sessi
                  </p>
                  <p className="text-xs text-text/70 mt-1">
                    Fonoaudióloga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Como funciona */}
      <section id="como-funciona" className="anchor section bg-surface">
        <div className="page-container">
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="section-kicker">COMO FUNCIONA</p>
              <h2 className="section-title text-text">Etapas do atendimento</h2>
              <div className="section-divider" />
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                { step: '1', title: 'Agendamento da consulta', text: 'Escolha do horário e primeiro contato.' },
                { step: '2', title: 'Avaliação inicial', text: 'Entendimento do caso, da história e das necessidades.' },
                {
                  step: '3',
                  title: 'Plano terapêutico individualizado',
                  text: 'Definição de objetivos e abordagem, com base em evidências.',
                },
                { step: '4', title: 'Acompanhamento terapêutico', text: 'Sessões online com orientações e ajustes contínuos.' },
              ].map((s) => (
                <div key={s.step} className="card p-7">
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-2xl text-text">{s.step}</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-sage" />
                  </div>
                  <p className="mt-4 font-serif text-lg text-text leading-snug">{s.title}</p>
                  <p className="mt-2 text-sm text-text/75 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Atendimento online */}
      <section className="anchor section bg-background" aria-labelledby="online-title">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h3 id="online-title" className="section-title text-text">
                Atendimento online com praticidade e cuidado
              </h3>
              <p className="text-text/80 leading-relaxed">
                O atendimento online possibilita acompanhamento fonoaudiológico com comodidade, acessibilidade e segurança,
                favorecendo a continuidade terapêutica independentemente da localização do paciente.
              </p>
              <p className="text-text/80 leading-relaxed">
                Essa modalidade permite um cuidado especializado em linguagem, voz e comunicação, com a mesma seriedade,
                escuta e individualização que fazem parte da prática clínica.
              </p>
            </div>
            <div className="card p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-sage/20 flex items-center justify-center">
                  <Globe size={24} className="text-sage" />
                </div>
                <div className="space-y-2">
                  <p className="font-serif text-xl text-text">Você só precisa de:</p>
                  <ul className="space-y-2 text-sm text-text/80">
                    {['Internet estável', 'Um local confortável', 'Celular ou computador', 'Fone (opcional)'].map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sage" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Seção de contato / CTA */}
      <section id="agendamento" className="anchor section bg-roseCta/60">
        <div className="page-container">
          <div className="mx-auto max-w-[900px] rounded-[16px] bg-roseCta p-10 md:p-14 shadow-[0_14px_40px_rgba(0,0,0,0.06)] border border-borderMuted">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-text">
                  Vamos cuidar da sua comunicação com acolhimento e seriedade
                </h2>
                <div className="section-divider" />
                <p className="text-text/80 leading-relaxed">
                  Se você busca acompanhamento fonoaudiológico para linguagem, voz ou comunicação, estou à disposição
                  para esclarecer dúvidas e orientar o primeiro passo do seu atendimento online.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="flex flex-col gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-full py-3.5 text-base"
                  >
                    <MessageCircle size={20} />
                    Falar no WhatsApp
                    <ArrowUpRight size={16} className="opacity-60" />
                  </a>
                  <p className="text-xs text-text/60 -mt-1 text-center">
                    Resposta direta pela profissional.
                  </p>
                  <a href="#contato" className="btn btn-secondary w-full">
                    <CalendarDays size={18} />
                    Agendar atendimento online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <Footer />
    </main>
  )
}
