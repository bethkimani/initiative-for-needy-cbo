import React, { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

type SectionHeadingProps = {
  title: string;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  action?: ReactNode;
};

export function SectionHeading({ title, intro, align = 'left', tone = 'dark', action }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal
      className={`mb-10 flex flex-col gap-6 md:mb-14 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
      
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        <h2 className={`text-3xl font-bold leading-tight md:text-4xl ${tone === 'light' ? 'text-white' : 'text-navy'}`}>
          {title}
        </h2>
        {intro &&
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${tone === 'light' ? 'text-white/75' : 'text-navy/70'}`}>
            {intro}
          </p>
        }
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>);

}