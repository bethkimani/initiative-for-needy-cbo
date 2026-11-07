import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | Initiative for the Needy CBO',
  description:
    'Information about how Initiative for the Needy CBO uses cookies and similar technologies to improve your experience.',
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/cookies',
  },
  openGraph: {
    title: 'Cookie Policy | Initiative for the Needy CBO',
    description:
      'Information about how Initiative for the Needy CBO uses cookies.',
    url: 'https://www.initiativefortheneedy.com/cookies',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function CookiesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.initiativefortheneedy.com/cookies#webpage',
        url: 'https://www.initiativefortheneedy.com/cookies',
        name: 'Cookie Policy | Initiative for the Needy CBO',
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
        '@id': 'https://www.initiativefortheneedy.com/cookies#breadcrumbs',
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
            name: 'Cookie Policy',
            item: 'https://www.initiativefortheneedy.com/cookies',
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
      <PolicyContent kind="cookies" />
    </>
  );
}
