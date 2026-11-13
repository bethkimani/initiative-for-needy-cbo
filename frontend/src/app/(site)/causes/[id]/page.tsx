import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HeartIcon, ShieldCheckIcon, TargetIcon } from 'lucide-react';
import { causes } from '@/data/causes';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CauseCard } from '@/components/cards/CauseCard';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

type CausePageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return causes.map((c) => ({ id: c.slug }));
}

export async function generateMetadata({ params }: CausePageProps): Promise<Metadata> {
  const { id } = await params;
  const cause = causes.find((item) => item.slug === id);

  if (!cause) {
    return {
      title: 'Cause Not Found | Initiative for the Needy',
      description: 'The requested charitable cause could not be found.',
    };
  }

  const title = `${cause.title} | Charity Causes in Kenya`;
  const description = `${cause.summary} Support Initiative for the Needy CBO in Kiambu, Kenya with direct donations and sponsorships.`;
  const canonical = `${siteUrl}/causes/${cause.slug}`;
  const fullImageUrl = cause.photo.src.startsWith('http')
    ? cause.photo.src
    : `${siteUrl}${cause.photo.src.startsWith('/') ? '' : '/'}${cause.photo.src}`;

  return {
    title,
    description,
    keywords: [
      cause.title,
      'Donate Kenya',
      'Charity Causes Kenya',
      'Community Support Kiambu',
      'Initiative for the Needy',
      'Sponsor a Cause Kenya',
      'CBO Kenya Charity',
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${cause.title} | Initiative for the Needy Charity Organization`,
      description,
      type: 'website',
      url: canonical,
      images: [
        {
          url: fullImageUrl,
          alt: cause.photo.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cause.title} | Initiative for the Needy`,
      description,
      images: [fullImageUrl],
    },
  };
}

async function CauseDetailContent({ params }: CausePageProps) {
  const { id } = await params;
  const cause = causes.find((item) => item.slug === id);
  if (!cause) notFound();

  const Icon = cause.icon;
  const related = causes.filter((c) => c.slug !== cause.slug).slice(0, 3);
  const fullCauseUrl = `${siteUrl}/causes/${cause.slug}`;
  const fullImageUrl = cause.photo.src.startsWith('http')
    ? cause.photo.src
    : `${siteUrl}${cause.photo.src.startsWith('/') ? '' : '/'}${cause.photo.src}`;

  const causeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${fullCauseUrl}/#webpage`,
        url: fullCauseUrl,
        name: `${cause.title} | Initiative for the Needy Charity Organization`,
        description: cause.summary,
        image: fullImageUrl,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'DonateAction',
          name: `Donate to ${cause.title}`,
          description: `Directly fund ${cause.title} with Initiative for the Needy Charity Organization in Kenya.`,
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/donate?cause=${cause.slug}`,
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          recipient: {
            '@id': `${siteUrl}/#organization`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${fullCauseUrl}/#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: cause.title,
            item: fullCauseUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(causeJsonLd)}
      </script>
      <PageHero crumb="Our Causes" title={cause.title} intro={cause.summary} photo={cause.photo} />
      <section className="py-20 md:py-24">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[1.6fr_1fr]`}>
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy md:text-3xl">Why this matters</h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy/75">
              {cause.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-soft p-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-sm font-semibold text-navy">
              <TargetIcon className="h-4 w-4 text-charity" aria-hidden="true" />
              Campaign goal
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-navy">{cause.goal}</p>
            <p className="mt-3 text-sm text-navy/60">
              Contributions directly fund verified community beneficiaries under this cause.
            </p>
            <div className="mt-8 grid gap-3">
              <ButtonLink to={`/donate?cause=${cause.slug}`} variant="red" size="lg">
                <HeartIcon className="h-4 w-4" aria-hidden="true" />
                Give to this cause
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline" size="lg">
                Volunteer for this cause
              </ButtonLink>
            </div>

            {/* Direct Donor Assurance Badge */}
            <div className="mt-8 border-t border-line/80 pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-navy">
                <ShieldCheckIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                Verified Non-Profit Governance
              </div>
              <p className="mt-1 text-xs leading-relaxed text-navy/60">
                Registered Kenyan Community-Based Organization (Reg. No. CBO/THK/W/022/2022/1151). 100% of designated gifts go directly to programme delivery.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-soft py-20">
        <div className={containerClass}>
          <h2 className="mb-10 text-2xl font-bold text-navy md:text-3xl">Other causes</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {related.map((c) => (
              <CauseCard key={c.slug} cause={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function CauseDetail({ params }: CausePageProps) {
  return (
    <Suspense
      fallback={
        <div className={`${containerClass} py-24 text-center text-navy/60`}>
          Loading cause details...
        </div>
      }
    >
      <CauseDetailContent params={params} />
    </Suspense>
  );
}
