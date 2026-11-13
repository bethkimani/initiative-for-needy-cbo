import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Current, completed and upcoming community projects by Initiative for the Needy in Thika, Kenya.',
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
