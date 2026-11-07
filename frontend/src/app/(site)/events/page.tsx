import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { events } from '@/data/events';
import { images } from '@/data/site';
import { PageHero } from '@/components/ui/PageHero';
import { EventsListClient } from './EventsListClient';

export const metadata: Metadata = {
  title: 'Community Activities & Outreach Events | Initiative for the Needy CBO',
  description:
    'Join our community outreach, food distribution drives, youth mentorship, and medical support activities organized by Initiative for the Needy CBO in Thika and Kiambu County.',
  keywords: [
    'charity events Thika',
    'community outreach Kiambu',
    'volunteer events Kenya',
    'youth mentorship Thika',
    'elderly outreach Kenya',
    'charity activities Kiambu',
    'food drives Thika',
    'Initiative for the Needy events',
    'community mobilization Kenya'
  ],
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/events',
  },
  openGraph: {
    title: 'Community Activities & Outreach Events | Initiative for the Needy CBO',
    description:
      'Participate in outreach activities and community drives in Thika and Kiambu County organized by Initiative for the Needy CBO.',
    url: 'https://www.initiativefortheneedy.com/events',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://www.initiativefortheneedy.com/images/blog-event.jpg',
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Community Outreach and Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Activities & Outreach Events | Initiative for the Needy CBO',
    description:
      'Participate in community outreach drives, youth mentorship, and charity events in Thika, Kenya.',
    images: ['https://www.initiativefortheneedy.com/images/blog-event.jpg'],
  },
};

export default function EventsPage() {
  const eventsSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.initiativefortheneedy.com/events#webpage',
        url: 'https://www.initiativefortheneedy.com/events',
        name: 'Community Activities & Outreach Events | Initiative for the Needy CBO',
        isPartOf: {
          '@id': 'https://www.initiativefortheneedy.com/#website',
        },
        about: {
          '@id': 'https://www.initiativefortheneedy.com/#organization',
        },
        description:
          'Join our community outreach, food distribution drives, youth mentorship, and medical support activities organized by Initiative for the Needy CBO in Thika and Kiambu County.',
        inLanguage: 'en-KE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.initiativefortheneedy.com/events#breadcrumbs',
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
            name: 'Events',
            item: 'https://www.initiativefortheneedy.com/events',
          },
        ],
      },
      ...(events.length > 0
        ? [
            {
              '@type': 'ItemList',
              '@id': 'https://www.initiativefortheneedy.com/events#event-list',
              name: 'Community Outreach Activities & Events',
              itemListElement: events.map((event, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Event',
                  name: event.title,
                  description: event.summary,
                  startDate: event.date,
                  eventStatus:
                    event.status === 'upcoming'
                      ? 'https://schema.org/EventScheduled'
                      : 'https://schema.org/EventPostponed',
                  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                  location: {
                    '@type': 'Place',
                    name: event.location,
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: 'Thika',
                      addressRegion: 'Kiambu County',
                      addressCountry: 'KE',
                    },
                  },
                  image: event.photo?.src
                    ? event.photo.src.startsWith('http')
                      ? event.photo.src
                      : `https://www.initiativefortheneedy.com${event.photo.src}`
                    : undefined,
                  organizer: {
                    '@id': 'https://www.initiativefortheneedy.com/#organization',
                  },
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(eventsSchema)}
      </script>

      <PageHero
        crumb="Events"
        title="Community Activities & Events"
        intro="Our regular activities include community outreach, counselling, youth mentorship and support for vulnerable children and older people."
        photo={images.blogEvent}
      />

      <Suspense fallback={<div className="py-24 text-center text-navy/60">Loading events...</div>}>
        <EventsListClient />
      </Suspense>
    </>
  );
}
