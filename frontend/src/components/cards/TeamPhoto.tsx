'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    <Image
      src={photo.src}
      alt={photo.alt || 'Initiative for the Needy Team Member'}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      onError={() => setImageFailed(true)}
      className={imageClassName}
    />
  );
}
