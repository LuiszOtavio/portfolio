# Plano — Portfólio Luis Otávio (Astro + Tailwind)

## Contexto
O repositório só tem `CLAUDE.md` e `docs/briefing.md` (o git já foi iniciado, mas ainda não tem nenhum commit). O objetivo é um site estático bilíngue (PT em `/`, EN em `/en/`) para mandar a recrutadores de vagas DevOps/Cloud júnior. O recrutador precisa entender o perfil em 30 segundos e o tech lead precisa encontrar profundidade técnica nas páginas de projeto. O deploy vai para o Azure Static Web Apps. Ambiente: Node 20.11.1, npm 10.2.4 e git 2.44 (compatíveis com Astro 5 e Tailwind v4).

## Decisões já tomadas
- **Cor principal:** azul-índigo, sobre uma base quase-preta (tema escuro padrão) ou off-white (tema claro). A cor de destaque é âmbar suave, usada com moderação.
- **Certificações:** AZ-900 e AZ-104 aparecem como "em preparação", junto com o TOEIC 820.
- **CV:** você envia o PDF em PT, que vai para `public/cv/`. Até o CV em EN existir, o botão da versão EN aponta para o PDF em PT.
- **Dependências aprovadas:** `astro`, `tailwindcss`, `@tailwindcss/vite` e `@astrojs/sitemap`. Nenhuma outra sem perguntar.

## Suposições (corrija se estiver errado)
- **Fontes:** Inter para o texto e JetBrains Mono para os detalhes técnicos (tags de stack, datas), via Google Fonts.
- **i18n:** uso o roteamento nativo do Astro (`i18n` no `astro.config`, sem dependência extra). Os textos fixos ficam em `src/i18n/pt.ts` e `src/i18n/en.ts`. Cada projeto tem um arquivo `.md` por idioma, em `src/content/projetos/{pt,en}/`.
- **Projeto nº 1:** o próprio portfólio. Uso só fatos verificáveis (stack, arquitetura, deploy) e deixo "resultados" vazio até existir algo real.
- **Sem foto** no hero, a menos que você envie uma.
- **URL final** (necessária para o Open Graph e o sitemap): uso a URL padrão do Azure SWA até você ter um domínio.
- **Tema:** alternância claro/escuro salva em `localStorage`, com um script inline no `<head>` para evitar o flash de tema errado.

## Etapas
Cada etapa termina com `npm run build` passando, uma verificação no navegador (`npm run dev`, também em 375px) e um commit.

1. ✅ **[CONCLUÍDA em 2026-09-29]** **Esqueleto:** crio o projeto Astro com Tailwind v4, os tokens de cor e fonte em `src/styles/global.css` e um `BaseLayout.astro` com `<html lang>`, as meta tags básicas e as fontes. Crio também o `.gitignore`.
   → *No navegador:* uma página em branco com fundo escuro e o nome na fonte certa.
   *Nota:* o projeto usa Astro 7.3.5 + Tailwind 4.3.3, o que exige Node 22.12 ou superior (o ambiente está com Node 24).
2. **Header + tema + idioma:** `Header.astro` com o nome, os links âncora, o seletor PT/EN, o botão de tema e o botão "Baixar CV" sempre visível. Configuro o i18n e crio `src/pages/en/index.astro`.
   → *No navegador:* alternar o tema, trocar para `/en/` e ver os textos do header mudarem.
3. **Hero:** `Hero.astro` com o nome, a headline e a proposta de valor (PT/EN), mais os botões [Baixar CV] [Contato] [GitHub]. Tudo cabe na primeira dobra em 375px.
   → *No navegador:* a primeira dobra completa nas duas línguas.
4. **Sobre + Experiência:** `About.astro` e `Timeline.astro` (Biti9, Fev/2025 – atual, com os 5 bullets do briefing). O texto em inglês sai da tradução fiel do briefing.
   → *No navegador:* as seções renderizadas e a timeline legível no mobile.
5. **Skills + Formação/Certificações/Idiomas:** `SkillGroup.astro`, com os grupos por categoria e um selo visual "em estudo" para Terraform, CI/CD e Kubernetes. `Education.astro` traz a Fatec, a ETEC, o TOEIC 820, o inglês avançado e AZ-900/AZ-104 "em preparação".
   → *No navegador:* as duas seções completas, sem barras de porcentagem.
6. **Projetos (coleção + cards):** a content collection `projetos` com schema Zod (title, summary, problem, stack, links, lang, order), o `ProjectCard.astro` e um grid que funciona bem com 1 a 10 itens. Adiciono o projeto nº 1 (o portfólio) em PT e EN.
   → *No navegador:* o card na home.
7. **Página de detalhe do projeto:** `src/pages/projetos/[slug].astro` e `src/pages/en/projects/[slug].astro`, com as seções problema, stack, arquitetura, decisões, o que deu errado, aprendizados, repositório e demo. As seções vazias ficam ocultas.
   → *No navegador:* clicar no card e ler a página técnica.
8. **Contato + footer:** `Contact.astro` com mailto, LinkedIn e GitHub (sem telefone) e o footer.
   → *No navegador:* os links funcionando.
9. **SEO + acabamento:** title e description por idioma, Open Graph e Twitter card, uma imagem OG estática (`public/og.png`), `hreflang`, sitemap, favicon e animações sutis que respeitam `prefers-reduced-motion`.
   → *Verificação:* o Lighthouse passa de 90 em todas as categorias e o preview do link fica correto.
10. **Deploy no Azure SWA:** `staticwebapp.config.json` (404 e headers de cache) e o workflow do GitHub Actions. Esta etapa depende de você criar o recurso no Azure e o repositório no GitHub; eu te guio.
    → *No navegador:* o site no ar pela URL do Azure.

## Arquivos principais
- `astro.config.mjs`, `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/{Header,Hero,About,Timeline,SkillGroup,Education,ProjectCard,Contact,Footer}.astro`
- `src/i18n/{pt,en}.ts`
- `src/content.config.ts` e `src/content/projetos/{pt,en}/portfolio.md`
- `src/pages/index.astro`, `src/pages/en/index.astro` e as páginas de detalhe dos projetos
- `public/cv/`, `public/og.png`, `public/favicon.svg`

## Verificação (em toda etapa)
- `npm run build` sem erros (obrigatório pelo CLAUDE.md)
- `npm run dev` e conferência em 375px e no desktop, no tema escuro e no claro, em PT e EN
- Acessibilidade: `alt` em todas as imagens e contraste AA nos dois temas
- Na etapa 9: Lighthouse acima de 90 em todas as categorias
