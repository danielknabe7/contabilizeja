# ContabilizeJá Premium — Next.js + React + Tailwind

Projeto premium estilo SaaS/fintech para contabilidade online, pronto para subir em Vercel, Hostinger VPS ou qualquer ambiente Node.

## O que vem incluído

- Design premium estilo SaaS 2026
- Animações com Framer Motion preparado no projeto
- Calculadora de impostos
- Simulador de abertura de empresa
- Protótipo de área do cliente
- Integração WhatsApp
- Formulário de captura de leads
- SEO completo no App Router
- Landing pages para Google Ads
- Estrutura Next.js + React + Tailwind + TypeScript

## Páginas

- `/` — Home premium
- `/abrir-empresa` — página comercial para abertura de empresa
- `/contabilidade-online` — página comercial de contabilidade
- `/area-cliente` — apresentação da área do cliente
- `/google-ads/abrir-empresa` — landing page para campanha
- `/google-ads/contabilidade-online` — landing page para campanha

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra:

```bash
http://localhost:3000
```

## Deploy na Vercel

1. Suba estes arquivos para um repositório GitHub.
2. Acesse a Vercel.
3. Clique em "Add New Project".
4. Selecione o repositório.
5. Clique em Deploy.

## Deploy na Hostinger

Use uma VPS com Node.js ou o recurso de deploy Node/Next.js da Hostinger.

```bash
npm install
npm run build
npm run start
```

## Personalizações importantes

Edite `lib/site.ts`:

- WhatsApp
- e-mail
- telefone
- domínio

Edite os preços em `components/Sections.tsx`.

## Observação

Este projeto é original, inspirado em padrões modernos de SaaS/fintech, sem copiar layout, textos, código ou identidade visual de terceiros.
