import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllArticles } from '@/sanity/api';
import { BlogListClient } from './BlogListClient';
import { PageHero } from '@/components/ui/PageHero';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

export const metadata: Metadata = {
  title: 'News & Blog | Initiative for the Needy',
  description: 'Updates on our programmes, partnerships, and community achievements across Kiambu County, Kenya.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'News & Blog | Initiative for the Needy Charity Organization',
    description: 'Updates on our programmes, partnerships, and community achievements across Kiambu County, Kenya.',
    url: `${siteUrl}/blog`,
    type: 'website',
  },
};

async function BlogArticles() {
  const articles = await getAllArticles();

  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'News and Community Updates',
    description: 'Updates on our programmes, partnerships, and community achievements across Kiambu County, Kenya.',
    url: `${siteUrl}/blog`,
    publisher: {
      '@type': 'NonprofitOrganization',
      name: 'Initiative for the Needy Charity Organization',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
      },
    },
    hasPart: articles.map((a) => ({
      '@type': 'NewsArticle',
      headline: a.title,
      url: `${siteUrl}/blog/${a.slug}`,
      datePublished: a.date,
    })),
  };

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
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(blogListJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>
      <BlogListClient initialArticles={articles} />
    </>
  );
}

export default function Blog() {
  return (
    <Suspense
      fallback={
        <>
          <PageHero
            crumb="News & Blog"
            title="News and Community Updates"
            intro="Updates on our programmes, partnerships and community achievements."
            photo={images.kidsCentre}
          />
          <section className="py-20">
            <div className={`${containerClass} text-center text-navy/60`}>
              Loading stories...
            </div>
          </section>
        </>
      }
    >
      <BlogArticles />
    </Suspense>
  );
}
