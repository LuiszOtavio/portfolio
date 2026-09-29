import type { Lang } from '../i18n/utils';

/** Contact data and links shared by both languages (source: docs/briefing.md). */
export const profile = {
  name: 'Luis Otávio Batista',
  email: 'lovbatista10@gmail.com',
  github: 'https://github.com/LuiszOtavio',
  // The file name has spaces and an accent, so the URL must be percent-encoded.
  cv: {
    pt: `/cv/${encodeURIComponent('Curriculo Luis Otávio.pdf')}`,
    // TODO: point to the EN PDF once it exists (briefing: [PENDENTE])
    en: `/cv/${encodeURIComponent('Curriculo Luis Otávio.pdf')}`,
  } satisfies Record<Lang, string>,
  cvDownloadName: 'Curriculo-Luis-Otavio-Batista.pdf',
} as const;
