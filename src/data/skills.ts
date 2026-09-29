import type { Lang } from '../i18n/utils';

interface SkillGroup {
  title: string;
  items: string[];
  /** Shown with the "studying" badge instead of as a current skill. */
  studying?: boolean;
}

// Source: docs/briefing.md § Skills.
export const skills: Record<Lang, SkillGroup[]> = {
  pt: [
    { title: 'Automação', items: ['Python', 'UiPath (Studio/Orchestrator)', 'Shell Script'] },
    { title: 'Cloud & Infra', items: ['Azure', 'Linux', 'Docker', 'Redes TCP/IP', 'VPN (OpenVPN)'] },
    { title: 'Dev & Dados', items: ['Git/GitHub', 'Azure DevOps', 'SQL/PostgreSQL', 'Power BI'] },
    {
      title: 'Suporte & Operação',
      items: [
        'Troubleshooting multi-cliente',
        'Integrações e SSO',
        'Microsoft 365/SharePoint',
        'Gestão de chamados',
      ],
    },
    {
      title: 'Comportamentais',
      items: [
        'Comunicação',
        'Aprendizagem rápida',
        'Trabalho em equipe',
        'Resolução de problemas',
        'Liderança técnica',
      ],
    },
    { title: 'DevOps & IaC', items: ['Terraform', 'CI/CD', 'Kubernetes'], studying: true },
  ],
  en: [
    { title: 'Automation', items: ['Python', 'UiPath (Studio/Orchestrator)', 'Shell Script'] },
    { title: 'Cloud & Infra', items: ['Azure', 'Linux', 'Docker', 'TCP/IP Networking', 'VPN (OpenVPN)'] },
    { title: 'Dev & Data', items: ['Git/GitHub', 'Azure DevOps', 'SQL/PostgreSQL', 'Power BI'] },
    {
      title: 'Support & Operations',
      items: [
        'Multi-client troubleshooting',
        'Integrations and SSO',
        'Microsoft 365/SharePoint',
        'Ticket management',
      ],
    },
    {
      title: 'Soft skills',
      items: ['Communication', 'Fast learning', 'Teamwork', 'Problem solving', 'Technical leadership'],
    },
    { title: 'DevOps & IaC', items: ['Terraform', 'CI/CD', 'Kubernetes'], studying: true },
  ],
};
