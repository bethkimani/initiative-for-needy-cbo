'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import type { Photo } from '@/types/content';
import { containerClass } from '@/utils/styles';

type PageHeroProps = {
  title: string;
  intro?: string;
  photo: Photo;
  crumb: string;
  children?: ReactNode;
};

export function PageHero({ title, intro, photo, crumb, children }: PageHeroProps) {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <motion.img
        src={photo.src}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_40%]"
        initial={{ scale: reduce ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'linear' }} />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" aria-hidden="true" />
      <div className={`${containerClass} py-14 sm:py-20 md:py-24 lg:py-28`}>
        <nav aria-label="Breadcrumb" className="mb-5 flex min-h-11 items-center gap-1.5 text-sm text-white/70">
          <Link href="/" className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-white">
            Home
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-white" aria-current="page">
            {crumb}
          </span>
        </nav>
        <motion.h1
          className="max-w-3xl break-words text-[clamp(2rem,7vw,3rem)] font-extrabold leading-[1.1] text-white lg:text-5xl"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
          
          {title}
        </motion.h1>
        {intro &&
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}>
          
            {intro}
          </motion.p>
        }
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>);

}