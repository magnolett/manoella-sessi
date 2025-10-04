# Site Fonoaudiologia

Site institucional moderno e profissional para fonoaudióloga, desenvolvido com Next.js 15 e configurado para deploy no Railway.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 📱 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Animações suaves com Framer Motion
- ✅ Background animado com partículas
- ✅ Navegação lateral com indicador de seção ativa
- ✅ Integração com WhatsApp para agendamentos
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Configurado para deploy no Railway

## 🎨 Seções do Site

1. **Hero** - Apresentação principal com espaço para foto
2. **Sobre** - Informações sobre a profissional
3. **Especialidades** - Áreas de atuação em fonoaudiologia
4. **Serviços** - Serviços oferecidos
5. **Áreas de Atuação** - Públicos atendidos
6. **Contato** - Informações de contato e footer

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linter
```

## 🚀 Deploy no Railway

### Método 1: Deploy Automático (Recomendado)

1. Conecte seu repositório GitHub ao Railway
2. O Railway detectará automaticamente o projeto Next.js
3. O deploy será feito automaticamente

### Método 2: Deploy Manual

1. Instale a CLI do Railway:
```bash
npm install -g @railway/cli
```

2. Faça login:
```bash
railway login
```

3. Inicialize o projeto:
```bash
railway init
```

4. Deploy:
```bash
railway up
```

## 📞 Informações de Contato

- **WhatsApp**: (48) 98492-0928
- **Telefone**: (48) 98492-0928
- **Email**: contato@fonoaudiologia.com

## 🎯 Personalização

### Adicionar Foto da Fonoaudióloga

1. Adicione a foto em `public/foto-fonoaudiologa.jpg`
2. Substitua o placeholder no componente `Hero.tsx`:

```tsx
// Substitua o div placeholder por:
<Image
  src="/foto-fonoaudiologa.jpg"
  alt="Foto da Fonoaudióloga"
  width={320}
  height={384}
  className="rounded-2xl object-cover"
/>
```

### Personalizar Informações

Edite os seguintes arquivos para personalizar:

- `components/Hero.tsx` - Título e descrição principal
- `components/Sobre.tsx` - Informações sobre a profissional
- `components/Footer.tsx` - Informações de contato
- `app/layout.tsx` - Meta tags e SEO

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎨 Paleta de Cores

- **Primary**: Verde esmeralda (#10b981)
- **Secondary**: Cinza neutro (#64748b)
- **Background**: Gradiente radial verde azulado
- **Cards**: Verde escuro translúcido (#065f46)

## 📈 Performance

- ⚡ Next.js 15 com App Router
- 🖼️ Otimização automática de imagens
- 📦 Bundle splitting automático
- 🎯 Lazy loading de componentes
- 🚀 Deploy otimizado para produção

## 📄 Licença

Este projeto é privado e destinado ao uso pessoal da fonoaudióloga.

---

Desenvolvido com ❤️ para cuidar da comunicação humana.
