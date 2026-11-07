import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { ContactClient } from './ContactClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

export const metadata: Metadata = {
  title: 'Contact Us | Initiative for the Needy Charity Organization · Thika, Kenya',
  description:
    'Get in touch with Initiative for the Needy, a registered Community-Based Charity Organization (CBO) in Thika, Kiambu County, Kenya. Visit our office, call +254 721 286 516, or send an inquiry.',
  keywords: [
    'Contact Initiative for the Needy',
    'Charity Office Thika',
    'Kiambu CBO Contact',
    'Kiganjo Thika Charity Organization',
    'Volunteer Inquiries Kenya',
    'Community Organization Phone Number Kenya',
    'Donation Inquiries Kenya',
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Initiative for the Needy Charity Organization',
    description:
      'Reach out to our team in Kiganjo, Thika, Kenya for inquiries, sponsorships, partnerships, and volunteering.',
    url: `${siteUrl}/contact`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Charity Organization Office and Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Initiative for the Needy',
    description:
      'Contact our community team in Kiambu County, Kenya by phone, email, or in-person visit.',
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

export default function Contact() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${siteUrl}/contact/#webpage`,
        url: `${siteUrl}/contact`,
        name: 'Contact Us | Initiative for the Needy Charity Organization',
        description:
          'Official contact details, location, and inquiry channels for Initiative for the Needy CBO in Thika, Kenya.',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        breadcrumb: {
          '@id': `${siteUrl}/contact/#breadcrumb`,
        },
        mainEntity: {
          '@type': 'NonprofitOrganization',
          '@id': `${siteUrl}/#organization`,
          name: site.name,
          telephone: site.phone,
          email: site.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kiganjo-Main Road, Corner 3, Kwa Kamande Stage, next to Gamoyoni Driving School',
            addressLocality: 'Thika',
            addressRegion: 'Kiambu County',
            postalCode: '01000',
            addressCountry: 'KE',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: site.phone,
              contactType: 'Community Assistance & Donor Support',
              email: site.email,
              areaServed: 'KE',
              availableLanguage: ['English', 'Swahili'],
            },
            {
              '@type': 'ContactPoint',
              telephone: site.phones[1] || site.phone,
              contactType: 'Alternate Office Line',
              areaServed: 'KE',
              availableLanguage: ['English', 'Swahili'],
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/contact/#breadcrumb`,
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
            name: 'Contact Us',
            item: `${siteUrl}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(contactJsonLd)}
      </script>
      <Suspense
        fallback={
          <div className={`${containerClass} py-24 text-center text-navy/60`}>
            Loading contact page...
          </div>
        }
      >
        <ContactClient />
      </Suspense>
    </>
  );
}
