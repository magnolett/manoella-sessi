# 🚀 Deploy no Vercel - Guia Completo

## 🎯 **Por que Vercel?**

- ✅ **Gratuito** para projetos pessoais
- ✅ **Otimizado para Next.js** (criado pela mesma empresa)
- ✅ **Performance excelente** com CDN global
- ✅ **Deploy automático** via GitHub
- ✅ **Domínio personalizado** gratuito
- ✅ **SSL automático**
- ✅ **Preview de branches** automaticamente

## 📋 **Pré-requisitos**

1. **Conta no GitHub** (gratuita)
2. **Conta no Vercel** (gratuita)
3. **Projeto no GitHub** (já temos)

## 🚀 **Passo a Passo para Deploy**

### **Passo 1: Preparar o Repositório GitHub**

1. **Criar repositório no GitHub:**
   ```bash
   # No terminal, na pasta do projeto:
   git init
   git add .
   git commit -m "Site Manoella Sessi - Fonoaudiologia"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/manoella-sessi.git
   git push -u origin main
   ```

2. **Substitua `SEU-USUARIO`** pelo seu nome de usuário do GitHub

### **Passo 2: Deploy no Vercel**

1. **Acesse**: [vercel.com](https://vercel.com)

2. **Faça login** com sua conta GitHub

3. **Clique em "New Project"**

4. **Importe o repositório**:
   - Selecione o repositório `manoella-sessi`
   - Clique em "Import"

5. **Configurações do projeto**:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `.next` (automático)
   - **Install Command**: `npm install` (automático)

6. **Clique em "Deploy"**

### **Passo 3: Configurações Adicionais**

#### **Variáveis de Ambiente (se necessário)**
- No dashboard do Vercel, vá em "Settings" > "Environment Variables"
- Adicione se precisar de alguma variável

#### **Domínio Personalizado (Opcional)**
- No dashboard, vá em "Settings" > "Domains"
- Adicione seu domínio personalizado

## ⚡ **Deploy Automático**

Após o primeiro deploy:

1. **Push automático**: Toda vez que você fizer push no GitHub, o Vercel fará deploy automaticamente
2. **Preview de branches**: Cada branch terá sua própria URL de preview
3. **Deploy instantâneo**: Deploys em segundos

## 📱 **URLs do Projeto**

- **Produção**: `https://manoella-sessi.vercel.app`
- **Preview**: `https://manoella-sessi-git-branch.vercel.app`

## 🔧 **Comandos Úteis**

### **Deploy Local (Teste)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy de teste
vercel

# Deploy para produção
vercel --prod
```

### **Logs e Monitoramento**
```bash
# Ver logs
vercel logs

# Status do projeto
vercel ls
```

## 🎯 **Vantagens do Vercel**

### **Performance**
- **CDN Global**: Site rápido em qualquer lugar
- **Edge Functions**: Serverless functions
- **Image Optimization**: Otimização automática de imagens

### **Desenvolvimento**
- **Hot Reload**: Atualizações instantâneas
- **Preview Deployments**: Teste antes de publicar
- **Analytics**: Métricas de performance

### **SEO e Acessibilidade**
- **Lighthouse Score**: Otimização automática
- **Core Web Vitals**: Métricas de performance
- **SSL**: Certificado automático

## 🚨 **Troubleshooting**

### **Problemas Comuns**

1. **Build Error**:
   ```bash
   # Verificar logs no dashboard do Vercel
   # Ou executar localmente:
   npm run build
   ```

2. **Imagens não carregam**:
   - Verificar se estão na pasta `public/`
   - Verificar caminhos (começar com `/`)

3. **Deploy lento**:
   - Normal no primeiro deploy
   - Deploys subsequentes são mais rápidos

### **Comandos de Diagnóstico**
```bash
# Verificar build local
npm run build
npm run start

# Verificar linting
npm run lint

# Verificar tipos
npx tsc --noEmit
```

## 📊 **Monitoramento**

### **Analytics (Gratuito)**
- **Page Views**: Visualizações de páginas
- **Unique Visitors**: Visitantes únicos
- **Top Pages**: Páginas mais visitadas
- **Referrers**: De onde vem o tráfego

### **Performance**
- **Core Web Vitals**: Métricas de performance
- **Lighthouse Score**: Score de otimização
- **Real User Monitoring**: Dados reais de usuários

## 🎉 **Resultado Final**

Após o deploy, você terá:

- ✅ **Site online** em poucos minutos
- ✅ **URL pública** para compartilhar
- ✅ **Deploy automático** a cada push
- ✅ **Performance otimizada**
- ✅ **SSL automático**
- ✅ **Analytics gratuitos**

---

**🚀 Pronto para fazer o deploy! Siga os passos acima e em poucos minutos o site da Manoella estará online!**
