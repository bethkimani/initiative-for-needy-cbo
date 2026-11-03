import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HeartIcon, TargetIcon } from 'lucide-react';
import { causes } from '@/data/causes';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CauseCard } from '@/components/cards/CauseCard';
type CausePageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: CausePageProps): Promise<Metadata> {
  const { id } = await params;
  const cause = causes.find((item) => item.slug === id);
  return {
    title: cause?.title ?? 'Cause not found',
    description: cause?.summary ?? 'Explore causes supported by Initiative for the Needy.',
  };
}

export default async function CauseDetail({ params }: CausePageProps) {
  const { id } = await params;
  const cause = causes.find((item) => item.slug === id);
  if (!cause) notFound();
  const Icon = cause.icon;
  const related = causes.filter((c) => c.slug !== cause.slug).slice(0, 3);

  return (
    <>
      <PageHero crumb="Our Causes" title={cause.title} intro={cause.summary} photo={cause.photo} />
      <section className="py-20 md:py-24">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[1.6fr_1fr]`}>
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy md:text-3xl">Why this matters</h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy/75">
              {cause.description.map((p) =>
              <p key={p}>{p}</p>
              )}
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-soft p-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-sm font-semibold text-navy">
              <TargetIcon className="h-4 w-4 text-charity" aria-hidden="true" />
              Campaign goal
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-navy">{cause.goal}</p>
            <p className="mt-3 text-sm text-navy/60">
              Fundraising totals and progress will appear here once verified by the organization.
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
          </aside>
        </div>
      </section>
      <section className="bg-soft py-20">
        <div className={containerClass}>
          <h2 className="mb-10 text-2xl font-bold text-navy md:text-3xl">Other causes</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {related.map((c) =>
            <CauseCard key={c.slug} cause={c} />
            )}
          </div>
        </div>
      </section>
    </>);

}