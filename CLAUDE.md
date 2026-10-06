# Portfólio pessoal — Luis

## Sobre o projeto
Site de portfólio estático, focado em automação (Python, RPA/UiPath) e infraestrutura (Azure).
Especificação completa do conteúdo: @docs/briefing.md

## Stack
- Astro + Tailwind CSS
- Sem frameworks de UI prontos (nada de Bootstrap, shadcn etc.)
- Deploy: Azure Static Web Apps

## Comandos
- `npm run dev` — servidor local
- `npm run build` — build de produção (rode SEMPRE antes de dizer que terminou)

## Estrutura
- `src/pages/` — páginas
- `src/components/` — componentes reutilizáveis
- `src/content/projetos/` — um arquivo .md por projeto
- `public/` — imagens e assets estáticos

## Convenções
- Conteúdo do site em português; código e nomes de variáveis em inglês
- Componentes em PascalCase (`ProjectCard.astro`)
- Mobile-first: todo componente deve funcionar em 375px de largura
- Acessibilidade: alt em todas as imagens, contraste AA

## Design
- Tema escuro, tom profissional/técnico
- Máximo 2 fontes (Google Fonts)
- Animações sutis, nada chamativo

## Workflow
- Trabalhe em etapas pequenas; faça um commit ao fim de cada etapa
- Pergunte antes de instalar qualquer dependência nova
- Nunca invente projetos, empresas ou experiências — use só o que está no briefing