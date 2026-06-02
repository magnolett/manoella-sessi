# 🌐 Configurar Domínio Personalizado no Vercel

## 🎯 **Visão Geral**

O Vercel permite usar seu domínio personalizado **gratuitamente** com SSL automático e CDN global.

## 📋 **Pré-requisitos**

- ✅ Projeto deployado no Vercel
- ✅ Domínio registrado
- ✅ Acesso ao painel DNS do domínio

## 🚀 **Passo a Passo**

### **1. Adicionar Domínio no Vercel**

1. **Acesse**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Selecione seu projeto**: "manoella-sessi"
3. **Vá em "Settings"** (menu superior)
4. **Clique em "Domains"** (menu lateral)
5. **Clique em "Add Domain"**
6. **Digite seu domínio**: `seu-dominio.com.br`
7. **Clique em "Add"**

### **2. Configurar DNS**

O Vercel mostrará as configurações necessárias:

#### **Para Domínio Principal:**
```
Tipo: A
Nome: @
Valor: 76.76.19.61
TTL: 3600 (ou padrão)
```

#### **Para Subdomínio www:**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600 (ou padrão)
```

### **3. Configurar no Provedor DNS**

#### **Cloudflare (Recomendado):**
1. **Acesse**: [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Selecione seu domínio**
3. **Vá em "DNS"**
4. **Adicione os registros**:
   - **A**: `@` → `76.76.19.61`
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. **Salve as alterações**

#### **Registro.br:**
1. **Acesse**: [registro.br](https://registro.br)
2. **Faça login**
3. **Vá em "DNS"**
4. **Adicione os registros** mostrados pelo Vercel
5. **Salve**

#### **GoDaddy:**
1. **Acesse**: [godaddy.com](https://godaddy.com)
2. **Vá em "My Products"**
3. **Clique em "DNS"** ao lado do domínio
4. **Adicione os registros**
5. **Salve**

#### **Namecheap:**
1. **Acesse**: [namecheap.com](https://namecheap.com)
2. **Vá em "Domain List"**
3. **Clique em "Manage"**
4. **Vá em "Advanced DNS"**
5. **Adicione os registros**

### **4. Verificar Configuração**

#### **No Vercel:**
- **Status**: Deve mostrar "Valid Configuration"
- **SSL**: Certificado será gerado automaticamente
- **Tempo**: 5-60 minutos para propagação

#### **Teste Manual:**
```bash
# Teste DNS
nslookup seu-dominio.com.br

# Teste HTTP
curl -I http://seu-dominio.com.br

# Teste HTTPS
curl -I https://seu-dominio.com.br
```

## 🔧 **Configurações Avançadas**

### **Redirecionamento www**

O Vercel pode redirecionar automaticamente:
- `www.seu-dominio.com.br` → `seu-dominio.com.br`
- Ou vice-versa

**Configurar:**
1. **No Vercel**: Settings → Domains
2. **Clique no domínio**
3. **Configure redirecionamento**

### **Subdomínios**

Para adicionar subdomínios (ex: `blog.seu-dominio.com.br`):

1. **Adicione no Vercel**: `blog.seu-dominio.com.br`
2. **Configure DNS**:
   ```
   CNAME blog cname.vercel-dns.com
   ```

### **Múltiplos Domínios**

Você pode ter vários domínios apontando para o mesmo site:
- `seu-dominio.com.br`
- `seu-dominio.com`
- `manoellasessi.com.br`

## 🚨 **Troubleshooting**

### **Problemas Comuns**

#### **1. DNS não propaga**
- **Aguarde**: Pode levar até 24h
- **Verifique**: Use `nslookup` ou `dig`
- **TTL**: Reduza o TTL para 300 (5 minutos)

#### **2. SSL não funciona**
- **Aguarde**: Certificado leva alguns minutos
- **Verifique**: Status no Vercel
- **Force HTTPS**: Configure no Vercel

#### **3. Site não carrega**
- **Verifique DNS**: Registros corretos
- **Cache**: Limpe cache do navegador
- **Propagação**: Aguarde propagação DNS

### **Comandos de Diagnóstico**

```bash
# Verificar DNS
nslookup seu-dominio.com.br
dig seu-dominio.com.br

# Verificar conectividade
ping seu-dominio.com.br
traceroute seu-dominio.com.br

# Verificar SSL
openssl s_client -connect seu-dominio.com.br:443
```

## 📊 **Monitoramento**

### **Analytics do Domínio**
- **Vercel Analytics**: Métricas de performance
- **Google Analytics**: Integração fácil
- **Search Console**: Para SEO

### **Uptime**
- **Vercel**: 99.99% uptime
- **CDN Global**: Performance mundial
- **SSL**: Certificado automático

## 🎯 **Exemplo Completo**

**Domínio**: `manoellasessi.com.br`

### **1. Vercel:**
- Adicionar: `manoellasessi.com.br`
- Status: "Valid Configuration"

### **2. DNS:**
```
A     @     76.76.19.61
CNAME www   cname.vercel-dns.com
```

### **3. Resultado:**
- ✅ `manoellasessi.com.br` → Site da Manoella
- ✅ `www.manoellasessi.com.br` → Site da Manoella
- ✅ SSL automático
- ✅ CDN global

## 🎉 **Benefícios**

- ✅ **Gratuito**: Sem custos adicionais
- ✅ **SSL Automático**: Certificado Let's Encrypt
- ✅ **CDN Global**: Performance mundial
- ✅ **Backup**: Múltiplos servidores
- ✅ **Analytics**: Métricas incluídas
- ✅ **Uptime**: 99.99% disponibilidade

---

**🌐 Seu domínio personalizado estará funcionando em poucos minutos!**

