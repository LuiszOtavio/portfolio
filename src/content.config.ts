import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file per project and language:
 *   src/content/projetos/pt/<slug>.md
 *   src/content/projetos/en/<slug>.md
 * The body holds the technical write-up (problem, architecture, decisions...).
 */
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string(),
    /** One-line summary shown on the card. */
    summary: z.string(),
    stack: z.array(z.string()).min(1),
    /** Lower numbers come first. */
    order: z.number().int(),
    repo: z.url().optional(),
    demo: z.url().optional(),
  }),
});

export const collections = { projetos };
