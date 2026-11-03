import React from 'react';
import Link from 'next/link';
import { HandHeartIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { site } from '@/data/site';
import { containerClass } from '@/utils/styles';

export function TopBar() {
  return (
    <div className="hidden bg-navy text-white/80 md:block">
      <div className={`${containerClass} flex h-10 items-center justify-between text-xs`}>
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {site.shortLocation}
          </li>
          <li>
            <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 transition-colors duration-150 hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {site.phone}
            </a>
          </li>
          <li className="hidden items-center gap-1.5 lg:flex">
            <MailIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="transition-colors duration-150 hover:text-white">
              {site.email}
            </a>
          </li>
        </ul>
        <Link
          href="/volunteer"
          className="flex items-center gap-1.5 font-semibold text-gold transition-colors duration-150 hover:text-white">
          
          <HandHeartIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Become a Volunteer
        </Link>
      </div>
    </div>);

}