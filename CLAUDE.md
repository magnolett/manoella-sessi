# CLAUDE.md — manoella-sessi

## Objetivo
Site institucional da fonoaudióloga Manoella Sessi — agendamento via WhatsApp. **Estado: EM MANUTENÇÃO.**

## Stack (versões reais)
Next.js 15.3.8 (App Router) · React 18 · Tailwind v3 · Framer Motion 10 · Lucide. Sem banco, sem auth. Contato = link `wa.me` + `mailto:`. `output: 'standalone'`.

## Estado / armadilhas
- ⚠️ **Modo manutenção ativo:** `app/page.tsx` renderiza `<MaintenancePage />` e tem `robots: { index:false }`. **O site real está em `app/site/page.tsx`** — para reativar, trocar o `page.tsx` de volta. **Confirme com o usuário antes de tirar do ar a página de manutenção.**
- Branch default = **`master`** (≠ `main` dos outros).
- `output: 'standalone'` é necessário p/ Railway/Docker mas pode confundir no Vercel — conferir.
- Dois targets de deploy: `vercel.json` + `railway.json` + Dockerfile.

## Deploy
Vercel ou Railway (configs para ambos). Sem CI.

## Instruções para agentes
- **Dono:** `landing-site-engineer`. Segue `.claude/standards/marketing-sites.md`.
- Não reative o site (tire do modo manutenção) sem confirmação explícita.
