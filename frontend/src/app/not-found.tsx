import React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CompassIcon,
  FolderHeartIcon,
  HandHeartIcon,
  HomeIcon,
  NewspaperIcon,
  PhoneCallIcon,
  UsersIcon,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { containerClass } from '@/utils/styles';
import { site } from '@/data/site';

const helpfulLinks = [
  {
    title: 'Explore Our Causes',
    description:
      'Learn about our community programs supporting orphans, vulnerable children, widows, and older persons.',
    href: '/causes',
    icon: HandHeartIcon,
    badge: '7 Priority Causes',
  },
  {
    title: 'View Active & Completed Projects',
    description:
      'Discover verified community initiatives delivered across Thika, Juja, Ruiru, and Kiambu County.',
    href: '/projects',
    icon: FolderHeartIcon,
    badge: '11 Verified Projects',
  },
  {
    title: 'Volunteer & Get Involved',
    description:
      'Lend your time, professional skills, or partner with us to strengthen grassroots welfare.',
    href: '/get-involved',
    icon: UsersIcon,
    badge: 'Join Our Mission',
  },
  {
    title: 'Latest Community News',
    description:
      'Read field updates, event reports, and stories of transformation directly from our team.',
    href: '/blog',
    icon: NewspaperIcon,
    badge: 'Stories & Updates',
  },
];

export default function NotFound() {
  return (
    <Layout>
      <main id="main" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand/5 via-soft to-white py-20 md:py-28">
          {/* Subtle background decorative shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
          >
            <span className="font-display text-[20rem] font-black text-brand select-none">
              404
            </span>
          </div>

          <div className={`${containerClass} relative z-10 flex flex-col items-center text-center`}>
            {/* Compass badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-xs font-bold tracking-wide text-brand uppercase">
              <CompassIcon className="h-4 w-4" aria-hidden="true" />
              <span>Page Not Found</span>
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
              We couldn’t find the page you’re looking for.
            </h1>

            <p className="mt-4 max-w-xl text-lg text-navy/70">
              The link you followed may be broken, or the page may have been moved.
              Don’t worry — there are plenty of meaningful ways to explore our community work.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink to="/" variant="blue" size="lg" className="inline-flex items-center gap-2">
                <HomeIcon className="h-5 w-5" aria-hidden="true" />
                Back to Homepage
              </ButtonLink>
              <ButtonLink to="/donate" variant="red" size="lg" className="inline-flex items-center gap-2">
                <HandHeartIcon className="h-5 w-5" aria-hidden="true" />
                Support Our Causes
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" size="lg">
                Contact Our Office
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* Helpful Pathways Navigation Grid */}
        <section className="border-t border-line bg-white py-16 md:py-20">
          <div className={containerClass}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Popular destinations to get you back on track
              </h2>
              <p className="mt-2 text-navy/60">
                Choose one of the core sections below to find what you need.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {helpfulLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group relative flex flex-col justify-between rounded-3xl border border-line bg-soft/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-card"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy/70 ring-1 ring-line">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-brand">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/70">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-brand">
                      <span>Explore</span>
                      <ArrowRightIcon
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Direct Assistance Support Card */}
            <div className="mt-14 rounded-3xl bg-navy p-8 text-white sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                    <PhoneCallIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">Need direct assistance from our team?</h3>
                    <p className="mt-1 max-w-xl text-sm text-white/75">
                      If you are looking for specific records, assistance for a vulnerable family,
                      or partnership inquiries, feel free to contact our Thika office directly.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, '')}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold hover:text-navy"
                  >
                    Call {site.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
