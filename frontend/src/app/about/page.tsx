import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { images, site } from '@/data/site';
import { purposeTabs } from '@/data/values';
import { team } from '@/data/team';
import { causes } from '@/data/causes';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { DraftNote } from '@/components/ui/DraftNote';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { TeamCard } from '@/components/cards/TeamCard';
import { ImpactStats } from '@/components/home/ImpactStats';
import { Approach } from '@/components/home/Approach';
import { FinalCTA } from '@/components/home/FinalCTA';

const galleryStrip = [images.feeding, images.kidsCentre, images.foodDonation, images.ceoFeeding];

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Initiative for the Needy Charity Organization — our mission, vision, values and leadership.',
};

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="A community charity rooted in Thika."
        intro="We exist to improve the quality of life of local vulnerable communities — with dignity, practicality and the help of many hands."
        photo={images.teamOffice} />
      

      <section className="py-20 md:py-28">
        <div className={`${containerClass} grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start`}>
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">Who we are</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/75">
              {site.name} is a community-focused charitable organization operating from Kamande Stage in Thika Town,
              Kenya. Our team and volunteers work alongside vulnerable people and families to provide practical
              support and create lasting opportunity.
            </p>
            <DraftNote className="mt-6">
              Founding story, registration details and organizational history will be added once confirmed by the
              organization.
            </DraftNote>
          </Reveal>
          <Reveal delay={0.05}>
            <dl className="divide-y divide-line rounded-3xl bg-soft px-8">
              {purposeTabs.map((t) =>
              <div key={t.id} className="py-7">
                  <dt className="text-sm font-semibold text-charity">{t.title}</dt>
                  <dd className="mt-2 font-display text-xl font-semibold leading-relaxed text-navy">{t.body}</dd>
                  {t.draft && <dd className="mt-2 text-xs text-navy/55">Draft — awaiting confirmation</dd>}
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={containerClass}>
          <SectionHeading
            title="Our objectives"
            intro="Proposed objectives drawn from our focus areas — to be finalised by the organization." />
          
          <ol className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {causes.slice(0, 6).map((c, i) =>
            <li key={c.slug}>
                <Reveal delay={i % 2 * 0.04} className="flex gap-5 border-t border-line pt-5">
                  <span className="font-display text-2xl font-extrabold text-brand/30">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-navy">{c.title}</h3>
                    <p className="mt-1 text-sm text-navy/70">{c.summary}</p>
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
            title="Our leadership"
            action={
            <ButtonLink to="/team" variant="outline" size="lg">
                Full Team Profiles
              </ButtonLink>
            } />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) =>
            <TeamCard key={m.name} member={m} />
            )}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading
            title="From our work"
            intro="Genuine photos shared by our team."
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