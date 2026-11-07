import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Volunteer Registration',
  description: 'Register as a volunteer with Initiative for the Needy Charity Organization in Thika.',
};

export default function VolunteerLayout({ children }: { children: ReactNode }) {
  return children;
}
