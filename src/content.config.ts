import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file per project and language:
 *   src/content/projetos/pt/<slug>.md
 *   src/content/projetos/en/<slug>.md
 * The body holds the technical write-up (problem, architecture...).
 */
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** One-line summary shown on the card. */
        summary: z.string(),
        stack: z.array(z.string()).min(1),
        /** Lower numbers come first. */
        order: z.number().int(),
        repo: z.url().optional(),
        /** Live site: absolute URL, or a root-relative path for pages of this site. */
        demo: z.union([z.url(), z.string().startsWith('/')]).optional(),
        /** Preview screenshot, path relative to the .md file. */
        image: image().optional(),
        imageAlt: z.string().optional(),
      })
      .refine((data) => !data.image || data.imageAlt, {
        message: 'imageAlt is required when image is set',
        path: ['imageAlt'],
      }),
});

export const collections = { projetos };
