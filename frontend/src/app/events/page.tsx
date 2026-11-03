'use client';

import React, { useState } from 'react';
import { ClockIcon, MapPinIcon } from 'lucide-react';
import { events } from '@/data/events';
import { images } from '@/data/site';
import { dateParts } from '@/utils/format';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { DraftNote } from '@/components/ui/DraftNote';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';

export default function Events() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const list = events.filter((e) => e.status === tab);

  return (
    <>
      <PageHero
        crumb="Events"
        title="Events & Activities"
        intro="Outreach days, volunteer sessions and fundraising events. Come along, lend a hand, bring a friend."
        photo={images.blogEvent} />
      
      <section className="py-16 md:py-24">
        <div className={`${containerClass} max-w-5xl`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div role="tablist" aria-label="Event timeframe" className="inline-flex rounded-full bg-soft p-1">
              {(['upcoming', 'past'] as const).map((t) =>
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors duration-150 ${
                tab === t ? 'bg-brand text-white' : 'text-navy/70 hover:text-navy'}`
                }>
                
                  {t} events
                </button>
              )}
            </div>
            <DraftNote>Sample events — dates and venues to be confirmed by the organization.</DraftNote>
          </div>

          {list.length === 0 ?
          <p className="mt-12 rounded-3xl border border-dashed border-line py-16 text-center text-navy/60">No events to show right now.</p> :

          <ul className="mt-10 divide-y divide-line border-y border-line">
              {list.map((e, i) => {
              const d = dateParts(e.date);
              return (
                <li key={e.slug}>
                    <Reveal delay={i * 0.04} className="grid gap-6 py-8 md:grid-cols-[88px_200px_1fr_auto] md:items-center">
                      <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-2xl bg-navy text-white">
                        <span className="font-display text-3xl font-extrabold leading-none">{d.day}</span>
                        <span className="mt-1 text-xs font-semibold uppercase text-gold">
                          {d.month} {d.year}
                        </span>
                      </div>
                      <img src={e.photo.src} alt={e.photo.alt} loading="lazy" className="hidden aspect-[4/3] w-full rounded-xl object-cover md:block" />
                      <div>
                        <p className="text-xs font-semibold text-charity">{e.type}</p>
                        <h2 className="mt-1 text-xl font-bold text-navy">{e.title}</h2>
                        <p className="mt-2 text-sm text-navy/70">{e.summary}</p>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-navy/60">
                          <span className="flex items-center gap-1">
                            <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
                            {e.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                            {e.location}
                          </span>
                        </div>
                      </div>
                      {e.status === 'upcoming' ?
                    <ButtonLink to={`/contact?topic=Event%20registration&event=${encodeURIComponent(e.title)}`} variant="blue">
                          Register Interest
                        </ButtonLink> :

                    <span className="text-sm font-medium text-navy/50">Event ended</span>
                    }
                    </Reveal>
                  </li>);

            })}
            </ul>
          }
        </div>
      </section>
    </>);

}