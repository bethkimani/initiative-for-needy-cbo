import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Initiative for the Needy Community Based Organization (CBO) website.',
};

export default function TermsPage() {
  return <PolicyContent kind="terms" />;
}
