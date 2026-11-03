'use client';

import React, { useState } from 'react';
import type { Photo } from '@/types/content';

type TeamPhotoProps = {
  photo: Photo | null;
  initials: string;
  className?: string;
  imageClassName?: string;
};

export function TeamPhoto({ photo, initials, className = '', imageClassName = '' }: TeamPhotoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!photo || imageFailed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-brand-light ${className}`}>
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand font-display text-3xl font-bold text-white">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setImageFailed(true)}
      className={imageClassName}
    />
  );
}
