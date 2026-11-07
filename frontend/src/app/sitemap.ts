import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/sanity/api';
import { causes } from '@/data/causes';
import { projects } from '@/data/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

  const staticPages = [
    '',
    '/about',
    '/causes',
    '/projects',
    '/impact',
    '/get-involved',
    '/blog',
    '/contact',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const causeRoutes: MetadataRoute.Sitemap = causes.map((cause) => ({
    url: `${siteUrl}/causes/${cause.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await getAllArticles();
    blogRoutes = articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error generating sitemap articles:', error);
  }

  return [...staticRoutes, ...causeRoutes, ...projectRoutes, ...blogRoutes];
}
