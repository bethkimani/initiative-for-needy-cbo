import React from 'react';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className={`${containerClass} flex flex-col items-center text-center`}>
        <img src={images.logo.src} alt="" className="h-28 w-28 rounded-full object-cover" />
        <p className="mt-8 font-display text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-3 text-3xl font-bold text-navy">We couldn’t find that page.</h1>
        <p className="mt-3 max-w-md text-navy/70">It may have moved, or the link may be out of date. Let’s get you back on track.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/" variant="blue" size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink to="/contact" variant="outline" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>);

}