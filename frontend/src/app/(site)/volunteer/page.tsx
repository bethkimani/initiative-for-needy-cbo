import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { images } from '@/data/site';
import { PageHero } from '@/components/ui/PageHero';
import { VolunteerClient } from './VolunteerClient';

export const metadata: Metadata = {
  title: 'Volunteer With Us | Community Charity Volunteering | Initiative for the Needy CBO',
  description:
    'Offer your time, mentorship, or professional skills to empower vulnerable children, youths, widows, and elderly in Thika and Kiambu County with Initiative for the Needy CBO.',
  keywords: [
    'volunteer in Kenya',
    'volunteer Thika',
    'NGO volunteering Kiambu',
    'community volunteer opportunities Kenya',
    'pro bono charity Kenya',
    'volunteer with orphans and elderly',
    'charity work Thika',
    'Initiative for the Needy volunteer'
  ],
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/volunteer',
  },
  openGraph: {
    title: 'Volunteer With Us | Community Charity Volunteering | Initiative for the Needy CBO',
    description:
      'Give your time. Change a life. Join Initiative for the Needy CBO as a community volunteer or pro-bono specialist in Kiambu County.',
    url: 'https://www.initiativefortheneedy.com/volunteer',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://www.initiativefortheneedy.com/images/volunteers-office.jpg',
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Volunteers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteer With Us | Initiative for the Needy CBO',
    description:
      'Offer your time and skills to support vulnerable communities in Kiambu County.',
    images: ['https://www.initiativefortheneedy.com/images/volunteers-office.jpg'],
  },
};

export default function VolunteerPage() {
  const volunteerSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.initiativefortheneedy.com/volunteer#webpage',
        url: 'https://www.initiativefortheneedy.com/volunteer',
        name: 'Volunteer With Us | Community Charity Volunteering | Initiative for the Needy CBO',
        isPartOf: {
          '@id': 'https://www.initiativefortheneedy.com/#website',
        },
        about: {
          '@id': 'https://www.initiativefortheneedy.com/#organization',
        },
        description:
          'Offer your time, mentorship, or professional skills to empower vulnerable children, youths, widows, and elderly in Thika and Kiambu County with Initiative for the Needy CBO.',
        inLanguage: 'en-KE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.initiativefortheneedy.com/volunteer#breadcrumbs',
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
            name: 'Volunteer',
            item: 'https://www.initiativefortheneedy.com/volunteer',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(volunteerSchema)}
      </script>

      <PageHero
        crumb="Volunteer"
        title="Give your time. Change a life."
        intro="Offer your time and skills to support vulnerable communities in Kiambu County. Online sign-up is not connected yet; please contact us directly to discuss volunteering."
        photo={images.volunteersOffice}
      />

      <Suspense fallback={<div className="py-24 text-center text-navy/60">Loading volunteer form...</div>}>
        <VolunteerClient />
      </Suspense>
    </>
  );
}
