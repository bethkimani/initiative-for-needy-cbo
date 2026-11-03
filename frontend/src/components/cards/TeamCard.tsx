import React from 'react';
import type { TeamMember } from '@/types/content';
import { TeamPhoto } from '@/components/cards/TeamPhoto';

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-soft">
        <TeamPhoto
          photo={member.photo}
          initials={member.initials}
          className="absolute inset-0"
          imageClassName="h-full w-full bg-white object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-5">
        <h3 className="text-lg font-bold text-navy">{member.name}</h3>
        <p className="text-sm font-semibold text-charity">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{member.bio}</p>
      </div>
    </article>);

}