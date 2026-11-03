import React from 'react';
import { team } from '@/data/team';
import { containerClass } from '@/utils/styles';
import { TeamCard } from '@/components/cards/TeamCard';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TeamPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className={containerClass}>
        <SectionHeading
          title="Our Team"
          intro="Meet the people who lead and deliver our work with vulnerable communities in Thika and Kiambu County."
          action={
          <ButtonLink to="/team" variant="outline" size="lg">
              Meet Our Team
            </ButtonLink>
          } />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) =>
          <Reveal key={m.name} delay={i * 0.05}>
              <TeamCard member={m} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}