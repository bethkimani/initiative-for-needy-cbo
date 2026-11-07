import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanity Studio | Initiative for the Needy CMS',
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
