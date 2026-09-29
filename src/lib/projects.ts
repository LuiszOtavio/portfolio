import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export type Project = CollectionEntry<'projetos'>;

/** Entry ids look like "pt/portfolio": language folder + slug. */
export function projectSlug(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getCollection('projetos', ({ id }) => id.startsWith(`${lang}/`));
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function projectPath(lang: Lang, slug: string): string {
  return lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`;
}
