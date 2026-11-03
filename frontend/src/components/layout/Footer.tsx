import React from 'react';
import Link from 'next/link';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { footerAction, footerExplore, legalLinks, site } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { Logo } from '@/components/layout/Logo';
import { NewsletterForm } from '@/components/layout/NewsletterForm';

export function Footer() {
  const linkClass = 'inline-flex min-h-11 items-center text-sm text-white/70 transition-colors duration-150 hover:text-white';
  return (
    <footer className="bg-navy text-white">
      <div className={`${containerClass} border-b border-white/10 py-12`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">Stay close to the work</h2>
            <p className="mt-2 text-sm text-white/70">
              Read about our programmes, community achievements and ways to get involved. Newsletter sign-up is not connected yet.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className={`${containerClass} grid gap-8 py-12 md:grid-cols-2 md:gap-10 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr] xl:py-14`}>
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {site.mission}
          </p>
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
            <li className="flex min-w-0 gap-2.5 break-words">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              <span className="min-w-0 break-words">{site.location}<br />{site.postalAddress}</span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} className={`flex gap-2.5 ${linkClass}`}>
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className={`flex gap-2.5 ${linkClass}`}>
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
              {site.email}
              </a>
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