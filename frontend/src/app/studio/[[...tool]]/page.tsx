import { Suspense } from 'react';
import { connection } from 'next/server';
import { Studio } from './Studio';
import type { Metadata, Viewport } from 'next';
import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio';

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'Sanity Studio | Initiative for the Needy CMS',
};

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: 'resizes-content',
};

async function StudioBridge() {
  await connection();
  return <Studio />;
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center font-sans text-sm text-gray-500">Loading Studio...</div>}>
      <StudioBridge />
    </Suspense>
  );
}
