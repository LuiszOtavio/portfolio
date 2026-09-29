import type { Lang } from '../i18n/utils';

interface Degree {
  course: string;
  institution: string;
  /** Full institution name, shown in smaller text when present. */
  institutionFull?: string;
  completed: string;
}

interface Certification {
  name: string;
  detail?: string;
  /** Shown with the "in preparation" badge. */
  inPreparation?: boolean;
}

interface EducationData {
  degrees: Degree[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
}

// Source: docs/briefing.md § Formação / Certificações & idiomas.
// AZ-900 and AZ-104 confirmed by Luis as "in preparation" (2026-09-28).
export const education: Record<Lang, EducationData> = {
  pt: {
    degrees: [
      {
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Fatec Americana',
        institutionFull: 'Faculdade de Tecnologia de Americana Ministro Ralph Biasi',
        completed: 'Concluído em 06/2025',
      },
      {
        course: 'Técnico em Desenvolvimento de Sistemas',
        institution: 'ETEC Polivalente Americana',
        completed: 'Concluído em 12/2021',
      },
    ],
    certifications: [
      { name: 'TOEIC', detail: '820/1000' },
      { name: 'Microsoft Azure Fundamentals (AZ-900)', inPreparation: true },
      { name: 'Microsoft Azure Administrator (AZ-104)', inPreparation: true },
    ],
    languages: [{ name: 'Inglês', level: 'Avançado' }],
  },
  en: {
    degrees: [
      {
        course: 'Technology Degree in Systems Analysis and Development',
        institution: 'Fatec Americana',
        institutionFull: 'Faculdade de Tecnologia de Americana Ministro Ralph Biasi',
        completed: 'Completed Jun 2025',
      },
      {
        course: 'Technical Course in Systems Development',
        institution: 'ETEC Polivalente Americana',
        completed: 'Completed Dec 2021',
      },
    ],
    certifications: [
      { name: 'TOEIC', detail: '820/1000' },
      { name: 'Microsoft Azure Fundamentals (AZ-900)', inPreparation: true },
      { name: 'Microsoft Azure Administrator (AZ-104)', inPreparation: true },
    ],
    languages: [{ name: 'English', level: 'Advanced' }],
  },
};
