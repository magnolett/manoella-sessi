# 🚀 Deploy no Railway - Guia Completo

## 📋 Pré-requisitos

1. **Conta no Railway**: [railway.app](https://railway.app)
2. **Conta no GitHub**: Para conectar o repositório
3. **Projeto configurado**: Este projeto já está pronto para deploy

## 🎯 Método 1: Deploy Automático (Recomendado)

### Passo 1: Preparar o Repositório

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos do projeto
3. Certifique-se de que o `package.json` está na raiz

### Passo 2: Conectar ao Railway

1. Acesse [railway.app](https://railway.app)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Escolha o repositório do projeto

### Passo 3: Configuração Automática

O Railway detectará automaticamente:
- ✅ Projeto Next.js
- ✅ Scripts de build
- ✅ Porta 3000
- ✅ Dependências

### Passo 4: Deploy

1. O Railway iniciará o build automaticamente
2. Aguarde a conclusão (2-5 minutos)
3. Seu site estará disponível em uma URL única

## 🛠️ Método 2: Deploy Manual

### Passo 1: Instalar Railway CLI

```bash
npm install -g @railway/cli
```

### Passo 2: Login

```bash
railway login
```

### Passo 3: Inicializar Projeto

```bash
# No diretório do projeto
railway init
```

### Passo 4: Deploy

```bash
railway up
```

## ⚙️ Configurações Específicas

### Variáveis de Ambiente

O projeto não requer variáveis de ambiente específicas, mas você pode adicionar:

```bash
# No Railway Dashboard > Variables
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Domínio Personalizado

1. No Railway Dashboard, vá em "Settings"
2. Clique em "Domains"
3. Adicione seu domínio personalizado
4. Configure os DNS conforme instruído

## 📊 Monitoramento

### Logs

```bash
# Via CLI
railway logs

# Via Dashboard
Railway Dashboard > Deployments > View Logs
```

### Métricas

- **Uptime**: Monitoramento automático
- **Performance**: Métricas de CPU e memória
- **Logs**: Acesso completo aos logs da aplicação

## 🔧 Troubleshooting

### Problemas Comuns

1. **Build Falha**
   ```bash
   # Verifique os logs
   railway logs
   
   # Rebuild
   railway redeploy
   ```

2. **Site Não Carrega**
   - Verifique se a porta está configurada como 3000
   - Confirme se o build foi bem-sucedido

3. **Dependências**
   ```bash
   # Limpe o cache
   railway redeploy --clear-cache
   ```

### Comandos Úteis

```bash
# Status do projeto
railway status

# Logs em tempo real
railway logs --follow

# Redeploy
railway redeploy

# Abrir no browser
railway open
```

## 💰 Custos

### Plano Gratuito
- ✅ 500 horas de execução/mês
- ✅ 1GB de RAM
- ✅ 1GB de storage
- ✅ Domínio railway.app

### Plano Pro ($5/mês)
- ✅ Execução ilimitada
- ✅ 8GB de RAM
- ✅ 100GB de storage
- ✅ Domínio personalizado
- ✅ SSL automático

## 🎯 Otimizações

### Performance

1. **Build Otimizado**: O projeto usa `output: 'standalone'`
2. **Imagens**: Otimização automática do Next.js
3. **Cache**: Headers de cache configurados

### SEO

1. **Meta Tags**: Configuradas no `layout.tsx`
2. **Sitemap**: Gerado automaticamente
3. **Robots.txt**: Configurado para indexação

## 📱 Teste Pós-Deploy

### Checklist

- [ ] Site carrega corretamente
- [ ] Todas as seções estão visíveis
- [ ] Links de WhatsApp funcionam
- [ ] Design responsivo funciona
- [ ] Animações estão suaves
- [ ] Performance está boa

### URLs de Teste

- **Homepage**: `https://seu-projeto.railway.app`
- **WhatsApp**: Teste o botão de agendamento
- **Telefone**: Teste o link de ligação

## 🔄 Atualizações

### Deploy Automático

1. Faça push para o repositório GitHub
2. O Railway detectará as mudanças
3. Deploy automático será iniciado

### Deploy Manual

```bash
# Após fazer mudanças
git add .
git commit -m "Atualização"
git push

# Ou via CLI
railway up
```

## 📞 Suporte

### Railway Support
- **Documentação**: [docs.railway.app](https://docs.railway.app)
- **Discord**: [discord.gg/railway](https://discord.gg/railway)
- **GitHub**: [github.com/railwayapp](https://github.com/railwayapp)

### Projeto Específico
- Consulte o `README.md` para informações do projeto
- Verifique os logs em caso de problemas

---

**🎉 Parabéns!** Seu site de fonoaudiologia estará online e pronto para receber pacientes!
