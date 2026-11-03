import React from 'react';
import type { Metadata } from 'next';
import { BriefcaseIcon, CheckIcon } from 'lucide-react';
import { images } from '@/data/site';
import { involvementOptions } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoTag } from '@/components/ui/PhotoTag';

const details = [
{
  photo: images.foodDonation,
  points: ['One-time or recurring gifts in KES', 'Choose a cause or give where most needed', 'Receipts for every gift once payments go live']
},
{
  photo: images.volunteersOffice,
  points: ['Outreach days and community meals', 'Events, logistics and awareness drives', 'Flexible — weekends, weekdays or one-off']
},
{
  photo: images.teamOffice,
  points: ['Corporate sponsorship and CSR', 'Institutional and church partnerships', 'In-kind support: food, supplies, transport']
},
{
  photo: images.blogEvent,
  points: ['Birthday or milestone fundraisers', 'School, church or workplace drives', 'Sponsored challenges for an approved cause']
}];


const skills = ['Teaching & tutoring', 'Healthcare', 'Accounting & finance', 'Photography & media', 'Legal advice', 'IT & web', 'Counselling', 'Logistics'];

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Donate, volunteer, partner or fundraise with Initiative for the Needy Charity Organization.',
};

export default function GetInvolved() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        title="There is a place for you here."
        intro="Give, serve, partner or rally others. Every kind of support helps us reach more vulnerable people around Thika."
        photo={images.heroVolunteers} />
      
      <section className="py-20 md:py-28">
        <div className={`${containerClass} space-y-20 md:space-y-28`}>
          {involvementOptions.map((opt, i) => {
            const Icon = opt.icon;
            const d = details[i];
            const flip = i % 2 === 1;
            return (
              <Reveal key={opt.title}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={`relative ${flip ? 'lg:order-2' : ''}`}>
                    <img src={d.photo.src} alt={d.photo.alt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
                    <PhotoTag photo={d.photo} className="absolute bottom-4 left-4" />
                  </div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-3xl font-bold text-navy">{opt.title}</h2>
                    <p className="mt-3 text-lg leading-relaxed text-navy/70">{opt.text}</p>
                    <ul className="mt-6 space-y-3">
                      {d.points.map((p) =>
                      <li key={p} className="flex gap-3 text-navy/80">
                          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-charity" aria-hidden="true" />
                          {p}
                        </li>
                      )}
                    </ul>
                    <ButtonLink to={opt.to} variant={i === 0 ? 'red' : 'blue'} size="lg" className="mt-8">
                      {opt.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>);

          })}
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <div className={`${containerClass} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center`}>
          <div>
            <BriefcaseIcon className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">Contribute your professional skills</h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Pro-bono expertise can strengthen our work as much as funding. Tell us what you can offer.
            </p>
            <ButtonLink to="/volunteer" variant="light" size="lg" className="mt-8">
              Offer Your Skills
            </ButtonLink>
          </div>
          <ul className="flex flex-wrap gap-3">
            {skills.map((s) =>
            <li key={s} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                {s}
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}