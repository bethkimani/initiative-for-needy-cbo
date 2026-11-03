'use client';

import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryItem } from '@/types/content';
import { PhotoTag } from '@/components/ui/PhotoTag';

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, index, items.length, onClose, onChange]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={item.caption}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={onClose}>
        
          <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-150 hover:bg-white/20">
          
            <XIcon className="h-5 w-5" />
          </button>
          <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChange((index - 1 + items.length) % items.length);
          }}
          aria-label="Previous image"
          className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-150 hover:bg-white/20">
          
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <motion.figure
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-h-full w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}>
          
            <img src={item.photo.src} alt={item.photo.alt} className="mx-auto max-h-[72svh] max-w-full rounded-2xl object-contain sm:max-h-[80vh]" />
            <figcaption className="mt-4 flex flex-col items-start justify-between gap-3 text-sm text-white/80 sm:flex-row sm:items-center">
              <span>{item.caption}</span>
              <span className="flex items-center gap-3 self-end sm:self-auto">
                <PhotoTag photo={item.photo} />
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </motion.figure>
          <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChange((index + 1) % items.length);
          }}
          aria-label="Next image"
          className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-150 hover:bg-white/20">
          
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </motion.div>
      }
    </AnimatePresence>);

}