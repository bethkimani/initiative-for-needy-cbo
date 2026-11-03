import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming and past charity events, outreach and volunteer activities by Initiative for the Needy.',
};

export default function EventsLayout({ children }: { children: ReactNode }) {
  return children;
}
