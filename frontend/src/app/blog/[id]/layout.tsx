import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { articles } from '@/data/articles';

type BlogPostLayoutProps = {
  children: ReactNode;
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((item) => item.slug === id);
  return {
    title: article?.title ?? 'Article not found',
    description: article?.excerpt ?? 'Stories and community news from Initiative for the Needy.',
  };
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return children;
}
