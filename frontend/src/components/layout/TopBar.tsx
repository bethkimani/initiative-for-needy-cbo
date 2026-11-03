import React from 'react';
import Link from 'next/link';
import { HandHeartIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { site } from '@/data/site';
import { containerClass } from '@/utils/styles';

export function TopBar() {
  return (
    <div className="bg-navy text-white/80">
      <div className={`${containerClass} flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 text-sm lg:flex-nowrap lg:gap-6 lg:text-xs`}>
        <ul className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <li className="flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {site.shortLocation}
          </li>
          <li>
            <a href={`tel:${site.phone}`} className="flex min-h-11 items-center gap-1.5 transition-colors duration-150 hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {site.phone}
            </a>
          </li>
          <li className="flex min-w-0 items-center gap-1.5">
            <MailIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="min-h-11 break-all py-3 transition-colors duration-150 hover:text-white lg:break-normal">
              {site.email}
            </a>
          </li>
        </ul>
        <Link
          href="/volunteer"
          className="flex min-h-11 items-center gap-1.5 whitespace-nowrap py-2 font-semibold text-gold transition-colors duration-150 hover:text-white">
          
          <HandHeartIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Become a Volunteer
        </Link>
      </div>
    </div>);

}