import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Initiative for the Needy Community Based Organization (CBO) at Kiganjo-Main Road, Kwa Kamande Stage, Thika, Kenya.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
