# Pendências — o que depende do Luis

> Lista viva: o Claude acrescenta itens conforme surgem nas etapas. Marque `[x]` quando concluir.

## Conteúdo

- [ ] **CV em inglês.** Gerar o PDF em EN e colocá-lo em `public/cv/`. Depois, pedir ao Claude para apontar o botão "Download CV" da versão EN para ele (hoje ele baixa o CV em PT). Arquivo: `src/data/profile.ts`.
- [ ] **Projeto "Portfólio pessoal": Resultados.** Escrever o que o projeto entregou (ex.: nota no Lighthouse, tempo de carregamento), só com números reais, medidos depois do deploy. Arquivos: `src/content/projetos/pt/portfolio.md` e `src/content/projetos/en/portfolio.md`.
- [ ] **Projeto "Portfólio pessoal": Aprendizados.** Escrever o que você aprendeu construindo o site. É uma opinião sua, então o Claude não deve inventar. Você pode escrever direto ou passar os pontos para ele redigir.
- [ ] **Novos projetos.** A cada projeto pronto, passar ao Claude: título, resumo de 1 linha, problema, stack, arquitetura, resultados, aprendizados, link do repositório e demo. A seção aceita de 1 a 10 projetos.
- [ ] **Atualizar o briefing** (`docs/briefing.md`) com as decisões tomadas depois dele. Hoje ele diverge do site nestes pontos:
  - A headline não tem mais UiPath (ele continua só nas skills).
  - O texto do hero e o "Sobre" seguem o resumo do CV, não a proposta de valor do briefing.
  - A experiência segue os itens do CV ("RPA (Python)", sem UiPath).
- [ ] **Certificações.** Ao passar na AZ-900 ou na AZ-104, avisar o Claude para trocar o selo "em preparação" pela certificação obtida (com a data e, se houver, o link da credencial).

## Deploy (etapa 10)

- [ ] **Criar o repositório no GitHub** e decidir se ele será público ou privado.
  - Atenção: o CV em `public/cv/` tem seu telefone. Com o repositório público, ele também fica visível no GitHub, não só no site.
- [ ] **Criar o recurso Azure Static Web Apps** no portal do Azure. O Claude te guia na etapa 10.
- [ ] **Depois do deploy:**
  - Adicionar o link do repositório (`repo:`) no projeto "Portfólio pessoal".
  - Trocar "deploy planejado" por "publicado" no resumo desse projeto.

## Opcional

- [ ] **Domínio próprio.** Sem um, o site usa a URL padrão do Azure, que também é usada no preview de link (Open Graph).
- [ ] **Foto no hero.** Hoje não tem; se quiser, colocar a imagem em `public/`.
- [ ] **Revisar os textos em inglês.** O Claude traduziu tudo; vale uma leitura sua, já que seu inglês é avançado.
