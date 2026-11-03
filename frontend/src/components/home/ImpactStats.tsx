import React from 'react';
import { impactStats } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

type ImpactStatsProps = {
  id?: string;
};

export function ImpactStats({ id }: ImpactStatsProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-brand py-20 text-white md:py-24">
      <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center`}>
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Community support that builds dignity and opportunity.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/80">
            Our work includes vocational training, support for older people, children’s home outreach and programmes for vulnerable groups.
          </p>
        </Reveal>
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 0.05} className="min-w-0 bg-brand p-6 md:p-8">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <dt className="sr-only">{stat.label}</dt>
                <dd className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
                  <Counter value={stat.value} suffix={stat.value >= 1000 ? '' : '+'} />
                </dd>
                <dd className="mt-1 text-base font-semibold" aria-hidden="true">
                  {stat.label}
                </dd>
                <dd className="text-sm leading-relaxed text-white/80">{stat.detail}</dd>
              </Reveal>);

          })}
        </dl>
      </div>
    </section>);

}