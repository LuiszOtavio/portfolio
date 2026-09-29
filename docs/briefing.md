# Briefing — Portfólio Luis Otávio

> Documento de especificação do conteúdo. As regras técnicas estão no CLAUDE.md.
> Nunca invente experiências, projetos, métricas ou certificações que não estejam aqui.
> Itens marcados com `[PENDENTE]` ficam de fora do site até serem preenchidos.

## 1. Objetivo
Conseguir uma vaga com salário melhor. O site será enviado em massa para recrutadores por e-mail.

Vagas-alvo, em ordem de prioridade:
1. DevOps / Cloud / Infraestrutura (júnior)
2. Suporte de automação / RPA / sustentação
3. Vagas de ADS / TI em geral

O site precisa passar a imagem de: **profissional que mantém automações críticas rodando em produção para clientes corporativos, com base sólida em Azure, Linux e Python, e em evolução clara para DevOps/Cloud.**

## 2. Público e hierarquia de leitura
Um único site com duas camadas:
- **Recrutador (30 segundos):** o hero e a primeira dobra respondem "quem é, o que faz, que stack usa, como contratar". O botão de CV e o de contato ficam visíveis sem rolar a página.
- **Tech lead (5 minutos):** a página de cada projeto tem profundidade técnica: problema, arquitetura, decisões, o que deu errado, links para o repositório.

## 3. Idiomas
Português e inglês, com seletor de idioma no topo. Todo o conteúdo existe nas duas línguas.
- Rotas: `/` (PT) e `/en/` (EN)
- Português é o idioma padrão

## 4. Identidade
- **Nome no site:** Portifolio - Luis Otávio Batista
- **Headline (PT):** Suporte & Automação em Cloud · Python · UiPath · Azure — em transição para DevOps
- **Headline (EN):** Automation & Cloud Support · Python · UiPath · Azure — transitioning into DevOps
- **Proposta de valor (PT):** Mantenho automações críticas funcionando em produção para empresas dos setores agroindustrial, financeiro e de infraestrutura — do diagnóstico de VPN e Azure até a correção no código.
- **Proposta de valor (EN):** I keep business-critical automations running in production for agribusiness, financial and infrastructure companies — from VPN and Azure diagnostics down to the code fix.

## 5. Seções da home
1. **Hero:** nome, headline, proposta de valor, botões [Baixar CV] [Contato] [GitHub]
2. **Sobre:** um parágrafo curto (ver seção 6). Nada de texto genérico ("apaixonado por tecnologia").
3. **Experiência:** linha do tempo
4. **Projetos:** cards que levam a páginas de detalhe. A seção deve funcionar bem com 1 a 10 projetos.
5. **Skills:** agrupadas por categoria, sem barras de "porcentagem"
6. **Formação, certificações & idiomas**
7. **Contato**

## 6. Conteúdo

### Sobre (base para o texto final)
Analista de Suporte na Biti9, atuando no suporte e manutenção de automações RPA (Python/UiPath) em produção para clientes corporativos em ambientes Azure. Faço troubleshooting de infraestrutura, conectividade VPN e integrações entre sistemas, e assumo a liderança técnica do time quando necessário. Uso IA no dia a dia para otimizar fluxos internos e desenvolver soluções. Formado em Análise e Desenvolvimento de Sistemas (Fatec Americana), estou em transição para DevOps/Cloud, estudando Linux, redes TCP/IP, Git e Azure de forma contínua.

### Experiência
**Biti9 — Analista de Suporte** | Fev/2025 – atual
- Suporte e manutenção de automações RPA (Python/UiPath) para clientes corporativos dos setores agroindustrial, financeiro e de infraestrutura
- Troubleshooting de conectividade VPN, ambientes Azure e integrações entre sistemas, garantindo a continuidade operacional
- Triagem e resolução de chamados técnicos, com escalação estruturada e acompanhamento até a resolução
- Liderança técnica do time quando necessário, contribuindo para o alinhamento e a tomada de decisões
- Aplicação de ferramentas de IA para otimizar fluxos internos e desenvolver soluções

### Skills
- **Automação:** Python, UiPath (Studio/Orchestrator), Shell Script
- **Cloud & Infra:** Azure, Linux, Docker, Redes TCP/IP, VPN (OpenVPN)
- **Dev & Dados:** Git/GitHub, Azure DevOps, SQL/PostgreSQL, Power BI
- **Suporte & Operação:** troubleshooting multi-cliente, integrações e SSO, Microsoft 365/SharePoint, gestão de chamados
- **Comportamentais:** comunicação, aprendizagem rápida, trabalho em equipe, resolução de problemas, liderança técnica
- **Em estudo (marcar visualmente como "em estudo"):** Terraform, CI/CD, Kubernetes

### Projetos
`[PENDENTE: preencher conforme forem ficando prontos]` — o próprio portfólio entra como projeto nº 1.
Cada projeto tem: título, resumo de 1 linha, problema, stack, arquitetura (diagrama quando fizer sentido), resultados, aprendizados, link do repositório e demo.

### Formação
- **Análise e Desenvolvimento de Sistemas** — Fatec Americana (Faculdade de Tecnologia de Americana Ministro Ralph Biasi) | Concluído em 06/2025
- **Técnico em Desenvolvimento de Sistemas** — ETEC Polivalente Americana | Concluído em 12/2021

### Certificações & idiomas
- TOEIC — 820/1000
- Inglês: avançado
- Planejadas: AZ-900, AZ-104 (mostrar como "em preparação" **somente** se eu confirmar que estou estudando)

### Contato
- E-mail: lovbatista10@gmail.com
- LinkedIn: www.linkedin.com/in/luis-otávio-batista
- GitHub: LuiszOtavio
- CV em PDF para download: versão PT e versão EN `[PENDENTE: gerar versão EN]`
- **Não publicar o telefone no site** (ele fica apenas no CV em PDF)

## 7. Visual
- **Minimalista:** muito espaço em branco, tipografia forte, poucos elementos por tela
- **Cores ricas:** base neutra (quase-preto ou off-white) + 1 cor principal saturada e profunda (ex.: azul-índigo, esmeralda ou vinho) + 1 cor de destaque. Nada de neon nem de gradiente arco-íris.
- Tema claro e escuro, com o escuro como padrão
- Tom: profissional e técnico, que funcione tanto para uma empresa tradicional quanto para uma startup

## 8. Requisitos
- Carregamento rápido (Lighthouse > 90 em todas as categorias)
- SEO básico: título, descrição e Open Graph (preview bonito quando o link é colado no LinkedIn ou no e-mail)
- Responsivo, mobile-first
- Botão de download de CV visível no topo

## 9. Fora do escopo (v1)
- Blog
- Formulário de contato com backend (usar link `mailto:` e LinkedIn)
- Analytics
