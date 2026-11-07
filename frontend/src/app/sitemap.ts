import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/sanity/api';
import { causes } from '@/data/causes';
import { projects } from '@/data/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

  const staticPages: {
    route: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }[] = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/donate', priority: 0.95, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/causes', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/projects', priority: 0.85, changeFrequency: 'weekly' },
    { route: '/get-involved', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/volunteer', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/partnerships', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/team', priority: 0.75, changeFrequency: 'monthly' },
    { route: '/events', priority: 0.75, changeFrequency: 'weekly' },
    { route: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/policy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((item) => ({
    url: `${siteUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const causeRoutes: MetadataRoute.Sitemap = causes.map((cause) => ({
    url: `${siteUrl}/causes/${cause.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await getAllArticles();
    blogRoutes = articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.75,
    }));
  } catch (error) {
    console.error('Error generating sitemap articles:', error);
  }

  return [...staticRoutes, ...causeRoutes, ...projectRoutes, ...blogRoutes];
}
