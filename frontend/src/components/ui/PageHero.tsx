'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import type { Photo } from '@/types/content';
import { containerClass } from '@/utils/styles';
import { PhotoTag } from '@/components/ui/PhotoTag';

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
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        initial={{ scale: reduce ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'linear' }} />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" aria-hidden="true" />
      <div className={`${containerClass} py-20 md:py-28`}>
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-white/70">
          <Link href="/" className="transition-colors duration-150 hover:text-white">
            Home
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-white" aria-current="page">
            {crumb}
          </span>
        </nav>
        <motion.h1
          className="max-w-3xl text-4xl font-extrabold leading-[1.1] text-white md:text-5xl"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
          
          {title}
        </motion.h1>
        {intro &&
        <motion.p
          className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}>
          
            {intro}
          </motion.p>
        }
        {children && <div className="mt-8">{children}</div>}
      </div>
      <PhotoTag photo={photo} className="absolute bottom-4 right-4" />
    </section>);

}