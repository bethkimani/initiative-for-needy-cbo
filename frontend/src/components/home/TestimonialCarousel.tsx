'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, UserRoundIcon } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { containerClass } from '@/utils/styles';
import { DraftNote } from '@/components/ui/DraftNote';

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const go = (i: number) => setIndex((i % count + count) % count);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % count), 8000);
    return () => window.clearTimeout(t);
  }, [index, paused, count]);

  const item = testimonials[index];

  return (
    <section
      className="bg-soft py-20 md:py-28"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      
      <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center`}>
        <div>
          <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">Voices from the community</h2>
          <p className="mt-4 leading-relaxed text-navy/70">
            We will only share real words from real people — with their permission.
          </p>
          <DraftNote className="mt-5">Placeholders until verified testimonials and publication consent are provided.</DraftNote>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition-colors duration-150 hover:border-brand hover:text-brand">
              
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition-colors duration-150 hover:border-brand hover:text-brand">
              
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="relative min-h-[320px] rounded-3xl bg-white p-8 shadow-soft md:p-12" aria-live="polite">
          <QuoteIcon className="h-10 w-10 text-charity" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}>
              
              <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-navy/80 md:text-2xl">
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                  <UserRoundIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-navy">{item.name}</span>
                  <span className="block text-sm text-navy/60">
                    {item.role} · {item.project}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="absolute bottom-8 right-8 flex gap-1.5">
            {testimonials.map((t, i) =>
            <button
              key={t.role}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-[width,background-color] duration-200 ${
              i === index ? 'w-6 bg-brand' : 'w-2 bg-line'}`
              } />

            )}
          </div>
        </div>
      </div>
    </section>);

}