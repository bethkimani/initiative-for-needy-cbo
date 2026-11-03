'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { HeartIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { buttonClasses, containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Logo } from '@/components/layout/Logo';

function subscribeToHashChange(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  window.addEventListener('popstate', onChange);
  return () => {
    window.removeEventListener('hashchange', onChange);
    window.removeEventListener('popstate', onChange);
  };
}

function getHashSnapshot() {
  return window.location.hash;
}

function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

function getScrolledSnapshot() {
  return window.scrollY > 8;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hash = useSyncExternalStore(subscribeToHashChange, getHashSnapshot, () => '');
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolledSnapshot, () => false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (to: string) => {
    const [path, targetHash] = to.split('#');
    if (targetHash) return pathname === path && hash === `#${targetHash}`;
    if (path === '/') return pathname === '/';
    if (path === '/about' && hash === '#impact') return false;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-200 ${
      scrolled ? 'shadow-[0_8px_24px_-14px_rgba(21,36,58,0.3)]' : 'border-b border-line'}`
      }>
      
      <div className={`${containerClass} flex min-h-20 items-center justify-between gap-2 sm:gap-4`}>
        <Logo />
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block whitespace-nowrap px-2.5 py-2 text-sm font-medium transition-colors duration-150 ${
                    active ? 'text-brand' : 'text-navy/75 hover:text-brand'}`
                    }>
                    
                    {link.label}
                    {active &&
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-charity"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }} />

                    }
                  </Link>
                </li>);

            })}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <div className="hidden sm:block">
            <ButtonLink to="/donate" variant="red" size="md" className="px-4 lg:px-6">
              <HeartIcon className="h-4 w-4" aria-hidden="true" />
              Donate Now
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors duration-150 hover:bg-soft xl:hidden">
            
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-white shadow-lift xl:hidden">
          
            <nav aria-label="Mobile" className={`${containerClass} py-6`}>
              <ul className="grid gap-1 sm:grid-cols-2">
                {navLinks.map((link) =>
              <li key={link.to}>
                    <Link
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-150 ${
                  isActive(link.to) ? 'bg-brand-light text-brand' : 'text-navy hover:bg-soft'}`
                  }>
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link href="/donate" onClick={() => setOpen(false)} className={buttonClasses('red', 'lg')}>
                  <HeartIcon className="h-4 w-4" aria-hidden="true" />
                  Donate Now
                </Link>
                <Link href="/volunteer" onClick={() => setOpen(false)} className={buttonClasses('outline', 'lg')}>
                  Become a Volunteer
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="flex min-h-11 items-center gap-2 break-all text-base text-navy/70">
                <PhoneIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                {phone}
              </a>)}
              <a href={`mailto:${site.email}`} className="flex min-h-11 min-w-0 items-center gap-2 break-all text-base text-navy/70">
                {site.email}
              </a>
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}