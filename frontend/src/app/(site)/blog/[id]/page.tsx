import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import { getArticleBySlug, getAllArticles } from '@/sanity/api';
import { formatDate } from '@/utils/format';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { PortableTextRenderer } from '@/components/PortableTextRenderer';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleBySlug(id);

  if (!article) {
    return {
      title: 'Story Not Found | Initiative for the Needy',
      description: 'The requested story could not be found.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';
  const title = article.seoTitle || `${article.title} | Initiative for the Needy`;
  const description = article.metaDescription || article.excerpt;
  const canonical = article.canonicalUrl || `${siteUrl}/blog/${article.slug}`;
  const fullImageUrl = article.photo.src.startsWith('http')
    ? article.photo.src
    : `${siteUrl}${article.photo.src.startsWith('/') ? '' : '/'}${article.photo.src}`;

  return {
    title,
    description,
    keywords: article.focusKeyword
      ? [article.focusKeyword, article.category, 'Initiative for the Needy', 'Charity Kenya']
      : [article.category, 'Charity Kenya', 'Community-Based Organization', 'Initiative for the Needy'],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      publishedTime: article.date,
      authors: [article.author || 'Initiative for the Needy Charity Organization'],
      images: [
        {
          url: fullImageUrl,
          alt: article.photo.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    },
  };
}

async function ArticleContent({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticleBySlug(id);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';
  const fullArticleUrl = `${siteUrl}/blog/${article.slug}`;
  const fullImageUrl = article.photo.src.startsWith('http')
    ? article.photo.src
    : `${siteUrl}${article.photo.src.startsWith('/') ? '' : '/'}${article.photo.src}`;

  const allArticles = await getAllArticles();
  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // Schema.org Article Structured Data (JSON-LD) for Google Page 1 Rich Results
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    image: [fullImageUrl],
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'en',
    articleSection: article.category,
    keywords: article.focusKeyword
      ? `${article.focusKeyword}, ${article.category}, Charity Kenya`
      : `${article.category}, Community Support, Charity Kenya, Initiative for the Needy`,
    author: {
      '@type': 'Organization',
      name: article.author || 'Initiative for the Needy Charity Organization',
      url: siteUrl,
    },
    publisher: {
      '@type': 'NonprofitOrganization',
      name: 'Initiative for the Needy Charity Organization',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullArticleUrl,
    },
  };

  // Google BreadcrumbList Schema for clean search result breadcrumbs
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'News & Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: fullArticleUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>

      <article>
        <header className={`${containerClass} max-w-4xl pt-14 md:pt-20`}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All stories
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-charity">{article.category}</span>
            {article.readMinutes ? (
              <span className="text-navy/60">· {article.readMinutes} min read</span>
            ) : null}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-navy md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-sm text-navy/60">
            By {article.author} · <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
        </header>

        <div className={`${containerClass} mt-10 max-w-5xl`}>
          <img
            src={article.photo.src}
            alt={article.photo.alt}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-sm"
          />
        </div>

        <div className={`${containerClass} max-w-3xl py-14`}>
          {article.body ? (
            <PortableTextRenderer value={article.body} />
          ) : (
            <div className="space-y-6 text-lg leading-relaxed text-navy/80">
              {article.content.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <ShareButtons title={article.title} />
          </div>

          <div className="mt-12 rounded-3xl bg-brand p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold">Learn more or get involved</h2>
            <p className="mt-2 text-white/80">
              Explore our community programmes or volunteer your time and skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/causes" variant="red" size="lg">
                Explore Our Causes
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="light" size="lg">
                Volunteer
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-soft py-20">
          <div className={containerClass}>
            <h2 className="mb-10 text-2xl font-bold text-navy">More stories</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function BlogPost({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className={`${containerClass} max-w-4xl py-24 text-center text-navy/60`}>
          Loading story...
        </div>
      }
    >
      <ArticleContent params={params} />
    </Suspense>
  );
}
