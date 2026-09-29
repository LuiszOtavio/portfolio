/** Personal data and links shared by both languages (source: docs/briefing.md). */
export const profile = {
  name: 'Luis Otávio Batista',
  email: 'lovbatista10@gmail.com',
  github: 'https://github.com/LuiszOtavio',
  githubHandle: 'LuiszOtavio',
  // The profile slug has an accent, so it must be percent-encoded.
  linkedin: `https://www.linkedin.com/in/${encodeURIComponent('luis-otávio-batista')}`,
  linkedinHandle: 'luis-otávio-batista',
  // public/cv/Curriculo Luis Otávio.pdf — spaces and accent must be percent-encoded.
  cv: `/cv/${encodeURIComponent('Curriculo Luis Otávio.pdf')}`,
  cvDownloadName: 'Curriculo-Luis-Otavio-Batista.pdf',
} as const;
