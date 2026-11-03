import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from the community work, outreach and team of Initiative for the Needy.',
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
