import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/utils';

export type Project = CollectionEntry<'projetos'>;

/** Entry ids look like "pt/portfolio": language folder + slug. */
export function projectSlug(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getCollection('projetos', ({ id }) => id.startsWith(`${lang}/`));
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export type Tool = CollectionEntry<'ferramentas'>;

export async function getTools(lang: Lang): Promise<Tool[]> {
  const tools = await getCollection('ferramentas', ({ id }) => id.startsWith(`${lang}/`));
  return tools.sort((a, b) => a.data.order - b.data.order);
}

export function projectPath(lang: Lang, slug: string): string {
  return lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`;
}

/**
 * getStaticPaths for a language's detail pages. Each page also gets the URL of
 * the same project in every language, falling back to that language's home.
 */
export async function getProjectStaticPaths(lang: Lang) {
  const all = await getCollection('projetos');
  const ids = new Set(all.map((p) => p.id));
  const langs = Object.keys(languages) as Lang[];

  return (await getProjects(lang)).map((project) => {
    const slug = projectSlug(project);
    const alternates = Object.fromEntries(
      langs.map((l) => [l, ids.has(`${l}/${slug}`) ? projectPath(l, slug) : languages[l].home]),
    ) as Record<Lang, string>;

    return { params: { slug }, props: { project, alternates } };
  });
}
