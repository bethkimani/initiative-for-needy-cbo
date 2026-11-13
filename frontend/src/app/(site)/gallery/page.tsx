import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { galleryItems } from '@/data/gallery';
import { images } from '@/data/site';
import { PageHero } from '@/components/ui/PageHero';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
  title: 'Photo Gallery | Moments From Our Community Work | Initiative for the Needy CBO',
  description:
    'Browse photos and moments from our community outreach, food distributions, educational visits, and medical aid missions in Thika and Kiambu County.',
  keywords: [
    'charity photo gallery Kenya',
    'community work photos Thika',
    'food donation pictures Kiambu',
    'volunteer gallery Kenya',
    'Initiative for the Needy photos',
    'grassroots charity gallery',
    'community outreach pictures Kenya'
  ],
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/gallery',
  },
  openGraph: {
    title: 'Photo Gallery | Moments From Our Community Work | Initiative for the Needy CBO',
    description:
      'A visual window into community outreach days, youth mentorship, and grassroots support across Thika and Kiambu County.',
    url: 'https://www.initiativefortheneedy.com/gallery',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://www.initiativefortheneedy.com/images/ceo-feeding.jpg',
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Community Outreach Moments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery | Moments From Our Community Work | Initiative for the Needy CBO',
    description:
      'A visual window into outreach days, community feeding programs, and grassroots empowerment in Kenya.',
    images: ['https://www.initiativefortheneedy.com/images/ceo-feeding.jpg'],
  },
};

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ImageGallery',
        '@id': 'https://www.initiativefortheneedy.com/gallery#webpage',
        url: 'https://www.initiativefortheneedy.com/gallery',
        name: 'Photo Gallery | Moments From Our Community Work | Initiative for the Needy CBO',
        isPartOf: {
          '@id': 'https://www.initiativefortheneedy.com/#website',
        },
        about: {
          '@id': 'https://www.initiativefortheneedy.com/#organization',
        },
        description:
          'Browse photos and moments from our community outreach, food distributions, educational visits, and medical aid missions in Thika and Kiambu County.',
        inLanguage: 'en-KE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.initiativefortheneedy.com/gallery#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.initiativefortheneedy.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gallery',
            item: 'https://www.initiativefortheneedy.com/gallery',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.initiativefortheneedy.com/gallery#image-list',
        name: 'Community Work Gallery Images',
        itemListElement: galleryItems.map((item, index) => ({
          '@type': 'ImageObject',
          position: index + 1,
          name: item.caption,
          description: item.caption,
          contentUrl: item.photo.src.startsWith('http')
            ? item.photo.src
            : `https://www.initiativefortheneedy.com${item.photo.src}`,
          creator: {
            '@id': 'https://www.initiativefortheneedy.com/#organization',
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(gallerySchema)}
      </script>

      <PageHero
        crumb="Gallery"
        title="Moments from our work"
        intro="A window into outreach days, community support and the people who make it happen."
        photo={images.ceoFeeding}
      />

      <Suspense fallback={<div className="py-24 text-center text-navy/60">Loading gallery...</div>}>
        <GalleryClient />
      </Suspense>
    </>
  );
}
