/** Personal data and links shared by both languages (source: docs/briefing.md). */
export const profile = {
  name: 'Luis Otávio Batista',
  email: 'lovbatista10@gmail.com',
  github: 'https://github.com/LuiszOtavio',
  githubHandle: 'LuiszOtavio',
  // The profile slug has an accent, so it must be percent-encoded.
  linkedin: `https://www.linkedin.com/in/${encodeURIComponent('luis-otávio-batista')}`,
  linkedinHandle: 'luis-otávio-batista',
  // Files in public/cv, one per language.
  cv: {
    pt: '/cv/curriculo-luis-otavio-batista.pdf',
    en: '/cv/resume-luis-otavio-batista.pdf',
  },
  cvDownloadName: {
    pt: 'Curriculo-Luis-Otavio-Batista.pdf',
    en: 'Resume-Luis-Otavio-Batista.pdf',
  },
} as const;
