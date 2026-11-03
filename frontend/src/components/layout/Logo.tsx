import React from 'react';
import Link from 'next/link';
import { images } from '@/data/site';

type LogoProps = {
  tone?: 'dark' | 'light';
};

export function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Initiative for the Needy — home">
      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-line">
        <img src={images.logo.src} alt="" className="h-[118%] w-[118%] max-w-none object-cover" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-extrabold ${tone === 'light' ? 'text-white' : 'text-navy'}`}>
          Initiative for the Needy
        </span>
        <span className={`block text-xs font-medium ${tone === 'light' ? 'text-white/65' : 'text-charity'}`}>
          Charity Organization
        </span>
      </span>
    </Link>);

}