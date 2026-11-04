import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie information for Initiative for the Needy Community Based Organization (CBO).',
};

export default function CookiesPage() {
  return <PolicyContent kind="cookies" />;
}
