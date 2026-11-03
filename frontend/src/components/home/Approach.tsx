import React from 'react';
import { approachItems } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Approach() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className={containerClass}>
        <SectionHeading
          tone="light"
          title="Our Core Values"
          intro="Integrity, honesty, caring, accountability, compassion, equity and respect for human dignity guide our work." />
        
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {approachItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i % 3 * 0.04} className="border-t border-white/15 pt-6">
                <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}