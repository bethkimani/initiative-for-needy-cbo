import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { images, site } from '@/data/site';
import { organizationObjectives, purposeTabs } from '@/data/values';
import { team } from '@/data/team';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { TeamCard } from '@/components/cards/TeamCard';
import { ImpactStats } from '@/components/home/ImpactStats';
import { Approach } from '@/components/home/Approach';
import { FinalCTA } from '@/components/home/FinalCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

const galleryStrip = [images.feeding, images.kidsCentre, images.foodDonation, images.ceoFeeding];

export const metadata: Metadata = {
  title: 'About Us | Registered Charity & Community-Based Organization in Kenya',
  description:
    'Discover Initiative for the Needy Charity Organization, a registered CBO (Reg. No. CBO/THK/W/022/2022/1151) in Kiambu, Kenya. Read our mission, vision, leadership, and objectives.',
  keywords: [
    'About Initiative for the Needy',
    'Registered CBO Kenya',
    'Community-Based Organization Kiambu',
    'Ministry of Labour and Social Protection CBO',
    'Charity Registration CBO/THK/W/022/2022/1151',
    'Charles Kyalo Ngina',
    'Charity Organization in Thika Kenya',
    'Orphan Support Organization Kenya',
    'Youth Empowerment CBO Kenya',
    'Kiambu County Non-Profit',
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Us | Initiative for the Needy Charity Organization',
    description:
      'A registered Community-Based Charity Organization empowering orphans, youth, widows, and older persons in Kiambu County, Kenya.',
    url: `${siteUrl}/about`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: 'Initiative for the Needy Charity Organization Team and Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Initiative for the Needy Charity Organization',
    description:
      'Learn about our registered CBO mission, leadership, and community development programmes in Kenya.',
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

export default function About() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about/#webpage`,
        url: `${siteUrl}/about`,
        name: 'About Us | Initiative for the Needy Charity Organization',
        description:
          'Learn about Initiative for the Needy, a registered Community-Based Organization (CBO) empowering orphans, vulnerable children, youth, widows, and older persons in Kiambu County, Kenya.',
        breadcrumb: {
          '@id': `${siteUrl}/about/#breadcrumb`,
        },
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/about/#breadcrumb`,
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
            name: 'About Us',
            item: `${siteUrl}/about`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(aboutJsonLd)}
      </script>
      <PageHero
        crumb="About Us"
        title="Empowering vulnerable people across Kiambu County."
        intro={site.vision}
        photo={images.teamOffice}
      />

      <section className="py-20 md:py-28">
        <div className={`${containerClass} grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start`}>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-charity">
              Legal Identity &amp; Community Roots
            </span>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-navy md:text-4xl">
              Who We Are
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/75">
              {site.name} is a grassroots, non-profit Community-Based Organization (CBO) initiated in January 2020 and
              officially registered on 16 September 2022 under the Ministry of Labour and Social Protection, State Department
              for Social Protection (Certificate No.{' '}
              <strong className="text-navy">CBO/THK/W/022/2022/1151</strong>). We support vulnerable groups across Kiambu
              County, with operational pilot hubs in Thika, Juja, and Ruiru.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy/75">{site.goal}</p>

            {/* Official Credentials Box for Donors and Evaluators */}
            <div className="mt-8 rounded-2xl border border-line bg-soft/70 p-6 shadow-xs">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                <ShieldCheckIcon className="h-5 w-5 text-brand" aria-hidden="true" />
                Official Legal Registration &amp; Governance
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
                <div>
                  <dt className="text-navy/60">Legal Status</dt>
                  <dd className="font-semibold text-navy">Registered CBO (Charity)</dd>
                </div>
                <div>
                  <dt className="text-navy/60">Certificate Number</dt>
                  <dd className="font-mono font-bold text-charity">CBO/THK/W/022/2022/1151</dd>
                </div>
                <div>
                  <dt className="text-navy/60">Regulating Authority</dt>
                  <dd className="font-semibold text-navy">Ministry of Labour &amp; Social Protection</dd>
                </div>
                <div>
                  <dt className="text-navy/60">Area of Operation</dt>
                  <dd className="font-semibold text-navy">Kiambu County (Thika, Juja, Ruiru)</dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <dl className="divide-y divide-line rounded-3xl bg-soft px-8">
              {purposeTabs.map((t) => (
                <div key={t.id} className="py-7">
                  <dt className="text-sm font-semibold text-charity">{t.title}</dt>
                  <dd className="mt-2 font-display text-xl font-semibold leading-relaxed text-navy">
                    {t.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={containerClass}>
          <SectionHeading
            title="Our Objectives"
            intro="We work with communities and partners to protect rights, meet essential needs and create opportunities for vulnerable people."
          />

          <ol className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {organizationObjectives.map((objective, i) => (
              <li key={objective}>
                <Reveal delay={(i % 2) * 0.04} className="flex gap-5 border-t border-line pt-5">
                  <span className="font-display text-2xl font-extrabold text-brand/30">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-navy">{objective}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ImpactStats id="impact" />
      <Approach />

      <section className="py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading
            title="Our Team"
            action={
              <ButtonLink to="/team" variant="outline" size="lg">
                Meet Our Team
              </ButtonLink>
            }
          />

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading
            title="From Our Work"
            intro="Community outreach, children’s programmes and practical support across Kiambu County."
            action={
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
              >
                Open the gallery <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryStrip.map((p, i) => (
              <Reveal key={p.src} delay={i * 0.04}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-xs">
                  <Image
                    src={p.src}
                    alt={p.alt || 'Community outreach and support in Kiambu County'}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/projects" variant="blue" size="lg">
              See Our Projects
            </ButtonLink>
            <ButtonLink to="/volunteer" variant="outline" size="lg">
              Volunteer With Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
