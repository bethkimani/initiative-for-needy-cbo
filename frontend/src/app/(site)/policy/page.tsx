import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for Initiative for the Needy Charity Organization.',
};

export default function PolicyPage() {
  return <PolicyContent kind="privacy" />;
}
