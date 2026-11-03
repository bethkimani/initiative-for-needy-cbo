import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { causes } from '@/data/causes';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoTag } from '@/components/ui/PhotoTag';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function FeaturedCauses() {
  const [featured, ...rest] = causes;
  const others = rest.slice(0, 4);
  const FeaturedIcon = featured.icon;

  return (
    <section className="bg-soft py-20 md:py-28">
      <div className={containerClass}>
        <SectionHeading
          title="Causes That Deserve Our Attention."
          intro="The areas where we focus our time and resources. Causes are proposed for approval and can be renamed, added or removed by the organization."
          action={
          <ButtonLink to="/causes" variant="red" size="lg">
              Support Our Causes
            </ButtonLink>
          } />
        
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <Link
              href={`/causes/${featured.slug}`}
              className="group relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-3xl">
              
              <img
                src={featured.photo.src}
                alt={featured.photo.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" aria-hidden="true" />
              <PhotoTag photo={featured.photo} className="absolute right-4 top-4" />
              <div className="relative p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-charity text-white">
                  <FeaturedIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white md:text-3xl">{featured.title}</h3>
                <p className="mt-2 max-w-md text-white/80">{featured.summary}</p>
                <p className="mt-4 text-xs text-white/60">{featured.goal}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
          <ul className="flex flex-col divide-y divide-line overflow-hidden rounded-3xl bg-white ring-1 ring-line">
            {others.map((cause, i) => {
              const Icon = cause.icon;
              return (
                <li key={cause.slug}>
                  <Reveal delay={i * 0.04}>
                    <Link
                      href={`/causes/${cause.slug}`}
                      className="group flex items-center gap-5 p-5 transition-colors duration-150 hover:bg-soft">
                      
                      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl">
                        <img src={cause.photo.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="flex items-center gap-2 font-bold text-navy">
                          <Icon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                          {cause.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-navy/65">{cause.summary}</p>
                      </div>
                      <ArrowRightIcon
                        className="hidden h-5 w-5 shrink-0 text-brand transition-transform duration-150 group-hover:translate-x-1 sm:block"
                        aria-hidden="true" />
                      
                    </Link>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}