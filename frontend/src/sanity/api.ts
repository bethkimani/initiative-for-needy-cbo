import { client } from './client';
import { urlForImage } from './image';
import { isSanityConfigured } from './env';
import { articles as fallbackArticles } from '@/data/articles';
import type { Article } from '@/types/content';

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  mainImage {
    asset,
    alt,
    caption
  },
  excerpt,
  author {
    name,
    role
  },
  publishedAt,
  readMinutes,
  featured,
  body,
  seoTitle,
  metaDescription,
  focusKeyword,
  canonicalUrl
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  mainImage {
    asset,
    alt,
    caption
  },
  excerpt,
  author {
    name,
    role
  },
  publishedAt,
  readMinutes,
  featured,
  body,
  seoTitle,
  metaDescription,
  focusKeyword,
  canonicalUrl
}`;

interface PortableTextChild {
  _type?: string;
  text?: string;
  [key: string]: unknown;
}

interface PortableTextBlock {
  _type?: string;
  children?: PortableTextChild[];
  [key: string]: unknown;
}

function extractExcerptFromBody(body: unknown, fallback: string): string {
  if (!body || !Array.isArray(body)) return fallback;
  const blocks = body as PortableTextBlock[];
  const firstBlock = blocks.find((b) => b._type === 'block' && b.children);
  if (firstBlock && Array.isArray(firstBlock.children)) {
    const text = firstBlock.children.map((c) => c.text || '').join('').trim();
    if (text.length > 200) {
      return text.slice(0, 197) + '...';
    }
    if (text.length > 0) return text;
  }
  return fallback;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapSanityPostToArticle(doc: any): Article {
  let photo = {
    src: '/image-1.png',
    alt: doc.mainImage?.alt || doc.title || 'Initiative for the Needy story',
  };

  if (doc.mainImage) {
    const built = urlForImage(doc.mainImage);
    if (built) {
      photo = {
        src: built,
        alt: doc.mainImage.alt || doc.title || 'Initiative for the Needy story',
      };
    }
  }

  const excerpt =
    doc.excerpt?.trim() ||
    extractExcerptFromBody(doc.body, 'Updates and community stories from Initiative for the Needy.');

  const dateStr = doc.publishedAt
    ? new Date(doc.publishedAt).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  return {
    slug: doc.slug || '',
    title: doc.title || '',
    category: doc.category || 'Community Support',
    date: dateStr,
    author: doc.author?.name || 'Initiative for the Needy',
    excerpt,
    content: [],
    photo,
    featured: Boolean(doc.featured),
    body: doc.body || null,
    readMinutes: doc.readMinutes || 3,
    seoTitle: doc.seoTitle || doc.title,
    metaDescription: doc.metaDescription || excerpt,
    focusKeyword: doc.focusKeyword || '',
    canonicalUrl: doc.canonicalUrl || '',
  };
}

export async function getAllArticles(): Promise<Article[]> {
  if (!isSanityConfigured || !client) {
    return fallbackArticles;
  }

  try {
    const rawPosts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });
    if (!rawPosts || rawPosts.length === 0) {
      return fallbackArticles;
    }
    return rawPosts.map(mapSanityPostToArticle);
  } catch (err) {
    console.warn('Failed to fetch posts from Sanity, using fallback articles:', err);
    return fallbackArticles;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  if (!isSanityConfigured || !client) {
    return fallbackArticles.find((a) => a.slug === slug);
  }

  try {
    const rawPost = await client.fetch(POST_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } });
    if (!rawPost) {
      return fallbackArticles.find((a) => a.slug === slug);
    }
    return mapSanityPostToArticle(rawPost);
  } catch (err) {
    console.warn(`Failed to fetch article "${slug}" from Sanity, using fallback:`, err);
    return fallbackArticles.find((a) => a.slug === slug);
  }
}
