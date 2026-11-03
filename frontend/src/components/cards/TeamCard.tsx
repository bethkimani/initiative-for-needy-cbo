import React from 'react';
import type { TeamMember } from '@/types/content';

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-soft">
        {member.photo ?
        <img
          src={member.photo.src}
          alt={member.photo.alt}
          loading="lazy"
          className="h-full w-full bg-white object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]" /> :


        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-brand-light">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand font-display text-3xl font-bold text-white">
              {member.initials}
            </span>
            <span className="text-xs font-medium text-navy/55">Photo coming soon</span>
          </div>
        }
      </div>
      <div className="pt-5">
        <h3 className="text-lg font-bold text-navy">{member.name}</h3>
        <p className="text-sm font-semibold text-charity">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{member.bio}</p>
      </div>
    </article>);

}