import React from 'react';
import Link from 'next/link';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { footerAction, footerExplore, legalLinks, site } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { Logo } from '@/components/layout/Logo';
import { NewsletterForm } from '@/components/layout/NewsletterForm';

export function Footer() {
  const linkClass = 'text-sm text-white/70 transition-colors duration-150 hover:text-white';
  return (
    <footer className="bg-navy text-white">
      <div className={`${containerClass} border-b border-white/10 py-12`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">Stay close to the work</h2>
            <p className="mt-2 text-sm text-white/70">
              Occasional updates on projects, events and ways to help. No spam — unsubscribe anytime.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className={`${containerClass} grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]`}>
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            A community-focused charity in Thika, Kenya, working to improve the quality of life of local vulnerable
            communities.
          </p>
          <p className="mt-5 text-xs text-white/50">Official social media profiles will be linked here once confirmed.</p>
        </div>
        <nav aria-label="Explore">
          <h3 className="text-sm font-semibold text-gold">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {footerExplore.map((l) =>
            <li key={l.to}>
                <Link href={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <nav aria-label="Causes and projects">
          <h3 className="text-sm font-semibold text-gold">Causes & Action</h3>
          <ul className="mt-4 space-y-2.5">
            {footerAction.map((l) =>
            <li key={l.to}>
                <Link href={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              {site.location}
            </li>
            <li>
              <a href={`tel:${site.phone}`} className={`flex gap-2.5 ${linkClass}`}>
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              {site.email ?? 'Official email to be confirmed'}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={`${containerClass} flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between`}>
          <p>{site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            {legalLinks.map((l) =>
            <li key={l.to}>
                <Link href={l.to} className="transition-colors duration-150 hover:text-white">
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}