---
title: Portfólio pessoal
summary: Site bilíngue (PT/EN) e estático, feito com Astro e Tailwind, com deploy planejado no Azure Static Web Apps.
stack: [Astro, Tailwind CSS, TypeScript, Azure Static Web Apps]
order: 1
demo: /
image: ../../../img/projetos/portfolio-home-pt.png
imageAlt: Página inicial do portfólio, com o nome Luis Otávio Batista, a headline e os botões Baixar CV, Contato e GitHub sobre fundo escuro
---

## Problema

Recrutadores e tech leads leem um portfólio de formas diferentes. O recrutador precisa entender em 30 segundos quem sou, o que faço, que stack uso e como me contratar. O tech lead quer profundidade técnica. O site também precisa carregar rápido em qualquer celular e gerar um bom preview quando o link é colado no LinkedIn ou em um e-mail.

## Arquitetura

- **Site 100% estático:** todas as páginas são geradas em HTML no build, sem servidor.
- **Zero JavaScript por padrão:** o único script da página é o que alterna entre tema claro e escuro.
- **Dois idiomas com rotas próprias:** `/` em português e `/en/` em inglês, usando o roteamento nativo do Astro.
- **Conteúdo separado do layout:** experiência, skills e formação ficam em arquivos de dados em TypeScript, e cada projeto é um arquivo Markdown validado por schema.
