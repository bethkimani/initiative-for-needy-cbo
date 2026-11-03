'use client';

import React, { useCallback, useState } from 'react';
import { ZoomInIcon } from 'lucide-react';
import { galleryCategories, galleryItems } from '@/data/gallery';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { DraftNote } from '@/components/ui/DraftNote';
import { Lightbox } from '@/components/gallery/Lightbox';

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [open, setOpen] = useState<number | null>(null);
  const items = galleryItems.filter((g) => category === 'All' || g.category === category);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Moments from our work"
        intro="A window into outreach days, community support and the people who make it happen."
        photo={images.ceoFeeding} />
      
      <section className="py-16 md:py-24">
        <div className={containerClass}>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2">
              {galleryCategories.map((c) =>
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                category === c ? 'bg-navy text-white' : 'bg-soft text-navy/70 hover:text-navy'}`
                }>
                
                  {c}
                </button>
              )}
            </div>
            <DraftNote>Images of children and vulnerable people are published only with appropriate consent.</DraftNote>
          </div>
          <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((g, i) =>
            <li key={g.photo.src + g.caption} className="mb-5 break-inside-avoid">
                <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
                aria-label={`Open image: ${g.caption}`}>
                
                  <img
                  src={g.photo.src}
                  alt={g.photo.alt}
                  loading="lazy"
                  className="w-full bg-white object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
                
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex w-full items-center justify-between text-left text-sm font-medium text-white">
                      {g.caption}
                      <ZoomInIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </section>
      <Lightbox items={items} index={open} onClose={close} onChange={setOpen} />
    </>);

}