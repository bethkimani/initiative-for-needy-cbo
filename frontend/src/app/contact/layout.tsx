import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Initiative for the Needy Charity Organization in Kamande Stage, Thika Town, Kenya.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
