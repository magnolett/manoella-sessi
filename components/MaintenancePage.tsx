import { Construction, Sparkles } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      {/* Formas decorativas de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-roseLight blur-2xl"
      />

      <div className="relative z-10 w-full max-w-lg animate-fade-in text-center">
        {/* Monograma */}
        <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-borderMuted bg-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.06)] backdrop-blur-sm">
          <span className="font-serif text-3xl tracking-[0.28em] text-text">MS</span>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sageLight px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text/70 ring-1 ring-sage/30">
          <Construction size={14} className="text-sage" />
          Site temporariamente indisponível
        </div>

        {/* Título */}
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-text animate-slide-up">
          Em manutenção
        </h1>

        <div className="mx-auto my-6 h-px w-16 rounded-full bg-sage/70" />

        {/* Mensagem */}
        <p className="mx-auto max-w-md text-base leading-relaxed text-text/75 animate-slide-up">
          Estamos realizando ajustes por motivos profissionais. Em breve estaremos de volta com
          novidades.
        </p>

        {/* Detalhe decorativo */}
        <div className="mt-10 flex items-center justify-center gap-2 text-text/40">
          <Sparkles size={14} />
          <span className="text-xs tracking-[0.18em] uppercase">Manoella Gabriel Sessi</span>
          <Sparkles size={14} />
        </div>

        <p className="mt-3 text-xs text-text/50">Fonoaudiologia</p>
      </div>
    </main>
  )
}
