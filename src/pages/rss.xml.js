import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Sitio web con portfolio personal y blog tecnológico | Alfonso Roldán | alfonsora6',
    description: 'Bienvenidos a mi blog, donde podréis conocer quien soy, mi experiencia y trayectoria profesional.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}