import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Organizational Policy & Safeguarding | Initiative for the Needy CBO',
  description:
    'Our organizational policies, safeguarding principles, and community protection standards at Initiative for the Needy CBO.',
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/policy',
  },
  openGraph: {
    title: 'Organizational Policy & Safeguarding | Initiative for the Needy CBO',
    description:
      'Our organizational policies and community protection standards.',
    url: 'https://www.initiativefortheneedy.com/policy',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function PolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.initiativefortheneedy.com/policy#webpage',
        url: 'https://www.initiativefortheneedy.com/policy',
        name: 'Organizational Policy & Safeguarding | Initiative for the Needy CBO',
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
        '@id': 'https://www.initiativefortheneedy.com/policy#breadcrumbs',
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
            name: 'Policy',
            item: 'https://www.initiativefortheneedy.com/policy',
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
