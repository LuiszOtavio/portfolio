/** Personal data and links shared by both languages (source: docs/briefing.md). */
export const profile = {
  name: 'Luis Otávio Batista',
  github: 'https://github.com/LuiszOtavio',
  // public/cv/Curriculo Luis Otávio.pdf — spaces and accent must be percent-encoded.
  cv: `/cv/${encodeURIComponent('Curriculo Luis Otávio.pdf')}`,
  cvDownloadName: 'Curriculo-Luis-Otavio-Batista.pdf',
} as const;
