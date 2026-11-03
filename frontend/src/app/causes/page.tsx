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

export const metadata: Metadata = {
  title: 'Our Causes',
  description: 'The causes Initiative for the Needy supports — food, families, education, health, youth, elderly care and community development.',
};

export default function Causes() {
  return (
    <>
      <PageHero
        crumb="Our Causes"
        title="Supporting Vulnerable Communities"
        intro="Our programmes respond to the needs of vulnerable people and families across Kiambu County."
        photo={images.feeding}>
        
        <ButtonLink to="/donate" variant="red" size="lg">
          Support Our Causes
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className={containerClass}>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {causes.map((c, i) =>
            <Reveal key={c.slug} delay={i % 3 * 0.05}>
                <CauseCard cause={c} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading title="Our Areas of Support" intro="We support community programmes in response to local needs." />
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {fundUses.map((f) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title}>
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{f.text}</p>
                </Reveal>);

            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>);

}