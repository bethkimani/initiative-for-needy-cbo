import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Partnership & Sponsorship',
  description: 'Partner with or sponsor Initiative for the Needy Community Based Organization (CBO) in Thika, Kenya.',
};

export default function PartnershipsLayout({ children }: { children: ReactNode }) {
  return children;
}
