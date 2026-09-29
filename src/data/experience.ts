import type { Lang } from '../i18n/utils';

interface Experience {
  company: string;
  role: string;
  /** Display period, e.g. "Fev/2025 – atual". */
  period: string;
  /** Machine-readable start date for <time datetime>. */
  start: string;
  highlights: string[];
}

// Source: CV in public/cv (most recent first).
export const experience: Record<Lang, Experience[]> = {
  pt: [
    {
      company: 'Biti9',
      role: 'Analista de Suporte',
      period: 'Fev/2025 – atual',
      start: '2025-02',
      highlights: [
        'Suporte e manutenção de automações RPA (Python) para clientes corporativos nos setores agroindustrial, financeiro e de infraestrutura',
        'Troubleshooting de conectividade VPN, ambientes Azure e integrações entre sistemas, garantindo a continuidade operacional',
        'Triagem e resolução de chamados técnicos, com escalação estruturada e acompanhamento até a resolução',
        'Liderança técnica do time quando necessário, contribuindo para o alinhamento e a tomada de decisões',
        'Aplicação de ferramentas de Inteligência Artificial para otimização de fluxos internos e desenvolvimento de soluções',
      ],
    },
  ],
  en: [
    {
      company: 'Biti9',
      role: 'Support Analyst',
      period: 'Feb 2025 – present',
      start: '2025-02',
      highlights: [
        'Support and maintenance of RPA automations (Python) for corporate clients in the agribusiness, financial and infrastructure sectors',
        'Troubleshooting of VPN connectivity, Azure environments and system integrations, ensuring operational continuity',
        'Triage and resolution of technical tickets, with structured escalation and follow-up through to resolution',
        'Technical leadership of the team when needed, supporting alignment and decision-making',
        'Use of Artificial Intelligence tools to streamline internal workflows and build solutions',
      ],
    },
  ],
};
