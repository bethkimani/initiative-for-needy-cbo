import React from 'react';
import { involvementOptions } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function InvolvementCards() {
  return (
    <section className="py-20 md:py-28">
      <div className={containerClass}>
        <SectionHeading
          align="center"
          title="Work With Us"
          intro="Volunteer, partner with us, support our programmes or help connect us with development resources." />
        
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {involvementOptions.map((opt, i) => {
            const Icon = opt.icon;
            const primary = i === 0;
            return (
              <Reveal key={opt.title} delay={i * 0.05}>
                <article
                  className={`flex h-full flex-col rounded-3xl p-7 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 ${
                  primary ? 'bg-charity text-white shadow-lift' : 'bg-soft text-navy hover:shadow-soft'}`
                  }>
                  
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    primary ? 'bg-white/15 text-white' : 'bg-white text-brand'}`
                    }>
                    
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 break-words text-xl font-bold">{opt.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${primary ? 'text-white/85' : 'text-navy/70'}`}>{opt.text}</p>
                  <div className="mt-auto pt-6">
                    <ButtonLink to={opt.to} variant={primary ? 'light' : 'blue'} className="w-full">
                      {opt.cta}
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}