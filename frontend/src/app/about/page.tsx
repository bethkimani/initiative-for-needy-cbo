import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
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

const galleryStrip = [images.feeding, images.kidsCentre, images.foodDonation, images.ceoFeeding];

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Initiative for the Needy Community Based Organization (CBO), its mission, vision, objectives and community programmes.',
};

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Empowering vulnerable people across Kiambu County."
        intro={site.vision}
        photo={images.teamOffice} />
      

      <section className="py-20 md:py-28">
        <div className={`${containerClass} grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start`}>
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">Who we are</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/75">
              {site.shortName} is a Community Based Organization (CBO) that was initiated in January 2020 and registered on 16
              September 2022 under the Ministry of Labour and Social Protection, State Department. We support
              vulnerable groups across Kiambu County, with planned pilot projects in Thika, Juja and Ruiru.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy/75">{site.goal}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <dl className="divide-y divide-line rounded-3xl bg-soft px-8">
              {purposeTabs.map((t) =>
              <div key={t.id} className="py-7">
                  <dt className="text-sm font-semibold text-charity">{t.title}</dt>
                  <dd className="mt-2 font-display text-xl font-semibold leading-relaxed text-navy">{t.body}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={containerClass}>
          <SectionHeading
            title="Our Objectives"
            intro="We work with communities and partners to protect rights, meet essential needs and create opportunities for vulnerable people." />
          
          <ol className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {organizationObjectives.map((objective, i) =>
            <li key={objective}>
                <Reveal delay={i % 2 * 0.04} className="flex gap-5 border-t border-line pt-5">
                  <span className="font-display text-2xl font-extrabold text-brand/30">{i + 1}</span>
                  <div>
                    <p className="font-bold text-navy">{objective}</p>
                  </div>
                </Reveal>
              </li>
            )}
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
            } />
          
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((m) =>
            <TeamCard key={m.name} member={m} />
            )}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading
            title="From Our Work"
            intro="Community outreach, children’s programmes and practical support across Kiambu County."
            action={
            <Link href="/gallery" className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline">
                Open the gallery <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            } />
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryStrip.map((p, i) =>
            <Reveal key={p.src} delay={i * 0.04}>
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
              </Reveal>
            )}
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
    </>);

}