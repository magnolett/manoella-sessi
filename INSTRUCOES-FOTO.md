# 📸 Instruções para Adicionar a Foto da Fonoaudióloga

## 🎯 Localização da Foto

A foto da fonoaudióloga deve ser adicionada na seção **Hero** (tela inicial) do site, no lado direito da tela.

## 📁 Como Adicionar a Foto

### Passo 1: Preparar a Imagem

1. **Formato recomendado**: JPG ou PNG
2. **Tamanho ideal**: 500x600 pixels (proporção 5:6)
3. **Qualidade**: Alta resolução (pelo menos 300 DPI)
4. **Nome do arquivo**: `foto-fonoaudiologa.jpg` ou `foto-fonoaudiologa.png`

### Passo 2: Adicionar ao Projeto

1. Coloque a foto na pasta `public/` do projeto
2. O caminho final deve ser: `public/foto-fonoaudiologa.jpg`

### Passo 3: Atualizar o Código

Edite o arquivo `components/Hero.tsx` e substitua o placeholder pela imagem real:

```tsx
// Localize esta seção no arquivo Hero.tsx (linha ~87-94):
<Image
  src="/foto-fonoaudiologa.jpg"
  alt="Manoella Sessi - Fonoaudióloga"
  width={500}
  height={600}
  className="w-full max-w-lg h-[600px] rounded-2xl object-cover border border-gray-200 shadow-2xl"
  priority
/>

// A foto já está implementada com o tamanho expandido!
```

### Passo 4: Importar o Componente Image

No topo do arquivo `components/Hero.tsx`, adicione o import:

```tsx
import Image from 'next/image'
```

## 🎨 Estilo da Foto

A foto terá as seguintes características visuais:

- **Tamanho**: 500x600 pixels (w-full max-w-lg h-[600px])
- **Bordas**: Arredondadas (rounded-2xl)
- **Borda**: Cinza claro (border-gray-200)
- **Posicionamento**: Centralizada e responsiva
- **Efeitos**: Sombra elegante (shadow-2xl) e elementos decorativos animados ao redor

## 📱 Responsividade

A foto se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop**: 500x600 pixels (área ainda maior)
- **Tablet**: Redimensiona proporcionalmente
- **Mobile**: Empilha abaixo do texto principal

## ✨ Dicas para uma Boa Foto

1. **Iluminação**: Boa iluminação natural ou profissional
2. **Fundo**: Neutro ou relacionado à área da saúde
3. **Pose**: Profissional e acolhedora
4. **Roupas**: Profissionais (jaleco ou roupa social)
5. **Expressão**: Sorriso natural e confiante
6. **Enquadramento**: Do busto para cima

## 🔄 Alternativas

Se preferir, você pode:

1. **Usar uma foto existente**: Apenas redimensione para as proporções recomendadas
2. **Solicitar uma sessão fotográfica**: Para uma foto mais profissional
3. **Usar um avatar temporário**: Até ter a foto definitiva

## 📞 Suporte

Se precisar de ajuda para adicionar a foto ou fazer ajustes, entre em contato!

---

**Nota**: A foto é um elemento importante para criar confiança e conexão com os pacientes. Invista em uma boa imagem profissional!
