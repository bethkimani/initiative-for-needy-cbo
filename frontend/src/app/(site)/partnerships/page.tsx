import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Building2Icon, ChurchIcon, PackageIcon, UsersIcon } from 'lucide-react';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PartnershipsClient } from './PartnershipsClient';

const opportunities = [
  {
    title: 'Corporate sponsorship',
    text: 'Sponsor a cause, event or programme and engage your staff in meaningful CSR.',
    icon: Building2Icon,
  },
  {
    title: 'Institutional partnerships',
    text: 'Schools, churches, foundations and government bodies working with us on shared goals.',
    icon: ChurchIcon,
  },
  {
    title: 'Community collaborations',
    text: 'Local groups, chamas and organizations joining forces for greater reach.',
    icon: UsersIcon,
  },
  {
    title: 'In-kind support',
    text: 'Food, supplies, transport, venues or professional services that stretch every shilling.',
    icon: PackageIcon,
  },
];

export const metadata: Metadata = {
  title: 'Partner With Us | Corporate CSR & Development Partnerships | Initiative for the Needy CBO',
  description:
    'Collaborate with Initiative for the Needy CBO (Certificate CBO/THK/W/022/2022/1151). We partner with corporations, churches, colleges, and international donors to drive sustainable community development in Thika, Kenya.',
  keywords: [
    'NGO partnerships Kenya',
    'CSR opportunities Kenya',
    'corporate sponsorship Thika',
    'development partners Kiambu',
    'church charity partnerships Kenya',
    'donate to CBO Kenya',
    'Initiative for the Needy partners',
    'community grants Kenya'
  ],
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/partnerships',
  },
  openGraph: {
    title: 'Partner With Us | Corporate CSR & Development Partnerships | Initiative for the Needy CBO',
    description:
      'We work with community groups, churches, education providers and development partners to support vulnerable people in Kiambu County.',
    url: 'https://www.initiativefortheneedy.com/partnerships',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://www.initiativefortheneedy.com/images/team-office.jpg',
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Partnerships',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner With Us | Initiative for the Needy CBO',
    description:
      'Collaborate with Initiative for the Needy CBO on sustainable community impact in Thika and Kiambu County.',
    images: ['https://www.initiativefortheneedy.com/images/team-office.jpg'],
  },
};

export default function PartnershipsPage() {
  const partnershipSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.initiativefortheneedy.com/partnerships#webpage',
        url: 'https://www.initiativefortheneedy.com/partnerships',
        name: 'Partner With Us | Corporate CSR & Development Partnerships | Initiative for the Needy CBO',
        isPartOf: {
          '@id': 'https://www.initiativefortheneedy.com/#website',
        },
        about: {
          '@id': 'https://www.initiativefortheneedy.com/#organization',
        },
        description:
          'Collaborate with Initiative for the Needy CBO (Certificate CBO/THK/W/022/2022/1151). We partner with corporations, churches, colleges, and international donors to drive sustainable community development in Thika, Kenya.',
        inLanguage: 'en-KE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.initiativefortheneedy.com/partnerships#breadcrumbs',
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
            name: 'Partnerships',
            item: 'https://www.initiativefortheneedy.com/partnerships',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.initiativefortheneedy.com/partnerships#opportunities',
        name: 'Partnership Pathways with Initiative for the Needy CBO',
        itemListElement: opportunities.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.title,
          description: item.text,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(partnershipSchema)}
      </script>

      <PageHero
        crumb="Partnerships"
        title="Partner with us for lasting change."
        intro="We work with community groups, churches, education providers and development partners to support vulnerable people in Kiambu County."
        photo={images.teamOffice}
      />

      <section className="py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading
            title="Ways to partner"
            intro="Every partnership is shaped together, around what you can offer and what the community needs."
          />
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {opportunities.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={(i % 2) * 0.05} className="flex gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{o.title}</h3>
                    <p className="mt-2 leading-relaxed text-navy/70">{o.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl bg-soft p-8 md:p-12">
            <h3 className="text-xl font-bold text-navy">Current Partners and Community Supporters</h3>
            <p className="mt-4 leading-relaxed text-navy/75">
              Friends from Madaraka-Makongeni Market, Friends from Classic-Kiganjo Market, Friends from
              Kiganjo-Corner 3 Landmark Market, members of International Voice of God Church in Kiganjo,
              members of Everlasting Hope Church in Kiganjo, and Kenya Institute of Software Engineering
              (KISSE) College.
            </p>
            <p className="mt-4 leading-relaxed text-navy/75">
              The organization is actively seeking development partnerships, project funding, technical support,
              links with Kenyan and international organizations, and skilled volunteers. Future development plans
              include a community resource centre, school, health centre and income-generating sustainable projects.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-24 text-center text-navy/60">Loading inquiry form...</div>}>
        <PartnershipsClient />
      </Suspense>
    </>
  );
}
