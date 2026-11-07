import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Terms of Use | Initiative for the Needy CBO',
  description:
    'Terms of use and legal terms governing the use of the Initiative for the Needy CBO website and services.',
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/terms',
  },
  openGraph: {
    title: 'Terms of Use | Initiative for the Needy CBO',
    description:
      'Legal terms and conditions governing the use of the Initiative for the Needy CBO website.',
    url: 'https://www.initiativefortheneedy.com/terms',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function TermsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.initiativefortheneedy.com/terms#webpage',
        url: 'https://www.initiativefortheneedy.com/terms',
        name: 'Terms of Use | Initiative for the Needy CBO',
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
        '@id': 'https://www.initiativefortheneedy.com/terms#breadcrumbs',
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
            name: 'Terms of Use',
            item: 'https://www.initiativefortheneedy.com/terms',
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
      <PolicyContent kind="terms" />
    </>
  );
}
