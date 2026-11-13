import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images, site } from '@/data/site';

type LogoProps = {
  tone?: 'dark' | 'light';
};

export function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Initiative for the Needy — home">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-line sm:h-12 sm:w-12">
        <Image
          src={images.logo.src}
          alt={images.logo.alt || 'Initiative for the Needy Logo'}
          fill
          priority
          sizes="48px"
          className="object-cover"
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block font-display text-[13px] font-extrabold sm:text-[15px] ${tone === 'light' ? 'text-white' : 'text-navy'}`}>
          Initiative for the Needy
        </span>
        <span className={`block text-[11px] font-medium sm:text-xs ${tone === 'light' ? 'text-white/65' : 'text-charity'}`}>
          Community Based Organization (CBO)
        </span>
        <span className={`mt-0.5 block text-[9px] font-medium italic leading-tight sm:text-[10px] ${tone === 'light' ? 'text-white/75' : 'text-navy/60'}`}>
          {site.slogan}
        </span>
      </span>
    </Link>
  );
}
