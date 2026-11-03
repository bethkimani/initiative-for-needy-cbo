import React from 'react';
import { approachItems } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { DraftNote } from '@/components/ui/DraftNote';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Approach() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className={containerClass}>
        <SectionHeading
          tone="light"
          title="Working Together for Lasting Change."
          intro="How we work matters as much as what we do. These principles guide every activity, partnership and shilling." />
        
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
        <DraftNote className="mt-12">Proposed messaging themes — awaiting approval by the organization.</DraftNote>
      </div>
    </section>);

}