import React from 'react';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { images } from '@/data/site';
import { PageHero } from '@/components/ui/PageHero';
import { FinalCTA } from '@/components/home/FinalCTA';
import { ProjectsListClient } from './ProjectsListClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

export const metadata: Metadata = {
  title: 'Our Projects | Community Impacts & Milestones in Kenya',
  description:
    'Discover completed and ongoing charity projects by Initiative for the Needy in Kiambu County, Kenya. Vocational training with KISSE College, elderly outreaches, and child nutrition.',
  keywords: [
    'Charity Projects Kenya',
    'Community Projects Kiambu County',
    'Vocational Training KISSE College Thika',
    'International Day of Older Persons Kenya',
    'Orphan Support Projects Kiambu',
    'Kiandutu Slums Food Relief',
    'Initiative for the Needy Projects',
    'Community Development Projects Kenya',
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: 'Our Projects | Community Impacts & Milestones in Kenya',
    description:
      'Verified community programmes and achievements by Initiative for the Needy CBO across Kiambu County, Kenya.',
    url: `${siteUrl}/projects`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Charity Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | Community Impacts & Milestones in Kenya',
    description:
      'Explore community impact projects by Initiative for the Needy Charity Organization in Kenya.',
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

export default function Projects() {
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/projects/#webpage`,
        url: `${siteUrl}/projects`,
        name: 'Our Projects | Initiative for the Needy Charity Organization',
        description:
          'Explore completed and ongoing charity projects by Initiative for the Needy in Kiambu County, Kenya.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        breadcrumb: {
          '@id': `${siteUrl}/projects/#breadcrumb`,
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((p, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: p.title,
            url: `${siteUrl}/projects/${p.slug}`,
            description: p.summary,
            image: p.photo.src.startsWith('http')
              ? p.photo.src
              : `${siteUrl}${p.photo.src.startsWith('/') ? '' : '/'}${p.photo.src}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/projects/#breadcrumb`,
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
            name: 'Our Projects',
            item: `${siteUrl}/projects`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(projectsJsonLd)}
      </script>
      <PageHero
        crumb="Projects"
        title="Our Projects"
        intro="Explore our completed programmes, ongoing activities and verified community milestones across Kiambu County."
        photo={images.foodDonation}
      />
      <ProjectsListClient initialProjects={projects} />
      <FinalCTA />
    </>
  );
}
