import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'News & Blog',
  description: 'Stories of hope, project updates and community news from Initiative for the Needy.',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
