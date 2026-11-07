import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { Cause } from '@/types/content';

type CauseCardProps = {
  cause: Cause;
};

export function CauseCard({ cause }: CauseCardProps) {
  const Icon = cause.icon;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={cause.photo.src}
          alt={cause.photo.alt || cause.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        
        <span className="absolute -bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white ring-4 ring-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-7">
        <h3 className="text-lg font-bold text-navy">{cause.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{cause.summary}</p>
        <div className="mt-auto pt-5">
          {cause.progress !== null ?
          <div>
              <div className="h-2 overflow-hidden rounded-full bg-soft">
                <div className="h-full rounded-full bg-gold" style={{ width: `${cause.progress}%` }} />
              </div>
              <p className="mt-2 text-xs text-navy/60">{cause.progress}% of goal reached</p>
            </div> :

          <p className="border-t border-line pt-4 text-xs text-navy/55">{cause.goal} · progress shown once verified</p>
          }
          <Link
            href={`/causes/${cause.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            aria-label={`Learn more about ${cause.title}`}>
            
            Learn More
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>);

}