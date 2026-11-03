'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { slides } from '@/data/slides';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoTag } from '@/components/ui/PhotoTag';

const INTERVAL = 6500;
const ease = [0.23, 1, 0.32, 1] as const;

export function HeroCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i % count + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  const slide = slides[index];
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease }
  });

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      className="relative min-h-[620px] overflow-hidden bg-navy sm:min-h-[600px] md:min-h-[660px] lg:min-h-[700px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(index + 1);else
            if (info.offset.x > 60) go(index - 1);
          }}>
          
          <motion.img
            src={slide.photo.src}
            alt={slide.photo.alt}
            draggable={false}
            className="h-full w-full select-none object-cover object-[center_40%]"
            initial={{ scale: reduce ? 1 : 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'linear' }} />
          
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/10" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/70 to-transparent" aria-hidden="true" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className={containerClass}>
          <div key={index} className="pointer-events-auto max-w-2xl pb-24" aria-live="polite">
            <motion.p {...enter(0)} className="mb-4 text-sm font-semibold text-gold">
              {String(index + 1).padStart(2, '0')} — Initiative for the Needy, Thika
            </motion.p>
            <motion.h1
              {...enter(0.06)}
              className="break-words text-[clamp(2rem,8vw,3rem)] font-extrabold leading-[1.08] text-white lg:text-6xl">
              
              {slide.headline}
            </motion.h1>
            <motion.p {...enter(0.12)} className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {slide.text}
            </motion.p>
            <motion.div {...enter(0.18)} className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
              <ButtonLink to={slide.primary.to} variant="red" size="lg">
                {slide.primary.label}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to={slide.secondary.to} variant="outlineLight" size="lg">
                {slide.secondary.label}
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={`${containerClass} absolute inset-x-0 bottom-6 flex items-center justify-between gap-3 sm:bottom-8`}>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) =>
          <button
            key={s.headline}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}: ${s.headline}`}
            onClick={() => go(i)}
            className="flex h-11 min-w-11 items-center justify-center">
            
              <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out ${
              i === index ? 'w-10 bg-gold' : 'w-3 bg-white/50 hover:bg-white'}`
              } />
            
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <PhotoTag photo={slide.photo} className="hidden sm:inline-block" />
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-150 hover:bg-white hover:text-navy">
            
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-150 hover:bg-white hover:text-navy">
            
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>);

}