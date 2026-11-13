import React from 'react';
import type { Metadata } from 'next';
import { team } from '@/data/team';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { TeamCard } from '@/components/cards/TeamCard';
import { TeamPhoto } from '@/components/cards/TeamPhoto';
import { ButtonLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = {
  title: 'Our Leadership & Community Team | Initiative for the Needy CBO',
  description:
    'Meet the leadership, staff, and dedicated volunteers behind Initiative for the Needy CBO (Certificate CBO/THK/W/022/2022/1151). Led by CEO Charles Kyalo Ngina, serving Thika and Kiambu County.',
  keywords: [
    'Initiative for the Needy team',
    'Charles Kyalo Ngina',
    'Thika charity leadership',
    'CBO leadership Kenya',
    'Kiambu NGO directors',
    'community development professionals Thika',
    'charity volunteers Kenya',
    'nonprofit board Thika',
    'grassroots charity leadership'
  ],
  alternates: {
    canonical: 'https://www.initiativefortheneedy.com/team',
  },
  openGraph: {
    title: 'Our Leadership & Community Team | Initiative for the Needy CBO',
    description:
      'Meet the leadership, staff, and dedicated volunteers behind Initiative for the Needy CBO (Certificate CBO/THK/W/022/2022/1151). Led by CEO Charles Kyalo Ngina.',
    url: 'https://www.initiativefortheneedy.com/team',
    siteName: 'Initiative for the Needy Charity Organization',
    locale: 'en_KE',
    type: 'profile',
    images: [
      {
        url: 'https://www.initiativefortheneedy.com/Charles%20Kyalo%20Ngina.jpeg',
        width: 1200,
        height: 630,
        alt: 'Charles Kyalo Ngina - CEO & Community Development Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Leadership & Community Team | Initiative for the Needy CBO',
    description:
      'Meet the dedicated leadership and community champions at Initiative for the Needy CBO in Thika, Kenya.',
    images: ['https://www.initiativefortheneedy.com/Charles%20Kyalo%20Ngina.jpeg'],
  },
};

export default function Team() {
  const [lead, ...others] = team;

  const teamSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.initiativefortheneedy.com/team#webpage',
        url: 'https://www.initiativefortheneedy.com/team',
        name: 'Our Leadership & Community Team | Initiative for the Needy CBO',
        isPartOf: {
          '@id': 'https://www.initiativefortheneedy.com/#website',
        },
        about: {
          '@id': 'https://www.initiativefortheneedy.com/#organization',
        },
        description:
          'Meet the leadership, staff, and dedicated volunteers behind Initiative for the Needy CBO (Certificate CBO/THK/W/022/2022/1151). Led by CEO Charles Kyalo Ngina.',
        inLanguage: 'en-KE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.initiativefortheneedy.com/team#breadcrumbs',
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
            name: 'Our Team',
            item: 'https://www.initiativefortheneedy.com/team',
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.initiativefortheneedy.com/team#leadership-list',
        name: 'Initiative for the Needy Leadership & Team Members',
        description: 'Key leadership, programme management, and volunteer personnel at Initiative for the Needy CBO.',
        itemListElement: team.map((member, index) => ({
          '@type': 'Person',
          position: index + 1,
          name: member.name,
          jobTitle: member.role,
          description: member.bio,
          worksFor: {
            '@id': 'https://www.initiativefortheneedy.com/#organization',
          },
          image: member.photo?.src
            ? member.photo.src.startsWith('http')
              ? member.photo.src
              : `https://www.initiativefortheneedy.com${member.photo.src}`
            : undefined,
          knowsAbout: member.focus,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(teamSchema)}
      </script>

      <PageHero
        crumb="Our Team"
        title="Meet Our Team"
        intro="Meet the people who lead and deliver our work with vulnerable communities in Thika and Kiambu County."
        photo={images.teamOffice}
      />

      <section className="py-20 md:py-28">
        <div className={containerClass}>
          <Reveal className="grid items-center gap-12 rounded-3xl bg-soft p-6 md:p-12 lg:grid-cols-[1fr_1.3fr]">
            <div className="overflow-hidden rounded-2xl bg-white">
              <TeamPhoto
                photo={lead.photo}
                initials={lead.initials}
                className="aspect-[4/5] w-full max-w-md"
                imageClassName="mx-auto aspect-[4/5] w-full max-w-md object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-charity">{lead.role}</p>
              <h2 className="mt-2 break-words text-[clamp(1.75rem,7vw,2.25rem)] font-extrabold text-navy">{lead.name}</h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/75">{lead.bio}</p>
              <dl className="mt-8 border-t border-line pt-6">
                <dt className="text-xs text-navy/55">Focus</dt>
                <dd className="font-semibold text-navy">{lead.focus}</dd>
              </dl>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {others.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <TeamCard member={m} />
                <p className="mt-3 text-xs text-navy/55">Focus: {m.focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-16 text-white">
        <div className={`${containerClass} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Want to serve alongside us?</h2>
            <p className="mt-2 text-white/80">Volunteer your time and skills to support vulnerable communities in Kiambu County.</p>
          </div>
          <ButtonLink to="/volunteer" variant="light" size="lg">
            Become a Volunteer
          </ButtonLink>
        </div>
      </section>
    </>
  );
}