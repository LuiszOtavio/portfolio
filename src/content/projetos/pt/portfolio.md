---
title: Portfólio pessoal
summary: Site bilíngue (PT/EN) e estático, feito com Astro e Tailwind, com deploy planejado no Azure Static Web Apps.
stack: [Astro, Tailwind CSS, TypeScript, Azure Static Web Apps]
order: 1
---

## Problema

Recrutadores e tech leads leem um portfólio de formas diferentes. O recrutador precisa entender em 30 segundos quem sou, o que faço, que stack uso e como me contratar. O tech lead quer profundidade técnica. O site também precisa carregar rápido em qualquer celular e gerar um bom preview quando o link é colado no LinkedIn ou em um e-mail.

## Arquitetura

- **Site 100% estático:** todas as páginas são geradas em HTML no build, sem servidor.
- **Zero JavaScript por padrão:** o único script da página é o que alterna entre tema claro e escuro.
- **Dois idiomas com rotas próprias:** `/` em português e `/en/` em inglês, usando o roteamento nativo do Astro.
- **Conteúdo separado do layout:** experiência, skills e formação ficam em arquivos de dados em TypeScript, e cada projeto é um arquivo Markdown validado por schema.

## Decisões

- **Astro em vez de React:** o site é quase todo conteúdo. O Astro entrega HTML pronto sem enviar a biblioteca React para o navegador, o que ajuda no desempenho e no SEO.
- **Tailwind CSS com tokens de cor próprios:** as cores ficam em variáveis CSS, e o tema claro é só um segundo conjunto de valores.
- **Tema aplicado antes da primeira pintura:** um script mínimo no `<head>` lê a preferência salva, evitando o "flash" do tema errado.

## O que deu errado

- **Versão do Node incompatível:** o build falhou no Node 20.11, que não tinha uma API usada pelo Astro. Além disso, o `npm audit` apontou vulnerabilidades críticas na versão do Astro compatível com esse Node. A solução foi atualizar para o Node 24 LTS e usar a versão mais recente do Astro, sem vulnerabilidades conhecidas.
- **Espaço sumindo no HTML:** o template do Astro descartava a quebra de linha entre um texto e um elemento destacado, colando as palavras. Resolvi inserindo o espaço de forma explícita.
