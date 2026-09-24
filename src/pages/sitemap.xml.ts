import type { APIRoute } from 'astro';
import { menuItems } from '../data/menu';
import { branches } from '../data/branches';
import { articles } from '../data/articles';

export const GET: APIRoute = () => {
  const siteUrl = 'https://kutudamakarna.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/menu', priority: '0.9', changefreq: 'daily' },
    { url: '/subeler', priority: '0.9', changefreq: 'weekly' },
    { url: '/makarna', priority: '0.8', changefreq: 'weekly' },
    { url: '/hakkimizda', priority: '0.7', changefreq: 'monthly' },
    { url: '/iletisim', priority: '0.7', changefreq: 'monthly' },
  ];

  const productPages = menuItems.map(item => ({
    url: `/menu/${item.slug}`,
    priority: '0.85',
    changefreq: 'weekly'
  }));

  const branchPages = branches.map(b => ({
    url: `/subeler/${b.slug}`,
    priority: '0.85',
    changefreq: 'weekly'
  }));

  const articlePages = articles.map(a => ({
    url: `/makarna/${a.slug}`,
    priority: '0.75',
    changefreq: 'monthly'
  }));

  const allUrls = [
    ...staticPages,
    ...productPages,
    ...branchPages,
    ...articlePages,
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
