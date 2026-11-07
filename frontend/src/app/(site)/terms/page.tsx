import type { Metadata } from 'next';
import { PolicyContent } from '@/components/PolicyContent';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Initiative for the Needy Charity Organization website.',
};

export default function TermsPage() {
  return <PolicyContent kind="terms" />;
}
