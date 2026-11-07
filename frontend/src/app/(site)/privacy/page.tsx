import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Initiative for the Needy CBO',
  description:
    'Our privacy policy explains how Initiative for the Needy CBO collects, uses, and protects personal data in compliance with the Kenya Data Protection Act 2019.',
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Initiative for the Needy CBO',
    description:
      'Information on how we safeguard donor, volunteer, and community member data.',
    url: 'https://www.initiativefortheneedy.com/privacy',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function PrivacyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.initiativefortheneedy.com/privacy#webpage',
        url: 'https://www.initiativefortheneedy.com/privacy',
        name: 'Privacy Policy | Initiative for the Needy CBO',
        isPartOf: {
          '@id': 'https://www.initiativefortheneedy.com/#website',
        },
        about: {
          '@id': 'https://www.initiativefortheneedy.com/#organization',
        },
        inLanguage: 'en-KE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.initiativefortheneedy.com/privacy#breadcrumbs',
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
            name: 'Privacy Policy',
            item: 'https://www.initiativefortheneedy.com/privacy',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <PolicyContent kind="privacy" />
    </>
  );
}
