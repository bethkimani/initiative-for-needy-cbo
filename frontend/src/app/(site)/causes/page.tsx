import React from 'react';
import type { Metadata } from 'next';
import { causes } from '@/data/causes';
import { images } from '@/data/site';
import { fundUses } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CauseCard } from '@/components/cards/CauseCard';
import { FinalCTA } from '@/components/home/FinalCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

export const metadata: Metadata = {
  title: 'Our Causes | Community Programmes & Sponsorship in Kenya',
  description:
    'Explore charitable causes supported by Initiative for the Needy in Kiambu, Kenya. Sponsor orphans, youth vocational training, food relief, and elderly care. Donate today.',
  keywords: [
    'Charity Causes Kenya',
    'Donate to Children in Kenya',
    'Sponsor an Orphan Kenya',
    'Youth Vocational Training Sponsorship',
    'Elderly Food Relief Kiambu',
    'Widow Support Programs Kenya',
    'Community Health Initiatives Thika',
    'Community-Based Charity Programs',
    'Initiative for the Needy Causes',
  ],
  alternates: {
    canonical: `${siteUrl}/causes`,
  },
  openGraph: {
    title: 'Our Causes | Community Programmes & Sponsorship in Kenya',
    description:
      'Support verified grassroots causes in Kiambu County: orphan care, youth vocational education, food relief, and elderly wellbeing.',
    url: `${siteUrl}/causes`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Charity Organization Causes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Causes | Community Programmes & Sponsorship in Kenya',
    description:
      'Support orphans, vulnerable children, youth education, and elderly care in Kiambu, Kenya.',
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

export default function Causes() {
  const causesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/causes/#webpage`,
        url: `${siteUrl}/causes`,
        name: 'Our Causes | Initiative for the Needy Charity Organization',
        description:
          'Explore charitable causes supported by Initiative for the Needy across Kiambu County, Kenya.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        breadcrumb: {
          '@id': `${siteUrl}/causes/#breadcrumb`,
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: causes.map((c, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: c.title,
            url: `${siteUrl}/causes/${c.slug}`,
            description: c.summary,
            image: c.photo.src.startsWith('http')
              ? c.photo.src
              : `${siteUrl}${c.photo.src.startsWith('/') ? '' : '/'}${c.photo.src}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/causes/#breadcrumb`,
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
            name: 'Our Causes',
            item: `${siteUrl}/causes`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(causesJsonLd)}
      </script>
      <PageHero
        crumb="Our Causes"
        title="Supporting Vulnerable Communities"
        intro="Our programmes respond directly to the essential needs of vulnerable children, youth, widows, and older persons across Kiambu County."
        photo={images.feeding}
      >
        <ButtonLink to="/donate" variant="red" size="lg">
          Support Our Causes
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className={containerClass}>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {causes.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.05}>
                <CauseCard cause={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading
            title="Our Areas of Support"
            intro="We deliver targeted grassroots interventions in response to verified community needs."
          />
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {fundUses.map((f) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title}>
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{f.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
