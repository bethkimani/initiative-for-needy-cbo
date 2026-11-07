import React, { Suspense } from 'react';
import { BackToTop } from '@/components/layout/BackToTop';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { RouteContent } from '@/components/layout/RouteContent';
import { TopBar } from '@/components/layout/TopBar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <TopBar />
      <Suspense fallback={<div className="h-20" />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<main id="main" className="flex-1 scroll-mt-24" />}>
        <RouteContent>{children}</RouteContent>
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  );
}
