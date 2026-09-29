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

/**
 * Smaller DevOps/infra tools without a UI (scripts, health checks, hardening...).
 * Frontmatter only — each card links straight to the GitHub repository:
 *   src/content/ferramentas/pt/<slug>.md
 *   src/content/ferramentas/en/<slug>.md
 */
const ferramentas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ferramentas' }),
  schema: z.object({
    /** Repository-style name, shown as ~/<name>. */
    name: z.string(),
    summary: z.string(),
    /** 2–4 short feature lines. */
    highlights: z.array(z.string()).min(1).max(4),
    stack: z.array(z.string()).min(1),
    repo: z.url(),
    order: z.number().int(),
  }),
});

export const collections = { projetos, ferramentas };
