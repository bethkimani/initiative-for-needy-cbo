import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { homeFAQs } from '@/data/faqs';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { AboutIntro } from '@/components/home/AboutIntro';
import { ImpactStats } from '@/components/home/ImpactStats';
import { FeaturedCauses } from '@/components/home/FeaturedCauses';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Approach } from '@/components/home/Approach';
import { InvolvementCards } from '@/components/home/InvolvementCards';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { TeamPreview } from '@/components/home/TeamPreview';
import { NewsPreview } from '@/components/home/NewsPreview';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { FinalCTA } from '@/components/home/FinalCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

export const metadata: Metadata = {
  title: {
    absolute: 'Initiative for the Needy | Registered Charity Organization & CBO in Kenya',
  },
  description:
    'Support Initiative for the Needy, a registered Community-Based Charity Organization (CBO) in Kiambu, Kenya. Empowering orphans, vulnerable children, youth vocational skills, and older persons. Donate or volunteer today.',
  keywords: [
    'Charity Organization Kenya',
    'Community-Based Organization Kenya',
    'CBO Kenya',
    'Donate to Charity Kenya',
    'Orphan Support Kenya',
    'Vulnerable Children Kiambu',
    'Youth Vocational Training Scholarships Kenya',
    'Initiative for the Needy',
    'Thika Charity Organization',
    'Elderly Care Relief Kenya',
    'Non-Profit Charity East Africa',
    'Volunteer Opportunities Kenya',
    'Sponsor a Child Kenya',
    'Transparent Charity Donations M-Pesa',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Initiative for the Needy | Registered Charity Organization & CBO in Kenya',
    description:
      'Join us in transforming vulnerable communities across Kiambu County, Kenya. Supporting orphans, youth vocational education, food security, and elderly care.',
    url: siteUrl,
    siteName: site.name,
    type: 'website',
    locale: 'en_KE',
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Charity Organization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Initiative for the Needy | Registered Charity Organization & CBO in Kenya',
    description:
      'Support orphans, vulnerable children, youth vocational education, and elderly care in Kiambu, Kenya.',
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

export default function Home() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        alternateName: [site.shortName, 'Initiative for the Needy CBO', 'Initiative for the Needy Kenya'],
        description:
          'Official portal of Initiative for the Needy, a registered community-based charity organization (CBO) serving vulnerable communities across Kiambu County, Kenya.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-KE',
      },
      {
        '@type': ['NonprofitOrganization', 'NGO'],
        '@id': `${siteUrl}/#organization`,
        name: site.name,
        legalName: 'Initiative for the Needy Community-Based Organization',
        alternateName: [site.shortName, 'Initiative for the Needy CBO'],
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
          caption: 'Initiative for the Needy Charity Organization Logo',
        },
        image: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        foundingDate: '2020-01-16',
        nonprofitStatus: 'CommunityBasedOrganization',
        taxID: 'CBO/THK/W/022/2022/1151',
        identifier: 'CBO/THK/W/022/2022/1151',
        description: site.mission,
        email: site.email,
        telephone: site.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kiganjo-Main Road, Corner 3, Kwa Kamande Stage, next to Gamoyoni Driving School',
          addressLocality: 'Thika',
          addressRegion: 'Kiambu County',
          postalCode: '01000',
          addressCountry: 'KE',
        },
        areaServed: [
          { '@type': 'City', name: 'Thika' },
          { '@type': 'City', name: 'Juja' },
          { '@type': 'City', name: 'Ruiru' },
          { '@type': 'AdministrativeArea', name: 'Kiambu County' },
          { '@type': 'Country', name: 'Kenya' },
        ],
        founder: {
          '@type': 'Person',
          name: 'Charles Kyalo Ngina',
          jobTitle: 'Founder & Chief Executive Officer',
          worksFor: { '@id': `${siteUrl}/#organization` },
          image: `${siteUrl}/charles.jpeg`,
        },
        employee: [
          {
            '@type': 'Person',
            name: 'Roseline Awino',
            jobTitle: 'Program Coordinator',
          },
          {
            '@type': 'Person',
            name: 'Lukas Mwangi',
            jobTitle: 'Accountant',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.phone,
          email: site.email,
          contactType: 'Donor Relations & Community Assistance',
          areaServed: 'KE',
          availableLanguage: ['English', 'Swahili'],
        },
        potentialAction: {
          '@type': 'DonateAction',
          name: 'Donate to Initiative for the Needy',
          description:
            'Support education for orphans, vocational youth scholarships, food relief, and elderly care in Kenya.',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/donate`,
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          recipient: {
            '@id': `${siteUrl}/#organization`,
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Charitable Programmes & Sponsorship Opportunities',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Little Lights Child Support & Nutrition Programme',
                description: 'Home-based care, daily nutritious meals, and mentorship for orphans and vulnerable children.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Youth Vocational Training & Skills Sponsorship',
                description: 'Technical and vocational training courses delivered with KISSE College to prepare youth for sustainable work.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Older Persons & Widows Food Relief Outreach',
                description: 'Nutritional food packages, companionship, and welfare visits for elderly community members.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Community Healthcare & Disability Advocacy',
                description: 'Community-based medical outreaches, health monitoring, and disability inclusion initiatives.',
              },
            },
          ],
        },
        knowsAbout: [
          'Charity and Relief Initiatives in Kenya',
          'Community-Based Organization (CBO) Governance',
          'Orphan and Vulnerable Children Care',
          'Youth Vocational Education and Apprenticeships',
          'Elderly Social Welfare & Food Security',
          'Grassroots Philanthropy in East Africa',
          'M-Pesa and Wire Transfer Charity Donations',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: homeFAQs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(homeJsonLd)}
      </script>
      <HeroCarousel />
      <AboutIntro />
      <ImpactStats />
      <FeaturedCauses />
      <FeaturedProjects />
      <Approach />
      <InvolvementCards />
      <TestimonialCarousel />
      <TeamPreview />
      <Suspense fallback={null}>
        <NewsPreview />
      </Suspense>
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
