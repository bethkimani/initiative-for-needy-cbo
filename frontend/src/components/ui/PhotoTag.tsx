import React from 'react';
import type { Photo } from '@/types/content';

type PhotoTagProps = {
  photo: Photo;
  className?: string;
};

/** Small label distinguishing genuine organization photos from illustrative placeholders. */
export function PhotoTag({ photo, className = '' }: PhotoTagProps) {
  return (
    <span
      className={`rounded-full bg-navy/70 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur-sm ${className}`}>
      
      {photo.real ? 'From our work' : 'Illustrative photo'}
    </span>);

}